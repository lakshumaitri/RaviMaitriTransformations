import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ContractForm() {

  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {

    if (!agree) {

      alert("Please accept contract terms");

      return;

    }

    localStorage.setItem("contractAccepted", true);

    alert("Registration Successful");

    navigate("/client-login");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 pb-20 px-6 flex justify-center">

        <div className="bg-[#111111] w-full max-w-5xl rounded-3xl p-10 shadow-2xl border border-gray-800">

          <h1 className="text-5xl font-bold text-orange-500 mb-4 text-center">

            Personal Training Contract

          </h1>

          <p className="text-gray-400 text-center mb-12">

            Please read all terms carefully before completing registration.

          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            {/* FEES */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                1. Fees and Payment

              </h2>

              <p>

                All fees are as agreed and confirmed at the
                time of booking. Payment is due in advance
                of services commencing.

              </p>

              <p className="mt-4">

                Payment can be made via bank transfer or
                agreed payment method.

              </p>

              <p className="mt-4">

                No refunds will be issued or carry forward
                of sessions for missed sessions or unused
                sessions of a monthly package once payment
                has been made.

              </p>

            </div>

            {/* SCHEDULING */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                2. Session Scheduling & Cancellations

              </h2>

              <ul className="list-disc pl-6 space-y-3">

                <li>

                  Sessions must be booked 24 hours in advance.

                </li>

                <li>

                  Clients may reschedule a session with a
                  minimum of 24 hours notice at no charge.

                </li>

                <li>

                  Cancellations made within 24 hours of a
                  scheduled session or no-shows will be
                  forfeited and counted as completed sessions.

                </li>

                <li>

                  The trainer reserves the right to reschedule
                  a session in the event of unforeseen
                  circumstances with reasonable notice given
                  to the client.

                </li>

              </ul>

            </div>

            {/* CLIENT RESPONSIBILITIES */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                3. Client Responsibilities

              </h2>

              <ul className="list-disc pl-6 space-y-3">

                <li>

                  Complete the PAR-Q health screening form
                  prior to commencing training.

                </li>

                <li>

                  Disclose any relevant medical conditions,
                  injuries, or physical limitations.

                </li>

                <li>

                  Follow the trainer’s guidance during sessions
                  for safety purposes.

                </li>

                <li>

                  Arrive on time for scheduled sessions.

                </li>

                <li>

                  Sessions will be conducted for 60 minutes
                  from the scheduled time.

                </li>

                <li>

                  Maintain a reasonable level of personal hygiene.

                </li>

                <li>

                  Notify the trainer immediately if any health
                  concerns arise during the programme.

                </li>

              </ul>

            </div>

            {/* PROGRAMME DURATION */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                4. Programme Duration & Termination

              </h2>

              <p>

                This agreement is valid for the duration of
                the agreed package.

              </p>

              <p className="mt-4">

                Either party may terminate this agreement
                with 7 days written notice.

              </p>

              <p className="mt-4">

                In the event of termination by the client,
                any unused sessions within a monthly package
                are non-refundable.

              </p>

              <p className="mt-4">

                The trainer reserves the right to terminate
                this agreement immediately if a client behaves
                in a manner deemed unsafe, disrespectful,
                or in violation of these terms.

              </p>

            </div>

            {/* DISCLAIMER */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                5. Results Disclaimer

              </h2>

              <p>

                Results from personal training vary depending
                on individual effort, commitment, nutrition,
                sleep, and other lifestyle factors.

              </p>

              <p className="mt-4">

                RM Transformation does not guarantee specific
                results. The trainer will provide professional
                guidance and support, but ultimate results
                depend on the client’s adherence to the programme.

              </p>

            </div>

            {/* AGREEMENT */}

            <div className="flex items-start gap-4 mt-10 bg-black border border-orange-500 p-5 rounded-2xl">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-5 h-5 mt-1"
              />

              <p className="text-gray-300">

                I have read, understood, and agree to all
                terms and conditions stated above.

              </p>

            </div>

            {/* BUTTON */}

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl text-lg font-bold mt-10 shadow-lg shadow-orange-500/30"
            >

              Complete Registration

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ContractForm;