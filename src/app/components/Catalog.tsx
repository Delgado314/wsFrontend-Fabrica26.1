import { Character } from "../types/character";
import Cards from "./Cards";

type CatalogProps = {
    characters: Character[];
};

export default function Catalog({ characters }: CatalogProps) {
    return (
        <div className="grid grid-cols-4 gap-6">
            {characters.map((character) => (
                <Cards key={character.id} character={character} />
            ))}
        </div>
    );
}