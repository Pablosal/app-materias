import { createStore } from "redux";
import { EjerciciosReducer } from "../reducers/EjerciciosReducer";
export let store = createStore(EjerciciosReducer);
