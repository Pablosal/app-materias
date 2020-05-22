import { ActionTypes } from "./Types";

export const ObtenerEjercicios = (parametros) => ({
  type: ActionTypes.OBTENER_EJERCICIOS,
  payload: parametros,
});
