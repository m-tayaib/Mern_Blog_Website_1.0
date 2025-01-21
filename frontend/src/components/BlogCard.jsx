import React from "react";
import image from "../assets/image.png";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function BlogCard() {
  return (
    <div className="bg-[#FFF] text-black max-w-[350px] mt-16  rounded-md max-h-[500px] px-3 py-2 shadow-lg ">
      <div className="max-w-[350px] max-h-[280px] mx-auto ">
        <img
          className="w-full  h-full rounded-md  object-cover"
          src={image}
          alt="image"
        />
      </div>
      <h3 className="text-[#6941C6] font-semibold text-[14px] mt-4">Design</h3>
      <div className="flex justify-between items-center gap-3 mt-2">
        <h2 className="leading-[32px] text-[#101828] font-semibold text-[24px] ">
          UX review presentations
        </h2>{" "}
        <Link to={`/postShow/12345678qwsazxdrv`}>
          <MdOutlineArrowOutward
            fontSize={20}
            className="cursor-pointer hover:text-[#6941C6] hover:-translate-y-1 hover:scale-125 transition-all 2s"
          />
        </Link>
      </div>
      <p className="text-[16px] text-[#667085] mt-3 font-normal  leading-[20px]">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>
      <div className="flex flex-col items-start  mt-4">
        <h3 className="text-[#667085] text-[14px] font-semibold leading-[20px]  ">
          Olivia Rhye
        </h3>
        <h4 className="text-[#667085] text-[14px] font-semibold leading-[20px]  ">
          Feb 2, 2022
        </h4>
      </div>
    </div>
  );
}
