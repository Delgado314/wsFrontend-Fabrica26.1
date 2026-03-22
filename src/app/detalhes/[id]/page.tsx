'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MapPin, Globe, Film, UserCircle } from "lucide-react";
import { getCharacterById } from "../../services/RickAndMorty";
import { Character } from "../../types/character";

export default function CharacterDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        async function loadCharacter() {
            setLoading(true);
            const data = await getCharacterById(id as string);
            setCharacter(data);
            setLoading(false);
        }

        loadCharacter();
    }, [id]);

    if (loading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center bg-black">
                <div className="text-green-500 animate-bounce font-mono">Carregando dados</div>
            </div>
        );
    }

    if (!character) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-black text-white">
                <h1 className="text-2xl font-bold">Personagem não encontrado!</h1>
                <button onClick={() => router.back()} className="text-green-500 underline">Voltar</button>
            </div>
        );
    }

    return (
        <div className="bg-black px-4 py-8 text-white sm:px-6 md:px-12 md:py-12 lg:px-20 lg:py-16">
            {/* Cabeçalho de Navegação */}
            <div className="max-w-6xl mx-auto mb-12">
                <button 
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Voltar ao Catálogo</span>
                </button>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-500/5">
                        <Image src={character.image} alt={character.name} fill priority unoptimized className="object-cover"/>
                    </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="mb-8">
                        <span className="text-green-500 font-mono text-sm tracking-widest uppercase">Subjeto #{character.id}</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-2 tracking-tight">{character.name}</h1>
                        
                        <div className="flex flex-wrap gap-3 mt-6">
                            <Badge color={character.status === 'Alive' ? 'green' : 'red'}>
                                {character.status}
                            </Badge>
                            <Badge color="zinc">{character.species}</Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DetailCard icon={<UserCircle className="text-zinc-500" />} label="Gênero" value={character.gender} />
                        <DetailCard icon={<Globe className="text-zinc-500" />} label="Origem" value={character.origin.name} />
                        <DetailCard icon={<MapPin className="text-zinc-500" />} label="Localização Atual" value={character.location.name} />
                        <DetailCard icon={<Film className="text-zinc-500" />} label="Aparições" value={`${character.episode.length} episódios`} />
                    </div>
                </div>
            </div>
        </div>
    );
}


function Badge({ children, color }: { children: React.ReactNode, color: 'green' | 'red' | 'zinc' }) {
    const colors = {
        green: 'bg-green-500/10 text-green-500 border-green-500/20',
        red: 'bg-red-500/10 text-red-500 border-red-500/20',
        zinc: 'bg-zinc-800 text-zinc-400 border-zinc-700'
    };

    return (
        <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase border ${colors[color]}`}>
            {children}
        </span>
    );
}

function DetailCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-start gap-4">
            <div className="mt-1">{icon}</div>
            <div>
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">{label}</p>
                <p className="text-lg text-zinc-100 font-medium leading-tight">{value}</p>
            </div>
        </div>
    );
}