import Head from "next/head";
import { Connected } from "../components/Connected/Connected";
import { CurrentGame } from "../components/CurrentGame/CurrentGame";
import { Explanations } from "../components/Explanations/Explanations";
import { Header } from "../components/Header/Header";
import { Withdraw } from "../components/Withdraw/Withdraw";
import { GasPriceProvider } from "../lib/GasPriceContext";
import { NetworkName } from "../components/NetworkName/NetworkName";

function Home() {
  return (
    <div>
      <Head>
        <title>ETHvil Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <NetworkName />
      </Header>
      <div className="container mx-auto max-w-2xl py-4">
        <main>
          <Connected>Games history</Connected>
        </main>
      </div>
    </div>
  );
}

export default Home;
