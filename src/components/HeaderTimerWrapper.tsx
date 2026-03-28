"use client";

import { useDispatch } from "react-redux";
import { HeaderTimer } from "@/components/HeaderTimer";
import type { AppDispatch } from "@/store";
import { setDisabledDiscount } from "@/store/tariffsSlice";

export const HeaderTimerWrapper = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <HeaderTimer onFinish={() => dispatch(setDisabledDiscount(true))} />

      <section className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:p-10">
          <h1 className="text-center text-[24px] md:text-4xl font-bold mb-10 mt-2 text-left">
            Выбери подходящий для себя{" "}
            <span className="text-[#FDB056]">тариф</span>
          </h1>
        </div>
      </section>
    </>
  );
};
