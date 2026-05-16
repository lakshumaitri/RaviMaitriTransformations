import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PARQForm() {

  const navigate = useNavigate();

  const [answers, setAnswers] = useState({

    chestPain: "No",
    dizziness: "No",
    bloodPressure: "No",
    boneProblem: "No",
    pregnant: "No",
    diabetes: "No"

  });

  const handleChange = (e) => {

    setAnswers({

      ...answers,
      [e.target.name]: e.target.value

    });

  };

  const handleNext = () => {

    localStorage.setItem(
      "parqAnswers",
      JSON.stringify(answers)
    );

    navigate("/consent-form");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 pb-20 px-6 flex justify-center">

        <div className="bg-[#111111] w-full max-w-3xl rounded-3xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">

            PAR-Q Health Form

          </h1>

          <div className="space-y-8">

            {/* QUESTION 1 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you experience chest pain during exercise?

              </h2>

              <select
                name="chestPain"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            {/* QUESTION 2 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you feel dizziness or lose balance?

              </h2>

              <select
                name="dizziness"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            {/* QUESTION 3 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you have high blood pressure?

              </h2>

              <select
                name="bloodPressure"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            {/* QUESTION 4 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you have bone or joint problems?

              </h2>

              <select
                name="boneProblem"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            {/* QUESTION 5 */}

            <div>

              <h2 className="text-lg mb-3">

                Are you diabetic?

              </h2>

              <select
                name="diabetes"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            {/* QUESTION 6 */}

            <div>

              <h2 className="text-lg mb-3">

                Are you pregnant?

              </h2>

              <select
                name="pregnant"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>

            </div>

            <button
              onClick={handleNext}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl text-lg font-bold mt-10"
            >

              Next

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PARQForm;