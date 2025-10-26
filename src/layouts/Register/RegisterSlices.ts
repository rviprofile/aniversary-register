import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisterState {
  name: string;
  drinks: string[];
  karaoke: boolean;
}

const initialState: RegisterState = {
  name: "",
  drinks: [],
  karaoke: true,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setDrinks(state, action: PayloadAction<string[]>) {
      state.drinks = action.payload;
    },
    setKaraoke(state, action: PayloadAction<boolean>) {
      state.karaoke = action.payload;
    },
  },
});

export const { setName, setDrinks, setKaraoke } = registerSlice.actions;

export default registerSlice.reducer;
