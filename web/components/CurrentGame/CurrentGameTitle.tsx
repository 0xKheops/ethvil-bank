import { useCurrentGame } from "./CurrentGameContext";

export const CurrentGameTitle = () => {
  const { gameId } = useCurrentGame();
  if (!gameId) return <>Loading...</>;
  return <>Game N° {gameId.toNumber()}</>;
};
