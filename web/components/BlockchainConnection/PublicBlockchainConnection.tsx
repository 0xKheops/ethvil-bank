import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useMemo, useState } from "react";
import { networkConnector } from "../../lib/connectors";
import { UnsupportedChainAlert } from "./UnsupportedChainAlert";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";

export const PublicBlockchainConnection: FC = ({ children }) => {
  const [tried, setTried] = useState(false);
  const { library, error, active, activate } =
    useWeb3React<Web3Provider>("INFURA");

  const isConnected = useMemo(
    () => !error && active && !!library,
    [active, error, library]
  );

  const unsupportedChain = useMemo(
    () => error?.name === "UnsupportedChainIdError",
    [error?.name]
  );

  useEffect(() => {
    if (!tried && !active) {
      activate(
        networkConnector,
        (err) => {
          if (err) {
            console.error("PublicBlockchainConnection", { err });
            setTried(true);
          }
        },
        true
      ).catch((reason) => {
        console.error("PublicBlockchainConnection", { reason });
        setTried(true);
      });
    }
  }, [activate, active, error, tried]);

  if (error) {
    console.error("Connected", {
      error,
    });
    return <div>Failed to connect to Ethereum node : {error.message}</div>;
  }

  if (isConnected) return <>{children}</>;

  if (unsupportedChain) return <UnsupportedChainAlert />;

  return <WalletDisconnectedAlert />;
};