import {
  Trash2
} from "lucide-react";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://ravimaitritransformations.onrender.com";

function TrainerDashboard() {

  const [showClients, setShowClients] = useState(false);

  const [clients, setClients] = useState([]);

  const [progressData, setProgressData] = useState({
    current_weight: "",
    notes: ""
  });

  const [workoutData, setWorkoutData] = useState("");

  const [dietData, setDietData] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const [paymentData, setPaymentData] = useState({

    amount: "",
    payment_date: "",
    next_due_date: ""

  });

  useEffect(() => {

    fetchClients();

  }, []);

  const fetchClients = async () => {

    try {

      const response = await axios.get(
        `${API}/clients`
      );

      setClients(
        Array.isArray(response.data)
          ? response.data
          : []
      );

    } catch (error) {

      console.log(error);

    }

  };

  const deleteClient = async (id) => {

    try {

      await axios.delete(
        `${API}/delete-client/${id}`
      );

      alert("Client Deleted");

      fetchClients();

    } catch (error) {

      console.log(error);

    }

  };

  const handleProgressChange = (e) => {

    setProgressData({
      ...progressData,
      [e.target.name]: e.target.value
    });

  };

  const handlePaymentChange = (e) => {

    setPaymentData({

      ...paymentData,
      [e.target.name]: e.target.value

    });

  };

  const addProgress = async (clientId) => {

    try {

      await axios.post(
        `${API}/add-progress`,
        {
          ...progressData,
          client_id: clientId
        }
      );

      alert("Progress Added");

    } catch (error) {

      console.log(error);

    }

  };

  const addWorkout = async (clientId) => {

    try {

      await axios.post(
        `${API}/add-workout`,
        {
          client_id: clientId,
          workout_text: workoutData
        }
      );

      alert("Workout Saved");

    } catch (error) {

      console.log(error);

    }

  };

  const addDiet = async (clientId) => {

    try {

      await axios.post(
        `${API}/add-diet`,
        {
          client_id: clientId,
          diet_text: dietData
        }
      );

      alert("Diet Saved");

    } catch (error) {

      console.log(error);

    }

  };

  const addPayment = async (clientId) => {

    try {

      await axios.post(

        `${API}/add-payment`,

        {

          client_id: clientId,

          amount: paymentData.amount,

          payment_date: paymentData.payment_date,

          next_due_date: paymentData.next_due_date

        }

      );

      alert("Payment Added");

      setPaymentData({

        amount: "",
        payment_date: "",
        next_due_date: ""

      });

    } catch (error) {

      console.log(error);

    }

  };

  const uploadTransformation = async (clientId) => {

    try {

      const formData = new FormData();

      formData.append("client_id", clientId);

      formData.append("image", selectedImage);

      await axios.post(
        `${API}/upload-transformation`,
        formData
      );

      alert("Transformation Uploaded");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 md:px-10 pb-20">

        <div className="flex justify-end mb-8">

  <button
    onClick={() => {

      localStorage.removeItem("trainerLoggedIn");

      window.location.href = "/login";

    }}
    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
  >

    Logout

  </button>

</div>

        <h1 className="text-4xl md:text-6xl font-bold text-orange-500 text-center mb-16">

          Trainer Dashboard

        </h1>

        {/* TOP CARDS */}

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">

          <div
            onClick={() => setShowClients(true)}
            className="bg-[#111111] p-12 rounded-3xl shadow-lg hover:scale-105 transition text-center cursor-pointer"
          >

            <h2 className="text-3xl font-bold mb-6 text-orange-500">

              Clients

            </h2>

            <p className="text-gray-400 text-lg">

              Manage clients, workouts,
              diet plans and payments.

            </p>

          </div>

          <a
            href="/trainer-bookings"
            className="bg-[#111111] p-12 rounded-3xl shadow-lg hover:scale-105 transition text-center"
          >

            <h2 className="text-3xl font-bold mb-6 text-orange-500">

              Sessions

            </h2>

            <p className="text-gray-400 text-lg">

              View session booking requests
              and approve/reject sessions.

            </p>

          </a>

        </div>

        {/* CLIENT MANAGEMENT */}

        {
          showClients && (

            <div className="grid md:grid-cols-2 gap-8">

              {
                clients.map((client) => (

                  <div
                    key={client.id}
                    className="bg-[#111111] p-8 rounded-3xl shadow-lg"
                  >

                    <div className="flex justify-between items-start mb-6">

                      <div>

                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">

                          {client.full_name}

                        </h2>

                        <p className="text-gray-400 text-lg">

                          {client.goal}

                        </p>

                      </div>

                      <button
                        onClick={() => deleteClient(client.id)}
                        className="text-red-500"
                      >

                        <Trash2 />

                      </button>

                    </div>

                    <textarea
                      placeholder="Add Workout Plan..."
                      onChange={(e) => setWorkoutData(e.target.value)}
                      className="w-full bg-black border border-gray-700 p-4 rounded-xl mb-4 outline-none"
                      rows="4"
                    />

                    <button
                      onClick={() => addWorkout(client.id)}
                      className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold mb-6"
                    >

                      Save Workout

                    </button>

                    <textarea
                      placeholder="Add Diet Plan..."
                      onChange={(e) => setDietData(e.target.value)}
                      className="w-full bg-black border border-gray-700 p-4 rounded-xl mb-4 outline-none"
                      rows="4"
                    />

                    <button
                      onClick={() => addDiet(client.id)}
                      className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold mb-6"
                    >

                      Save Diet

                    </button>

                    <input
                      type="number"
                      name="current_weight"
                      placeholder="Current Weight"
                      onChange={handleProgressChange}
                      className="w-full bg-black border border-gray-700 p-4 rounded-xl mb-4 outline-none"
                    />

                    <textarea
                      name="notes"
                      placeholder="Progress Notes..."
                      onChange={handleProgressChange}
                      className="w-full bg-black border border-gray-700 p-4 rounded-xl mb-4 outline-none"
                      rows="3"
                    />

                    <button
                      onClick={() => addProgress(client.id)}
                      className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold mb-6"
                    >

                      Add Progress

                    </button>

                    <div className="bg-black border border-gray-700 p-6 rounded-2xl mb-6">

                      <h3 className="text-2xl font-bold text-orange-500 mb-6">

                        Payment Management

                      </h3>

                      <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={paymentData.amount}
                        onChange={handlePaymentChange}
                        className="w-full bg-[#111111] border border-gray-700 p-4 rounded-xl mb-4 outline-none"
                      />

                      <div className="mb-4">

                        <label className="block mb-2 text-gray-300">

                          Joined Date

                        </label>

                        <input
                          type="date"
                          name="payment_date"
                          value={paymentData.payment_date}
                          onChange={handlePaymentChange}
                          className="w-full bg-[#111111] border border-gray-700 p-4 rounded-xl outline-none"
                        />

                      </div>

                      <div className="mb-6">

                        <label className="block mb-2 text-gray-300">

                          Due Date

                        </label>

                        <input
                          type="date"
                          name="next_due_date"
                          value={paymentData.next_due_date}
                          onChange={handlePaymentChange}
                          className="w-full bg-[#111111] border border-gray-700 p-4 rounded-xl outline-none"
                        />

                      </div>

                      <button
                        onClick={() => addPayment(client.id)}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold"
                      >

                        Save Payment

                      </button>

                    </div>

                    <input
                      type="file"
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                      className="w-full mb-4"
                    />

                    <button
                      onClick={() => uploadTransformation(client.id)}
                      className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold"
                    >

                      Upload Transformation

                    </button>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>

  );

}

export default TrainerDashboard;