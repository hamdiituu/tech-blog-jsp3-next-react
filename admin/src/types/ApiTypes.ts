export interface TableResponse<T> {
  items: T[];
  limit: number;
  currentPage: number;
  totalPage: number;
  totalRecord: number;
  query?: string;
  errorMessage?: string;
}

export interface TableRequest {
  page: number;
  limit: number;
  query: string | null;
}
