import { IInfo } from "./info.interface";

export interface IList<T> {
  info: IInfo;
  results: Array<T>
}
