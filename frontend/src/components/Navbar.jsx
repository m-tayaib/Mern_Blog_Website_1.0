import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-end gap-3 px-10 py-7 h-[40px]">
      <Link
        className=" text-[#6941C6] bg-[#F2E9FD] hover:bg-[#ab79e9]  hover:text-[#fff] shadow-md  py-1 px-2  "
        to="/"
      >
        Home
      </Link>
      <Link
        className=" text-[#6941C6] bg-[#F2E9FD] hover:bg-[#ab79e9]  hover:text-[#fff] shadow-md  py-1 px-2  "
        to="/create"
      >
        Create Post
      </Link>
    </nav>
  );
}
