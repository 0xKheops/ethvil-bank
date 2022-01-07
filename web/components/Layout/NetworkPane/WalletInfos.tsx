import useEagerConnect from "../../../hooks/useEagerConnect";
import useETHBalance from "../../../hooks/useETHBalance";
import { formatEtherHuman } from "../../../lib/formatEtherHuman";
import { useWallet } from "../../../lib/WalletContext";
import ConnectButton from "../../BlockchainConnection/ConnectButton";
import { EtherscanLink } from "../../EtherscanLink/EtherscanLink";
import { WrongChainAlert } from "../../BlockchainConnection/WrongChainAlert";

export const WalletInfos = () => {
  useEagerConnect();
  const { account, isWrongChain, isConnected } = useWallet();
  const { data } = useETHBalance(account);

  if (isWrongChain)
    return (
      <div className="text-center m-5">
        <WrongChainAlert />
      </div>
    );

  if (!isConnected)
    return (
      <div>
        <div>Wallet : Not connected</div>
        <ConnectButton />
      </div>
    );

  if (!account) return null;

  return (
    <div>
      <div className="flex w-full justify-between">
        <label>Wallet : </label>
        <span>
          <EtherscanLink type="Account" address={account} withIcon />
        </span>
      </div>
      <div className="flex w-full justify-between">
        <label>Balance : </label>
        <span>{data ? `${formatEtherHuman(data)} ETH` : "N/A"}</span>
      </div>
    </div>
  );
};
