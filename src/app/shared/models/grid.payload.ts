export interface GridPayload {
  offset: number;
  sortProp: string;
  sortDir: string;
}

export interface LoadGridSuccessPayload<T> {
  count: number;
  data: T[];
}
