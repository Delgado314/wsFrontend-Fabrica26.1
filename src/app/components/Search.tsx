'use client';

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

interface searchProps {
    onSearch: (value: string) => void;
    initialValue: string;
}

export default function Search({ onSearch, initialValue }: searchProps){

    const [ charName, setCharName ] = useState(initialValue);
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(charName);
    }

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-md mb-7 group">
            <input type="text" value={charName}
                onChange={(e) => setCharName(e.target.value)}
                placeholder="Digite o nome do personagem"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />

            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 group-focus-within:text-green-500" />

            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-green-600 cursor-pointer">
                Buscar
            </button>
            
        </form>
    );
}