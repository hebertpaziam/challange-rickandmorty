import { IInfo } from "./info.interface";

export interface IList {
  info: IInfo;
  results: Array<any>;
  columns?: Array<{ key: string; label: string }>;
}
