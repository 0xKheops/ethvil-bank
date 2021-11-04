import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

export const supportedChainIds = [
  3, //ropsten
  31337, // local hardhat
];

export const injected = new InjectedConnector({
  supportedChainIds,
});

export const infura = new NetworkConnector({
  urls: {
    3: `https://ropsten.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
    31337: "http://localhost:8545",
  },
  defaultChainId: Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID),
});
