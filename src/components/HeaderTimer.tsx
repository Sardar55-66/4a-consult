"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useTimer } from "@/hooks/useTimer";

export const HeaderTimer = ({ onFinish }: { onFinish: () => void }) => {
  const time = useTimer(10);
  const hasFinished = useRef(false);

  useEffect(() => {
    if (time === 0 && !hasFinished.current) {
      hasFinished.current = true;
      onFinish();
    }
  }, [time, onFinish]);

  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return (
    <div className="fixed top-0 w-full bg-[#1F5D45] text-white z-50">
      <div className="text-center py-2 md:py-3">
        <p className="text-sm md:text-2xl">Успейте открыть пробную неделю</p>

        <span
          className={clsx(
            "block font-bold mt-1 text-xl md:text-2xl transition-all text-[#FFBB00]",
            time <= 30 && time > 0 && "text-red-500 blink",
          )}
        >
          ✨ {min}:{sec} ✨
        </span>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};
