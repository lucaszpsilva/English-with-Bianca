import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function LoginAluno() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const SENHA_CORRETA = "student123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (senha === SENHA_CORRETA) {
      // Se acertar a senha, vai para a área do aluno
      navigate("/area-do-aluno");
    } else {
      // Se errar, mostra a mensagem de erro
      setErro("Senha incorreta. Tente novamente.");
      setSenha(""); // Limpa o campo
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Área do Aluno</h2>
          <p className="text-gray-500 mt-2">Digite sua senha de acesso</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              placeholder="Digite a senha..."
              required
            />
            {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Entrar →
          </button>
          <Link
            to="/"
            className="w-full flex justify-center items-center bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            ← Voltar
          </Link>
        </form>
      </div>
    </div>
  );
}
