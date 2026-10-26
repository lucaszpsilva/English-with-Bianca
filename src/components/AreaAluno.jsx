import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export function AreaAluno() {
  const [aulas, setAulas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Query do Sanity: Busca todos os documentos do tipo "aula"
    // e "resolve" os links do PDF e da Imagem
    const query = `*[_type == "aula"] | order(_createdAt desc) {
      _id,
      titulo,
      "slug": slug.current,
      "pdfUrl": pdf.asset->url,
      "capaUrl": capa.asset->url
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
    return <div className="p-10 text-center">Carregando aulas...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Área do Aluno</h1>
        <p className="text-gray-600 mt-2">
          Acesse seus materiais e continue evoluindo.
        </p>
      </div>

      {aulas.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhuma aula publicada ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aulas.map((aula) => (
            <div
              key={aula._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Imagem de Capa */}
              {aula.capaUrl ? (
                <img
                  src={aula.capaUrl}
                  alt={aula.titulo}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Sem capa
                </div>
              )}

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {aula.titulo}
                </h2>

                <div className="mt-auto pt-4">
                  {/* Botão do PDF */}
                  {aula.pdfUrl ? (
                    <a
                      href={aula.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                    >
                      📄 Acessar Material (PDF)
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400 block text-center">
                      Sem material em PDF
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
