import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";

// Ícones
import { FaYoutube, FaFilePdf } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function EnglishClub() {
  const [aulas, setAulas] = useState([]);
  const [carregando, setCarregando] = useState(true);

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

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5e9db] text-gray-800">
        Carregando aulas...
      </div>
    );
  }

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
          <div className="bg-transparent">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.5 }, // Mostra um pedacinho do próximo no celular
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {aulas.map((aula) => (
                <SwiperSlide key={aula._id} className="h-auto">
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

                      {/* Área dos botões */}
                      <div className="mt-auto flex flex-col gap-3">
                        {aula.links &&
                          aula.links.map((link, index) => {
                            const linkFinal =
                              link.tipo === "arquivo"
                                ? link.urlArquivo
                                : link.url;
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
                                // Usando gap-3 e flex para alinhar ícone e texto perfeitamente no centro
                                className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 overflow-hidden"
                              >
                                {/* shrink-0 impede que o ícone amasse quando o texto for grande */}
                                {isYoutube && (
                                  <FaYoutube className="text-2xl shrink-0" />
                                )}
                                {isPdf && !isYoutube && (
                                  <FaFilePdf className="text-2xl shrink-0" />
                                )}

                                {/* truncate corta o texto com '...' se for muito grande */}
                                <span className="truncate text-sm sm:text-base">
                                  {link.titulo}
                                </span>
                              </a>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
