import { useDispatch } from 'react-redux'
import { store } from "../../app/store/index";

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
