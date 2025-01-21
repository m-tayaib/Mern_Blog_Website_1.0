import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ShowPost from "./Pages/ShowPost.jsx";
import { Routes, Route } from "react-router";

import BlogPost from "./Pages/BlogPost.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<BlogPost />} />
        <Route path="/postShow/:id" element={<ShowPost />} />
      </Routes>
    </>
  );
}
