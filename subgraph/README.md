## DEV setup

Launch blockchain

```bash

# move to blockchain directory in this repo
cd blockchain

# launch local blockchain
npx hardhat

# deploy contract
npm run deploy

```

## Run The Graph Node

```bash

# Clone the repo
git clone https://github.com/graphprotocol/graph-node/
cd graph-node/docker

# Linux only - replace hold IP
./setup.sh

# in case you have a local postgresql service, stop it
systemctl stop postgresql

# Start local Graph node
docker-compose up

```

> If at some point you need to erase all data from the graph-node, delete the graph-node/docker/data directory (requires elevated privileges)

## Index the contract history

```bash

# move to the subgraph folder in this repo
cd subgraph

# register the subgraph in the local node
npm run create-local

# index the contract history
npm run prepare:local
npm run deploy-local

```
