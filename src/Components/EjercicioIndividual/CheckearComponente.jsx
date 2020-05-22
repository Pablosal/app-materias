import React, { useState } from "react";
const ChekearComponente = (props) => {
  const [seleccionada, setSeleccionada] = useState();
  const handleCheck = (e) => {
    setSeleccionada(e.target.value);
    console.log(e.target.value);
  };
  const compare = () => {
    props.ejercicios.correcto === seleccionada
      ? console.log("Correcto")
      : console.log("Incorrecto");
  };
  return (
    <div className="container d-flex flex-column">
      {props.ejercicios.soluciones.map((s) => {
        return (
          <div className="form-control " key={s}>
            <input
              type="radio"
              value={s}
              onChange={handleCheck}
              name="Pregunta"
              id="check"
              style={{ float: "left " }}
            />
            <label htmlFor="check">{s}</label>
          </div>
        );
      })}
      <button onClick={() => compare()} className="btn btn-warning">
        Checkear
      </button>
    </div>
  );
};

export default ChekearComponente;
