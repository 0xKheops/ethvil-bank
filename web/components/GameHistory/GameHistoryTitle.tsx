import { useGameHistory } from "./GameHistoryContext";

export const GameHistoryTitle = () => {
  const { game } = useGameHistory();
  return <>Game N° {Number(game.id).toLocaleString()} (history)</>;
};
