import constate from "constate";
import { useCallback } from "react";
import { useEvilBankBids } from "../../hooks/useEvilBankBids";
import { useEvilBankStatus } from "../../hooks/useEvilBankStatus";

const useCurrentGameProvider = () => {
  const {
    status,
    loading: loadingStatus,
    error: errorStatus,
    mutate: mutateStatus,
  } = useEvilBankStatus("INFURA");
  const {
    events,
    loading: loadingEvents,
    error: errorEvents,
    mutate: mutateBids,
  } = useEvilBankBids(status?.gameId, "INFURA");

  const mutate = useCallback(() => {
    return Promise.all([mutateStatus(), mutateBids()]);
  }, [mutateBids, mutateStatus]);

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
