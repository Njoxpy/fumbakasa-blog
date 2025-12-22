import { Outlet } from "react-router-dom";

const BlogLayout = () => {
    return (
        <div>
            <h1>Blog Layout</h1>

            <Outlet />
        </div>
    );
}
 
export default BlogLayout;