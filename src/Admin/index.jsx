import React from "react";
import { Routes, Route } from "react-router-dom";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>I am Admin dashboar</h1>} />
        <Route path="/finance" element={<h1>I am finance</h1>} />
        <Route path="/setting" element={<h1>I am setting</h1>} />
        <Route path="/accounts" element={<h1>I am accounts</h1>} />
      </Routes>
    </>
  );
}

export default Admin;
