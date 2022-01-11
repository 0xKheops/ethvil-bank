import { Web3ReactProvider } from "@web3-react/core";
import { FC } from "react";
import useEagerConnect from "../../hooks/useEagerConnect";
import getLibrary from "../../lib/getLibrary";
import { useWallet, WalletProvider } from "../../lib/WalletContext";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";
import { WrongChainAlert } from "./WrongChainAlert";

export const WithWalletConnected: FC = ({ children }) => {
  const { isConnected, isWrongChain } = useWallet();

  useEagerConnect();

  if (isConnected) return <>{children}</>;

  if (isWrongChain) return <WrongChainAlert />;

  return <WalletDisconnectedAlert />;
};

export const WalletBlockchainConnection: FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletProvider>{children}</WalletProvider>
    </Web3ReactProvider>
  );
};
