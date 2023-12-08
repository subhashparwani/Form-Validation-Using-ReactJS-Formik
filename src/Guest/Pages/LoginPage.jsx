import React from "react";
import SignupPage from "./SignupPage";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validate = (values) => {
    const errors = {};
    // Email validation logic
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation logic
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    // Add other password validation rules if needed

    return errors;
  };

  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <>
      <div className="max-w-md mx-auto relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0
            ${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : formik.values.email
                ? "border-green-500"
                : ""
            }`}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <Link className="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link className="text-sm text-[#7747ff]" to="/signup">
            Sign up for free!
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
