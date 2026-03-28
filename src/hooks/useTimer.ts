import { useEffect, useState } from "react";

export const useTimer = (initial: number) => {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    if (time <= 0) return;

    const id = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [time]);

  return time;
};
