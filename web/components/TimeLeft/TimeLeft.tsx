import { formatDuration, intervalToDuration } from "date-fns";
import { FC, useCallback, useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";

type TimeLeftProps = {
  target: Date;
};

export const TimeLeft: FC<TimeLeftProps> = ({ target }) => {
  const [timeLeft, setTimeLeft] = useState<string>();

  const computeTimeleft = useCallback(() => {
    const now = new Date();

    if (target.valueOf() < now.valueOf()) setTimeLeft("FINISHED");
    else {
      const interval = intervalToDuration({
        start: new Date(),
        end: target,
      });
      setTimeLeft(formatDuration(interval));
    }
  }, [target]);

  useInterval(computeTimeleft, 1000);
  useEffect(computeTimeleft, [computeTimeleft]);

  return (
    <span
      className={timeLeft === "FINISHED" ? "text-red-500" : "text-green-500"}
    >
      {timeLeft}
    </span>
  );
};
