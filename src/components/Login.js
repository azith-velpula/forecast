import React, { useRef, useState } from "react";
import { validate } from "../utilities/validate";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const handleForm = () => {
    const validation = validate(email.current.value, password.current.value);
    if (!validation) {
      const user = {
        id: Math.floor(Math.random() * 1000000),
        name: name.current.value,
      };
      dispatch(setUser(user));
      navigate("/" + user.id);
    } else {
      setErrorMessage(validation);
    }
  };
  return (
    <div className="w-4/12  shadow-2xl rounded-xl">
      <div className="px-16 py-10">
        <h1 className=" text-4xl mb-10 font-bold">Sign up</h1>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <input
            ref={name}
            onChange={() => setErrorMessage(null)}
            type="text"
            className="border border-gray-400 opacity-60 block py-4  mb-2  pl-3 text-lg"
            placeholder="Name"
          />
          <input
            ref={email}
            onChange={() => setErrorMessage(null)}
            type="text"
            className="border border-gray-400  opacity-60 mb-5  block py-4  pl-3 text-lg"
            placeholder="Email or Phone Number"
          />
          <input
            ref={password}
            onChange={() => setErrorMessage(null)}
            type="password"
            className="border border-gray-400  opacity-60 block py-4  mb-2  pl-3 text-lg"
            placeholder="password"
          />
          {errorMessage && (
            <p className="text-sm text-red-600 mb-2">. {errorMessage}</p>
          )}
          <button
            className="bg-red-600 text-white p-2 rounded mb-4 text-xl font-bold mt-3"
            onClick={handleForm}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
