import { FC } from "react";

export const UnsupportedChainAlert: FC = () => (
  <div className="p-4 text-center">
    <p>Your wallet is connected but targets an unsupported network.</p>
    <p>Supported networks are Hardhat (local dev), Ropsten Test Net</p>
    <br />
    <p>Please open your wallet and select a supported network.</p>
  </div>
);
