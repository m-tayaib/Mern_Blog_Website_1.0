import { useState } from "react";

export default function BlogPost() {
  const [formData, setFormData] = useState({
    stack: "",
    title: "",
    publisher: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      stack: "",
      title: "",
      publisher: "",
      description: "",
      content: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F9F5FF] to-[#E8E4F6] py-16 px-8 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-lg p-12">
        {/* Page Header */}
        <div className="mb-10 text-center border-b pb-6">
          <h1 className="text-3xl font-bold text-[#4A3F90]">
            Craft Your Next Blog Post
          </h1>
          <p className="text-[#6D6A7C] mt-3 text-sm">
            Share your unique perspective and connect with your audience.
          </p>
        </div>

        {/* Single Form */}
        <form onSubmit={submitFormHandler}>
          {/* Upload Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">
              Upload an Image
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="file"
                accept="image/*"
                required
                className="block w-full sm:w-auto text-sm text-gray-500 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-[#4A3F90] file:text-white file:font-semibold hover:file:bg-[#6C4FC3] transition duration-200 focus:ring-2 focus:ring-[#4A3F90]"
              />
            </div>
          </div>

          {/* Blog Details Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">
              Blog Details
            </h2>

            {/* Stack Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Stack Name
              </label>
              <input
                type="text"
                required
                name="stack"
                placeholder="e.g., Design, Product, Marketing"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
                value={formData.stack}
                onChange={handleChange}
              />
            </div>

            {/* Blog Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter your blog title"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Publisher Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Publisher Name
              </label>
              <input
                type="text"
                name="publisher"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
                value={formData.publisher}
                onChange={handleChange}
              />
            </div>

            {/* Short Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Short Description
              </label>
              <input
                type="text"
                name="description"
                required
                placeholder="Write a brief description of your blog"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Blog Content */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Blog Content
              </label>
              <textarea
                required
                name="content"
                placeholder="Provide detailed information about your blog"
                className="w-full border border-gray-300 rounded-lg p-4 h-40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#4A3F90] text-white font-semibold rounded-lg shadow-md hover:bg-[#6C4FC3] transition duration-300"
            >
              Publish Blog Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
