import { PaginationProps } from "./interface";

const Pagination = ({
  setItemsPerPage,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  totalItems,
}: PaginationProps) => {
  const pages = Array.from({ length: totalItems }, (_, i) => i + 1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="mt-[1rem] flex justify-between">
      <div>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Item showing per page{" "}
        </span>
        <select
          onChange={(e) => setItemsPerPage(JSON.parse(e.target.value))}
          name=""
          value={itemsPerPage}
          id=""
          className=""
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {itemsPerPage * (currentPage - 1) + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 ">
            {itemsPerPage * currentPage > totalItems
              ? totalItems
              : itemsPerPage * currentPage}
          </span>{" "}
          of <span className="font-semibold text-gray-900 ">{totalItems}</span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={itemsPerPage * currentPage > totalItems}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
