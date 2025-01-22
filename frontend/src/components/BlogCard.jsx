import React from "react";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function BlogCard({ post }) {
  return (
    <div
      className="bg-white relative font-serif text-black w-[350px] mt-16 rounded-md h-[500px] px-3 py-2 shadow-lg overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-[330px] h-[280px] mx-auto">
        <img
          className="w-full h-full rounded-md object-cover"
          src={`../public/images/uploads/${post.image}`}
          alt={post.title || "Blog Image"}
        />
      </div>

      {/* Stack (Category) */}
      <h3 className="text-[#6941C6] capitalize font-semibold text-[14px] mt-4 truncate">
        {post.stack}
      </h3>

      {/* Title and Link */}
      <div className="flex justify-between items-center gap-3 mt-2">
        <h2 className="leading-[32px] capitalize text-[#101828] font-semibold text-[20px] truncate">
          {post.title}
        </h2>
        <Link to={`/postShow/${post._id}`}>
          <MdOutlineArrowOutward
            fontSize={20}
            className="cursor-pointer hover:text-[#6941C6] hover:-translate-y-1 hover:scale-125 transition-all duration-200"
          />
        </Link>
      </div>

      {/* Description */}
      <p className="text-[14px] text-[#667085] mt-3 font-normal leading-[20px] line-clamp-3">
        {post.description}
      </p>

      {/* Publisher and Date */}
      <div className="absolute bottom-3 left-3 flex flex-col gap-1 items-start">
        <h3 className="text-[#667085] text-[14px] font-semibold leading-[20px] truncate">
          {post.publisher}
        </h3>
        <h4 className="text-[#667085] text-[14px] font-semibold leading-[20px] truncate">
          {post.Date}
        </h4>
      </div>
    </div>
  );
}
