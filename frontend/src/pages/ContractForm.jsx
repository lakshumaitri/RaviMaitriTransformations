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

        <div className="bg-[#111111] w-full max-w-4xl rounded-3xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">

            Personal Training Contract

          </h1>

          <div className="space-y-6 text-gray-300 leading-8">

            <p>

              Sessions must be booked in advance.

            </p>

            <p>

              Missed sessions without prior notice may be forfeited.

            </p>

            <p>

              RM Transformation does not guarantee
              specific fitness results.

            </p>

            <p>

              Clients participate in training sessions
              at their own risk.

            </p>

            <p>

              Personal information and progress data
              will remain confidential.

            </p>

            <div className="flex items-center gap-4 mt-10">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-5 h-5"
              />

              <p>

                I accept the personal training contract.

              </p>

            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl text-lg font-bold mt-10"
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