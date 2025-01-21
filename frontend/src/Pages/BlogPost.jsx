import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function BlogPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    stack: "",
    title: "",
    publisher: "",
    description: "",
    content: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB.");
      return;
    }
    setSelectedFile(file);
    setError("");
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please upload an image.");
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("image", selectedFile);
    Object.keys(formData).forEach((key) =>
      formDataToSend.append(key, formData[key])
    );

    try {
      await axios.post(
        "http://localhost:3000/api/post/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Blog post submitted successfully!");

      // Reset form data and file input
      setFormData({
        stack: "",
        title: "",
        publisher: "",
        description: "",
        content: "",
      });
      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      navigate("/");
    } catch (error) {
      console.error("Error submitting blog post:", error);
      setError(error.response?.data?.message || "Failed to submit blog post.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F9F5FF] to-[#E8E4F6] py-16 px-8 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-lg p-12">
        <div className="mb-10 text-center border-b pb-6">
          <h1 className="text-3xl font-bold text-[#4A3F90]">
            Craft Your Next Blog Post
          </h1>
          <p className="text-[#6D6A7C] mt-3 text-sm">
            Share your unique perspective and connect with your audience.
          </p>
        </div>
        <form onSubmit={submitFormHandler}>
          {/* Image Upload */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">
              Upload an Image
            </h2>
            <input
              type="file"
              accept="image/*"
              required
              name="image"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="block w-full text-sm text-gray-500 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-[#4A3F90] file:text-white file:font-semibold hover:file:bg-[#6C4FC3] transition duration-200"
            />
          </div>
          {error && (
            <div className="mb-6 text-red-600 text-sm font-medium">{error}</div>
          )}
          {/* Blog Details */}
          <div>
            <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">
              Blog Details
            </h2>
            {["stack", "title", "publisher", "description"].map((field) => (
              <div className="mb-6" key={field}>
                <label
                  className="block text-sm font-medium text-[#4A3F90] mb-3"
                  htmlFor={field}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  required
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#4A3F90]"
                />
              </div>
            ))}
            {/* Blog Content */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Blog Content
              </label>
              <textarea
                name="content"
                required
                placeholder="Provide detailed information about your blog"
                value={formData.content}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 h-40 text-sm focus:ring-2 focus:ring-[#4A3F90]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 bg-[#4A3F90] text-white font-semibold rounded-lg shadow-md ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#6C4FC3] transition duration-300"
              }`}
            >
              {isLoading ? "Publishing..." : "Publish Blog Post"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
