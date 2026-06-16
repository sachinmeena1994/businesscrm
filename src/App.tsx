import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router  basename="/businesscrm">
      <Navbar />
      
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

    </Router>
  );
}

export default App;