// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound"

// help
import Contact from "./help/Contact";
import Faq from "./help/Faq";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="navbar" element={<Navbar />}></Route>
          <Route path="create" element={<Create />}></Route>

          <Route path="help" element={<Contact />}>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="faq" element={<Faq />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
