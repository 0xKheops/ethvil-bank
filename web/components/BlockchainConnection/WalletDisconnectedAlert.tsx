import { FC } from "react";
import ConnectButton from "./ConnectButton";

export const WalletDisconnectedAlert: FC = () => {
  return (
    <div className="text-center">
      <p className="p-4">
        This feature requires connecting to the Ethereum blockchain.
        <br />
        Please connect your wallet, or install Metamask, to continue.
      </p>
      <div className="p-4">
        <ConnectButton />
      </div>
    </div>
  );
};
