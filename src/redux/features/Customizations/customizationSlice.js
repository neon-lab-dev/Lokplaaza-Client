import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setVariant: (state, action) => {
      state.variant = action.payload;
    },
    setFabric: (state, action) => {
      state.fabric = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    updateCustomization: (state, action) => {
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
