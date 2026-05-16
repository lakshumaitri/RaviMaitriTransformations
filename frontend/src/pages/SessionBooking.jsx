import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SessionBooking() {
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({

    client_name: "",
    client_email: "",
    booking_date: "",
    booking_time: "",
    notes: ""

  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {

    setBookingData({

      ...bookingData,
      [e.target.name]: e.target.value

    });

  };

  const handleBooking = async () => {

    if (

      bookingData.client_name === "" ||
      bookingData.client_email === "" ||
      bookingData.booking_date === "" ||
      bookingData.booking_time === ""

    ) {

      alert("Please fill all required fields");

      return;

    }

    try {

      const response = await axios.post(

        "https://ravimaitritransformations.onrender.com/book-session",

        bookingData

      );

      console.log(response.data);

      alert(
  "Session request submitted successfully. You will be notified once trainer approves your booking."
);

navigate("/");

      setBookingData({

        client_name: "",
        client_email: "",
        booking_date: "",
        booking_time: "",
        notes: ""

      });

    } catch (error) {

      console.log(error);

      alert("Booking Failed");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20 flex justify-center">

        <div className="bg-[#111111] w-full max-w-3xl rounded-3xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center">

            Book Online Session

          </h1>

          <div className="space-y-6">

            <input
              type="text"
              name="client_name"
              placeholder="Full Name"
              value={bookingData.client_name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              name="client_email"
              placeholder="Email Address"
              value={bookingData.client_email}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <div className="mb-6">

              <label className="block mb-2 text-gray-300 font-medium">

                Select Session Date

              </label>

              <input
                type="date"
                name="booking_date"
                value={bookingData.booking_date}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
              />

            </div>

            <div className="mb-6">

              <label className="block mb-2 text-gray-300 font-medium">

                Select Session Time

              </label>

              <input
                type="time"
                name="booking_time"
                value={bookingData.booking_time}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
              />

            </div>

            <textarea
              name="notes"
              rows="4"
              placeholder="Session Notes..."
              value={bookingData.notes}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <button
              onClick={handleBooking}
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold text-lg"
            >

              Book Session

            </button>

            {
              status && (

                <div className="bg-black border border-orange-500 text-orange-500 p-4 rounded-xl text-center font-bold mt-6">

                  {status}

                </div>

              )
            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default SessionBooking;