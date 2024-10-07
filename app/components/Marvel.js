'use client'

import { useState } from "react";
import axios from "axios";
import config from "../../config.json";
import { MD5 } from "crypto-js";
import HeroCard from "../components/HeroCard";

const PUBLIC_KEY = config.public_key;
const PRIVATE_KEY = config.private_key;

export default function Marvel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroes, setHeroes] = useState([]);

  const handleSearch = async () => {
    const timestamp = Date.now();
    const hash = MD5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`).toString();
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&nameStartsWith=${searchTerm}`;

    try {
      const response = await axios.get(url);
      setHeroes(response.data.data.results);
    } catch (error) {
      alert("Personagem não encontrado");
    }
  };

  return (
    <div className="flex flex-col items-start justify-start p-4 bg-white min-h-screen w-screen">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-black"
          placeholder="Insira o nome do personagem"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Procurar
        </button>
      </div>
      <div className="w-full">
        {heroes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}