export interface IInfo {
  count: number;
  current: number;
  filter?: Record<string, any>;
  next?: number;
  pages: number;
  prev?: number;
}
