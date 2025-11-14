import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./pages/index";
import Hero from "./pages/hero";
import About from "./pages/about";
import VCisoAdvisory from "./pages/vciso";
import BannerMenu from "./components/BannerMenu";
  //<Link to="/">Home</Link>
const App = () => {
  return (
    <>
      <BannerMenu />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to ="/hero" replace />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<VCisoAdvisory />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
