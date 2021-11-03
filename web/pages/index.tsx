import Head from "next/head";
import { Connected } from "../components/Connected/Connected";
import { CurrentGame } from "../components/CurrentGame/CurrentGame";
import { Explanations } from "../components/Explanations/Explanations";
import { Header } from "../components/Header/Header";
import { Withdraw } from "../components/Withdraw/Withdraw";
import { GasPriceProvider } from "../lib/GasPriceContext";
import { NetworkName } from "../components/NetworkName/NetworkName";
import { Footer } from "../components/Footer/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ETHvil Bank</title>
        <link rel="icon" href="/ethvil-bank/favicon.ico" />
      </Head>
      <Header>
        <NetworkName />
      </Header>
      <div className="container mx-auto max-w-2xl py-4 flex-grow">
        <main>
          <Explanations />
          <div className="my-4 space-y-8">
            <Connected>
              <GasPriceProvider>
                <CurrentGame />
                <Withdraw />
              </GasPriceProvider>
            </Connected>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
