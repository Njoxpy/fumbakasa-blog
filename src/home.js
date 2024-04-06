import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        if (!response.ok) {
          console.error("failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="m-2">
      {isPending && <div className="text-warning">Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "NjoxPy")} title="NjoxPy Blogs"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Neicore" )} title="Neicore Blogs"></BlogList> */}
    </div>
  );
};

export default Home;
