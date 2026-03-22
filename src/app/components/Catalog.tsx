'use client';

import { RickAndMorty } from "../services/RickAndMorty";
import { Character } from "../types/character";
import { ArrowLeft, ArrowRight, LayoutGrid, List } from "lucide-react";
import Cards from "./Cards";
import Search from "./Search";
import { CircularProgress } from "@mui/material";
import { useState } from "react";


export default function Catalog() {

    const { characters, currentPage, hasNextPage, hasPrevPage, goToPage, characterSearch, searchCharacter, loading } = RickAndMorty();

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <section className="flex flex-col items-center gap-4 w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:mt-7 w-full md:max-w-md">
                    <Search onSearch={characterSearch} initialValue={searchCharacter} />
                </div>
                <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 self-end md:self-auto">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >    
                    <LayoutGrid /></button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >    
                    <List /></button>
                    
                </div>
            </div>
            {loading? (
                <div className="flex justify-center items-center min-h-100">
                    <CircularProgress color="inherit" className="text-green-500" />
                </div>
            ) : characters.length > 0? (
                <div className={`w-full ${viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7" 
                        : "flex flex-col gap-4 max-w-4xl mx-auto"
                }`}>
                    {characters.map((character) => (
                        <Cards key={character.id} character={character} isListView={viewMode === 'list'} />
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