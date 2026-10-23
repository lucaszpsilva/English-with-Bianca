import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SitePortugues } from "./pages/SitePortugues";
import { SiteIngles } from "./pages/SiteIngles";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal: Site em Português */}
        <Route path="/" element={<SitePortugues />} />

        {/* Rota do site em Inglês */}
        <Route path="/en" element={<SiteIngles />} />

        {/* Se digitar qualquer coisa errada, volta pro início */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
