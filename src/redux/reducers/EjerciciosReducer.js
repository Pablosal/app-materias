import { ActionTypes } from "../actions/Types";
import { ejercicio } from "../../Data";
let initialState = {
  ejercicios: ejercicio,
};

export const EjerciciosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
