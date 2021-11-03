import { formatEther } from "@ethersproject/units";
import { BigNumberish } from "ethers";

export const formatEtherHuman = (wei: BigNumberish) => {
  try {
    const formatted = formatEther(wei);
    if (!formatted) return formatted;
    return Number(formatted).toFixed(6);
  } catch (err) {}
};
