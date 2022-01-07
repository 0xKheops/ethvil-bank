export const networks = [
  {
    chainId: 3,
    name: "Ropsten",
    fullname: "Ropsten Test Network",
    etherscanPrefix: "ropsten.",
    contract: process.env.NEXT_PUBLIC_EVILBANK_ADDRESS_ROPSTEN,
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT_ROPSTEN,
    subgraph: process.env.NEXT_PUBLIC_SUBGRAPH_ROPSTEN,
  },
  {
    chainId: 4,
    name: "Rinkeby",
    fullname: "Rinkeby Test Network",
    etherscanPrefix: "rinkeby.",
    contract: process.env.NEXT_PUBLIC_EVILBANK_ADDRESS_RINKEBY,
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT_RINKEBY,
    subgraph: process.env.NEXT_PUBLIC_SUBGRAPH_RINKEBY,
  },
  {
    chainId: 5,
    name: "Goerli",
    fullname: "Goerli Test Network",
    etherscanPrefix: "goerli.",
    contract: process.env.NEXT_PUBLIC_EVILBANK_ADDRESS_GOERLI,
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT_GOERLI,
    subgraph: process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI,
  },
  {
    chainId: 31337,
    name: "Hardhat",
    fullname: "DEV - Hardhat",
    etherscanPrefix: "",
    contract: process.env.NEXT_PUBLIC_EVILBANK_ADDRESS_HARDHAT,
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT_HARDHAT,
    subgraph: process.env.NEXT_PUBLIC_SUBGRAPH_HARDHAT,
  },
].filter(
  (n) => Boolean(n.contract) && Boolean(n.endpoint) && Boolean(n.subgraph)
);
