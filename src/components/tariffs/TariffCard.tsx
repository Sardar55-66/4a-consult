"use client";

import { Tariff } from "@/types/tariff";
import { calcDiscount } from "@/utils/discount";
import clsx from "clsx";

interface Props {
  tariff: Tariff;
  selected: boolean;
  disabledDiscount: boolean;
  onSelect: () => void;
  variant: "large" | "small";
}

export const TariffCard = ({
  tariff,
  selected,
  disabledDiscount,
  onSelect,
  variant
}: Props) => {
  const discount = calcDiscount(tariff.price, tariff.full_price);

  const discountTransition = "transition-all duration-500 ease-in-out";

  if (variant === "large") {
    return (
      <div
        onClick={onSelect}
        className="w-full min-h-[190px] relative bg-[#313637] rounded-[34px] pt-[30px] pb-[26px] pl-[19px] pr-[50px] flex flex-col items-end justify-center gap-4 cursor-pointer"
      >
        {/* Border */}
        {selected && (
          <div
            className="absolute inset-[-2px] border-2 border-[#fdb056] rounded-[36px] pointer-events-none"
            aria-hidden
          />
        )}

        {/* Discount */}
        {!disabledDiscount && (
          <div
            className={clsx(
              "absolute top-0 md:left-4 left-75 bg-[#fd5656] rounded-bl-[8px] rounded-br-[8px] px-[5px] py-[5px] text-white text-[16px] md:text-[22px] font-['Gilroy',sans-serif] font-medium",
              discountTransition
            )}
          >
            -{discount}%
          </div>
        )}

        {/* HIT */}
        {tariff.is_best && (
          <p className="relative md:top-[-10px] top-[-26px] left-[26px] md:right-0 text-[#fdb056] text-[13px] md:text-[22px] tracking-[0.66px] font-['Montserrat',sans-serif] font-medium leading-[1.3]">
            хит!
          </p>
        )}

        <div
          className="flex flex-row md:flex-row items-center justify-center gap-6 md:gap-[40px] w-full"
        >
          {/* Левая часть: период + цены */}
          <div
            className="
      flex flex-col
      items-center md:items-end
      gap-3 md:gap-4
      md:ml-5
      w-full md:w-auto
    "
          >
            {/* Период */}
            <p
              className="
        text-white
        text-[18px] md:text-[26px]
        font-['Montserrat',sans-serif]
        font-medium
        leading-[1.2]
        text-center md:text-right
      "
            >
              Навсегда
            </p>

            {/* Цены */}
            <div className="flex flex-col items-center md:items-end gap-1">
              {/* Цена со скидкой */}
              <p
                className="
          text-[#fdb056]
          text-[30px] md:text-7xl
          font-['Montserrat',sans-serif]
          font-semibold
          leading-none
          transition-all duration-500 ease-in-out
        "
              >
                5990 ₽
              </p>

              {/* Старая цена */}
              <p
                className="
          text-[#919191]
          text-[14px] md:text-[24px]
          font-['Montserrat',sans-serif]
          font-normal
          leading-[1.2]
          line-through
          decoration-1
          decoration-[#919191]
        "
              >
                18990 ₽
              </p>
            </div>
          </div>

          {/* Правая часть: описание */}
          <div className="w-full md:w-auto px-2 md:px-0">
            <p
              className="
        text-white
        text-[14px] md:text-[16px]
        font-['Montserrat',sans-serif]
        font-normal
        leading-[1.3]
        text-center md:text-left
        max-w-full md:max-w-[328px]
      "
            >
              Для тех, кто хочет всегда быть в форме и поддерживать здоровье
            </p>
          </div>
        </div>

      </div>
    );
  }

  /* SMALL VARIANT*/
  return (
    <div
      onClick={onSelect}
      className={clsx(
        "relative rounded-4xl border cursor-pointer transition bg-[#2D3233]",
        "p-8 flex mobile:flex-row md:flex-col  gap-4 w-full mobile:pl-[45px]",
        selected ? "border-accent" : "border-gray-700"
      )}
    >
      {/* Скидка */}
      {!disabledDiscount && (
        <div
          className="
          absolute top-0 md:left-4 left-80
          bg-[#FD5656]
          text-white
          text-[14px]
          px-2 py-[5px]
          rounded-bl-[8px] rounded-br-[8px]
          transition-all duration-500 ease-in-out
          
        "
        >
          -{discount}%
        </div>
      )}

      {/* Левая часть: период + цены */}
      <div
        className="
        flex flex-col
        justify-center
        items-start
        gap-2
        min-w-0
        min-h-[110px]
        mobile:pt-[30px] 
        mobile:pb-[26px] 
        mobile:pl-[19px] 
        mobile:pr-[50px]
      "
      >
        {/* Период */}
        <h3
          className="
          text-[18px] md:text-2xl
          font-medium
          text-white
          leading-[1.2]
          mt-[25px]
        "
        >
          {tariff.period}
        </h3>

        {/* Цены */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span
            className="
            text-[30px] md:text-5xl
            font-bold
            text-white
            leading-none
            transition-all duration-500 ease-in-out
          "
          >
            {disabledDiscount ? tariff.full_price : tariff.price} ₽
          </span>

          {!disabledDiscount && (
            <span
              className="
              text-[14px]
              text-gray-500
              line-through
              leading-none
              transition-all duration-500 ease-in-out
            "
            >
              {tariff.full_price} ₽
            </span>
          )}
        </div>
      </div>

      {/* Правая часть: текст */}
      <div className="flex items-center min-w-0 flex-1">
        <p
          className="
          text-[14px]
          text-gray-400
          leading-[1.3]
          wrap-break-words
        "
        >
          {tariff.text}
        </p>
      </div>
    </div>

  );
};
