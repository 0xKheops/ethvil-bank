# ETHvil-bank

This is a portfolio Dapp project, only meant to be deployed on Ethereum test networks.

Front-end : Next.js, EthersJS, TailwindCSS, Storybook
Back-end : Solidity smart contract (100% test coverage)

Application is deployed at : https://arnaultnouvel.github.io/ethvil-bank/

## Local dev

In the web directory, create a .env.local file that will allow front-end to connect to hardhat :

```env
HOST_PATHNAME=
NEXT_PUBLIC_DEFAULT_CHAIN_ID=31337

# Value is automatically updated by blockchain project when deploying locally
NEXT_PUBLIC_EVILBANK_ADDRESS=0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
```

Launch a terminal and start Hardhat (local dev blockchain)

```bash
    cd blockchain
    npm run dev
```

Launch another terminal and deploy the contract on hardhat

```bash
    cd blockchain
    npm run deploy
```

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
