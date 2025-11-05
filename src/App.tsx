import React, { useState } from "react";
import { MobileFrame } from "./componentes/Mobile";
import Onboarding from "./pantallas/Onboarding";
import Derivacion from "./pantallas/Derivacion";
import Home from "./pantallas/Home";
import MicroRutina from "./pantallas/MicroRutina";
import Ajustes from "./pantallas/Ajustes";
import Elite from "./pantallas/Elite";

type Screen =
  | "onboarding"
  | "derivacion"
  | "home"
  | "microrutina"
  | "ajustes"
  | "elite";

export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");

  return (
    <MobileFrame>
      {screen === "onboarding" && (
        <Onboarding onNext={() => setScreen("home")} />
      )}
      {screen === "derivacion" && (
        <Derivacion onBack={() => setScreen("home")} />
      )}
      {screen === "home" && (
        <Home
          onGoToDerivacion={() => setScreen("derivacion")}
          onGoToMicrorutina={() => setScreen("microrutina")}
          onGoToAjustes={() => setScreen("ajustes")}
          onGoToElite={() => setScreen("elite")}
          onRestart={() => setScreen("onboarding")}
        />
      )}
      {screen === "microrutina" && (
        <MicroRutina onBack={() => setScreen("home")} />
      )}
      {screen === "ajustes" && <Ajustes onBack={() => setScreen("home")} />}
      {screen === "elite" && <Elite onBack={() => setScreen("home")} />}
    </MobileFrame>
  );
}
