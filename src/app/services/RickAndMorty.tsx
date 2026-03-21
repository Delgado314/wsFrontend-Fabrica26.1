'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Character } from "../types/character";
import Catalog from "../components/Catalog";


const API_BASE_URL = "https://rickandmortyapi.com/api";

export default function RickAndMorty() {

    const [characters, setCharacters] = useState<Character[]>([]);

    async function fetchCharacters() {
        const response = await fetch(`${API_BASE_URL}/character`);
        const data = await response.json();     
        setCharacters(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <main className="p-8 bg-zinc-950 min-h-screen">
            <h1 className="text-3xl text-white mb-6">Mr. PoopyButtHole Archive</h1>
            <Catalog characters={characters} />
        </main>
    );
    
}