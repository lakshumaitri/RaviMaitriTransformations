import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ClientLogin() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    setLoginData({

      ...loginData,
      [e.target.name]: e.target.value

    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/client-login",
        loginData
      );

      if (response.data.success) {

        localStorage.setItem(
          "clientId",
          response.data.client_id
        );

        navigate("/client-dashboard");

      } else {

        alert("Invalid Credentials");

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="flex justify-center items-center py-20 px-6">

        <div className="bg-[#111111] p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
            Client Login
          </h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-6"
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-bold text-lg"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ClientLogin;