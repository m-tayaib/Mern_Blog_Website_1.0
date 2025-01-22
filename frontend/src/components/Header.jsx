import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [searchData, setSearchData] = useState("");

  return (
    <header className="text-center container pt-8 ">
      <p className="text-[#6941C6] p-2 px-3 font-medium   text-[14px] rounded-full bg-[#f2e9fd] inline">
        Our Blogs
      </p>
      <h1 className="text-[48px] font-semibold mt-4 text-[#42307D] leading-[56px] letter-spacing-[-0.96px]">
        Resources and insights
      </h1>
      <p className="text-[#6941C6] mt-3 font-thin -tracking-tight text-[20px] leading-[30px]">
        The latest industry news, interviews, technologies, and resources.
      </p>
    </header>
  );
}
