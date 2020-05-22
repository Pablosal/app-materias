import React, { useState } from "react";
const PistasComponente = () => {
  const [mostrarTips, setMostrarTips] = useState(false);
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
          <div className="square m-2"></div>
          <div className="square m-2"></div>
          <div className="square m-2"></div>
          <div className="square m-2"></div>
        </div>
      )}
    </div>
  );
};

export default PistasComponente;
