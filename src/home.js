import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="m-2">
      {error && <div className="text-danger fw-bolder container">{error}</div>}
      {isPending && <div className="text-warning">Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "NjoxPy")} title="NjoxPy Blogs"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Neicore" )} title="Neicore Blogs"></BlogList> */}
    </div>
  );
};

export default Home;
