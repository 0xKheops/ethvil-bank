import { useWeb3React } from "@web3-react/core";
import { formatEtherscanLink, shortenHex } from "../../lib/utils";

export const AccountAddress = ({ address }) => {
  const { chainId } = useWeb3React();
  return (
    <a
      href={formatEtherscanLink("Account", [chainId, address])}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      {shortenHex(address)}
    </a>
  );
};
