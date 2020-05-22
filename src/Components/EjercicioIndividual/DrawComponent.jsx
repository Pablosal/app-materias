import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
const DrawComponent = (props) => {
  const [mostrarCanvas, setMostrarCanvas] = useState(false);
  const referi = useRef();
  const [brhuColor, setBrhuColor] = useState("");
  return (
    <>
      <i
        className="btn fas fa-pencil-alt fa-2x"
        onClick={() => setMostrarCanvas(!mostrarCanvas)}
      ></i>
      <br />
      {mostrarCanvas && (
        <div className="container">
          {props.colors.map((c) => (
            <div
              onClick={() => setBrhuColor(c)}
              className="square btn m-1"
              style={{ backgroundColor: `${c}` }}
            ></div>
          ))}
          <div
            className="btn btn-success m-1"
            onClick={() => referi.current.undo()}
          >
            Deshacer
          </div>
          <div
            className="btn btn-danger"
            onClick={() => referi.current.clear()}
          >
            Limpiar Lienzo
          </div>
          <CanvasDraw
            ref={referi}
            style={{ border: "3px solid" }}
            brushColor={brhuColor}
            brushRadius="2"
            lazyRadius="0"
            canvasWidth="750px"
          ></CanvasDraw>
        </div>
      )}
    </>
  );
};

export default DrawComponent;
