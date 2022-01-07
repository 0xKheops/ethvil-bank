import { PublicBlockchainConnection } from "../../components/BlockchainConnection/PublicBlockchainConnection";
import { GameHistory } from "../../components/GameHistory/GameHistory";
import Layout from "../../components/Layout/Layout";

const GamesPage = () => {
  return (
    <Layout title="Game History - ETHvil Bank">
      <PublicBlockchainConnection>
        <GameHistory />
      </PublicBlockchainConnection>
    </Layout>
  );
};

export default GamesPage;
