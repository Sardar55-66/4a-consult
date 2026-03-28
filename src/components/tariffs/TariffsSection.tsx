"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { fetchTariffs } from "@/store/tariffsSlice";
import { TariffsSkeleton } from "../TariffsSkeleton";
import { TariffCard } from "./TariffCard";
import { TariffsAgreement } from "./TariffsAgreement";
import { TariffsNote } from "./TariffsNote";

export const TariffsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { best, others, loading, error } = useSelector(
    (s: RootState) => s.tariffs,
  );
  const disabledDiscount = useSelector(
    (s: RootState) => s.tariffs.disabledDiscount,
  );
  const [checked, setChecked] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchTariffs());
  }, [dispatch]);

  useEffect(() => {
    if (best) {
      setSelectedId(best.id);
    }
  }, [best]);

  return (
    <div className="w-full p-2 md:px-0 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 md:gap-10 items-start">
        {/* Картинка */}
        <div className="flex justify-center">
          <Image
            src="/musc.png"
            alt="trainer"
            width={380}
            height={760}
            className="max-w-[200px] md:max-w-none h-auto"
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
                disabledDiscount={disabledDiscount}
                selected={selectedId === best.id}
                onSelect={() => setSelectedId(best.id)}
              />
            )
          )}

          {/* Остальные тарифы */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {loading
              ? ["sk-small-1", "sk-small-2", "sk-small-3"].map((skKey) => (
                  <TariffsSkeleton key={skKey} variant="small" />
                ))
              : others.map((t) => (
                  <TariffCard
                    key={t.id}
                    tariff={t}
                    variant="small"
                    disabledDiscount={disabledDiscount}
                    selected={selectedId === t.id}
                    onSelect={() => setSelectedId(t.id)}
                  />
                ))}
          </div>

          <TariffsNote />
          <TariffsAgreement
            checked={checked}
            onChange={setChecked}
            selectedId={selectedId}
          />
        </div>
      </div>
    </div>
  );
};
