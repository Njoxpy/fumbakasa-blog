import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container m-2">
            <h1 className="fw-bold">Page Not Found</h1>
            <p>Page Not Found return to <Link to="/">home page</Link></p>
        </div>
    );
}
 
export default NotFound;