import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/whetherSlice";
import { API_KEY, API_URL } from "../utilities/constants";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
  const city = useRef();
  const navigate = useNavigate();
  const id = useParams();
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(
        API_URL + API_KEY + "&q=" + city.current.value + "&aqi=no"
      );
      const data = await response.json();
      dispatch(setData(data));
      navigate(`/${id.id}/whether`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleWhether = () => {
    console.log(city);
    fetchData();
  };
  return (
    <div className="flex justify-around w-full p-5">
      <div className="w-[400px] h-[300px] rounded-xl flex flex-col justify-center items-center bg-green-200">
        <h1 className="text-3xl">Check Whether Forecast</h1>
        <label htmlFor="city">ENTER THE CITY NAME:</label>
        <input
          ref={city}
          type="text"
          className="p-2 mt-2 border border-gray-400"
        />
        <button
          className="p-2 bg-orange-400 rounded-lg mt-3"
          onClick={handleWhether}
        >
          {" "}
          Get Whether
        </button>
      </div>
    </div>
  );
};
export default UserPage;
