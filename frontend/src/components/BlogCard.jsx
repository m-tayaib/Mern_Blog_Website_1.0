import React from "react";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function BlogCard({ post }) {
  // console.log(post.image);
  return (
    <div
      className="bg-[#FFF] relative text-black w-[350px] mt-16  rounded-md h-[500px] px-3 py-2 shadow-lg 
    "
    >
      <div className="w-[330px] h-[280px] mx-auto ">
        <img
          className="w-full  h-full rounded-md  object-cover"
          src={`../public/images/uploads/${post.image}`}
          alt="image"
        />
      </div>
      <h3 className="text-[#6941C6] capitalize font-semibold text-[14px] mt-4">
        {post.stack}
      </h3>
      <div className="flex justify-between items-center gap-3 mt-2">
        <h2 className="leading-[32px] capitalize text-[#101828] font-semibold text-[24px] ">
          {post.title}
        </h2>{" "}
        <Link to={`/postShow/${post._id}`}>
          <MdOutlineArrowOutward
            fontSize={20}
            className="cursor-pointer hover:text-[#6941C6] hover:-translate-y-1 hover:scale-125 transition-all 2s"
          />
        </Link>
      </div>
      <p className="text-[16px] text-[#667085] lowercase mt-3 font-normal  leading-[20px]">
        {post.description}
      </p>
      <div className="absolute bottom-2 flex flex-col gap-3 items-start  ">
        <h3 className="text-[#667085] text-14px] font-semibold leading-[20px]  ">
          {post.publisher}
        </h3>
        <h4 className="text-[#667085] text-[14px] font-semibold leading-[20px]  ">
          {post.Date}
        </h4>
      </div>
    </div>
  );
}
