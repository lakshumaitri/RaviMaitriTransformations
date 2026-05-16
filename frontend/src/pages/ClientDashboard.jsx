import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function ClientDashboard() {

  const [clientData, setClientData] = useState(null);

  const [bookings, setBookings] = useState([]);

  const [payments, setPayments] = useState([]);

  useEffect(() => {

    fetchClientData();

    fetchBookings();

    fetchPayments();

  }, []);

  const fetchClientData = async () => {

    try {

      const clientId = localStorage.getItem("clientId");

      const response = await axios.get(
        `http://127.0.0.1:5000/client/${clientId}`
      );

      setClientData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchBookings = () => {

    const savedBookings =
      JSON.parse(
        localStorage.getItem("sessionBookings")
      ) || [];

    setBookings(savedBookings);

  };

  const fetchPayments = async () => {

    try {

      const clientId =
        localStorage.getItem("clientId");

      const response = await axios.get(

        `http://127.0.0.1:5000/payments/${clientId}`

      );

      setPayments(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!clientData) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">

        Loading...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />
      <div className="flex justify-end px-6 pt-6">

  <button
    onClick={() => {

      localStorage.removeItem("clientId");

      window.location.href = "/client-login";

    }}
    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
  >

    Logout

  </button>

</div>

      <div className="p-10 pt-32">

        <h1 className="text-5xl font-bold text-orange-500 mb-10">

          Welcome, {clientData.full_name}

        </h1>

        {/* CLIENT INFO */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-[#111111] p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-4 text-orange-500">

              Fitness Goal

            </h2>

            <p className="text-xl text-gray-300">

              {clientData.goal}

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-4 text-orange-500">

              Training Type

            </h2>

            <p className="text-xl text-gray-300">

              {clientData.training_type}

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-2xl shadow-lg md:col-span-2">

            <h2 className="text-2xl font-bold mb-4 text-orange-500">

              Joining Date

            </h2>

            <p className="text-xl text-gray-300">

              {clientData.joining_date}

            </p>

          </div>

        </div>

        {/* SESSION BOOKINGS */}

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-8 text-orange-500">

            Session Bookings

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {
              bookings.length === 0 ? (

                <div className="text-gray-400 text-xl">

                  No session bookings yet.

                </div>

              ) : (

                bookings.map((booking, index) => (

                  <div
                    key={index}
                    className="bg-[#111111] p-8 rounded-2xl shadow-lg"
                  >

                    <h3 className="text-2xl font-bold mb-4 text-orange-500">

                      {booking.booking_date}

                    </h3>

                    <div className="space-y-3 text-gray-300">

                      <p>

                        <span className="font-bold text-white">
                          Time:
                        </span>

                        {" "}
                        {booking.booking_time}

                      </p>

                      <p>

                        <span className="font-bold text-white">
                          Notes:
                        </span>

                        {" "}
                        {booking.notes}

                      </p>

                      <p>

                        <span className="font-bold text-white">
                          Status:
                        </span>

                        {" "}

                        <span className="text-orange-500">

                          {booking.status}

                        </span>

                      </p>

                    </div>

                  </div>

                ))

              )
            }

          </div>

        </div>

        {/* PAYMENT STATUS */}

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-8 text-orange-500">

            Payment Status

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {
              payments.length === 0 ? (

                <div className="text-gray-400 text-xl">

                  No payment records found.

                </div>

              ) : (

                payments.map((payment, index) => (

                  <div
                    key={index}
                    className="bg-[#111111] p-8 rounded-2xl shadow-lg"
                  >

                    <h3 className="text-2xl font-bold text-orange-500 mb-4">

                      ₹{payment.amount}

                    </h3>

                    <div className="space-y-3 text-gray-300">

                      <p>

                        <span className="font-bold text-white">

                          Joined Date:

                        </span>

                        {" "}

                        {payment.payment_date}

                      </p>

                      <p>

                        <span className="font-bold text-white">

                          Due Date:

                        </span>

                        {" "}

                        {payment.next_due_date}

                      </p>

                      <p>

                        <span className="font-bold text-white">

                          Status:

                        </span>

                        {" "}

                        <span
                          className={`font-bold ${
                            
                            new Date(payment.next_due_date) < new Date()

                              ? "text-red-500"

                              : (
                                  (
                                    new Date(payment.next_due_date) -
                                    new Date()
                                  ) /
                                  (1000 * 60 * 60 * 24)
                                ) <= 3

                              ? "text-orange-500"

                              : "text-green-500"
                          }`}
                        >

                          {

                            new Date(payment.next_due_date) < new Date()

                              ? "Payment Overdue"

                              : (
                                  (
                                    new Date(payment.next_due_date) -
                                    new Date()
                                  ) /
                                  (1000 * 60 * 60 * 24)
                                ) <= 3

                              ? "Fee Due Soon"

                              : "Payment Active"

                          }

                        </span>

                      </p>

                    </div>

                  </div>

                ))

              )
            }

          </div>

        </div>

        {/* WORKOUTS */}

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-8 text-orange-500">

            Workout Plans

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {
              clientData.workouts?.map((workout, index) => (

                <div
                  key={index}
                  className="bg-[#111111] p-8 rounded-2xl shadow-lg"
                >

                  <p className="text-lg text-gray-300 whitespace-pre-line">

                    {workout.workout_text}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

        {/* DIETS */}

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-8 text-orange-500">

            Diet Plans

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {
              clientData.diets?.map((diet, index) => (

                <div
                  key={index}
                  className="bg-[#111111] p-8 rounded-2xl shadow-lg"
                >

                  <p className="text-lg text-gray-300 whitespace-pre-line">

                    {diet.diet_text}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

        {/* PROGRESS */}

        <div>

          <h2 className="text-4xl font-bold mb-8 text-orange-500">

            Progress History

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {
              clientData.progress?.map((progress, index) => (

                <div
                  key={index}
                  className="bg-[#111111] p-8 rounded-2xl shadow-lg"
                >

                  <h3 className="text-2xl font-bold mb-4 text-orange-500">

                    Weight: {progress.current_weight} kg

                  </h3>

                  <p className="text-gray-300 text-lg">

                    {progress.notes}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default ClientDashboard;