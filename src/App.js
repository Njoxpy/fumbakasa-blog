import Navbar from "./Navbar";

const Home = () => {
    const title = "Welcome To Fumbakasa Blog"
    return (
        <div className="container">
            <div className="col text-center">
                <h2>{title}</h2>
            </div>
            <Navbar></Navbar>
        </div>
    );
}

export default Home;