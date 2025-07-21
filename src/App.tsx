import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
// import IndexCarousel from './components/ui/IndexCarousel';
// import FuturedServices from "./components/ui/FuturedServices";
// import WhyChooseUs from "./components/ui/WhyChooseUs";
// import Footer from "./components/ui/Footer";
import LayoutIndex from "./components/layout/LayoutIndex";

function App() {

  const styleColor: React.CSSProperties = {
    backgroundColor: "#ffffffff",
  }; 
  
  return (
    <Router>
      <Header />
      <main style={styleColor}>
        <LayoutIndex />
      </main>
    </Router>
        
  );
}

export default App
