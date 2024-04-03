import Navbar from "./Navbar";

const App = () => {
    const title = "Welcome To Fumbakasa Blog"
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="col text-center">
                    <h2 className="m-2">{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default App;