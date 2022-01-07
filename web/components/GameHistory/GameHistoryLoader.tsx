import { FC } from "react";
import { useNetwork } from "../../hooks/useNetwork";
import { useGameHistory } from "./GameHistoryContext";

export const GameHistoryLoader: FC = ({ children }) => {
  const network = useNetwork();
  const { loading, game } = useGameHistory();

  if (loading || !game)
    return (
      <div className="text-center my-10">
        <div
          style={{ borderTopColor: "transparent" }}
          className="inline-block w-12 h-12 border-4 border-yellow-500 border-solid rounded-full animate-spin"
        ></div>
        <div className="text-yellow-500">
          Connecting to {network.fullname}...
        </div>
      </div>
    );

  return <>{children}</>;
};
