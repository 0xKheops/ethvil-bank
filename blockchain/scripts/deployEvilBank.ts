// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  // We get the contract to deploy
  const EvilBank = await ethers.getContractFactory("EvilBank");
  const evilBank = await EvilBank.deploy();

  await evilBank.deployed();

  const jsonPath = path.resolve(
    "./artifacts/contracts/EvilBank.sol/EvilBank.json"
  );
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  const abiPath = path.resolve("../web/contracts/EvilBank.json");
  await fs.writeFileSync(abiPath, JSON.stringify(json.abi));

  const envFilePath = path.resolve("../web/.env");
  const envContent = await fs.readFileSync(envFilePath, "utf-8");
  const newEnvContent = envContent.replace(
    /^NEXT_PUBLIC_EVILBANK_ADDRESS=(\w*?)$/gm,
    `NEXT_PUBLIC_EVILBANK_ADDRESS=${evilBank.address}`
  );
  await fs.writeFileSync(envFilePath, newEnvContent);

  console.log("EvilBank deployed to:", evilBank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
