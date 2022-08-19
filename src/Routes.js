import React from "react";
import About from "pages/About";
import Pricing from "pages/Pricing";
import SignUp from "pages/SignUp";
import Contact from "pages/Contact";
import ResourceCenter from "pages/ResourceCenter";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/resourcecenter" element={<ResourceCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
