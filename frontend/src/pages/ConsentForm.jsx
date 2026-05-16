import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ConsentForm() {

  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);

  const [signature, setSignature] = useState("");

  const handleNext = () => {

    if (!agree || signature === "") {

      alert("Please accept terms and enter signature");

      return;

    }

    localStorage.setItem("consentAgree", agree);

    localStorage.setItem("signature", signature);

    navigate("/contract-form");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 pb-20 px-6 flex justify-center">

        <div className="bg-[#111111] w-full max-w-4xl rounded-3xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">

            Consent Form

          </h1>

          <div className="space-y-6 text-gray-300 leading-8">

            <p>

              I understand that physical exercise involves risks,
              including injury, muscle soreness, heart stress,
              and other possible health complications.

            </p>

            <p>

              I voluntarily participate in fitness training
              under Ravi Maitri Transformations.

            </p>

            <p>

              I confirm that all medical information provided
              by me is accurate and truthful.

            </p>

            <p>

              I agree that Ravi Maitri Transformations and
              its trainers are not liable for injuries caused
              during training sessions.

            </p>

            <div className="flex items-center gap-4 mt-8">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-5 h-5"
              />

              <p>

                I agree to all terms and conditions.

              </p>

            </div>

            <div className="mt-8">

              <label className="block mb-3 text-lg">

                Digital Signature

              </label>

              <input
                type="text"
                placeholder="Type your full name"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
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

export default ConsentForm;