import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Fumbakasa</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                
                                <NavLink to="/create" className="nav-link" aria-current="page">Add Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                
                                <NavLink to="/help" className="nav-link" aria-current="page">Help</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>

    );
}

export default Layout;