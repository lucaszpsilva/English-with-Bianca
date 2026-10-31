import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SitePortugues } from "./pages/SitePortugues";
import { SiteIngles } from "./pages/SiteIngles";
import { LoginAluno } from "./components/LoginAluno";
import { AreaAluno } from "./components/AreaAluno";
import { Challenges } from "./components/Challenges";
import { EnglishClub } from "./components/EnglishClub";
import { AuthProvider } from "./components/AuthContext";
import { RotaProtegida } from "./RotaProtegida";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas Publicas */}
          {/* Rota principal: Site em Português */}
          <Route path="/" element={<SitePortugues />} />

          {/* Rota do site em Inglês */}
          <Route path="/en" element={<SiteIngles />} />

          {/* Rota login aluno */}
          <Route path="/login" element={<LoginAluno />} />

          <Route path="*" element={<Navigate to="/" />} />

          {/* Rotas Privadas */}
          {/* Rota area do aluno */}
          <Route
            path="/area-do-aluno"
            element={
              <RotaProtegida>
                <AreaAluno />
              </RotaProtegida>
            }
          />
          {/* Rota Challenges */}
          <Route
            path="/challenges"
            element={
              <RotaProtegida>
                <Challenges />
              </RotaProtegida>
            }
          />
          {/* Rota English Club */}
          <Route
            path="/english-club"
            element={
              <RotaProtegida>
                <EnglishClub />
              </RotaProtegida>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
