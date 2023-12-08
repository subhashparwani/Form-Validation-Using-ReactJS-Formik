import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>I am dashboard user</h1>} />
        <Route path="*" element={<Navigate to={"/"} replace="true" />} />
      </Routes>
    </>
  );
}

export default User;
