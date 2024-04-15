// components
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./forms/Login";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="light">
      <Navbar></Navbar>
      <Home></Home>
      <Login />
    </div>
    </BrowserRouter>
  );
};

export default App;
