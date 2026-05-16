import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function TrainerBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const response = await axios.get(

        "https://ravimaitritransformations.onrender.com/session-bookings"

      );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const approveBooking = async (id) => {

    try {

      await axios.put(

        `https://ravimaitritransformations.onrender.com/approve-booking/${id}`

      );

      alert("Booking Approved");

      fetchBookings();

    } catch (error) {

      console.log(error);

    }

  };

  const rejectBooking = async (id) => {

    try {

      await axios.put(

        `https://ravimaitritransformations.onrender.com/reject-booking/${id}`

      );

      alert("Booking Rejected");

      fetchBookings();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20 max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">

          Session Booking Requests

        </h1>

        <div className="grid gap-8">

          {
            Array.isArray(bookings) && bookings.length === 0 ? (

              <div className="text-center text-gray-400 text-xl">

                No booking requests yet.

              </div>

            ) : (

              Array.isArray(bookings) &&
              bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="bg-[#111111] p-8 rounded-3xl shadow-lg"
                >

                  <h2 className="text-2xl font-bold text-orange-500 mb-4">

                    {booking.client_name}

                  </h2>

                  <div className="space-y-3 text-gray-300 mb-6">

                    <p>

                      <span className="font-bold text-white">

                        Email:

                      </span>

                      {" "}

                      {booking.client_email}

                    </p>

                    <p>

                      <span className="font-bold text-white">

                        Date:

                      </span>

                      {" "}

                      {booking.booking_date}

                    </p>

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

                  <div className="flex gap-4">

                    <button
                      onClick={() => approveBooking(booking.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-bold"
                    >

                      Approve

                    </button>

                    <button
                      onClick={() => rejectBooking(booking.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold"
                    >

                      Reject

                    </button>

                  </div>

                </div>

              ))

            )
          }

        </div>

      </div>

    </div>

  );

}

export default TrainerBookings;