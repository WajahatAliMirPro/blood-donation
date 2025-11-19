import './App.css';
import Navbar from "./components/Navbar"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DonorList from "./Pages/DonorList";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 4. Component Definition
function App() {
  return (
    

    <Router>
      {/*  */}
    
  <Navbar /> 
      {/* ) */}
      {/* <Pagelayout> */} 

        {/*  */}
        <Routes>
          {/* */}
          <Route path="/" element={<Home />} />
          
          {/**/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donors" element={<DonorList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      {/* </Pagelayout> */}
    </Router>
  );
}

export default App;