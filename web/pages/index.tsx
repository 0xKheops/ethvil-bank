import { CurrentGame } from "../components/CurrentGame/CurrentGame";
import { Explanations } from "../components/Explanations/Explanations";
import { GasPriceProvider } from "../lib/GasPriceContext";
import { PublicBlockchainConnection } from "../components/BlockchainConnection/PublicBlockchainConnection";
import Layout from "../components/Layout/Layout";

const Home = () => (
  <Layout title="ETHvil Bank">
    <Explanations />
    <div className="my-4 space-y-8">
      <PublicBlockchainConnection>
        <GasPriceProvider>
          <CurrentGame />
          {/* <Withdraw /> */}
        </GasPriceProvider>
      </PublicBlockchainConnection>
    </div>
  </Layout>
);

export default Home;
