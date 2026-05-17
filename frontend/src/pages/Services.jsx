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

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Weight / Fat Loss

            </h2>

            <p className="text-gray-400 text-lg">

              Customized fat loss programs with training,
              cardio guidance and nutrition support.

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Muscle Building

            </h2>

            <p className="text-gray-400 text-lg">

              Build lean muscle mass, strength and improve
              overall body physique with expert coaching.

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Athletic / Performance Coaching

            </h2>

            <p className="text-gray-400 text-lg">

              Improve speed, endurance, agility and sports
              performance with advanced athletic training.

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Body Recomposition

            </h2>

            <p className="text-gray-400 text-lg">

              Simultaneously lose fat and build muscle for
              a complete body transformation.

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Rehabilitation Training

            </h2>

            <p className="text-gray-400 text-lg">

              Recovery-focused exercise programs for injury
              prevention, mobility and rehabilitation.

            </p>

          </div>

          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">

              Swimming Coaching

            </h2>

            <p className="text-gray-400 text-lg">

              Professional swimming coaching for kids and
              adults from beginner to advanced level.

            </p>

          </div>
          <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:scale-105 transition">

  <h2 className="text-2xl font-bold text-orange-500 mb-4">

    Online Coaching

  </h2>

  <p className="text-gray-300 leading-8 mb-6">

    Personalized online fitness coaching including workout
    plans, nutrition guidance, progress tracking, and
    one-on-one trainer support from anywhere.

  </p>

  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold">

    Enquire Now

  </button>

</div>

        </div>

      </div>

    </div>

  );

}

export default Services;