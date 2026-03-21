export type characterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: characterStatus;
  species: string;
  image: string;
}

