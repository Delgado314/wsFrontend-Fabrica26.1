import { Character } from "../types/character";
import Image from "next/image";
import Link from "next/link";

interface CardsProps {
    character: Character;
    isListView?: boolean;
}

export default function Cards({ character, isListView }: CardsProps){
    return (
        <Link href={`/detalhes/${character.id}`}>
            <div className="cursor-pointer hover:scale-[1.02] transition-transform">
                <div className={`group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all hover:border-green-500
                    ${isListView ? "flex flex-row items-center p-2 gap-6 h-32" : "flex flex-col p-4"}`}>
                    
                    <div className={`relative overflow-hidden rounded-xl shrink-0
                        ${isListView ? "w-24 h-24" : "w-full aspect-square mb-4"}`}>
                        <Image src={character.image} alt={character.name} fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        priority={character.id <= 4}/>
                    </div>

                    <div className={`flex flex-col ${isListView ? "flex-1" : ""}`}>
                        <h2 className={`font-bold text-white group-hover:text-green-400 transition-colors
                            ${isListView ? "text-xl" : "text-lg truncate"}`}>
                            {character.name}
                        </h2>
                        
                        <div className="flex gap-2 mt-2">
                            <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${
                                character.status === 'Alive' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                            }`}>
                                {character.status}
                            </span>
                            <span className="text-[10px] uppercase font-bold px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">
                                {character.species}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>        
    );
}
