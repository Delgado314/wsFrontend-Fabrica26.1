import { Character } from "../types/character";

type CardsProps = {
    character: Character;
}

export default function Cards({ character }: CardsProps){
    return (
        <div className="bg-zinc-900 rounded-xl p-4 text-white shadow-md hover:scale-102 transition">
            <img src={character.image} alt={character.name} className="w-full rounded-lg mb-3" />
            <h2 className="text-lg font-bold">{character.name}</h2>
            <p className="text-sm text-gray-500">
                {character.status} <br></br>
                {character.species}
            </p>
        </div>
    );
}
