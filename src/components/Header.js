import React from "react";
import images from "../assets/img/images";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const handleHome = () => {
    user === null && navigate("/");
  };
  const handleLogout = () => {
    dispatch(setUser(null));
    navigate("/");
  };
  return (
    <div className="p-1 m-2 shadow-xl rounded-lg flex items-center justify-between">
      <div className="flex items-center">
        <img src={images.logo} alt="logo" width="80" height="50" />
        <h1 className="text-2xl font-bold " onClick={() => handleHome}>
          FORECAST.
        </h1>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <p className="font-semibold mr-2">{user.name}</p>
            <button
              className="bg-red-500 text-white font-semibold p-2 rounded-xl"
              onClick={handleLogout}
            >
              {" "}
              Logout{" "}
            </button>
          </>
        ) : (
          <img src={images.user} alt="user" width="50" height="50" />
        )}
      </div>
    </div>
  );
};

export default Header;
