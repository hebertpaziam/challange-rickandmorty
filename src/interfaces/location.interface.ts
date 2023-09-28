import { ICharacter } from "./character.interface";

export interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Array<
    Pick<ICharacter, "id" | "name" | "species" | "gender" | "status">
  >;
  created: string;
}
