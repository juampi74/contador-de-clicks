import "./App.css";
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const aumentarContador = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <nav className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </nav>
      <main className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={aumentarContador}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </main>
    </div>
  );
}

export default App;
