import { IoIosSearch } from "react-icons/io";

export default function Header() {
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
      <div className="flex items-center max-w-[280px]  mx-auto mt-8 gap-[8px] shadow-sm p-[5px_16px] rounded-[8px] border-2 border-[] bg-[#FFF]">
        <IoIosSearch className="text-[#667085] cursor-pointer" fontSize={20} />
        <input
          type="text"
          placeholder="search"
          className="outline-none text-[#667085] cursor-text p-1"
        />
      </div>

    </header>
  );
}
