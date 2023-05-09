# ETHvil-bank

This is a portfolio Dapp project, only meant to be deployed on Ethereum test networks.

Front-end : Next.js, EthersJS, TailwindCSS, Storybook
Back-end : Solidity smart contract (100% test coverage), Subgraph

Application is deployed at : https://0xkheops.github.io/ethvil-bank/

## Development environment

To be able to run the application locally, follow the instructions below :

- Launch a local blockchain using Hardhat and deploy the contract on it
- Launch a local subgraph node using Docker
- Launch the front-end

## Local dev

In the web directory, create a .env.local file (or create from .env.local.sample) that will allow front-end to connect to hardhat :

```env
HOST_PATHNAME=
NEXT_PUBLIC_DEFAULT_CHAIN_ID=31337

NEXT_PUBLIC_EVILBANK_ADDRESS_HARDHAT=0x0B306BF915C4d645ff596e518fAf3F9669b97016
NEXT_PUBLIC_ENDPOINT_HARDHAT=http://localhost:8545
NEXT_PUBLIC_SUBGRAPH_HARDHAT=http://localhost:8000/subgraphs/name/ArnaultNouvel/ethvil-bank
```

Launch a terminal and start Hardhat (local dev blockchain)

```bash
cd blockchain
npm run dev
```

Launch another terminal and deploy the contract on hardhat

```bash
cd blockchain
# This will deploy and update the config files of subgraph and web projects with the deployed contract address
npm run deploy:local

```

Launch a local subgraph node, follow instructions in [subgraph/README.md](./subgraph/README.md)

Launch another terminal for the front-end

```bash
cd web
npm run dev
```

Then Browse http://localhost:3000

### Metamask configuration

Make sure you configure Metamask to use Hardhat network (chain Id 31337)

### Nonce too high error

This error happens if hardhat blockchain is reinitialized (or redeploy the contract), as Metamask will not expect that.

To get rid of the error, reset your Metamask wallet history :

- Open Metamask
- Click your account's avatar/icon
- Click settings
- Click advanced settings
- Click Reset account and confirm

## Verify on etherscan

```
cd blockchain
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS

```
