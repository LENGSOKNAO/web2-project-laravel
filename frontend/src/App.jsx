import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nike from "./screen/page/Nike";

function App() {
  useEffect(() => {
    AOS.init();
  }, []); // Runs only once when component mounts

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nike" element={<Nike />} />
    </Routes>
  );
}

export default App;
