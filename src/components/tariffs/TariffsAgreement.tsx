"use client";

import { useState } from "react";
import clsx from "clsx";

interface Props {
  checked: boolean;
  error: boolean;
  onChange: (value: boolean) => void;
}

export const TariffsAgreement = ({
  checked,
  error,
  onChange
}: Props) => {
  const [showError, setShowError] = useState(false);

  const handleBuy = () => {
    if (!checked) {
      // показываем ошибку
      setShowError(true);

      // скрываем через 2 сек
      setTimeout(() => setShowError(false), 2000);
      return;
    }

    // логика покупки
    alert("Покупка успешна!"); // пример
  };

  return (
    <div className="space-y-3">
      <label
        className={clsx(
          "flex items-center gap-3 cursor-pointer select-none",
          (error || showError) && "text-red-500"
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="hidden"
        />

        {/* чекбокс */}
        <span
          className={clsx(
            "mt-1 flex items-center justify-center w-8 h-8 rounded-md border mb-[25px]" ,
            (error || showError) ? "border-red-500" : "border-gray-400"
          )}
        >
          {checked && (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FDB056"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>

        <span className="md:text-base text-xs leading-5 w-full mb-[25px]">
          Я согласен с <span className="underline md:text-base text-xs">офертой рекуррентных платежей и политикой конфиденциальности</span>
        </span>
      </label>

      {/* Кнопка купить с эффектом мигания */}
      <button
        onClick={handleBuy}
        className="md:w-[352px] h-[66px] rounded-[20px] px-[60px] py-[20px] gap-[10px] bg-[#FDB056] text-xl font-bold text-black animate-pulse w-full"
      >
        Купить
      </button>

      <p className="md:text-sm text:xs text-gray-500">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
      </p>
    </div>
  );
};
