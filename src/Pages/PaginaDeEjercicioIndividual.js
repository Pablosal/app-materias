import React, { useEffect, useState } from "react";
import "./EjercicioIndividual.css";
import { colors } from "../Data";
import { useParams } from "react-router-dom";
import PistasComponente from "../Components/EjercicioIndividual/PistasComponente";
import ChekearComponente from "../Components/EjercicioIndividual/CheckearComponente";
import NotasComponente from "../Components/EjercicioIndividual/NotasComponente";
import DescripcionComponente from "../Components/EjercicioIndividual/DescripcionComponente";
import DrawComponent from "../Components/EjercicioIndividual/DrawComponent";
import { useSelector } from "react-redux";
export const PaginadeEjercicioIndividual = (props) => {
  const [exercise, setExercise] = useState();
  let parametros = useParams();

  const ejercicios2 = useSelector((state) => state.ejercicios);
  useEffect(() => {
    obtenerDatos();
  });
  const obtenerDatos = () => {
    let ejerciciosFiltrados = ejercicios2[parametros.submateria];
    let randomExercise =
      ejerciciosFiltrados[
        Math.floor(Math.random() * ejerciciosFiltrados.length)
      ];
    if (ejerciciosFiltrados.length > 0) {
      setExercise(randomExercise);
    } else {
      console.log("No existen ejercicios aqui");
    }
  };

  return (
    <div
      className="container ejercicios-totales p-2 m-5"
      style={{ backgroundColor: "white" }}
    >
      {exercise ? (
        <>
          <div className="container ejercicios">
            <DescripcionComponente ejercicios={exercise} />
            <ChekearComponente ejercicios={exercise} />
            <DrawComponent colors={colors} />
          </div>
          <div
            className="sidebar-utilities p-2 "
            style={{ border: "2px double", width: "511px", height: "auto" }}
          >
            {/* <PistasComponente
              pistas={exercise.pistas}
              pistosas={props.pistas[parametros.submateria]}
            /> */}
            <NotasComponente />
          </div>
        </>
      ) : (
        <h1>No existen ejercicios</h1>
      )}
    </div>
  );
};
