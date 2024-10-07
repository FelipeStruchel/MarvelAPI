'use client'

import { useState } from "react";
import config from "../config";
import { useAuth } from "../app/components/contexts/AuthContext";
import { useRouter } from "next/navigation";

const USERNAME = config.username;
const PASSWORD = config.password;

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const router = useRouter();

  const validateLogin = () => {
    if (username === USERNAME && password === PASSWORD) {
      login();
      router.push("/pesquisar");
    } else {
      setError("Usuario ou senha invalidos, tenta a sorte!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="bg-white p-8 shadow-md w-full max-w-sm rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={validateLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}