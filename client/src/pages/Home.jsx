import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 w-[90%] justify-center mx-auto ml-[8rem] mr-[2rem]">
        <h1 className="text-3xl font-bold lg:text-8xl w-[100rem]">
          Welcome to my Blog
        </h1>
        <p className="text-gray-500 text-lg sm:text-3xl mt-[3rem]">
          Here you will find a variety of articles and tutorials on topics such
          as web development, software engineering, emerging technologies and
          programming languages.
        </p>
        <Link
          to="/search"
          className="text-lg sm:text-2.5xl text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 mb-[5rem] bg-amber-100 dark:bg-slate-700 w-[50rem] h-[20rem] justify-center flex ml-[40rem]">
        <CallToAction />
      </div>

      <div className="max-w-8xl mx-auto p-3 flex flex-col gap-8 py-7 ml-[23rem]">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.slice(0, 4).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
