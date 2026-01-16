/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionKV {
  key: string;
  label: string;
}

type Customizations = Record<string, OptionKV>;

interface CustomizationState {
  step: number;

  variantType: OptionKV | null;

  fabric: OptionKV[];
  color: OptionKV[];

  customizations: Customizations;
}

const initialState: CustomizationState = {
  step: 1,
  variantType: null,
  fabric: [],
  color: [],
  customizations: {},
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
  state.step = action.payload;
},

setVariant: (state, action: PayloadAction<OptionKV>) => {
  state.variantType = action.payload;
},

setFabric: (state, action: PayloadAction<OptionKV>) => {
  state.fabric = [action.payload]; // single select but API wants array
},

setColor: (state, action: PayloadAction<OptionKV>) => {
  state.color = [action.payload];
},

updateCustomization: (
  state,
  action: PayloadAction<{ key: string; value: OptionKV }>
) => {
  state.customizations[action.payload.key] = action.payload.value;
},

reset: () => initialState,

  },
});

export const {
  setStep,
  setVariant,
  setFabric,
  setColor,
  updateCustomization,
  reset,
} = customizationSlice.actions;

export default customizationSlice.reducer;
