import { FC } from "react";
import { useWallet } from "../../lib/WalletContext";
import { Button } from "../Button";

export const WrongChainAlert: FC = () => {
  const { walletChainName, networkChainName, checkWalletChain } = useWallet();

  return (
    <div className="p-4 text-center">
      <p className="mb-4">
        Your wallet is connected but targets an invalid network (
        {walletChainName}
        ).
      </p>
      <Button color="green" onClick={checkWalletChain}>
        Switch to {networkChainName}
      </Button>
    </div>
  );
};
