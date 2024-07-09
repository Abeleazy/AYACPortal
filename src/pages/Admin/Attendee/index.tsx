import axios from "axios";
import { useEffect, useState } from "react";
import { AttendeeProps } from "../../../components/Table/Attendee/interface";
import AttendeeTable from "../../../components/Table/Attendee";

const Attendee = () => {
  const [attendees, setAttendees] = useState<AttendeeProps[]>([]);
  const [query, setQuery] = useState<string>("");

  const filterAttendees = attendees.filter(
    (a) =>
      a.batchId.toLowerCase().includes(query.toLowerCase()) ||
      a.fullNames.toLowerCase().includes(query.toLowerCase()) ||
      a.station.toLowerCase().includes(query.toLowerCase())
  );

  const url = "https://endpoint.ayac2024.org.ng:6443/api/member/";
  const handleGetAllAttendee = async () => {
    const { data } = await axios.get(url + "get-all-batch");

    if (data.success) {
      console.log(data.data);
      setAttendees(data.data);
    }
  };

  useEffect(() => {
    handleGetAllAttendee();
  }, []);
  return (
    <div className="px-[2rem] py-3">
      <div className="py-3">
        <div className="h-[3rem] bg-white">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 h-full">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none h-full">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="h-full block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <AttendeeTable attendees={filterAttendees} />
    </div>
  );
};

export default Attendee;
