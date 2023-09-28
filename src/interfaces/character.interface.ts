import { CharacterGenderEnum } from "@/enums/character-gender.enum";
import { CharacterStatusEnum } from "@/enums/character-status.enum";

import { ILocation } from "./location.interface";
import { IEpisode } from "./episode.interface";

export interface ICharacter {
  id: string;
  name: string;
  status: CharacterStatusEnum;
  species: string;
  type:string;
  gender: CharacterGenderEnum;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: Array<IEpisode>;
  created: string;
}
