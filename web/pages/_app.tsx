import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/fetcher";
import "tailwindcss/tailwind.css";
import bg from "../public/pexels-francesco-ungaro-97494.jpg";
import { ETHPriceProvider } from "../lib/ETHPriceContext";
import NoSsr from "../components/NoSsr/NoSsr";
import { UserSettingsProvider } from "../lib/UserSettingsContext";
import { PublicBlockchainConnection } from "../components/BlockchainConnection/PublicBlockchainConnection";
import { WalletBlockchainConnection } from "../components/BlockchainConnection/WalletBlockchainConnection";

const backgroundStyles = {
  backgroundImage: `url(${bg.src})`,
};

const NextWeb3App = ({ Component, pageProps }: AppProps) => (
  <>
    <div
      className="fixed w-screen h-screen opacity-20 bg-cover z-[-1]"
      style={backgroundStyles}
    ></div>
    <div>
      <NoSsr>
        <UserSettingsProvider>
          <SWRConfig value={{ fetcher }}>
            <ETHPriceProvider>
              <PublicBlockchainConnection>
                <WalletBlockchainConnection>
                  <Component {...pageProps} />
                </WalletBlockchainConnection>
              </PublicBlockchainConnection>
            </ETHPriceProvider>
          </SWRConfig>
        </UserSettingsProvider>
      </NoSsr>
    </div>
  </>
);

export default NextWeb3App;
