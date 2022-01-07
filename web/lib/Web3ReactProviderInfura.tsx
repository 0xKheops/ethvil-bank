import { FC } from "react";
import { createWeb3ReactRoot } from "@web3-react/core";
import getLibrary from "./getLibrary";

// Used to query blockchain without wallet (raises error with SSR)
const Web3ReactProviderForInfura =
  process.browser && createWeb3ReactRoot("INFURA");

export const Web3ReactProviderInfura: FC = ({ children }) => {
  return process.browser ? (
    // @ ts-ignore
    <Web3ReactProviderForInfura getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderForInfura>
  ) : (
    <>{children}</>
  );
};
