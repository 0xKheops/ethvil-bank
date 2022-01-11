import { CurrentGame } from "../components/CurrentGame/CurrentGame";
import { Explanations } from "../components/Explanations/Explanations";
import { GasPriceProvider } from "../lib/GasPriceContext";
import Layout from "../components/Layout/Layout";

const Home = () => (
  <Layout title="ETHvil Bank">
    <div className="my-4 space-y-8">
      <GasPriceProvider>
        <Explanations />
        <CurrentGame />
      </GasPriceProvider>
    </div>
  </Layout>
);

export default Home;
