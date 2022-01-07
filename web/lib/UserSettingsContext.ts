import { useLocalStorage } from "react-use";
import constate from "constate";
import { useCallback, useMemo } from "react";

type UserSettings = {
  chainId: number;
};

const DEFAULT_VALUE: UserSettings = {
  chainId: Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID),
};

const useUserSettingsContext = () => {
  const [settings, setSettings] = useLocalStorage<UserSettings>(
    "ethvilbank-chainId",
    DEFAULT_VALUE
  );

  const { chainId } = useMemo(() => settings, [settings]);

  const setChainId = useCallback(
    (newChainId: number) =>
      setSettings((prev) => ({ ...prev, chainId: newChainId })),
    [setSettings]
  );

  return { chainId, setChainId };
};

export const [UserSettingsProvider, useUserSettings] = constate(
  useUserSettingsContext
);
