// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import BlogError from "./blogs/BlogError"

// help
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";

// layouts
import HelpLayout from "./layout/HelpLayout";
import BlogLayout from "./layout/BlogsLayout";
import BlogList from "./pages/BlogList";
import BlogDetails, { blogLoaderDetails } from "./blogs/BlogDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="navbar" element={<Navbar />} />

          <Route path="create" element={<Create />} />

          <Route path="help" element={<HelpLayout />}>
            <Route index element={<Faq />} />
            <Route path="faq" element={<Contact />} />
          </Route>

          <Route path="blogs" element={<BlogLayout />}>
            <Route index element={<BlogList />} />
            <Route path=":author" element={<BlogDetails />}  loader={blogLoaderDetails} errorElement={<BlogError />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
