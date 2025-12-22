import { useParams, useLoaderData } from "react-router-dom";

const BlogDetails = ({ blogs, title}) => {
  const { author } = useParams("");
  const response = useLoaderData();
  return (
    <div>
      <h1>Blog Details</h1>
      <p>{author}</p>
    </div>
  );
};

export default BlogDetails;

export const blogLoaderDetails = async ({ params }) => {
  const { author } = params;
  const response = await fetch(`http://localhost:8000/blogs/${author}`);

  if (!response.ok) {
    throw Error("Could not fetch event");
  }
  return response.json();
};
