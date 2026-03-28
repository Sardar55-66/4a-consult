import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { getTariffs } from "@/services/tariffs";
import type { Tariff } from "@/types/tariff";

export const fetchTariffs = createAsyncThunk(
  "tariffs/fetchTariffs",
  async () => {
    const data = await getTariffs();
    return data as Tariff[];
  },
);

interface TariffsState {
  all: Tariff[];
  best?: Tariff;
  others: Tariff[];
  loading: boolean;
  error?: string;
  disabledDiscount: boolean;
}

const initialState: TariffsState = {
  all: [],
  best: undefined,
  others: [],
  loading: false,
  error: undefined,
  disabledDiscount: false,
};

export const tariffsSlice = createSlice({
  name: "tariffs",
  initialState,
  reducers: {
    setDisabledDiscount: (state, action: PayloadAction<boolean>) => {
      state.disabledDiscount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTariffs.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        fetchTariffs.fulfilled,
        (state, action: PayloadAction<Tariff[]>) => {
          state.loading = false;
          state.all = action.payload;

          state.best = action.payload.find((t) => t.is_best);
          state.others = action.payload.filter((t) => !t.is_best);
        },
      )
      .addCase(fetchTariffs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setDisabledDiscount } = tariffsSlice.actions;
export default tariffsSlice.reducer;
