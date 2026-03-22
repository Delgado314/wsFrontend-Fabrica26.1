'use client';

import { RickAndMorty } from "../services/RickAndMorty";
import { Character } from "../types/character";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Cards from "./Cards";
import Search from "./Search";
import { CircularProgress } from "@mui/material";


export default function Catalog() {

    const { characters, currentPage, hasNextPage, hasPrevPage, goToPage, characterSearch, searchCharacter, loading } = RickAndMorty();

    return (
        <section className="flex flex-col items-center gap-7">
            <Search onSearch={characterSearch} initialValue={searchCharacter} />
            {loading? (
                <div className="flex justify-center items-center min-h-100">
                    <CircularProgress color="inherit" className="text-green-500" />
                </div>
            ) : characters.length > 0? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {characters.map((character) => (
                        <Cards key={character.id} character={character} />
                    ))}
                </div>
            ):(
                <div className="text-center py-20">
                    <p className="text-zinc-500 text-xl font-medium">Acho que você se enganou no nome...</p>
                </div> 
            )}
            {characters.length > 0 && (
                <div className="flex justify-center items-center gap-7 mt-4 pb-10">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={!hasPrevPage}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 text-white hover:bg-green-600 disabled:opacity-20 disabled:hover:bg-zinc-800 cursor-pointer"
                    ><ArrowLeft /></button>

                    <div className="flex flex-col items-center">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Página</span>
                        <span className="text-white text-xl font-mono font-bold">{currentPage}</span>
                    </div>

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={!hasNextPage}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 text-white hover:bg-green-600 disabled:opacity-20 disabled:hover:bg-zinc-800 cursor-pointer"
                    ><ArrowRight /></button>
                </div>
            )}
        </section>
    );
}