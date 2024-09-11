export interface PaginationProps {
  pageCount: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}
