import Head from "next/head";
import { CurrentGame } from "../components/CurrentGame/CurrentGame";
import { Explanations } from "../components/Explanations/Explanations";
import { Header } from "../components/Header/Header";
import { GasPriceProvider } from "../lib/GasPriceContext";
import { NetworkName } from "../components/NetworkName/NetworkName";
import { Footer } from "../components/Footer/Footer";
import { ConnectedInfura } from "../components/Connected/ConnectedInfura";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ETHvil Bank</title>
      </Head>
      <Header>
        <NetworkName />
      </Header>
      <div className="container mx-auto max-w-2xl py-4 flex-grow">
        <main>
          <Explanations />
          <div className="my-4 space-y-8">
            <ConnectedInfura>
              <GasPriceProvider>
                <CurrentGame />
                {/* <Withdraw /> */}
              </GasPriceProvider>
            </ConnectedInfura>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
