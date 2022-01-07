import { useRouter } from "next/router";
import { PublicBlockchainConnection } from "../../components/BlockchainConnection/PublicBlockchainConnection";
import { GameHistory } from "../../components/GameHistory/GameHistory";
import Layout from "../../components/Layout/Layout";

const GamesPage = () => {
  const router = useRouter();
  console.log(router, router.query.gameId);
  return (
    <Layout title="Game History - ETHvil Bank">
      <PublicBlockchainConnection>
        <GameHistory />
      </PublicBlockchainConnection>
    </Layout>
  );
};

export default GamesPage;
