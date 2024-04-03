import React, { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            {
                id: 1,
                title: "React Hooks: Understanding useState",
                body: "In this blog post, we explore the useState hook in React and how it can be used to manage component state.",
                author: "NjoxPy"
            },
            {
                id: 2,
                title: "Building Modern Web Applications with React",
                body: "Learn how to leverage the power of React to build interactive and scalable web applications.",
                author: "Elvis"
            },
            {
                id: 3,
                title: "Mastering CSS Grid Layout",
                body: "CSS Grid Layout is a powerful tool for creating complex layouts with ease. In this blog post, we dive deep into CSS Grid and explore its various features.",
                author: "Chax"
            },
            {
                id: 4,
                title: "Introduction to Node.js",
                body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications. This blog post provides an introduction to Node.js and its key features.",
                author: "Colman"
            }
        ]
    )
    return (
        <div className="row">
            <div className="container">
                {blogs.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written By {blog.author}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
