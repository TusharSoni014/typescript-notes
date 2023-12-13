import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease, incrementByValue } = numberSlice.actions;
export default numberSlice.reducer;
