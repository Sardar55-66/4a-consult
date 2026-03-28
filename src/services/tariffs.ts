import axios from "axios";
import type { Tariff } from "@/types/tariff";

export const getTariffs = async (): Promise<Tariff[]> => {
  try {
    const res = await axios.get("https://t-core.fit-hub.pro/Test/GetTariffs");
    return res.data;
  } catch (_e) {
    throw new Error("Ошибка загрузки тарифов");
  }
};
