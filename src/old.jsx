// import React, { useState } from "react";
// import Products from "./components/Products";
// import Navigation from "./components/Navigation";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import SingleProduct from "./Pages/SingleProduct";
// import Page404 from "./Pages/Page404";
// import Admin from "./Admin";

// function App() {
//   const [isAuth, setIsAuth] = useState(true);
//   return (
//     <>
//       <Navigation />
//       {isAuth ? (
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/product/:id" element={SingleProduct} />
//           <Route path="*" element={<Page404 />} />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<Navigate to="/login" replace={true} />} />
//         </Routes>
//       )}
//     </>
//   );
// }

// export default App;
