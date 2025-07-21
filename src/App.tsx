import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LayoutIndex from "./components/layout/LayoutIndex";
// import LayoutServices from "./components/layout/LayoutServices";
// import LayoutAboutUs from "./components/layout/LayoutAboutUs";

function App() {

  const styleColor: React.CSSProperties = {
    backgroundColor: "#ffffffff",
  }; 
  
  return (
    <Router>
      <main style={styleColor}>
        <LayoutIndex />
        {/* <LayoutServices />
        <LayoutAboutUs /> */}
      </main>
    </Router>
        
  );
}

export default App
