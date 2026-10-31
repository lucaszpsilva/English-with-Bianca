import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function LoginAluno() {
  const [erro, setErro] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const sucesso = login(senha); // Chama a função do contexto

    if (sucesso) {
      navigate("/area-do-aluno"); // Redireciona SOMENTE se acertou a senha
    } else {
      setErro("Senha incorreta, digite novamente.");
      setSenha("");
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
