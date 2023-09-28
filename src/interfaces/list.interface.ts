import { IInfo } from "./info.interface";

export interface IList {
  info: IInfo;
  results: Array<any>;
  entity?: string;
  columns?: Array<{
    key: string;
    searchable: boolean;
    label: string;
    entity: string;
  }>;
}
