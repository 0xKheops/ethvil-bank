import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";

export default function useBlockNumber() {
  const { library, chainId } = useWeb3React<Web3Provider>();

  return useSWR(
    library ? ["BlockNumber", chainId] : null,
    () => library.getBlockNumber(),
    {
      refreshInterval: 1000,
    }
  );
}
