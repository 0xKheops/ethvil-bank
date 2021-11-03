import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useMemo } from "react";
import { UnsupportedChainAlert } from "./UnsupportedChainAlert";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";

export const Connected: FC = ({ children }) => {
  const { account, library, error } = useWeb3React<Web3Provider>();
  const isConnected = useMemo(
    () => typeof account === "string" && !!library,
    [account, library]
  );

  const unsupportedChain = useMemo(
    () => error?.name === "UnsupportedChainIdError",
    [error?.name]
  );

  if (error)
    console.error("Connected", {
      error,
    });

  if (isConnected) return <>{children}</>;

  if (unsupportedChain) return <UnsupportedChainAlert />;

  return <WalletDisconnectedAlert />;
};
