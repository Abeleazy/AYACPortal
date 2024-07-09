import React, { SetStateAction } from "react";

export interface PaginationProps {
  setItemsPerPage: React.Dispatch<SetStateAction<number>>;
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}
