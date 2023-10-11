import React from "react";
import { white_brand_icon, skull, google } from "../assets";
import "../fonts/MajorMonoDisplay-Regular.ttf";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Field, ErrorMessage } from "formik";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  // const { isAuthenticated } = useSelector((state) => state.auth);
  // useEffect(() => {

  //   if(isAuthenticated)
  //   navigate("/")
  // }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [token, setToken] = useState("");

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too short!")
      .max(15, "Too Long!")
      .required("Required"),
  });

  const notify = () => {
    toast.error("Not registered, Sign Up", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  const handleSubmit = (values) => {
    // e.preventDefault();

    const {email,password}=values;
    // if (!email) {
    //   setemailError("Email is required");
    // }
    // if (!password) {
    //   setPasswordError("Password is required");
    //   return;
    // }

    const credentials = { email, password };
    dispatch(login(credentials))
      .unwrap()
      .then(() => {
          navigate("/");
      })
    }
  

  return (
    <div className="flex flex-row">
      {/* <ToastContainer /> */}
      <div className="flex flex-col w-[50%] h-screen bg-[#0E0E0E] px-[101px] ">
        <div className="w-[283px] h-[93px] mt-[49px]  ">
          <img src={white_brand_icon} />
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-[509px] h-[158px] ">
            <p
              className="font-MajorMonoDisplay text-[36px] text-white font-[400]
                         leading-[38px] text-center "
            >
              EMPOWER A BRILLIANT FUTURE WITH UNPARALLELED TECH ESSENTIALS.
            </p>
          </div>
          <img src={skull} className="mt-[-30px] " />
          <div className="w-[205px] ">
            <p
              className="font-manrope text-[20px] text-white font-[700]
                         tracking-[0.8px] text-center mt-[-80px] mb-[12px] "
            >
              Gets a rewards and points for every purchase.
            </p>
          </div>
          <div className="w-[301px] ">
            <p
              className="font-manrope text-[14px]
                         text-white/75 font-[400] tracking-[0.56px]
                          text-center "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[50%] justify-center pl-[153px] pr-[120px] items-center ">
        <p className="font-manrope text-[36px] font-[600] leading-normal ">
          Welcome Back!
        </p>
        <p className="font-manrope text-black/75 font-[400] leading-normal tracking-[0.96px] ">
          Start Shopping and get rewards for next shop
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <p className="font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px]">
              Email
            </p>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className={`border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ${
                emailError ? "border-red-700" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error text-red-700 font-manrope"
            />

            <p className="font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px]">
              Create Password
            </p>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className={`border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ${
                passwordError ? "border-red-700" : ""
              }`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error text-red-700 font-manrope"
            />

            <div className="flex flex-row mt-[14px]">
              <input
                type="checkbox"
                className="w-[11px] h-[11px]"
                checked={isChecked}
                onChange={handleCheckboxClick}
              />
              <p
                className={`font-manrope text-[12px] font-[700] leading-normal ml-[6px] mr-[226px] ${
                  isChecked ? "text-blue-500" : "text-black/50"
                }`}
              >
                Remember for 30 days
              </p>
              <p className="font-manrope  text-[12px] font-[600] leading-normal cursor-pointer ">
                Forgot Password?
              </p>
            </div>

            <div className="flex flex-col gap-[15px] mt-[49px] items-center ">
              <button
                type="submit"
                className="flex w-[313px] h-[45px] bg-[#0E0E0E] rounded-full items-center justify-center cursor-pointer "
                // disabled={isSubmitting}
              >
                <p className="font-manrope text-[14px] text-white font-[800] leading-normal tracking-[0.42px] ">
                  Sign In
                </p>
              </button>

              <div className="flex flex-row w-[313px] h-[45px] rounded-full items-center justify-center border border-black/25 border-solid cursor-pointer ">
                <img src={google} />
                <p className="font-manrope text-[14px] text-black/50 font-[800] leading-normal tracking-[0.42px] ml-[10px] ">
                  Sign Up With Google
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-[15px] ">
              <p className="font-manrope text-[12px] text-black/50 font-[600] leading-normal mr-2 cursor-pointer ">
                Don't have an account?
              </p>
              <p
                className="font-manrope text-[#0A1020] font-[600] text-[12px] leading-normal cursor-pointer "
                onClick={handleSignUpClick}
              >
                Sign Up
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
