import { useEffect, useState } from "react";
import RegistrationModal from "../../components/Modals/Registration-Modal";
import axios from "axios";
import SuccessRegistrationModal from "../../components/Modals/Success-Registration-Modal";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSuccess, setshowSuccess] = useState<boolean>(false);
  const [formList, setFormList] = useState<any[]>([]);
  const [batchNumber, setBatchNuber] = useState<string>("");
  const [editId, setEditId] = useState<any>(null);
  const [editData, setEditData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddUser = () => {
    setShowModal(true);
  };

  const handleSubmitForm = async () => {
    setIsLoading(false);

    const { data } = await axios.post(
      "https://endpoint.ayac2024.org.ng:6443/api/member/create-members",
      formList
    );

    if (data.success) {
      setBatchNuber(data.data.bactch);
      setIsLoading(false);
      setFormList([]);
      setshowSuccess(true);
    } else {
      setIsLoading(false);
    }
  };

  const handleEditUser = (index: any) => {
    const dataToEdit = formList[index];
    setEditId(index);
    setEditData(dataToEdit);
    setShowModal(true);
  };
  const handleRemoveUser = (index: any) => {};

  useEffect(() => {}, [formList]);

  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex justify-center">
        <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 w-[80%] h-full flex justify-center">
          <div className="w-full">
            <div className="2xl:h-[10rem] xl:h-[10rem] lg:h-[8rem] md:h-[8rem] w-full flex flex-col items-center justify-center bg-[#F5F5F5] mb-2">
              <h2 className="uppercase text-[3rem] text-center font-[700]">
                AYAC 2024 Registration
              </h2>
              <div className="flex xl:flex-row md:flex-row flex-col gap-3">
                <button className="px-6 py-3 bg-[#141821] text-[#FFF] rounded-[10px] font-[400]">
                  Download Template
                </button>
                <button className="px-6 py-3 bg-[#060507] text-[#FFF] rounded-[10px] font-[400]">
                  Upload Templete
                </button>
                <a
                  href=""
                  className="px-6 py-3 bg-[#0C0D0A] text-[#FFF] rounded-[10px] font-[400]"
                >
                  Payment Confirmation
                </a>
              </div>
            </div>

            <div className="flex justify-end px-8">
              <button
                onClick={handleAddUser}
                className="px-6 py-2 bg-[#F5F5F5] rounded-[10px] font-[400]"
              >
                Add User
              </button>
            </div>
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="pb-4 bg-white">
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  {/* <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
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
                      className="block h-[4rem] pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search for items"
                    />
                  </div> */}
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
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
                        State
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Station
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formList.map((item, index) => (
                      <tr className="bg-white  hover:bg-gray-50">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-3"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                            />
                            <label
                              htmlFor="checkbox-table-3"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.fullNames}
                        </th>
                        <td className="px-6 py-4">{item.emailAddress}</td>
                        <td className="px-6 py-4">{item.phoneNumber}</td>
                        <td className="px-6 py-4">{item.stateName}</td>
                        <td className="px-6 py-4">{item.station}</td>
                        <td className="px-6 py-4 flex gap-3">
                          <button
                            onClick={() => handleEditUser(index)}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleRemoveUser(index)}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full h-[4rem] px-8 mt-4">
              <button
                disabled={formList.length < 1}
                onClick={handleSubmitForm}
                className="w-full h-full text-center bg-[#444] disabled:bg-[#44444430] text-[#FFF] text-[1.2rem] font-[500] rounded-[10px]"
              >
                {isLoading ? "Loading..." : "Submit Registration"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <RegistrationModal
        showModal={showModal}
        closeModal={setShowModal}
        editId={editId}
        editData={editData}
        updateData={setFormList}
        data={formList}
      />
      <SuccessRegistrationModal
        showModal={showSuccess}
        closeModal={setshowSuccess}
        batchNumber={batchNumber}
      />
    </div>
  );
};

export default Home;
