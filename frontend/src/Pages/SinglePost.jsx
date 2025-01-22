import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

export default function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/post/postShow/${id}`
        );
        setPost(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load post data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin mx-auto rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-xl font-medium text-gray-600">
            Fetching post details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-600">Error</p>
          <p className="text-lg text-gray-500 mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Retry
          </button>
          <button
            onClick={handleBack}
            className="mt-4 ml-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen font-serif bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Post Header */}
        <div className="relative h-96 bg-gray-200">
          <img
            src={
              post?.post?.image && !post.post.image.startsWith("http")
                ? `../public/images/uploads/${post.post.image}`
                : post?.post?.image ||
                  "https://via.placeholder.com/1200x600?text=No+Image+Available"
            }
            alt={post?.post?.title || "Post Image"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg text-center px-4">
              {post?.post?.title || "Untitled Post"}
            </h1>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-500 text-sm">
                Published by
                <span className="font-semibold text-gray-700 ml-1">
                  {post?.post?.publisher || "Unknown"}
                </span>
              </p>
              <p className="text-gray-400 text-xs">
                {post?.post?.createdAt
                  ? `Published on: ${new Date(
                      post.post.createdAt
                    ).toLocaleDateString()}`
                  : "Date unavailable"}
              </p>
            </div>
            {post?.post?.stack && (
              <span className="inline-block bg-blue-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                {post.post.stack}
              </span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            {post?.post?.description || "No description provided."}
          </p>

          <div className="mt-8 text-gray-800 leading-relaxed whitespace-pre-line">
            {post?.post?.content || "No content available."}
          </div>
        </div>
      </div>
    </section>
  );
}
