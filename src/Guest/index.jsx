import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function Guest() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>I am dashboard guest</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>Page 404</h1>} />
      </Routes>
    </>
  );
}

export default Guest;
