import { IUsers } from "../../models/IUsers";
import { createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

export interface UserState {
  users: IUsers[];
  isLoading: boolean;
  error: string;
  count: number;
}

// дефолтное состояние этого редьюсера
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // аналог switch case
    // создаём здесь ф-ии, внутри которых напрямую изменяем состояние
    // они принимают в аргументах state, action
    increment(state, actoin: PayloadAction<number>) {
      state.count += actoin.payload;
    },
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUsers[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    // чтобы получать данные из редьюсеров на основе createAsyncThunk

    // успешная загрузка
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    // ожидание
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    // ошибка
    [fetchUsers.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
