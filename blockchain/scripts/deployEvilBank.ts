// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

const updateConfig = async (
  networkKey: string,
  webEnvFilePath: string,
  graphConfigFile: string,
  address: string,
  blockNumber: number
) => {
  // front end config
  const envFilePath = path.resolve(webEnvFilePath);
  const envContent = await fs.readFileSync(envFilePath, "utf-8");
  const newEnvContent = envContent.replace(
    new RegExp(`^NEXT_PUBLIC_EVILBANK_ADDRESS_${networkKey}=(\\w*?)$`, "gm"),
    `NEXT_PUBLIC_EVILBANK_ADDRESS_${networkKey}=${address}`
  );
  await fs.writeFileSync(envFilePath, newEnvContent);

  // subgraph config
  const configFilePath = path.resolve(graphConfigFile);
  const configContent = await fs.readFileSync(configFilePath, "utf-8");
  const newConfigContent = configContent
    .replace(/"address":\s?"(\w*?)"/gm, `"address": "${address}"`)
    .replace(/"startBlock":\s?(\d+)/gm, `"startBlock": ${blockNumber}`);
  await fs.writeFileSync(configFilePath, newConfigContent);
};

async function main() {
  const network = process.env.HARDHAT_NETWORK;
  console.log({ network });

  const blockNumber = await ethers.provider.getBlockNumber();
  console.log({ blockNumber });

  // We get the contract to deploy
  const EvilBank = await ethers.getContractFactory("EvilBank");
  const evilBank = await EvilBank.deploy();
  await evilBank.deployed();

  const jsonPath = path.resolve(
    "./artifacts/contracts/EvilBank.sol/EvilBank.json"
  );
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  /*
                   UPDATE FRONT-END
   */

  if (network === "localhost") {
    // Update ABI
    const abiPath = path.resolve("../web/contracts/EvilBank.json");
    await fs.writeFileSync(abiPath, JSON.stringify(json.abi));

    updateConfig(
      "HARDHAT",
      "../web/.env.local",
      "../subgraph/config/local.json",
      evilBank.address,
      blockNumber as number
    );
  }

  if (network === "ropsten") {
    updateConfig(
      "ROPSTEN",
      "../web/.env",
      "../subgraph/config/ropsten.json",
      evilBank.address,
      blockNumber as number
    );
  }

  if (network === "goerli") {
    updateConfig(
      "GOERLI",
      "../web/.env",
      "../subgraph/config/goerli.json",
      evilBank.address,
      blockNumber as number
    );
  }

  if (network === "rinkeby") {
    updateConfig(
      "RINKEBY",
      "../web/.env",
      "../subgraph/config/rinkeby.json",
      evilBank.address,
      blockNumber as number
    );
  }

  console.log("EvilBank deployed to:", evilBank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
