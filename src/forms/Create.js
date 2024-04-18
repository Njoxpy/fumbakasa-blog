import { useState } from "react";

const Create = () => {
    // create state for blog title, body and text-area
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleBody = (event) => {
        setBody(event.target.value);
    }

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const submitBlog = (event) => {
        // prevent browser default styles
        event.preventDefault();

        /* 
        Here are possible things to add into a blog
        - Handle user input if the title, body and blog author for the article has been filled into a blog(Aler a user using conditional rendering)
        - Route a website to have, Home Section and a Add blog section
        - Handling user request to post if not availbale
        */
        // create new blog object
        const blog = { title, body, author };
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Halla Madrid!");
        })
        // reset
        setTitle('');
        setBody('');
        setAuthor('');
    }

    return (
        <div className="container m-2">
            <h2 className="text-danger">Add A New Blog</h2>

            <form onSubmit={submitBlog}>
                <div className="mb-3">
                    <label htmlFor="blog title" className="form-label">Blog Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="blog title"
                        aria-describedby="blog title"
                        required
                        onChange={handleTitle} />
                </div>

                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="blog body text area" className="form-label">Blog Body</label>
                        <textarea
                            className="form-control"
                            id="blog body text area"
                            rows="3"
                            required
                            onChange={handleBody}
                        ></textarea>
                    </div>
                    <select
                        className="form-select"
                        aria-label="blog author"
                        required
                        onChange={handleAuthor}>
                        <option selected>Select Blog Author</option>
                        <option value="NjoxPy">NjoxPy</option>
                        <option value="Chax">Chax</option>
                        <option value="Neicore">Neicore</option>
                        <option value="Alpha">Alpha</option>
                        <option value="Alpha">ColmanPy</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-danger">Add Blog</button>
            </form>
        </div>
    );
}

export default Create;