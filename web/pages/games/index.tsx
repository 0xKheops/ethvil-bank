import { GamesHistory } from "../../components/GamesHistory/GamesHistory";
import Layout from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/Section/SectionTitle";

const GamesPage = () => {
  return (
    <Layout title="All games - ETHvil Bank">
      <Section>
        <SectionTitle large>Games History</SectionTitle>
        <GamesHistory />
      </Section>
    </Layout>
  );
};

export default GamesPage;
