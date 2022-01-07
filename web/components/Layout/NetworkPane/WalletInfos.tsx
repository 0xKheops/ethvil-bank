import { useWeb3React } from "@web3-react/core";
import useEagerConnect from "../../../hooks/useEagerConnect";
import useETHBalance from "../../../hooks/useETHBalance";
import { formatEtherHuman } from "../../../lib/formatEtherHuman";
import Account from "../../Account";
import { EtherscanLink } from "../../AccountAddress/EtherscanLink";

const Connect = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <div className="text-center m-5">
      <Account triedToEagerConnect={triedToEagerConnect} />
    </div>
  );
};

export const WalletInfos = () => {
  const { account } = useWeb3React();
  const { data } = useETHBalance(account);

  if (!account)
    return (
      <div>
        <div>Wallet : Not connected</div>
        <Connect />
      </div>
    );

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
