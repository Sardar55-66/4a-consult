"use client";

import clsx from "clsx";
import { useState } from "react";

interface Props {
  checked: boolean;
  selectedId: string | null;
  onChange: (value: boolean) => void;
}

export const TariffsAgreement = ({ checked, onChange, selectedId }: Props) => {
  const [showError, setShowError] = useState(false);

  const handleBuy = () => {
    if (!checked || !selectedId) {
      setShowError(true);

      setTimeout(() => setShowError(false), 2000);
      return;
    }

    alert("Покупка успешна!");
  };

  return (
    <div className="space-y-3">
      <label
        className={clsx(
          "flex items-center gap-3 cursor-pointer select-none transition-colors",
          showError && "text-red-500",
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="hidden"
        />

        {/* чекбокс */}
        <span
          className={clsx(
            "mt-1 flex items-center justify-center w-8 h-8 rounded-md border mb-[25px] transition-colors w-[30px] min-w-[30px] h-[30px]",
            showError ? "border-red-500" : "border-gray-400",
          )}
        >
          {checked && (
            <svg
              width={30}
              height={30}
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FDB056"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Согласие отмечено</title>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>

        <span className="md:text-[16px] text-[10px] leading-5 w-max mb-[25px] text-[#CDCDCD]">
          Я согласен с{" "}
          <span className="underline">
            офертой рекуррентных платежей и Политикой конфиденциальности
          </span>
        </span>
      </label>

      {/* Кнопка купить */}
      <button
        type="button"
        onClick={handleBuy}
        className="md:w-[352px] h-[66px] rounded-[20px] px-[60px] py-[20px] bg-[#FDB056] text-xl font-bold text-black w-full animate-pulse hover:animate-none active:scale-95 transition"
      >
        Купить
      </button>

      <p className="md:text-sm text-xs text-gray-500">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
        денежных средств для получения пожизненного доступа к приложению.
        Пользователь соглашается, что данные кредитной/дебетовой карты будут
        сохранены для осуществления покупок дополнительных услуг сервиса.
      </p>
    </div>
  );
};
