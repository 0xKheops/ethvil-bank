import constate from "constate";
import { useEvilBankEvents } from "../../hooks/useEvilBankEvents";
import { useEvilBankStatus } from "../../hooks/useEvilBankStatus";

const useCurrentGameProvider = () => {
  const {
    status,
    loading: loadingStatus,
    error: errorStatus,
    mutate,
  } = useEvilBankStatus();
  const {
    events,
    loading: loadingEvents,
    error: errorEvents,
  } = useEvilBankEvents(status?.gameId);

  const result = {
    ...status,
    mutate,
    events,
    loading: loadingStatus || loadingEvents,
    error: errorStatus || errorEvents,
  };

  return result;
};

export const [CurrentGameProvider, useCurrentGame] = constate(
  useCurrentGameProvider
);
