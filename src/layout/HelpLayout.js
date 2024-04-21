import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div>
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla voluptatum nobis excepturi, culpa esse velit amet provident asperiores magni quidem? Veritatis accusamus minima tempora doloribus a expedita nulla ea ab.</p>
            <nav>
                <NavLink to="faq">View The FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default HelpLayout;