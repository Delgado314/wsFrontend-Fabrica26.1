import { Character } from "../types/character";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";


const API_BASE_URL = "https://rickandmortyapi.com/api";

export function RickAndMorty() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [characters, setCharacters] = useState<Character[]>([]);
    const currentPage = Number(searchParams.get("page")) || 1;
    const [info, setInfo] = useState({ next: null, prev: null});
    //const [loading, setLoading] = useState(true);

    async function fetchCharacters(page: number) {
        const response = await fetch(`${API_BASE_URL}/character?page=${page}`);
        const data = await response.json();     
        setCharacters(data.results);
        setInfo(data.info);
    }

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    const goToPage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return {
        characters, currentPage, hasNextPage: !!info.next, hasPrevPage: !!info.prev, goToPage
    };

    
    
}