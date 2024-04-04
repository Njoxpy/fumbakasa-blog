import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "React Hooks: Understanding useState",
      body: "In this blog post, we explore the useState hook in React and how it can be used to manage component state.",
      author: "NjoxPy",
      id: 1,
    },
    {
      title: "Building Modern Web Applications with React",
      body: "In this blog post, we explore the useState hook in React and how it can be used to manage component state.",
      author: "Chax",
      id: 2,
    },
    {
      title: "Introduction to Node.js",
      body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications. This blog post provides an introduction to Node.js and its key features.",
      author: "Neicore",
      id: 3,
    },
    {
      title: "Mastering CSS Grid Layout",
      body: "CSS Grid Layout is a powerful tool for creating complex layouts with ease. In this blog post, we dive deep into CSS Grid and explore its various features.",
      author: "Elvis",
      id: 4,
    },
    {
      title: "Imposter Syndrome",
      body: "Many individuals, especially those new to the tech industry, may battle imposter syndrome, feeling inadequate or questioning their skills and qualifications.",
      author: "Alpha",
      id: 5,
    },
    {
      title: "Limited Access to Mentorship",
      body: "Aspiring developers often lack access to mentors who can provide guidance and support in their career journey.",
      author: "NjoxPy",
      id: 6,
    },
    {
        title: "Inconsistent Code Quality Standards",
        body: "Developers working on collaborative projects may face difficulties in maintaining consistent code quality standards within the team.",
        author: "Neicore",
        id: 7,
      },
  ]);
  return (
    <div className="m-2">
      <BlogList blogs={blogs} title="All Blogs"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "NjoxPy")} title="NjoxPy Blogs"></BlogList>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Neicore" )} title="Neicore Blogs"></BlogList>
    </div>
  );
};

export default Home;
