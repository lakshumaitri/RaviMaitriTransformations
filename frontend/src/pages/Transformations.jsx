import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

function Transformations() {

  const [transformations, setTransformations] = useState([]);

  useEffect(() => {

    fetchTransformations();

  }, []);

  const fetchTransformations = async () => {

    try {

      const response = await axios.get(
        "https://ravimaitritransformations.onrender.com/all-transformations"
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

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 pb-20 px-5 md:px-8">

        <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500 mb-16">

          Transformations

        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {
            transformations.map((image, index) => (

              <motion.img
                key={index}
                src={`https://ravimaitritransformations.onrender.com/uploads/${image.image_name}`}
                alt="Transformation"
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl h-80 md:h-96 w-full object-cover shadow-lg"
              />

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Transformations;