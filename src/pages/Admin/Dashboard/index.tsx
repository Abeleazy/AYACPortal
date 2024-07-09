import axios from "axios";
import { useEffect, useState } from "react";
import AttendeeTable from "../../../components/Table/Attendee";

const Dashboard = () => {
  const [attendees, setAttendees] = useState<any[]>([]);
  const [totalAttendee, setTotalAttendee] = useState<number>(0);
  const [totalPaidAttendee, setTotalPaidAttendee] = useState<number>(0);
  const [totalUnPaidAttendee, setTotalUnPaidAttendee] = useState<number>(0);

  const url = "https://endpoint.ayac2024.org.ng:6443/api/member/";
  const handleGetAllAttendee = async () => {
    const { data } = await axios.get(url + "get-all-batch");

    if (data.success) {
      setTotalAttendee(data.data.length);
      console.log(data.data);
      setAttendees(data.data);
    }
  };

  const handleGetAllPaid = async () => {
    const { data } = await axios.get(url + "get-all-paid");

    if (data.success) {
      setTotalPaidAttendee(data.data.length);
      console.log(data.data.length);
    }
  };
  const handleGetAllUnPaid = async () => {
    const { data } = await axios.get(url + "get-all-unpaid");

    if (data.success) {
      setTotalUnPaidAttendee(data.data.length);
      console.log(data.data.length);
    }
  };

  useEffect(() => {
    console.log(url);
    handleGetAllAttendee();
    handleGetAllPaid();
    handleGetAllUnPaid();
  }, []);
  return (
    <div className="w-full h-full mt-3">
      <div className="w-full h-full">
        <div className="w-full h-[10rem] flex gap-5 items-center justify-center">
          <div className=" bg-[#0C0908] w-1/6 h-full rounded-[10px] px-3 py-2">
            <h5 className="text-[#F5F5F5] text-center">Attendees</h5>
            <h1 className="text-[#FFF] font-[600] text-center text-[5rem] leading-none">
              {totalAttendee}
            </h1>
          </div>
          <div className=" bg-[#160D08] w-1/6 h-full rounded-[10px] px-3 py-2">
            <h5 className="text-[#F5F5F5] text-center">Total Paid Attendees</h5>
            <h1 className="text-[#FFF] font-[600] text-center text-[5rem] leading-none">
              {totalPaidAttendee}
            </h1>
          </div>
          <div className=" bg-[#000302] w-1/6 h-full rounded-[10px] px-3 py-2">
            <h5 className="text-[#F5F5F5] text-center">
              Total Unpaid Attendees
            </h5>
            <h1 className="text-[#FFF] font-[600] text-center text-[5rem] leading-none">
              {totalUnPaidAttendee}
            </h1>
          </div>
        </div>
        <div className="px-[10rem] mt-[2rem] pb-[5rem]">
          <AttendeeTable attendees={attendees} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
