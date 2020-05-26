import React, { useState } from "react";
const PistasComponente = (props) => {
  const [mostrarTips, setMostrarTips] = useState(false);
  console.log(props.pistosas);
  return (
    <div className="tips d-flex flex-column justify-center align-center">
      <div className="pistas">
        <h6>Pistas</h6>
        <label className="switch">
          <input onClick={() => setMostrarTips(!mostrarTips)} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      {mostrarTips && (
        <div className="d-flex justfy-around align-center">
          {props.pistas.map((p) => (
            <div
              onMouseEnter={console.log("siii")}
              data-tooltip
              className="square m-2 "
              key={p[0].toUpperCase()}
              className="tooltip"
            >
              <p className="">{p[0].toUpperCase()}</p>
              <p className="tooltiptext ">
                {props.pistosas.find((l) => l.name === p).descripcion}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PistasComponente;
