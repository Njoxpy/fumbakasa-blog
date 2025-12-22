import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  document.title = process.env.REACT_APP_TITLE;
  const [data, setData] = useState("");

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:4000/api/v1/blogs");

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/blogs") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((fetchedData) => {
        console.log(fetchedData);

        setData(fetchedData); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors, e.g., set an error state
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
