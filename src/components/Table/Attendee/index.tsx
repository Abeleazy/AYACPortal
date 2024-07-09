import { useState } from "react";
import { AttendeeTableProps } from "./interface";
import Pagination from "../Pagination";

const AttendeeTable = ({ attendees }: AttendeeTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = attendees.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Batch Id
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Station
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((a: any) => (
              <tr
                key={a.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {a.batchId}
                </th>
                <td className="px-6 py-4 capitalize">{a.fullNames}</td>
                <td className="px-6 py-4 capitalize">{a.emailAddress}</td>
                <td className="px-6 py-4 capitalize">{a.phoneNumber}</td>
                <td className="px-6 py-4 capitalize">{a.station}</td>
                <td className="px-6 py-4">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={attendees.length}
      />
    </div>
  );
};

export default AttendeeTable;
