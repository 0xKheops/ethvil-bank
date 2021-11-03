import { FC } from "react";

export const UnsupportedChainAlert: FC = () => (
  <div className="relative border-2 border-red-800 w-full rounded container mx-auto text-center">
    <div className="absolute bg-gray-900 w-full h-full opacity-70 z-[-10]"></div>
    <h3 className="text-xl font-bold uppercase p-2 bg-red-800 text-white text-center">
      Unsupported chain
    </h3>
    <div className="p-4">
      <p>Your wallet is connected but targets an unsupported network.</p>
      <p>Supported networks are Hardhat (local dev), Ropsten Test Net</p>
      <br />
      <p>Please open your wallet and select a supported network.</p>
    </div>
  </div>
);
