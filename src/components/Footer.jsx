import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { scrollToSection } from "../utils/scrollToSection";

export const Footer = () => {
  return (
    <footer className="bg-[#12352b] pb-4">
      <div className="flex flex-col md:flex-row items-center justify-between text-[#fffcf6] pt-5 mx-4 md:mx-20 border-b border-b-gray-400 pb-8 gap-4 text-center md:text-left">
        <div
          onClick={(e) => scrollToSection(e, "inicio")}
          className="flex items-center cursor-pointer"
        >
          <span className="w-10 h-10 grid place-items-center italic border border-solid border-current rounded-full font-serif text-sm mr-2">
            BN
          </span>
          <span className="font-semibold">Bianca Nishikawa</span>
        </div>

        <div className="flex">
          <span className="text-[#ffffffb8]">
            Inglês com propósito, no seu ritmo.
          </span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/reiko-nishikawa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffffffb8]"
          >
            <FaLinkedin className="text-blue-500 text-xl" />
          </a>
          <a
            href="https://wa.me/5511920900339"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffffffb8]"
          >
            <FaWhatsapp className="text-emerald-400 text-xl" />
          </a>
          <a
            href="mailto:biancanishikawa8149@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffffffb8]"
          >
            <SiGmail className="text-red-500 text-xl" />
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-4 text-gray-300 text-xs md:text-sm text-center px-4">
        <strong>© 2026 Bianca Nishikawa. Todos os direitos reservados.</strong>
      </div>
    </footer>
  );
};
