import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    full_name: "",
    age: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
    goal: "",
    training_type: "",
    password: "",
    joining_date: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://ravimaitritransformations.onrender.com/register",
        formData
      );

      alert(response.data.message);

      navigate("/parq-form");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="flex justify-center items-center py-32 px-6">

        <div className="bg-[#111111] p-10 rounded-2xl shadow-lg w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
            Client Registration
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <select
              name="goal"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            >

              <option value="">Choose Goal</option>

              <option>Weight Loss</option>

              <option>Muscle Gain</option>

              <option>Body Toning</option>

              <option>Weight Gain</option>

            </select>

            <select
              name="training_type"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            >

              <option value="">Training Type</option>

              <option>Gym Training</option>

              <option>Swimming Classes</option>

            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="date"
              name="joining_date"
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
              required
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-bold text-lg md:col-span-2"
            >

              Register

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}


export default Register;