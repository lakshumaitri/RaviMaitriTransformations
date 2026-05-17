import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PARQForm() {

  const navigate = useNavigate();

  const [answers, setAnswers] = useState({

    dizziness: "No",
    jointProblem: "No",
    medication: "No",
    diabetes: "No",
    bloodPressure: "No",
    pregnant: "No",
    injuries: "No",
    reason: "No",
    additional_note: ""

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

                Do you lose your balance because of dizziness or do you ever lose consciousness?

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

            {/* QUESTION 2 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you have a bone or joint problem that could be made worse by physical activity?

              </h2>

              <select
                name="jointProblem"
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

                Are you currently on any medication? 

              </h2>

              <select
                name="medication"
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

                Do you have diabetes (Type 1 or Type 2)?

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

            {/* QUESTION 5 */}

            <div>

              <h2 className="text-lg mb-3">

                Do you have high blood pressure or high cholesterol?

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

            {/* QUESTION 6 */}

            <div>

              <h2 className="text-lg mb-3">

                Are you pregnant or have you given birth in the past 6 months?

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
            {/* QUESTION 7 */}
            <div>
            <h2 className="text-lg mb-3">
              Do you have any injuries, surgeries, or physical limitations we should be aware of?
              </h2>
              <select
                name="injuries"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>
              </div>

              {/* QUESTION 8*/}
            <div>
            <h2 className="text-lg mb-3">
              Do you know of any other reason why you should not do physical activity?
              </h2>
              <select
                name="reason"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl"
              >

                <option>No</option>
                <option>Yes</option>

              </select>
              </div>

              <div>

  <h2 className="text-lg mb-3">

    Additional Notes

  </h2>

  <textarea
    name="additional_note"
    placeholder="Write if there is any other information you would like the trainer to know apart from the above questions..."
    onChange={handleChange}
    className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none min-h-[120px]"
  />

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