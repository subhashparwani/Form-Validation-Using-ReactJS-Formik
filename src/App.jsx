import React, { useState } from "react";
import Admin from "./Admin";
import Guest from "./Guest";
import User from "./User";
import Navigation from "./Components/Navigation";

function App() {
  const [userRole, setUserRole] = useState("Guest");
  const ComponentByRoles = {
    Admin: Admin,
    User: User,
    Guest: Guest,
  };

  const getComponent = (params) =>
    ComponentByRoles[params] || ComponentByRoles["Guest"];
  const CurrentUser = getComponent(userRole);
  return (
    <>
      <Navigation />
      <CurrentUser />
    </>
  );
}
// {userRole == "Admin" ? <Admin /> : <Guest />}
export default App;
