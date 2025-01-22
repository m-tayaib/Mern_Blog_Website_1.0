import { useEffect, useState } from "react";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ShowPost from "./Pages/SinglePost.jsx";
import { Routes, Route } from "react-router";

import BlogPost from "./Pages/BlogPost.jsx";
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="animate-spin mx-auto rounded-full h-16 w-16 border-b-4 mb-6 border-blue-600 "></div>
          <p className="text-2xl font-thin">Loading...</p>
        </div>
      ) : (
        <>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<BlogPost />} />
            <Route path="/postShow/:id" element={<ShowPost />} />
          </Routes>{" "}
        </>
      )}
    </>
  );
}
