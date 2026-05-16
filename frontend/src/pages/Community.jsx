import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

import { useState } from "react";

function Community() {

  const [showModal, setShowModal] = useState(false);

  const [posts, setPosts] = useState([

    {
      client_name: "Rahul Sharma",
      caption: "Lost 8kg in 2 months with RM Transformation 🔥",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },

    {
      client_name: "Priya Singh",
      caption: "Swimming training helped improve my fitness 💪",
      image:
        "https://images.unsplash.com/photo-1540206395-68808572332f"
    }

  ]);

  const [newPost, setNewPost] = useState({

    client_name: "",
    caption: ""

  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {

    setNewPost({

      ...newPost,
      [e.target.name]: e.target.value

    });

  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(
      URL.createObjectURL(file)
    );

  };

  const addPost = () => {

    if (
      newPost.client_name === "" ||
      newPost.caption === ""
    ) {

      alert("Please fill all fields");

      return;

    }

    const createdPost = {

      ...newPost,
      image: selectedImage

    };

    setPosts([
      createdPost,
      ...posts
    ]);

    setNewPost({

      client_name: "",
      caption: ""

    });

    setSelectedImage(null);

    setShowModal(false);

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20 max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">

            RM Community

          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold"
          >

            + Create Post

          </button>

        </div>

        {/* POSTS */}

        <div className="grid gap-10">

          {
            posts.map((post, index) => (

              <PostCard
                key={index}
                post={post}
              />

            ))
          }

        </div>

      </div>

      {/* MODAL */}

      {
        showModal && (

          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-6">

            <div className="bg-[#111111] w-full max-w-2xl p-8 rounded-3xl">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold text-orange-500">

                  Create Post

                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-3xl"
                >

                  ×

                </button>

              </div>

              <div className="space-y-5">

                <input
                  type="text"
                  name="client_name"
                  placeholder="Your Name"
                  value={newPost.client_name}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
                />

                <textarea
                  name="caption"
                  placeholder="Write your post..."
                  rows="4"
                  value={newPost.caption}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 p-4 rounded-xl outline-none"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full bg-black border border-gray-700 p-4 rounded-xl"
                />

                {
                  selectedImage && (

                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="w-full h-80 object-cover rounded-2xl"
                    />

                  )
                }

                <button
                  onClick={addPost}
                  className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold text-lg"
                >

                  Post

                </button>

              </div>

            </div>

          </div>

        )
      }

    </div>

  );

}

export default Community;