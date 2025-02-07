import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const { data } = await axios.post(
        "https://endpoint.ayac2024.org.ng:6443/api/member/login",
        values
      );

      if (data.success) {
        localStorage.setItem("token", data.data.token.token);
        navigate("/admin/dashboard");
        console.log(data.data);
      }
    },
  });
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="w-3/4 h-2/3">
        <div className="h-full h-full grid grid-cols-2">
          <div></div>
          <div className="px-6">
            <div>
              <h2 className="text-[2rem] text-center font-[400]">
                Admin Login
              </h2>
            </div>
            <div>
              <div className="grid gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="email" className="font-[400] text-[1.2rem]">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange("email")}
                    placeholder="email"
                    id="email"
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="font-[400] text-[1.2rem]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange("password")}
                    placeholder="password"
                    id="password"
                    className="h-[4rem] bg-[#F5F5F5] px-4 rounded-[10px]"
                  />
                </div>
                <div className="w-full">
                  <button
                    onClick={() => formik.handleSubmit()}
                    className="bg-[#444] w-full h-[4rem] text-[#FFF] text-center text-[1.2rem] font-[400] rounded-[10px]"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
