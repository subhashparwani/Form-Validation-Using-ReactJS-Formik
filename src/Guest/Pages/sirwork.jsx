// loginPage
// now first target whatever I write in email and password I must get it ?
// formlk using this library we will validate form
// npm install formik --save

// import React from "react";
// // import SignupPage from "./SignupPage";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";

// function LoginPage() {
//   const initialValues = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   const onSubmit = (values) => {
//     alert(JSON.stringify(values, null, 2));
//   };
//   const validate = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     return errors;
//   };
//   const formik = useFormik({ initialValues, onSubmit, validate });

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const LoginForm = (e) => {
//   //   e.prevetDefault();
//   // };
//   return (
//     <>
//       <div className="max-w-md mx-auto relative flex flex-col p-4 rounded-md text-black bg-white">
//         <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
//           Welcome back to <span className="text-[#7747ff]">App</span>
//         </div>
//         <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
//           Log in to your account
//         </div>
//         <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
//           <div className="block relative">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
//             >
//               Email
//             </label>
//             <input
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               type="text"
//               id="email"
//               name="email"
//               className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
//             />
//             {formik.errors.email && formik.touched.email && (
//               <div>{formik.errors.email}</div>
//             )}
//             output: {email}
//           </div>
//           <div className="block relative">
//             <label
//               htmlFor="password"
//               className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
//             >
//               Password
//             </label>
//             <input
//               onChange={formik.handleChange}
//               onBlur={formik.values.password}
//               value={formik.values.password}
//               type="password"
//               id="password"
//               name="password"
//               className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//             />
//             {formik.errors.password && formik.touched.password && (
//               <div>{formik.errors.password}</div>
//             )}
//             output: {password}
//           </div>
//           <div>
//             <Link className="text-sm text-[#7747ff]" href="#">
//               Forgot your password?
//             </Link>
//           </div>
//           <button
//             type="submit"
//             className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
//           >
//             Submit
//           </button>
//         </form>
//         <div className="text-sm text-center mt-[1.6rem]">
//           // Don’t have an account yet?{" "}
//           <Link className="text-sm text-[#7747ff]" to="#">
//             Sign up for free!
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;

// signupPage
// // now first target whatever I write in email and password I must get it ?

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Formik } from 'formik';

// function SignupPage() {
//   const initialValues={
//     initialValues: {
//       username: '',
//       email: '',
//       password: '',
//     },
//     onSubmit= (values) => {
//       alert(JSON.stringify(values, null, 2));
//     }
//     validate=(values) => {
//       const Formik.errorss = {};
//       if (!values.email) {
//         formik.errors.email = 'Required';
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         formik.errors.email = 'Invalid email address';
//       }
//       return formik.errorss;
//     }}
//   const formik = useFormik({initialValues, onSubmit, validate  });
//   return (
//     <>
//       {/* max-w-md relative flex flex-col p-4 rounded-md text-black bg-white */}
//       {/* flex justify-center items-center h-screen */}
//       <div className="max-w-md mx-auto relative flex flex-col p-4 rounded-md text-black bg-white">
//         <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
//           Welcome back to <span className="text-[#7747ff]">App</span>
//         </div>
//         <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
//           Sign up to your account
//         </div>
//         <form className="flex flex-col gap-3">
//           <div className="block relative">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="email"
//               className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
//             />
//           </div>
//           <div className="block relative">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="text"
//               id="email"
//               className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
//             />
//             {formic.errors.email && formic.touched.email && <p className="text-red-700">formic.errors.email</p>}
//           </div>
//           <div className="block relative">
//             <label
//               htmlFor="password"
//               className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="text"
//               id="password"
//               className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//             />
//             {formic.errors.password && formic.touched.password && <p className="text-red-700">formic.errors.password</p>}
//           </div>

//           <button
//             type="submit"
//             className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
//           >
//             Submit
//           </button>
//         </form>
//         <div className="text-sm text-center mt-[1.6rem]">
//           Already have an account?
//           <Link className="text-sm text-[#7747ff]" to="/login">
//             Login Here
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignupPage;
