import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

function PostCard({ post }) {

  const [likes, setLikes] = useState(0);

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const addComment = () => {

    if (comment.trim() === "") return;

    setComments([
      ...comments,
      comment
    ]);

    setComment("");

  };

  return (

    <div className="bg-[#111111] rounded-3xl overflow-hidden shadow-lg">

      {/* IMAGE */}

      {
        post.image && (

          <img
            src={post.image}
            alt="Post"
            className="w-full h-80 object-cover"
          />

        )
      }

      {/* CONTENT */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-orange-500 mb-3">

          {post.client_name}

        </h2>

        <p className="text-gray-300 mb-6">

          {post.caption}

        </p>

        {/* ACTIONS */}

        <div className="flex items-center gap-6 mb-6">

          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center gap-2 hover:text-orange-500"
          >

            <Heart />

            {likes}

          </button>

          <div className="flex items-center gap-2">

            <MessageCircle />

            {comments.length}

          </div>

        </div>

        {/* COMMENT INPUT */}

        <div className="flex gap-3 mb-4">

          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-black border border-gray-700 p-3 rounded-xl outline-none"
          />

          <button
            onClick={addComment}
            className="bg-orange-500 hover:bg-orange-600 px-5 rounded-xl font-bold"
          >

            Post

          </button>

        </div>

        {/* COMMENTS */}

        <div className="space-y-3">

          {
            comments.map((item, index) => (

              <div
                key={index}
                className="bg-black p-3 rounded-xl text-gray-300"
              >

                {item}

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default PostCard;