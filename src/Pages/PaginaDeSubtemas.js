import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ObtenerEjercicios } from "../redux/actions/EjerciciosActions";
const PaginaDeSubtemas = (props) => {
  const dispatch = useDispatch();
  const rotu = useParams();
  const subtemas = props.materias.find((m) => m.endpoint === rotu.subtema);

  return (
    <div>
      <div className="container">
        <ul className="list-group">
          {subtemas.submaterias.map((s) => (
            <Link
              onClick={() => dispatch(ObtenerEjercicios())}
              key={Math.random()}
              className="list-group-item list-group-item-action"
              to={`/${rotu.subtema}/${s.replace(/ /g, "").toLowerCase()}`}
            >
              {s}
              <span
                className="badge badge-primary badge-pill "
                style={{ float: "right" }}
              >
                {props.ejercicios[s.replace(/ /g, "").toLowerCase()].length}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaginaDeSubtemas;
