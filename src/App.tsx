import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { PainelDeControle } from "./pages/ControlPanel";
import { Configuracoes } from "./pages/Settings";
import { Home } from "./pages/Home";
import { PageNotFound } from "./components/page404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel-controle" element={<PainelDeControle />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
