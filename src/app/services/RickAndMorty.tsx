import { Character } from "../types/character";
import { useState, useEffect, use } from "react";
import { useSearchParams, useRouter } from "next/navigation";


const API_BASE_URL = "https://rickandmortyapi.com/api";

export function RickAndMorty(){

    const router = useRouter();
    const searchParams = useSearchParams();

    const [characters, setCharacters] = useState<Character[]>([]);
    const currentPage = Number(searchParams.get("page")) || 1;
    const searchCharacter = searchParams.get("name") || "";
    const [info, setInfo] = useState({ next: null, prev: null, count: 0 });
    const [loading, setLoading] = useState(true);

    async function fetchCharacters(page: number, name: string){
        setLoading(true);
        try{
            const response = await fetch(`${API_BASE_URL}/character?page=${page}&name=${name}`);
            const data = await response.json();     
            if (data.error) {
                setCharacters([]);
                setInfo({ next: null, prev: null, count: 0 });
            }else{
                setCharacters(data.results);
                setInfo(data.info);
            }
        }catch(error){
            console.error("Erro na busca de personagens, aguarde: ", error)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCharacters(currentPage, searchCharacter);
    }, [currentPage, searchCharacter]);

    const characterSearch = (name: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if(name){
            params.set("name", name);
        }else{
            params.delete("name");
        }

        params.set("page", "1");
        router.push(`?${params.toString()}`);
    }

    const goToPage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return {
        characters, currentPage, hasNextPage: !!info.next, hasPrevPage: !!info.prev, goToPage, searchCharacter, characterSearch, loading
    };

    
    
}


export async function getCharacterById(id: string): Promise<Character | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/character/${id}`); 
    return (await response.json()) as Character;
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    return null;
  }
}