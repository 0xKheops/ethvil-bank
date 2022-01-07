import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useMemo, useState } from "react";
import { getNetworkConnector } from "../../lib/connectors";
import { useUserSettings } from "../../lib/UserSettingsContext";
import { UnsupportedChainAlert } from "./UnsupportedChainAlert";
import { WalletDisconnectedAlert } from "./WalletDisconnectedAlert";

export const PublicBlockchainConnection: FC = ({ children }) => {
  const [tried, setTried] = useState(false);
  const { chainId } = useUserSettings();

  const {
    library,
    error,
    active,
    activate,
    chainId: currentChainId,
  } = useWeb3React<Web3Provider>("INFURA");

  const isConnected = useMemo(
    () => !error && active && !!library,
    [active, error, library]
  );

  const unsupportedChain = useMemo(
    () => error?.name === "UnsupportedChainIdError",
    [error?.name]
  );

  // initialize only once, then change chain using the changeChainId function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const networkConnector = useMemo(() => getNetworkConnector(chainId), []);

  useEffect(() => {
    const checkChainId = async () => {
      if (!networkConnector) return;
      if (currentChainId !== chainId) {
        try {
          networkConnector.changeChainId(chainId);
        } catch (err) {
          alert("fail");
        }
      }
    };
    checkChainId();
  }, [chainId, currentChainId, networkConnector]);

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
  }, [activate, active, error, networkConnector, tried]);

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
