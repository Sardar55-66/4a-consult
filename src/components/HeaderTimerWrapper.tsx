"use client";

import { HeaderTimer } from "@/components/HeaderTimer";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setDisabledDiscount } from "@/store/tariffsSlice";

export const HeaderTimerWrapper = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <HeaderTimer onFinish={() => dispatch(setDisabledDiscount(true))} />

      <section className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 p-6 md:p-10 mt-6">
          <h1 className="text-center text-[40px] md:text-4xl font-bold mb-10 mt-10">
            Выбери подходящий для себя{" "}
            <span className="text-[#FDB056]">тариф</span>
          </h1>

         
        </div>
      </section>
    </>
  );
};
