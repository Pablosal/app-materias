import React from "react";
import "./ListadeMaterias.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const PaginaDeListadeMaterias = (props) => {
  return (
    <div className="container d-flex flex-column">
      <div className="windowShopper d-flex flex-row">
        {props.materias.map((m) => (
          <div
            key={uuidv4()}
            className="container contenedor-materia"
            style={{ backgroundColor: `${m.background}`, color: "black" }}
          >
            <img src={m.image} alt={m.nombre} height="70" width="70" />
            <Link className="p-3" key={m.id} to={m.endpoint}>
              {m.nombre}
            </Link>
          </div>
        ))}
      </div>
      <div className="memo bg-dark p-3 m-4 ">
        <h2>
          Los Mejores y mas variados ejercicios de matematicas gratis online
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="memo bg-dark p-3 m-4 ">
        <h2>Guias de Ejercicios de Matematicas Gratis</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};
