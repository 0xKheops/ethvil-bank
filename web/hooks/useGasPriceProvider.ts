import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";

export const useGasPriceProvider = () => {
  const { library, chainId } = useWeb3React<Web3Provider>();

  const { data, error } = useSWR(
    ["GasPrice", chainId],
    () => library.getGasPrice(),
    { refreshInterval: 60000 }
  );

  return {
    loading: !data && !error,
    error: error?.data?.message ?? error?.message,
    gasprice: data,
  };
};
