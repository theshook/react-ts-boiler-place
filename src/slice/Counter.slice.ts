import { createSlice } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0
}

const countSlice = createSlice({
  name: 'CounterSlice',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    reset(state) {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = countSlice.actions;
export default countSlice.reducer;
