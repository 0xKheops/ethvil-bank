import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import useSWR from "swr";
import useBlockRefresh from "./useBlockRefresh";

export const useGasPriceProvider = () => {
  const { library, chainId } = useWeb3React<Web3Provider>();

  const { data, error, mutate } = useSWR(["GasPrice", chainId], () =>
    library.getGasPrice()
  );

  useBlockRefresh(mutate);

  return {
    loading: !data && !error,
    error: error?.data?.message ?? error?.message,
    gasprice: data,
  };
};
