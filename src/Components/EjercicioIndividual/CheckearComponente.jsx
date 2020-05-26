import React, { useState } from "react";
const ChekearComponente = (props) => {
  const [seleccionada, setSeleccionada] = useState();
  const [resuelto, setResuelto] = useState(false);

  const handleCheck = (e) => {
    setSeleccionada(e.target.value);
    console.log(e.target.value);
  };

  const compare = () => {
    props.ejercicios.correcto === seleccionada
      ? setResuelto(true)
      : setResuelto(false);
  };
  return (
    <div className="container d-flex flex-column">
      {resuelto && alert("Resuelto")}
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
