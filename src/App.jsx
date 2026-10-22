import { Apresentacao } from "./components/Apresentacao";
import { Metodo } from "./components/Metodo";
import { Header } from "./components/Header";
import { Curso } from "./components/Curso";
import { Sobre } from "./components/Sobre";
import { Feedback } from "./components/Feedback";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { AreaAluno } from "./components/AreaAluno";

export const App = () => {
  const [areaAluno, setAreaAluno] = useState(false);

  const sairDaAreaAluno = () => {
    setAreaAluno(false);
  };

  return (
    <>
      <Header
        naAreaAluno={areaAluno}
        onAbrirArea={() => setAreaAluno(true)}
        onVoltarSite={() => setAreaAluno(false)}
      />
      <main>
        {areaAluno ? (
          <AreaAluno onSair={sairDaAreaAluno} />
        ) : (
          <>
            <Apresentacao />
            <Metodo />
            <Curso />
            <Sobre />
            <Feedback />
            <Card />
            <Footer />
          </>
        )}
      </main>
    </>
  );
};
