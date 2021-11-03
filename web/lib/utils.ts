import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES = {
  1: "",
  3: "ropsten.",
  4: "rinkeby.",
  5: "goerli.",
  42: "kovan.",
  69: "kovan-optimistic.",
};

export const getNetworkName = (chainId: number) => {
  if (!chainId) return "";

  switch (chainId) {
    case 1:
      return "Main Ethereum Network";
    case 3:
      return "Ropsten Test Network";
    case 4:
      return "Rinkeby Test Network";
    case 5:
      return "Goerli Test Network";
    case 69:
      return "Optimistic Kovan Test Network";
    case 2018:
      return "Dev Network";
    case 1337:
      return "DEV - Ganache";
    case 31337:
      return "DEV - Hardhat";
    default:
      return `UNKNOWN NETWORK (${chainId})`;
  }
};

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
