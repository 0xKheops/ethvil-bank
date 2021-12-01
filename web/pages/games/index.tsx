import Head from "next/head";
import { ConnectedInfura } from "../../components/Connected/ConnectedInfura";
import { Footer } from "../../components/Footer/Footer";
import { GamesHistory } from "../../components/GamesHistory/GamesHistory";
import { Header } from "../../components/Header/Header";
import { NetworkName } from "../../components/NetworkName/NetworkName";

const GamesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>All games - ETHvil Bank</title>
      </Head>
      <Header>
        <NetworkName />
      </Header>
      <div className="container mx-auto max-w-2xl py-4 flex-grow">
        <main>
          <div className="my-4 space-y-8">
            <ConnectedInfura>
              <GamesHistory />
            </ConnectedInfura>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default GamesPage;
