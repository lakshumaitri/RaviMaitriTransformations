import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [transformations, setTransformations] = useState([]);

  useEffect(() => {

    fetchTransformations();

  }, []);

  const fetchTransformations = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:5000/all-transformations"
      );

      setTransformations(
        Array.isArray(response.data)
          ? response.data
          : []
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-24">

        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Fitness"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />

        <div className="relative z-10 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >

            Ravi Maitri

            <br />

            <span className="text-orange-500">

              Transformations

            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10 px-2"
          >

            Personal Gym Training & Swimming Coaching
            for Kids to Adults

          </motion.p>

          <motion.a
            href="/register"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg md:text-xl font-bold transition"
          >

            Join Now

          </motion.a>

        </div>

      </section>

      

      

     

      {/* FOOTER */}

      <footer className="py-8 text-center border-t border-gray-800 text-gray-500 text-sm md:text-base px-4">

        © 2026 Ravi Maitri Transformations.
        All Rights Reserved.

      </footer>

    </div>

  );

}

export default Home;