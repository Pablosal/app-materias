import React from "react";
import "./ListadeMaterias.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import backTeacher from "../imagenes/asd.webp";
export const PaginaDeListadeMaterias = (props) => {
  return (
    <div className=" d-flex flex-column">
      <section
        className="container"
        style={{
          height: "100vh",
          padding: 0,
          background: `url(${backTeacher}) no-repeat center center`,
        }}
      >
        <div
          className="upperSection "
          style={{
            backgroundColor: "rgba(0,0,0,.8)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>
            Has tus ejercicios de matematica de manera online
          </h1>
        </div>
      </section>
      <div className="windowShopper d-flex flex-row">
        {props.materias.map((m) => (
          <div
            key={uuidv4()}
            className="container contenedor-materia"
            style={{
              backgroundColor: `${m.background}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "250px",
              maxHeight: "250px",
              width: "auto",
              position: "relative",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "-35px",
                color: "white ",
                borderRadius: "50%",
              }}
              src={m.image}
              alt={m.nombre}
              height="70"
              width="70"
            />
            <Link className="p-3" key={m.id} to={m.endpoint}>
              {m.nombre}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
