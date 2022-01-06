import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getNetworkFullname } from "../../lib/utils";

export const NetworkName = () => {
  const { chainId } = useWeb3React("INFURA");

  const networkName = useMemo(() => getNetworkFullname(chainId), [chainId]);

  if (!networkName) return <span>DISCONNECTED</span>;

  return <span title="Use Metamask to change network">{networkName}</span>;
};
