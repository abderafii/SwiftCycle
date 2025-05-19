import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/contactus";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import OurService from "./pages/OurService";
import SwiftClubPage from "./pages/SwiftClubPage";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/swift-club" element={<SwiftClubPage />} />          
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} SwiftCycle. All rights reserved.</p>
          <div className="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
