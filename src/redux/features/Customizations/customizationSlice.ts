/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Customizations = Record<string, any>;

interface CustomizationState {
  step: number;
  variant: string;
  fabric: string;
  color: string;
  customizations: Customizations;
}

const initialState: CustomizationState = {
  step: 1,
  variant: "",
  fabric: "",
  color: "",
  customizations: {},
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setVariant: (state, action: PayloadAction<string>) => {
      state.variant = action.payload;
    },
    setFabric: (state, action: PayloadAction<string>) => {
      state.fabric = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    updateCustomization: (state, action: PayloadAction<{ key: string; value: any }>) => {
      const { key, value } = action.payload;
      state.customizations[key] = value;
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
