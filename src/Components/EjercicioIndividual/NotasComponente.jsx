import React, { useState } from "react";
const NotasComponente = () => {
  return (
    <div className="notas d-flex flex-column m-2">
      <label htmlFor="notas">Notas</label>
      <textarea name="" id="notas" cols="30" rows="10"></textarea>
      <button className="btn btn-success">
        [Video] Como resolver los problemas
      </button>
    </div>
  );
};

export default NotasComponente;
