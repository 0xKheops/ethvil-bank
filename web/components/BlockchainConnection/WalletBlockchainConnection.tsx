import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useMemo } from "react";
import { UnsupportedChainAlert } from "./UnsupportedChainAlert";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";

export const WalletBlockchainConnection: FC = ({ children }) => {
  const { chainId: networkChainId } = useWeb3React("INFURA");
  const {
    account,
    library,
    error,
    chainId: walletChainId,
  } = useWeb3React<Web3Provider>();

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
        await library?.send("wallet_switchEthereumChain", [
          { chainId: "0x" + networkChainId.toString(16) },
        ]);
      } catch (err) {
        console.error("chainConnect", err);
      }
    };

    if (networkChainId && walletChainId && walletChainId != networkChainId)
      chainConnect();
  }, [walletChainId, networkChainId, library]);

  if (error)
    console.error("Connected", {
      error,
    });

  if (isConnected) return <>{children}</>;

  if (unsupportedChain) return <UnsupportedChainAlert />;

  return <WalletDisconnectedAlert />;
};
