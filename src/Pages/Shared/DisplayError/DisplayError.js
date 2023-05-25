import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
//error checking component
const DisplayError = () => {
  const { LogOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please <button onClick={handleLogOut}>SignOut</button>and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
