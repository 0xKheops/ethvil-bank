import constate from "constate";
import { useCallback, useState } from "react";

const useNetworkPaneContext = () => {
  const [show, setShow] = useState(false);

  const hidePane = useCallback(() => setShow(false), []);
  const showPane = useCallback(() => setShow(true), []);

  return {
    hidePane,
    showPane,
    show,
  };
};

export const [NetworkPaneProvider, useNetworkPane] = constate(
  useNetworkPaneContext
);
