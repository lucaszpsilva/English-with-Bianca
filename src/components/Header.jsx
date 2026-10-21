import { Comecar } from "./Comecar";
import { scrollToSection } from "../utils/scrollToSection";

export const Header = () => {
  return (
    <header className="py-4 border-b border-b-gray-400">
      <nav className="flex items-center justify-between px-4 md:px-10">
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => scrollToSection(e, "inicio")}
        >
          <span className="w-10 h-10 grid place-items-center italic border border-solid border-current rounded-full font-serif text-sm mr-2">
            BN
          </span>
          <span className="font-semibold hidden sm:inline">
            Bianca Nishikawa
          </span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm">
          <a href="#metodo" className="hover:text-gray-500 transition">
            O método
          </a>
          <a href="#curso" className="hover:text-gray-500 transition">
            Conteúdo
          </a>
          <a href="#sobre" className="hover:text-gray-500 transition">
            Sobre mim
          </a>
        </div>

        <Comecar
          className="bg-gray-600 hover:bg-gray-700 text-xs md:text-sm px-4 py-3 text-white"
          text="Quero começar"
        />
      </nav>
    </header>
  );
};
