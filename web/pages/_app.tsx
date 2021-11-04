import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import getLibrary from "../lib/getLibrary";
import { fetcher } from "../lib/fetcher";
import "tailwindcss/tailwind.css";
import bg from "../public/pexels-francesco-ungaro-97494.jpg";
import { ETHPriceProvider } from "../lib/ETHPriceContext";
import { Web3ReactProviderInfura } from "../lib/Web3ReactProviderInfura";
import NoSsr from "../components/NoSsr/NoSsr";

const backgroundStyles = {
  backgroundImage: `url(${bg.src})`,
};

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        className="fixed w-screen h-screen opacity-20 bg-cover z-[-1]"
        style={backgroundStyles}
      ></div>
      <div>
        <NoSsr>
          <SWRConfig value={{ fetcher }}>
            <ETHPriceProvider>
              <Web3ReactProvider getLibrary={getLibrary}>
                <Web3ReactProviderInfura>
                  <Component {...pageProps} />
                </Web3ReactProviderInfura>
              </Web3ReactProvider>
            </ETHPriceProvider>
          </SWRConfig>
        </NoSsr>
      </div>
    </>
  );
}

export default NextWeb3App;
