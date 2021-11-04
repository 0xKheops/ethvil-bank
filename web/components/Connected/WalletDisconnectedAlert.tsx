import { FC } from "react";
import useEagerConnect from "../../hooks/useEagerConnect";
import Account from "../Account";

export const WalletDisconnectedAlert: FC = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <div className="text-center">
      <p className="p-4">
        This feature requires connecting to the Ethereum blockchain.
        <br />
        Please connect your wallet, or install Metamask, to continue.
      </p>
      <div className="p-4">
        <Account triedToEagerConnect={triedToEagerConnect} />
      </div>
    </div>
  );
};
