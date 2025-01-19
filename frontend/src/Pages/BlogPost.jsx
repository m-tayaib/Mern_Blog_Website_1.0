import React from "react";

export default function BlogPost() {
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

        {/* Upload Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">Upload an Image</h2>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="file"
              accept="image/*"
              required
              className="block w-full sm:w-auto text-sm text-gray-500 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-[#4A3F90] file:text-white file:font-semibold hover:file:bg-[#6C4FC3] transition duration-200 focus:ring-2 focus:ring-[#4A3F90]"
            />
            <button
              type="button"
              className="py-3 px-8 bg-[#4A3F90] text-white font-semibold rounded-lg shadow-md hover:bg-[#6C4FC3] transition duration-300"
            >
              Upload
            </button>
          </form>
        </div>

        {/* Blog Details Form */}
        <div>
          <h2 className="text-xl font-semibold text-[#4A3F90] mb-6">
            Blog Details
          </h2>
          <form className="space-y-8">
            {/* Stack Name */}
            <div>
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Stack Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Design, Product, Marketing"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
              />
            </div>

            {/* Blog Title */}
            <div>
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Blog Title
              </label>
              <input
                type="text"
                required
                placeholder="Enter your blog title"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
              />
            </div>

            {/* Publisher Name */}
            <div>
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Publisher Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Short Description
              </label>
              <input
                type="text"
                required
                placeholder="Write a brief description of your blog"
                className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
              />
            </div>

            {/* Blog Content */}
            <div>
              <label className="block text-sm font-medium text-[#4A3F90] mb-3">
                Blog Content
              </label>
              <textarea
                required
                placeholder="Provide detailed information about your blog"
                className="w-full border border-gray-300 rounded-lg p-4 h-40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3F90]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#4A3F90] text-white font-semibold rounded-lg shadow-md hover:bg-[#6C4FC3] transition duration-300"
            >
              Publish Blog Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}