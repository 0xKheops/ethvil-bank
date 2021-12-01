# ETHvil-bank

This is a portfolio Dapp project, only meant to be deployed on Ethereum test networks.

Front-end : Next.js, EthersJS, TailwindCSS, Storybook
Back-end : Solidity smart contract (100% test coverage)

Application is deployed at : https://arnaultnouvel.github.io/ethvil-bank/

## Local dev

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

Make sure you configure Metamask to use Hardhat network (chain Id 31337)

> If you deploy the contract multiple times you may experience a "Nonce" error when trying to bid. To get rid of the error, reset your Metamask wallet history :

- Open Metamask
- Click your account's avatar/icon
- Click settings
- Click advanced settings
- Click Reset account and confirm
