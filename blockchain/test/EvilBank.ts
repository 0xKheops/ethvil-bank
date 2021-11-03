/* eslint-disable camelcase */
import { parseEther } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { EvilBank, FakeClient } from "../typechain";

describe("EvilBank", function () {
  let evilBank: EvilBank;
  let fakeClient: FakeClient;
  let owner: SignerWithAddress,
    acc1: SignerWithAddress,
    acc2: SignerWithAddress,
    // eslint-disable-next-line no-unused-vars
    acc3: SignerWithAddress;
  beforeEach(async () => {
    [owner, acc1, acc2, acc3] = await ethers.getSigners();

    const evilBankContract = await ethers.getContractFactory("EvilBank");
    evilBank = await evilBankContract.deploy();
    const fakeClientContract = await ethers.getContractFactory("FakeClient");
    fakeClient = await fakeClientContract.deploy();

    // owner account sends 10 ether to fakeClient
    await fakeClient.fill({ value: parseEther("10") });
  });

  it("Should be initialized properly", async function () {
    await evilBank.deployed();

    expect(await evilBank.currentBid()).to.equal(0);
    expect(await evilBank.gameBalance()).to.equal(0);
    expect(await evilBank.running()).to.equal(false);
    expect(await evilBank.director()).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(await evilBank.gameId()).to.equal(0);
    expect(await evilBank.endsAt()).to.equal(0);
    expect(await evilBank.minBid()).to.equal(parseEther("0.001"));

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("10")
    );
  });

  it("Should revert tokens sent to fake client", async function () {
    await expect(
      acc1.sendTransaction({
        to: fakeClient.address,
        value: parseEther("1"),
      })
    ).to.be.reverted;
  });

  it("Should revert bid without value", async function () {
    await evilBank.deployed();

    await expect(evilBank.bid()).to.be.revertedWith(
      "InsufficientBid(1000000000000000)"
    );
  });

  it("Should allow first bid with funds", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    expect(await evilBank.director()).to.equal(acc1.address);
    expect(await evilBank.gameBalance()).to.equal(parseEther("1"));
    expect(await evilBank.currentBid()).to.equal(parseEther("1"));
    expect(await evilBank.running()).to.equal(true);
  });

  it("Should not allow bid with insufficient funds", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    evilBank = evilBank.connect(acc2);
    await expect(
      evilBank.bid({
        value: parseEther("1.01"),
      })
    ).to.be.revertedWith("InsufficientBid(1100000000000000000)");

    expect(await evilBank.director()).to.equal(acc1.address);
    expect(await evilBank.currentBid()).to.equal(parseEther("1"));
    expect(await evilBank.gameBalance()).to.equal(parseEther("1"));
    expect(await evilBank.running()).to.equal(true);
  });

  it("Should allow bid with sufficient funds", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    expect(await evilBank.director()).to.equal(acc2.address);
    expect(await evilBank.currentBid()).to.equal(parseEther("1.1"));
    expect(await evilBank.gameBalance()).to.equal(
      await ethers.provider.getBalance(evilBank.address)
    );
    expect(await evilBank.running()).to.equal(true);

    // updatedAt should be defined after bid
    const block = await ethers.provider.getBlock(
      await ethers.provider.getBlockNumber()
    );
    const duration = await evilBank.duration();
    const expectedEndsAt = duration.add(block.timestamp);
    expect(await evilBank.endsAt()).to.equal(expectedEndsAt);
  });

  it("Previous director should receive 105% of his funds after a bid", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    const acc1BalanceBefore = await acc1.getBalance();

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    expect(await evilBank.director()).to.equal(acc2.address);
    expect(await evilBank.currentBid()).to.equal(parseEther("1.1"));
    expect(await evilBank.running()).to.equal(true);

    // previous director acc1 should have received his funds
    // TODO best practice ?
    expect(await acc1.getBalance()).to.equal(
      acc1BalanceBefore.add(parseEther("1.05"))
    );

    evilBank = evilBank.connect(acc2);
    await expect(evilBank.withdraw()).to.be.reverted;
  });

  it("Previous director should be able to withdraw 105% of his funds after a bid, if send failed", async function () {
    await evilBank.deployed();

    await fakeClient.bid(evilBank.address, parseEther("1"));

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("9")
    );

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    // at this point evilBank attempted to send reward to fakeclient but failed
    // because of receive function that reverts.
    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("9")
    );
    console.log("OK");
    await fakeClient.withdraw(evilBank.address);
    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("10.05")
    );
  });

  it("Should let owner withdraw", async function () {
    const initialOwnerBalance = await ethers.provider.getBalance(
      fakeClient.address
    );

    await evilBank.deployed();
    await evilBank.transferOwnership(fakeClient.address);

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      initialOwnerBalance
    );

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      initialOwnerBalance
    );

    await fakeClient.withdraw(evilBank.address);

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      initialOwnerBalance.add(parseEther("0.01"))
    );
  });

  it("Previous director should be able to withdraw 105% of his funds after a game restarts, if send failed", async function () {
    await evilBank.deployed();

    await fakeClient.bid(evilBank.address, parseEther("1"));

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("9")
    );

    const block = await ethers.provider.getBlock(
      await ethers.provider.getBlockNumber()
    );
    await ethers.provider.send("evm_setNextBlockTimestamp", [
      block.timestamp + 3600 * 24 * 7, // 1 week
    ]);
    await ethers.provider.send("evm_mine", []);

    await evilBank.end();
    const balance = await ethers.provider.getBalance(evilBank.address);

    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("9")
    );

    await fakeClient.withdraw(evilBank.address);
    expect(await ethers.provider.getBalance(fakeClient.address)).to.equal(
      parseEther("9").add(balance)
    );
  });

  it("Should not allow to end the game before end of duration", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    await expect(evilBank.end()).to.be.reverted;
  });

  it("Should be able to end the game after 1 week", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    const block = await ethers.provider.getBlock(
      await ethers.provider.getBlockNumber()
    );
    const duration = await evilBank.duration();
    expect(await evilBank.endsAt()).to.equal(duration.add(block.timestamp));

    await ethers.provider.send("evm_setNextBlockTimestamp", [
      block.timestamp + 3600 * 24 * 7, // 1 week
    ]);
    await ethers.provider.send("evm_mine", []);

    expect(await evilBank.gameId()).to.equal(1);

    await evilBank.end();

    expect(await evilBank.gameId()).to.equal(1);
    expect(await evilBank.gameBalance()).to.equal(0);
    expect(await evilBank.running()).to.equal(false);

    expect(await ethers.provider.getBalance(evilBank.address)).to.equal(0);

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("2"),
    });
    expect(await evilBank.gameId()).to.equal(2);
  });

  it("Should restart automatically on next bid if time-finished", async function () {
    await evilBank.deployed();

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });

    evilBank = evilBank.connect(acc2);
    await evilBank.bid({
      value: parseEther("1.1"),
    });

    const block = await ethers.provider.getBlock(
      await ethers.provider.getBlockNumber()
    );
    const duration = await evilBank.duration();
    expect(await evilBank.endsAt()).to.equal(duration.add(block.timestamp));

    await ethers.provider.send("evm_setNextBlockTimestamp", [
      block.timestamp + 3600 * 24 * 7, // 1 week
    ]);
    await ethers.provider.send("evm_mine", []);

    expect(await evilBank.gameId()).to.equal(1);
    expect(await evilBank.minBid()).to.equal(parseEther("0.001"));

    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("0.5"),
    });
    expect(await evilBank.gameId()).to.equal(2);
  });

  it("Owner should be able to change duration", async () => {
    await evilBank.deployed();

    // check initial value
    const initialDuration = await evilBank.duration();
    expect(initialDuration).not.to.equal(3600);

    // non-owner can't change value
    evilBank = evilBank.connect(acc1);
    await expect(evilBank.setDuration(3600)).to.be.reverted;
    expect(await evilBank.duration()).to.equal(initialDuration);

    // owner can change value if game is not running
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setDuration(3600)).not.to.be.reverted;
    expect(await evilBank.duration()).to.equal(3600);

    // owner cannot change value is game if running
    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });
    expect(await evilBank.running()).to.equal(true);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setDuration(4200)).to.be.reverted;
    expect(await evilBank.duration()).to.equal(3600);
  });

  it("Owner should be able to change directorRewardPercent", async () => {
    await evilBank.deployed();

    // check initial value
    const initialValue = await evilBank.directorRewardPercent();
    expect(initialValue).not.to.equal(6);

    // non-owner can't change value
    evilBank = evilBank.connect(acc1);
    await expect(evilBank.setDirectorRewardPercent(6)).to.be.reverted;
    expect(await evilBank.directorRewardPercent()).to.equal(initialValue);

    // owner can change value if game is not running
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setDirectorRewardPercent(6)).not.to.be.reverted;
    expect(await evilBank.directorRewardPercent()).to.equal(6);

    // owner cannot change value if it's to high
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setDirectorRewardPercent(12)).to.be.reverted;
    expect(await evilBank.directorRewardPercent()).to.equal(6);

    // owner cannot change value is game if running
    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });
    expect(await evilBank.running()).to.equal(true);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setDirectorRewardPercent(7)).to.be.reverted;
    expect(await evilBank.directorRewardPercent()).to.equal(6);
  });

  it("Owner should be able to change ownerRewardPercent", async () => {
    await evilBank.deployed();

    // check initial value
    const initialValue = await evilBank.ownerRewardPercent();
    expect(initialValue).not.to.equal(2);

    // non-owner can't change value
    evilBank = evilBank.connect(acc1);
    await expect(evilBank.setOwnerRewardPercent(2)).to.be.reverted;
    expect(await evilBank.ownerRewardPercent()).to.equal(initialValue);

    // owner can change value if game is not running
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setOwnerRewardPercent(2)).not.to.be.reverted;
    expect(await evilBank.ownerRewardPercent()).to.equal(2);

    // owner cannot change value if it's to high
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setOwnerRewardPercent(12)).to.be.reverted;
    expect(await evilBank.ownerRewardPercent()).to.equal(2);

    // owner cannot change value is game if running
    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });
    expect(await evilBank.running()).to.equal(true);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setOwnerRewardPercent(3)).to.be.reverted;
    expect(await evilBank.ownerRewardPercent()).to.equal(2);
  });

  it("Owner should be able to change minBidPercent", async () => {
    await evilBank.deployed();

    // check initial value
    const initialValue = await evilBank.minBidIncreasePercent();
    expect(initialValue).not.to.equal(11);

    // non-owner can't change value
    evilBank = evilBank.connect(acc1);
    await expect(evilBank.setMinBidIncreasePercent(11)).to.be.reverted;
    expect(await evilBank.minBidIncreasePercent()).to.equal(initialValue);

    // owner can change value if game is not running
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setMinBidIncreasePercent(11)).not.to.be.reverted;
    expect(await evilBank.minBidIncreasePercent()).to.equal(11);

    // owner cannot change value if it's to high
    expect(await evilBank.running()).to.equal(false);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setMinBidIncreasePercent(5)).to.be.reverted;
    expect(await evilBank.minBidIncreasePercent()).to.equal(11);

    // as long is it is positive
    await expect(evilBank.setMinBidIncreasePercent(0)).to.be.reverted;
    expect(await evilBank.minBidIncreasePercent()).to.equal(11);

    // owner cannot change value is game if running
    evilBank = evilBank.connect(acc1);
    await evilBank.bid({
      value: parseEther("1"),
    });
    expect(await evilBank.running()).to.equal(true);
    evilBank = evilBank.connect(owner);
    await expect(evilBank.setMinBidIncreasePercent(13)).to.be.reverted;
    expect(await evilBank.minBidIncreasePercent()).to.equal(11);
  });
});
