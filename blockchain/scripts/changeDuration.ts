// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import "dotenv/config";

import { ethers } from "hardhat";

async function main() {
  const EvilBank = await ethers.getContractFactory("EvilBank");
  // get contract instance
  const evilBank = EvilBank.attach(
    "0xC079d079c226d795f6587DDd20d993349d0841DD"
  );

  await evilBank.deployed();

  await evilBank.connect(process.env.PRIVATE_KEY as string);

  const tx = await evilBank.setDuration(5 * 60, {
    gasPrice: 100,
    gasLimit: 900000,
  }); // 5 minutes
  console.log("waiting end of transation", tx.hash);
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
