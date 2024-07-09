import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-[5rem] bg-[#444] flex items-center justify-between px-[2rem]">
        <div>
          <h2 className="text-[#F5F5F5] text-[1.3rem] font-[700] uppercase">
            Dashboard
          </h2>
        </div>
        <div>
          <h2 className="text-[#FFF]">Logout</h2>
        </div>
      </div>
      <div className="flex w-full h-[calc(100vh_-_5rem)]">
        <div className="bg-[#444] w-2/12 h-full">
          <div className="w-full h-full">
            <ul className="flex flex-col gap-5 w-full h-full">
              <li className="px-4 py-3 flex hover:bg-[#FFFFFF30] w-full">
                <a
                  href=""
                  className="text-[1.2rem] font-[400] text-[#9C9C9C] hover:font-[500] w-full cursor-pointer"
                >
                  Dashboard
                </a>
              </li>
              <li className="px-4 py-3 flex hover:bg-[#FFFFFF30] w-full">
                <a
                  href=""
                  className="text-[1.2rem] font-[400] text-[#9C9C9C] hover:font-[500] w-full cursor-pointer"
                >
                  Attendees
                </a>
              </li>
              <li className="px-4 py-3 flex hover:bg-[#FFFFFF30] w-full">
                <a
                  href=""
                  className="text-[1.2rem] font-[400] text-[#9C9C9C] hover:font-[500] w-full cursor-pointer"
                >
                  Finance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-10/12 h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
