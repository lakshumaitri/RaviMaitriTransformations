import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function AddTransformations() {

  const [image, setImage] = useState(null);

  const [caption, setCaption] = useState("");

  const uploadTransformation = async () => {

    try {

      const formData = new FormData();

      formData.append("image", image);

      formData.append("caption", caption);

      await axios.post(
        "https://ravimaitritransformations.onrender.com/public-transformation",
        formData
      );

      alert("Transformation Uploaded");

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20 flex justify-center">

        <div className="bg-[#111111] p-10 rounded-3xl w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center">

            Add Transformations

          </h1>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            className="w-full mb-6"
          />

          <textarea
            placeholder="Transformation Caption"
            value={caption}
            onChange={(e) =>
              setCaption(e.target.value)
            }
            className="w-full bg-black border border-gray-700 p-4 rounded-2xl h-40 mb-6"
          />

          <button
            onClick={uploadTransformation}
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg"
          >

            Upload Transformation

          </button>

        </div>

      </div>

    </div>

  );

}

export default AddTransformations;