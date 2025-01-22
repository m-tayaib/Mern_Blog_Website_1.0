import Header from "../components/Header.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const getAllPost = async () => {
      const res = await axios.get("http://localhost:3000/api/post/readPost");
      setPostData(res.data.post);
    };

    getAllPost();
  }, []);

  return (
    <section className="md:h-screen container  font-serif ">
      <Header />
      <div className="grid md md:grid-cols-3 gap-2 pb-10 grid-cols-1">
        {postData.length === 0 && (
          <h1 className="text-3xl text-[#6941C6] mt-32">No Post Yet!</h1>
        )}

        {/* <BlogCard /> */}
        {postData.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
