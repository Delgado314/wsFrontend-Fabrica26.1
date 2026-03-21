'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Character } from "../types/character";


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
        <div>
            <h1> oooohhh weeeeeeee</h1>
        
            {characters.map((character) => (
                <div key={character.id}>
                    <Image src={character.image} alt={character.name} width={200} height={200} />
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    );
    
}