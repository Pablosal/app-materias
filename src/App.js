import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { PaginaDeListadeMaterias } from "./Pages/PaginaDeListaDeMaterias";
import { PaginadeEjercicioIndividual } from "./Pages/PaginaDeEjercicioIndividual";
import Navbar from "./Navbar";
import { ejercicio, materias } from "./Data"; // <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
import PaginaDeSubtemas from "./Pages/PaginaDeSubtemas";
import { useSelector } from "react-redux";
function App() {
  const temas = useSelector((state) => state);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <PaginaDeListadeMaterias materias={materias} />
          </Route>
          <Route exact path="/:subtema/:submateria">
            <PaginadeEjercicioIndividual ejercicios={temas.ejercicios} />
          </Route>
          <Route exact path="/:subtema">
            <PaginaDeSubtemas
              materias={materias}
              ejercicios={temas.ejercicios}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
