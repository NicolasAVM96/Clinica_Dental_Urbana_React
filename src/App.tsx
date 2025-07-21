import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/ui/Footer";
import TopNavbar from "./components/ui/Navbar";
import LayoutIndex from "./components/layout/LayoutIndex";
import LayoutContact from "./components/layout/LayoutContact";
import LayoutServices from "./components/layout/LayoutServices";
import LayoutAboutUs from "./components/layout/LayoutAboutUs";

function App() {
  
  return (
    <Router>
      <TopNavbar />
        <Routes>
          <Route path="/" element={<LayoutIndex />} />
          <Route path="/Servicios" element={<LayoutServices />} />
          <Route path="/Sobre Nosotros" element={<LayoutAboutUs />} />
          <Route path="/Contáctenos" element={<LayoutContact />} />
        </Routes>
      <Footer />
    </Router>
        
  );
}

export default App
