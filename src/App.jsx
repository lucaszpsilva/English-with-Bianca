import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SitePortugues } from "./pages/SitePortugues";
import { SiteIngles } from "./pages/SiteIngles";
import { LoginAluno } from "./components/LoginAluno";
import { AreaAluno } from "./components/AreaAluno";
import { Challenges } from "./components/Challenges";
import { EnglishClub } from "./components/EnglishClub";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal: Site em Português */}
        <Route path="/" element={<SitePortugues />} />

        {/* Rota do site em Inglês */}
        <Route path="/en" element={<SiteIngles />} />

        {/* Rota login aluno */}
        <Route path="/login" element={<LoginAluno />} />

        {/* Rota Area do aluno */}
        <Route path="/area-do-aluno" element={<AreaAluno />} />

        {/* Rota Area do English Club */}
        <Route path="/english-club" element={<EnglishClub />} />

        {/* Rota Area Challenges */}
        <Route path="/challenges" element={<Challenges />} />

        {/* Se digitar qualquer coisa errada, volta pro início */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
