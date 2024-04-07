import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, SetError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        // handle response
        if (!response.ok) {
          throw Error("Could not fetch data");
        }
        return response.json();
      })

      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        SetError(null);
      })

      // catch network error
      .catch((err) => {
        setIsPending(false);
        SetError(err.message);
      });
  }, []);

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
