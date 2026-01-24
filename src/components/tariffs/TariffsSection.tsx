"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTariffs } from "@/store/tariffsSlice";
import { RootState, AppDispatch } from "@/store";
import { TariffCard } from "./TariffCard";
import { TariffsNote } from "./TariffsNote";
import { TariffsAgreement } from "./TariffsAgreement";
import { TariffsSkeleton } from "../TariffsSkeleton";
import Image from "next/image";

export const TariffsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { best, others, loading, error } = useSelector((s: RootState) => s.tariffs);
  const disabledDiscount = useSelector((s: RootState) => s.tariffs.disabledDiscount);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchTariffs());
  }, [dispatch]);

  return (
    <div className="w-full px-4 md:px-0 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 md:gap-10 items-start">

        {/* Картинка */}
        <div className="flex justify-center">
          <Image
            src="/musc.png"
            alt="trainer"
            width={380}
            height={760}
            className="max-w-[240px] md:max-w-none"
            priority
          />
        </div>

        {/* Тарифы */}
        <div className="space-y-4 md:space-y-6">

          {error && <div className="text-red-500">{error}</div>}

          {/* Лучший тариф */}
          {loading ? (
            <TariffsSkeleton variant="large" />
          ) : (
            best && (
              <TariffCard
                tariff={best}
                variant="large"
                selected={false}
                disabledDiscount={disabledDiscount}
                onSelect={() => {}}
              />
            )
          )}

          {/* Остальные тарифы */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <TariffsSkeleton key={i} variant="small" />
                ))
              : others.map(t => (
                  <TariffCard
                    key={t.id}
                    tariff={t}
                    variant="small"
                    selected={false}
                    disabledDiscount={disabledDiscount}
                    onSelect={() => {}}
                  />
                ))}
          </div>

          <TariffsNote />
          <TariffsAgreement checked={checked} error={false} onChange={setChecked} />
        </div>
      </div>
    </div>
  );
};
