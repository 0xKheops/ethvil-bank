import { FC } from "react";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWallet } from "../../lib/WalletContext";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";
import { WrongChainAlert } from "./WrongChainAlert";

export const WalletBlockchainConnection: FC = ({ children }) => {
  const { isConnected, isWrongChain } = useWallet();

  useEagerConnect();

  if (isConnected) return <>{children}</>;

  if (isWrongChain) return <WrongChainAlert />;

  return <WalletDisconnectedAlert />;
};
