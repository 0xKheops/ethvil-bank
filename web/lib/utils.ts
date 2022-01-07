import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import { networks } from "./networks";

export const shortenHex = (hex: string, length = 4) =>
  `${hex.substring(0, length + 2)}…${hex.substring(hex.length - length)}`;

export const getNetworkShortname = (chainId: number) => {
  if (!chainId) return "";
  const network = networks.find((n) => n.chainId === chainId);
  return network?.name ?? `UNKNOWN NETWORK (${chainId})`;
};

export const getNetworkFullname = (chainId: number) => {
  if (!chainId) return "";
  const network = networks.find((n) => n.chainId === chainId);
  return network?.fullname ?? `UNKNOWN NETWORK (${chainId})`;
};

export type AddressType = "Account" | "Transaction";

export function formatEtherscanLink(
  type: AddressType,
  chainId: number,
  address: string
) {
  const network = networks.find((n) => n.chainId === chainId);
  const prefix = network?.etherscanPrefix ?? "";
  const path = type === "Account" ? "address" : "tx";
  return `https://${prefix}etherscan.io/${path}/${address}`;
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
