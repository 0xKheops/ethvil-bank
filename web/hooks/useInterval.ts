import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null): void => {
  const refCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) return;

    const id = setInterval(() => refCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
