import { AppDispatch } from "../store";
import axios from "axios";
import { IUsers } from "../../models/IUsers";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
// асинхронный action creator
// thunk тут лежит под копотом
// чтобы реализовать его, нужно создать ф-ю, которая возвращает ф-ю,
// которая аргументом принимает dispatch, а уже из неё мы будем производить
// асинхронные действия
/*
npm i axios
для запросов*/

// export const fetchUsers = () => async (dispatch: AppDispatch) =>{
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         // <> - generic
//         // <IUsers> - ожидаемый тип возвращаемого значения
//         const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
//  }


// реализация middleware
export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUsers[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Загрузка не случилась");
    }
  }
);
