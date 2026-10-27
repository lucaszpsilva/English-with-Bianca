import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";

// Ícones
import { FaYoutube, FaFilePdf } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Ícones das setas

export function EnglishClub() {
  const [aulas, setAulas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Referência para o container de scroll
  const scrollRef = useRef(null);

  // Monitora o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const query = `*[_type == "aula" && categoria == "english-club"] | order(_createdAt desc) {
      _id,
      titulo,
      descricao,
      "capaUrl": capa.asset->url,
      "links": links[] {
        titulo,
        tipo,
        url,
        "urlArquivo": arquivo.asset->url
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setAulas(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar aulas:", error);
        setCarregando(false);
      });
  }, []);

  // Função para rolar o container ao clicar nas setas
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Rola 300px para o lado
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5e9db] text-gray-800">
        Carregando aulas...
      </div>
    );
  }

  const CardAula = ({ aula }) => (
    <div className="h-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {aula.capaUrl ? (
        <img
          src={aula.capaUrl}
          alt={aula.titulo}
          className="w-full h-48 sm:h-56 object-cover"
        />
      ) : (
        <div className="w-full h-48 sm:h-56 bg-gray-200 flex items-center justify-center text-gray-400">
          Sem capa
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {aula.titulo}
        </h2>
        {aula.descricao && (
          <p className="text-gray-600 text-sm mb-5 line-clamp-3">
            {aula.descricao}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3">
          {aula.links &&
            aula.links.map((link, index) => {
              const linkFinal =
                link.tipo === "arquivo" ? link.urlArquivo : link.url;
              const isYoutube =
                linkFinal?.includes("youtube.com") ||
                linkFinal?.includes("youtu.be");
              const isPdf =
                link.tipo === "arquivo" ||
                linkFinal?.toLowerCase().endsWith(".pdf");

              return (
                <a
                  key={index}
                  href={linkFinal || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 overflow-hidden"
                >
                  {isYoutube && <FaYoutube className="text-2xl shrink-0" />}
                  {isPdf && !isYoutube && (
                    <FaFilePdf className="text-2xl shrink-0" />
                  )}
                  <span className="truncate text-sm sm:text-base">
                    {link.titulo}
                  </span>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5e9db] p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <Link
              to="/area-do-aluno"
              className="inline-block mb-2 text-sky-700 hover:text-sky-900 font-bold transition-colors"
            >
              ← Voltar para a Área do Aluno
            </Link>
            <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-gray-800">
              English Club
            </h1>
          </div>
        </div>

        {aulas.length === 0 ? (
          <p className="text-center text-gray-600 bg-white p-10 rounded-xl shadow-sm">
            Nenhuma aula publicada no English Club ainda.
          </p>
        ) : (
          <div className="w-full relative">
            {isMobile ? (
              // MODO MOBILE
              <div className="flex flex-col gap-3">
                {aulas.map((aula) => (
                  <CardAula key={aula._id} aula={aula} />
                ))}
              </div>
            ) : (
              // MODO DESKTOP: Scroll horizontal nativo
              <div className="relative group">
                {/* Setas de navegação no Desktop */}
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <FiChevronLeft size={24} className="text-gray-700" />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <FiChevronRight size={24} className="text-gray-700" />
                </button>

                {/* Container de Scroll */}
                <div
                  ref={scrollRef}
                  className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Esconde a scrollbar no Firefox/IE
                >
                  {/* Esconde a scrollbar no Chrome/Safari via Tailwind ou CSS global */}
                  <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                  <div className="no-scrollbar flex gap-5 w-full">
                    {aulas.map((aula) => (
                      <div
                        key={aula._id}
                        // Define a largura de cada card. 33% no desktop grande.
                        className="snap-start shrink-0 w-[300px] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                      >
                        <CardAula aula={aula} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
