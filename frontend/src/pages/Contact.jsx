import Navbar from "../components/Navbar";

function Contact() {

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-5 md:px-8">

        <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500 mb-16">

          Contact

        </h1>

        <div className="max-w-4xl mx-auto bg-[#111111] p-10 rounded-3xl shadow-lg text-center">

          <div className="space-y-6 text-lg md:text-2xl text-gray-300">

            <p>

              <span className="font-bold text-orange-500">

                Trainer:

              </span>

              {" "}

              Ravi Maitri

            </p>

            <p>

              <span className="font-bold text-orange-500">

                Phone:

              </span>

              {" "}

              +971 569371885

            </p>

            <p>

              <span className="font-bold text-orange-500">

                Email:

              </span>

              {" "}

              ravimaitri25@gmail.com

            </p>

            <p>

              <span className="font-bold text-orange-500">

                Instagram:

              </span>

              {" "}

              @dxbcoach_ravi

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Contact;