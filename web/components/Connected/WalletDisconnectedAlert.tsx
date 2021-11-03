import { FC } from "react";
import useEagerConnect from "../../hooks/useEagerConnect";
import Account from "../Account";

export const WalletDisconnectedAlert: FC = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <div className="relative border-2 border-red-800 w-full rounded container mx-auto text-center">
      <div className="absolute bg-gray-900 w-full h-full opacity-70 z-[-10]"></div>
      <h3 className="text-xl font-bold uppercase p-2 bg-red-800 text-white text-center">
        Connect
      </h3>
      <div className="p-4">
        <p className="p-4">
          This service requires connecting to the Ethereum blockchain.
          <br />
          Please connect your wallet, or install Metamask, to continue.
        </p>
        <div className="p-4">
          <Account triedToEagerConnect={triedToEagerConnect} />
        </div>
      </div>
    </div>
  );
};
