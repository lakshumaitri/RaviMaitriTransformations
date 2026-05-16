import Navbar from "../components/Navbar";
import { useState } from "react";

function Payments() {

  const [payments, setPayments] = useState([]);

  const [paymentData, setPaymentData] = useState({

    client_name: "",
    amount: "",
    payment_date: "",
    next_due_date: ""

  });

  const handleChange = (e) => {

    setPaymentData({

      ...paymentData,
      [e.target.name]: e.target.value

    });

  };

  const addPayment = () => {

    if (
      paymentData.client_name === "" ||
      paymentData.amount === "" ||
      paymentData.payment_date === "" ||
      paymentData.next_due_date === ""
    ) {

      alert("Please fill all fields");

      return;

    }

    const newPayment = {

      ...paymentData,
      status: "Paid"

    };

    setPayments([
      newPayment,
      ...payments
    ]);

    setPaymentData({

      client_name: "",
      amount: "",
      payment_date: "",
      next_due_date: ""

    });

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20 max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">

          Payment Management

        </h1>

        {/* ADD PAYMENT */}

        <div className="bg-[#111111] p-8 rounded-3xl mb-12 shadow-lg">

          <h2 className="text-2xl font-bold mb-8">

            Add Payment

          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="client_name"
              placeholder="Client Name"
              value={paymentData.client_name}
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={paymentData.amount}
              onChange={handleChange}
              className="bg-black border border-gray-700 p-4 rounded-xl outline-none"
            />

            {/* JOINED DATE */}

            <div>

              <label className="block mb-2 text-gray-300 font-medium">

                Joined Date

              </label>

              <input
                type="date"
                name="payment_date"
                value={paymentData.payment_date}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
              />

            </div>

            {/* DUE DATE */}

            <div>

              <label className="block mb-2 text-gray-300 font-medium">

                Due Date

              </label>

              <input
                type="date"
                name="next_due_date"
                value={paymentData.next_due_date}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
              />

            </div>

          </div>

          <button
            onClick={addPayment}
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold text-lg mt-8"
          >

            Save Payment

          </button>

        </div>

        {/* PAYMENT HISTORY */}

        <div>

          <h2 className="text-3xl font-bold mb-8 text-orange-500">

            Payment History

          </h2>

          <div className="grid gap-8">

            {
              payments.length === 0 ? (

                <div className="text-gray-400 text-xl">

                  No payments added yet.

                </div>

              ) : (

                payments.map((payment, index) => (

                  <div
                    key={index}
                    className="bg-[#111111] p-8 rounded-3xl shadow-lg"
                  >

                    <h3 className="text-2xl font-bold text-orange-500 mb-4">

                      {payment.client_name}

                    </h3>

                    <div className="space-y-3 text-gray-300">

                      <p>

                        <span className="font-bold text-white">
                          Amount:
                        </span>

                        {" "}
                        ₹{payment.amount}

                      </p>

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

                        <span className="text-green-500">

                          {payment.status}

                        </span>

                      </p>

                    </div>

                  </div>

                ))

              )
            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Payments;