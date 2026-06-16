import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import FleetPage from "./pages/Fleet";
import ContactPage from "./pages/Contact";
import Loader from "./components/Loader";

// 🔥 NEW COMPONENT TO HANDLE LOADING
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // adjust speed if needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Navbar />

      {/* 🔥 IMPORTANT FIX FOR NAVBAR OVERLAP */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </>
  );
}

// 🔥 WRAP WITH ROUTER
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;