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
      <div>
        <div>
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Registration</a>
            </li>
            <li>
              <a href="">User</a>
            </li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
