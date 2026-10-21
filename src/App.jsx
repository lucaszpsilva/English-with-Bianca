import { Apresentacao } from "./components/Apresentacao";
import { Metodo } from "./components/Metodo";
import { Header } from "./components/Header";
import { Curso } from "./components/Curso";
import { Sobre } from "./components/Sobre";
import { Feedback } from "./components/Feedback";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Apresentacao />
        <Metodo />
        <Curso />
        <Sobre />
        <Feedback />
        <Card />
        <Footer />
      </main>
    </>
  );
};
