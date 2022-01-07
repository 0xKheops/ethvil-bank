import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { networks } from "./networks";

const supportedChainIds = networks.map((n) => n.chainId);

const urls = networks.reduce<Record<number, string>>(
  (prev, curr) => ({ ...prev, [curr.chainId]: curr.endpoint }),
  {}
);

const defaultChainId = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID || 3);

export const injectedConnector = new InjectedConnector({ supportedChainIds });

export const getNetworkConnector = (chainId) =>
  new NetworkConnector({ urls, defaultChainId: chainId ?? defaultChainId });
