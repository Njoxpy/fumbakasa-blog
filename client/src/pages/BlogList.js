const BlogList = ({ blogs, title}) => {
  return (

    <div className="container">
      <h2>{title}</h2>
      <div className="container">
        {blogs.map((blog) => (
          <div className="card-body" key={blog.id}>
            <h2 className="card-title text-primary">{blog.title}</h2>
            <p className="card-text">
              <small className="text-muted">Written by {blog.author}</small>
            </p>
            {/* <button
              className="btn btn-danger mr-2"
              onClick={() => handleDelete(blog.id)}
              style={{ borderRadius: "8px", fontSize: "16px" }}
            >
              Delete Blog
            </button> */}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default BlogList;
