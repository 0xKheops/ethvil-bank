import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { networks } from "../lib/networks";

export const useNetwork = () => {
  const { chainId } = useWeb3React("INFURA");

  const network = useMemo(
    () => networks.find((n) => n.chainId === chainId),
    [chainId]
  );

  return network;
};
