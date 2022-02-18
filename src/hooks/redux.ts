import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {useState} from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
