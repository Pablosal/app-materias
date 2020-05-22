import React from "react";
const DescripcionComponente = ({ ejercicios }) => {
  return (
    <div className="descripcion m-3">
      <p style={{ fontSize: "2rem" }}>{ejercicios.descripcion}</p>
    </div>
  );
};

export default DescripcionComponente;
