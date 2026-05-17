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

        <div className="bg-[#111111] w-full max-w-5xl rounded-3xl p-10 shadow-2xl border border-gray-800">

          <h1 className="text-5xl font-bold text-orange-500 mb-4 text-center">

            Consent Form

          </h1>

          <p className="text-gray-400 text-center mb-12">

            Please read all information carefully before continuing.

          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            {/* NATURE OF SERVICES */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                Nature of Services

              </h2>

              <p className="mb-4">

                RM Transformation provides personal training,
                online coaching, nutrition guidance, and
                customised workout programmes.

              </p>

              <ul className="list-disc pl-6 space-y-2">

                <li>Resistance and weight training</li>

                <li>Cardiovascular and conditioning exercises</li>

                <li>Functional fitness and mobility work</li>

                <li>High-intensity interval training (HIIT)</li>

                <li>Nutrition and lifestyle coaching</li>

              </ul>

            </div>

            {/* UNDERSTANDING OF RISKS */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                Understanding of Risks

              </h2>

              <ul className="list-disc pl-6 space-y-3">

                <li>

                  Physical exercise involves inherent risks
                  including muscle soreness, fatigue,
                  sprains, strains, and in rare cases,
                  more serious injury or illness.

                </li>

                <li>

                  The trainer will take all reasonable steps
                  to ensure safety but cannot eliminate all
                  risk associated with physical activity.

                </li>

                <li>

                  It is my responsibility to inform the trainer
                  of any health conditions, injuries, or
                  limitations that may affect my ability
                  to exercise safely.

                </li>

                <li>

                  I should stop exercising and notify the trainer
                  immediately if I experience pain, dizziness,
                  shortness of breath, or unusual discomfort.

                </li>

              </ul>

            </div>

            {/* MEDICAL CLEARANCE */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                Medical Clearance

              </h2>

              <ul className="list-disc pl-6 space-y-3">

                <li>

                  I have completed the PAR-Q Health Screening
                  Form and all information provided is accurate.

                </li>

                <li>

                  I am in suitable physical condition to
                  participate in exercise and have consulted
                  a doctor where required.

                </li>

                <li>

                  I have disclosed all relevant medical conditions,
                  medications, and physical limitations.

                </li>

                <li>

                  I will notify RM Transformation of any changes
                  to my health status throughout the programme.

                </li>

              </ul>

            </div>

            {/* CONSENT */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                Consent to Training

              </h2>

              <p>

                I hereby provide my voluntary and informed consent
                to participate in personal training services
                provided by RM Transformation. I understand
                the nature of the programme and agree to follow
                the guidance of my trainer at all times.

              </p>

            </div>

            {/* LIABILITY */}

            <div className="bg-black border border-gray-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold text-orange-500 mb-4">

                Liability Waiver

              </h2>

              <p>

                I understand that participation in any exercise
                programme is voluntary and I assume full
                responsibility for any risks, injuries,
                or damages that may occur as a result of
                participation, except where caused by negligence
                of RM Transformation.

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

            {/* SIGNATURE */}

            <div className="mt-8">

              <label className="block mb-3 text-lg text-orange-500 font-semibold">

                Digital Signature

              </label>

              <input
                type="text"
                placeholder="Type your full name"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full bg-black border border-orange-500 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            {/* BUTTON */}

            <button
              onClick={handleNext}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl text-lg font-bold mt-10 shadow-lg shadow-orange-500/30"
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