export class PageResponse<T> {
  content: T[] = [];
  page?: {
    number?: number;
    size?: number;
    totalElements: number;
    totalPages: number;
  }
}
