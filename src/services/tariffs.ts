import axios from "axios";
import { Tariff } from "@/types/tariff";

export const getTariffs = async (): Promise<Tariff[]> => {
  const res = await axios.get(
    "https://t-core.fit-hub.pro/Test/GetTariffs"
  );
  return res.data;
};
