import { useFormik } from "formik";
import { ModalProps } from "./interface";
import { useEffect, useState } from "react";
import axios from "axios";

const RegistrationModal = ({
  showModal,
  data,
  updateData,
  editId = null,
  clearEditId,
  editData = null,
  clearEditData,
  closeModal,
}: ModalProps) => {
  const [state, setState] = useState<any[]>([]);
  const [countryId, setCountryId] = useState<number>();
  const [country, setCountry] = useState<any[]>([]);

  const formik = useFormik({
    initialValues: {
      fullNames: editId ? editData.fullNames : "",
      emailAddress: editId ? editData.emailAddress : "",
      phoneNumber: editId ? editData.phoneNumber : "",
      stateId: editId ? editData.stateId : "",
      stateName: editId ? editData.stateName : "",
      station: editId ? editData.station : "",
    },
    onSubmit: async (values) => {
      console.log(data[editId]);
      if (editId !== null) {
        console.log("edit");
        console.log(values);
        data[editId] = values;
        updateData(data);
        setCountryId(0);
        closeModal(false);
      } else {
        console.log(values);
        updateData([...data, values]);
        formik.resetForm();
        setCountryId(0);
        closeModal(false);
      }
    },
  });

  const handleCloseModal = () => {
    setCountryId(0);
    closeModal(false);
    clearEditData(null);
    clearEditId(null);
  };

  const getState = async () => {
    const { data } = await axios.post(
      `https://endpoint.ayac2024.org.ng:6443/api/member/get-state?countryId=${countryId}`
    );

    if (data.success) {
      setState(data.data);
    }
  };
  const getCountry = async () => {
    const { data } = await axios.get(
      "https://endpoint.ayac2024.org.ng:6443/api/member/get-country"
    );

    if (data.success) {
      setCountry(data.data);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    getState();
  }, [countryId]);

  useEffect(() => {
    formik.setFieldValue("fullNames", editData?.fullNames);
    formik.setFieldValue("stateId", editData?.stateId);
    formik.setFieldValue("emailAddress", editData?.emailAddress);
    formik.setFieldValue("phoneNumber", editData?.phoneNumber);
    formik.setFieldValue("station", editData?.station);
    formik.setFieldValue("stateName", editData?.stateName);
  }, [editData, editId]);

  if (showModal) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen z-[99] flex items-center justify-center">
        <div
          className="absolute top-0 left-0 h-full w-full bg-[#00000090] z-[999] cursor-pointer"
          onClick={() => handleCloseModal()}
        ></div>
        <div className="absolute xl:w-1/2 md:w-1/2 w-[90%] overflow-y-scroll z-[999999999] ">
          <div className=" px-8 py-5  bg-[#FFF]">
            <div className="grid gap-4">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="fullName" className="font-[400] text-[1.2rem]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  defaultValue={formik.values.fullNames}
                  id="fullName"
                  onChange={formik.handleChange("fullNames")}
                  className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                />
              </div>
              <div className="flex xl:flex-row md:flex-row flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="phoneNumber"
                    className="font-[400] text-[1.2rem]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="tel"
                    defaultValue={formik.values.phoneNumber}
                    max={11}
                    maxLength={11}
                    placeholder="Phone number"
                    id="phoneNumber"
                    onChange={formik.handleChange("phoneNumber")}
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="email" className="font-[400] text-[1.2rem]">
                    Email <span>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={formik.values.emailAddress}
                    placeholder="Email"
                    onChange={formik.handleChange("emailAddress")}
                    id="email"
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  />
                </div>
              </div>
              <div className="flex xl:flex-row md:flex-row flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="state" className="font-[400] text-[1.2rem]">
                    Country
                  </label>
                  <select
                    name="state"
                    id="state"
                    onChange={(e) => setCountryId(JSON.parse(e.target.value))}
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  >
                    <option value="">--- Select Country ---</option>
                    {country.map((item) => (
                      <option key={item.id} value={item.countryId}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="state" className="font-[400] text-[1.2rem]">
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    onChange={(e) => {
                      const item = state.filter(
                        (s) => s.id === JSON.parse(e.target.value)
                      );
                      console.log(item);
                      formik.setFieldValue("stateId", item[0].id);
                      formik.setFieldValue("stateName", item[0].name);
                    }}
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  >
                    <option value="">--- Select State ---</option>
                    {state.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="station" className="font-[400] text-[1.2rem]">
                  Station (Church Branch)
                </label>
                <input
                  type="station"
                  name="station"
                  defaultValue={formik.values.station}
                  placeholder="Station (Church Branch)"
                  id="station"
                  onChange={formik.handleChange("station")}
                  className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                />
              </div>
              <div className="w-full h-[3rem]">
                <button
                  onClick={() => formik.handleSubmit()}
                  className="w-full h-full bg-[#444] text-[1.2rem] text-[#FFF] rounded-[10px]"
                >
                  Register Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RegistrationModal;
