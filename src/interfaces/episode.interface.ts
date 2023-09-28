import { ICharacter } from "./character.interface";

export interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<
    Pick<ICharacter, "id" | "name" | "species" | "gender" | "status">
  >;
  created: string;
}
