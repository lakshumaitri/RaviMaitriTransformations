import Navbar from "../components/Navbar";

function Services() {

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 pb-20 px-5 md:px-8">

        <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500 mb-16">

          Services

        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* WEIGHT LOSS */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Weight / Fat Loss

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              Customized fat loss programs with training,
              cardio guidance and nutrition support.

            </p>

          </div>

          {/* MUSCLE BUILDING */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Muscle Building

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              Build lean muscle mass, strength and improve
              overall body physique with expert coaching.

            </p>

          </div>

          {/* ATHLETIC */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Athletic / Performance Coaching

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              Improve speed, endurance, agility and sports
              performance with advanced athletic training.

            </p>

          </div>

          {/* REHAB */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Rehabilitation Training

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              Recovery-focused exercise programs for injury
              prevention, mobility and rehabilitation.

            </p>

          </div>

          {/* SWIMMING */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Swimming Coaching

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              Professional swimming coaching for kids and
              adults from beginner to advanced level.

            </p>

          </div>

          {/* ONLINE COACHING */}

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <h2 className="text-2xl font-bold text-orange-500 mb-6">

              Online Coaching

            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-6">

              Personalized online fitness coaching including workout
              plans, nutrition guidance, progress tracking, and
              one-on-one trainer support from anywhere.

            </p>

          

          </div>

        </div>

      </div>

    </div>

  );

}

export default Services;