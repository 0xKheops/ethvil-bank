import { GamesHistoryProvider } from "./GamesHistoryContext";
import { GamesHistoryList } from "./GamesHistoryList";

export const GamesHistory = () => {
  return (
    <GamesHistoryProvider>
      <GamesHistoryList />
    </GamesHistoryProvider>
  );
};
