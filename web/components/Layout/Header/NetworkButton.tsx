import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { networks } from "../../../lib/networks";
import { useNetworkPane } from "../NetworkPane/NetworkPaneContext";

export const NetworkButton = () => {
  const { showPane } = useNetworkPane();
  const { chainId } = useWeb3React<Web3Provider>("INFURA");

  const network = useMemo(
    () => networks.find((n) => n.chainId === chainId),
    [chainId]
  );

  return (
    <button className="p-2 hover:bg-white/10" onClick={showPane}>
      {network?.name}
    </button>
  );
};
