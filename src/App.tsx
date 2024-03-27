import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { PainelDeControle } from "./pages/ControlPanel";
import { Historico } from "./pages/History";
import { Configuracoes } from "./pages/Settings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/painel-controle" element={<PainelDeControle />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </>
  );
}

export default App;
