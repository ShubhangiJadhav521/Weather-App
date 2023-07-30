// import './App.css';
import CurrentLocation from "./Weather/currentLocation";
import Home from "./Weather/Home";
import Navbar from './Weather/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Ui from "./Weather/Ui";

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const handleToggleClick = () => {
    setIsBlackBackground((prevState) => !prevState);
  };

  return (
   
    <Router>
      
      <Navbar  isBlackBackground={isBlackBackground}
    
      handleToggleClick={handleToggleClick}/>
      
      <Routes >
     
        <Route path="/" element={<Home isBlackBackground={isBlackBackground}/>} />
        <Route path="/CurrentLocation" element={<CurrentLocation isBlackBackground={isBlackBackground}/>} />
      </Routes>
    </Router>
  );
}

export default App;
