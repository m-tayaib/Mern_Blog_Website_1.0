import Header from "../components/Header.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const getAllPost = () => {
      const res = axios.get("http://localhost:3000/api/post/readPost");
      setPostData(res.data);
      // console.log(res);
    };

    getAllPost();
  }, []);

  return (
    <section className="md:h-screen container  ">
      <Header />
      <div className="grid md md:grid-cols-3 gap-2 pb-10 grid-cols-1">
       
      </div>
    </section>
  );
}
