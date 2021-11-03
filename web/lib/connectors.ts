import { InjectedConnector } from "@web3-react/injected-connector";

export const supportedChainIds = [3, 31337];

export const injected = new InjectedConnector({
  supportedChainIds,
});
