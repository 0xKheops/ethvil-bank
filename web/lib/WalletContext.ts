import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { networks } from "./networks";
import constate from "constate";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { injectedConnector } from "./connectors";
import { UserRejectedRequestError } from "@web3-react/injected-connector";

const useWalletContext = () => {
  //Network provider
  const { chainId: networkChainId } = useWeb3React("INFURA");
  //Wallet provider
  const {
    active,
    activate,
    setError,
    account,
    library,
    error,
    chainId: walletChainId,
  } = useWeb3React<Web3Provider>();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const { networkChainName, walletChainName } = useMemo(
    () => ({
      networkChainName: networks.find((n) => n.chainId === networkChainId)
        ?.name,
      walletChainName: networks.find((n) => n.chainId === walletChainId)?.name,
    }),
    [networkChainId, walletChainId]
  );

  const isUnsupportedChain = useMemo(
    () => error?.name === "UnsupportedChainIdError",
    [error?.name]
  );

  const isWrongChain = useMemo(
    () => networkChainId && walletChainId && walletChainId != networkChainId,
    [networkChainId, walletChainId]
  );

  const isConnected = useMemo(
    () =>
      typeof account === "string" &&
      !!library &&
      !isWrongChain &&
      !isUnsupportedChain,
    [account, isUnsupportedChain, isWrongChain, library]
  );

  const checkWalletChain = useCallback(async () => {
    try {
      if (isWrongChain) {
        setConnecting(true);
        await library?.send("wallet_switchEthereumChain", [
          { chainId: "0x" + networkChainId.toString(16) },
        ]);
      }
    } catch (err) {
      console.error("connectToNetworkChain", err);
    } finally {
      setConnecting(false);
    }
  }, [isWrongChain, library, networkChainId]);

  //each time network chain changes, force wallet to connect to same chain
  useEffect(() => {
    checkWalletChain();
  }, [checkWalletChain]);

  const connect = useCallback(() => {
    setConnecting(true);

    activate(injectedConnector, undefined, true)
      .catch((err) => {
        // ignore the error if it's a user rejected request
        if (!(error instanceof UserRejectedRequestError)) {
          setError(err);
        }
      })
      .finally(() => {
        setConnecting(false);
      });
  }, [activate, error, setError]);

  return {
    account,
    isConnected,
    isWrongChain,
    isUnsupportedChain,
    walletChainName,
    networkChainName,
    checkWalletChain,
    isMetaMaskInstalled,
    isWeb3Available,
    connect,
    connecting,
    startOnboarding,
  };
};

export const [WalletProvider, useWallet] = constate(useWalletContext);
