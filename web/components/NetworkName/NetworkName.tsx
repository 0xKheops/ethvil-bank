import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getNetworkName } from "../../lib/utils";

export const NetworkName = () => {
  const { chainId } = useWeb3React("INFURA");

  const networkName = useMemo(() => getNetworkName(chainId), [chainId]);

  if (!networkName) return <span>DISCONNECTED</span>;

  return <span title="Use Metamask to change network">{networkName}</span>;
};
