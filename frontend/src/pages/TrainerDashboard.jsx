import { Trash2 } from "lucide-react";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://ravimaitritransformations.onrender.com";

function TrainerDashboard() {

  const [showClients, setShowClients] = useState(false);

  const [loadingClients, setLoadingClients] = useState(false);

  const [clients, setClients] = useState([]);

  const [progressData, setProgressData] = useState({
    current_weight: "",
    notes: ""
  });

  const [workoutData, setWorkoutData] = useState("");

  const [dietData, setDietData] = useState("");

  useEffect(() => {

    fetchClients();

  }, []);

  const fetchClients = async () => {

    try {

      setLoadingClients(true);

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

      alert("Failed to load clients");

    } finally {

      setLoadingClients(false);

    }

  };

  const openClients = async () => {

    setShowClients(true);

    await fetchClients();

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

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">

          <div
            onClick={openClients}
            className="bg-[#111111] p-12 rounded-3xl shadow-lg hover:scale-105 transition text-center cursor-pointer"
          >

            <h2 className="text-3xl font-bold mb-6 text-orange-500">

              Clients

            </h2>

            <p className="text-gray-400 text-lg">

              Manage clients, workouts, diet plans and payments.

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

              View session booking requests and approve/reject sessions.

            </p>

          </a>

        </div>

        {
          showClients && (

            <div className="mt-10">

              <h2 className="text-3xl font-bold text-orange-500 mb-6">

                Clients List

              </h2>

              {
                loadingClients ? (

                  <p className="text-white text-xl">
                    Loading...
                  </p>

                ) : clients.length === 0 ? (

                  <p className="text-white text-xl">
                    No clients found
                  </p>

                ) : (

                  clients.map((client) => (

                    <div
                      key={client.id}
                      className="bg-[#111111] p-6 rounded-2xl mb-6"
                    >

                      <div className="flex justify-between items-center mb-6">

                        <div>

                          <h3 className="text-2xl text-orange-500 font-bold">

                            {client.full_name}

                          </h3>

                          <p className="text-white mt-2">

                            {client.email}

                          </p>

                        </div>

                        <button
                          onClick={() => deleteClient(client.id)}
                          className="bg-red-600 hover:bg-red-700 p-3 rounded-xl"
                        >

                          <Trash2 />

                        </button>

                      </div>

                      <div className="grid md:grid-cols-2 gap-4">

                        <textarea
                          name="notes"
                          placeholder="Progress Notes"
                          onChange={handleProgressChange}
                          className="bg-black border border-gray-700 p-4 rounded-xl outline-none text-white"
                        />

                        <input
                          type="number"
                          name="current_weight"
                          placeholder="Current Weight"
                          onChange={handleProgressChange}
                          className="bg-black border border-gray-700 p-4 rounded-xl outline-none text-white"
                        />

                        <button
                          onClick={() => addProgress(client.id)}
                          className="bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold"
                        >

                          Add Progress

                        </button>

                        <textarea
                          placeholder="Workout Plan"
                          onChange={(e) => setWorkoutData(e.target.value)}
                          className="bg-black border border-gray-700 p-4 rounded-xl outline-none text-white"
                        />

                        <button
                          onClick={() => addWorkout(client.id)}
                          className="bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold"
                        >

                          Save Workout

                        </button>

                        <textarea
                          placeholder="Diet Plan"
                          onChange={(e) => setDietData(e.target.value)}
                          className="bg-black border border-gray-700 p-4 rounded-xl outline-none text-white"
                        />

                        <button
                          onClick={() => addDiet(client.id)}
                          className="bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold"
                        >

                          Save Diet

                        </button>

                      </div>

                    </div>

                  ))

                )
              }

            </div>

          )
        }

      </div>

    </div>

  );

}

export default TrainerDashboard;