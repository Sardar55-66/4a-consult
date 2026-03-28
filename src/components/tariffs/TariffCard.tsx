"use client";

import clsx from "clsx";
import type { Tariff } from "@/types/tariff";
import { calcDiscount } from "@/utils/discount";

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
  variant,
}: Props) => {
  const discount = calcDiscount(tariff.price, tariff.full_price);
  console.log('disabledDiscount', disabledDiscount)

  const discountTransition = "transition-all duration-500 ease-in-out";

  if (variant === "large") {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className={clsx(
          "relative rounded-[20px] md:rounded-[34px] border cursor-pointer transition bg-[#313637] mb-3",
          "flex flex-row w-full gap-6 p-6 text-left font-inherit",
          selected ? "border-[#FDB056]" : "border-none",
        )}
      >
        {/* Скидка: слева на десктопе, справа на мобилке */}
        {!disabledDiscount && (
          <div
            className={clsx(
              "absolute top-0 bg-[#FD5656] w-fit text-white text-[14px] px-2 py-[5px] rounded-bl-[8px] rounded-br-[8px] transition-all duration-500 ease-in-out",
              discountTransition,
              "right-18 md:left-12",
            )}
          >
            -{discount}%
          </div>
        )}

        {/* HIT: всегда справа сверху */}
        {tariff.is_best && (
          <p className="absolute mr-6 mt-2 top-0 right-0 text-[#fdb056] text-[13px] md:text-[22px] tracking-[0.66px] font-['Montserrat',sans-serif] font-medium leading-[1.3]">
            хит!
          </p>
        )}

        <div className={clsx(
          "flex-1 flex flex-col items-center relative transform translate-y-[-14px]",
          disabledDiscount ? "mt-6" : "mt-2"
        )}>
          {/* Период */}
          <p
            className="
      text-white
      text-[18px] md:text-[26px]
      font-['Montserrat',sans-serif]
      font-medium
      leading-[1.2]
      mt-2
      mb-3
      mr-[32px]
    "
          >
            {tariff.period}
          </p>

          {/* Цены */}
          <div className="flex flex-col items-start gap-1">
            {/* Цена со скидкой */}
            <p
              className="
        text-[#fdb056]
        text-[34px] md:text-5xl
        font-['Montserrat',sans-serif]
        font-semibold
        leading-none
        transition-all duration-500 ease-in-out
        w-max
      "
            >
              {disabledDiscount ? tariff.full_price : tariff.price} ₽
            </p>

            {/* Старая цена */}
            {!disabledDiscount && (
              <p
                className="
          text-[#919191]
          text-[13px] md:text-[24px]
          font-['Montserrat',sans-serif]
          font-normal
          leading-[1.2]
          line-through
          decoration-1
          decoration-[#919191]
          md:ml-17
          transform translate-x-[70px]
        "
              >
                {tariff.full_price} ₽
              </p>
            )}
          </div>
        </div>

        {/* Правая половина: текст */}
        <div className="flex-1 flex items-center justify-end mt-[25px]">
          <p
            className="
      text-white
      text-[14px] md:text-[16px]
      font-['Montserrat',sans-serif]
      font-normal
      leading-[1.3]
      break-words
    "
          >
            {tariff.text}
          </p>
        </div>
      </button>
    );
  }

  /* SMALL VARIANT*/
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={clsx(
        "relative rounded-[20px] md:rounded-[40px] border cursor-pointer transition bg-[#2D3233] overflow-auto md:h-[335px]",
        "flex flex-row md:flex-col w-full gap-4 p-4 text-left font-inherit",
        selected ? "border-[#FDB056]" : "border-none",
      )}
    >
      <div className="flex-1 flex items-center flex-col">
        {!disabledDiscount && (
          <div className="absolute top-0 md:left-12 w-fit right-8 bg-[#FD5656] text-white text-[14px] px-2 py-[5px] rounded-bl-[8px] rounded-br-[8px] transition-all duration-500 ease-in-out">
            -{discount}%
          </div>
        )}

        {/* Период */}
        <h3 className={clsx(
          "text-[18px] md:text-2xl font-medium text-white leading-[1.2] mb-3 mt-2 transform translate-x-[-20px] translate-y-[-20px]",
          disabledDiscount ? "mt-6 md:mt-17" : "mt-6 md:mt-15"
        )}>
          {tariff.period}
        </h3>

        {/* Цены */}
        <div className="flex flex-col items-end gap-1 transform translate-y-[-20px] w-max">
          <span className="text-[34px] md:text-5xl font-bold text-white leading-none">
            {disabledDiscount ? tariff.full_price : tariff.price} ₽
          </span>
          {!disabledDiscount && (
            <span className="text-[14px] md:text-[24px] text-gray-500 line-through leading-none">
              {tariff.full_price} ₽
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-end md:items-start relative justify-center">
        {/* Бейджик в правом верхнем углу */}
        <p className="text-[12px] md:text-[16px] text-white leading-[1.3] break-words mt-6">
          {tariff.text}
        </p>
      </div>
    </button>
  );
};
