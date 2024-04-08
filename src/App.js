import Navbar from "./Navbar";
import Home from "./Home";
import { 
  BrowserRouter, 
  RouterProvider, 
  Switch }
   from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="light">
      <Navbar></Navbar>
      <Home></Home>
    </div>
    </BrowserRouter>
  );
};

export default App;
