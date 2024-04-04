const BlogList = ({blogs, title}) => {

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
