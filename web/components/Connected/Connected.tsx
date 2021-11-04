import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useMemo } from "react";
import { UnsupportedChainAlert } from "./UnsupportedChainAlert";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";

export const Connected: FC = ({ children }) => {
  const { chainId: infuraChainId } = useWeb3React("INFURA");
  const { account, library, error, chainId } = useWeb3React<Web3Provider>();
  const isConnected = useMemo(
    () => typeof account === "string" && !!library,
    [account, library]
  );

  const unsupportedChain = useMemo(
    () => error?.name === "UnsupportedChainIdError",
    [error?.name]
  );

  useEffect(() => {
    const chainConnect = async () => {
      try {
        library?.send("wallet_switchEthereumChain", [
          { chainId: "0x" + infuraChainId.toString(16) },
        ]);
      } catch (err) {
        console.error("chainConnect", err);
      }
    };

    if (infuraChainId && chainId && chainId != infuraChainId) chainConnect();
  }, [chainId, infuraChainId, library]);

  if (error)
    console.error("Connected", {
      error,
    });

  if (isConnected) return <>{children}</>;

  if (unsupportedChain) return <UnsupportedChainAlert />;

  return <WalletDisconnectedAlert />;
};
