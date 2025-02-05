import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeNike from "./screen/page/HomeNike";

function App() {
  useEffect(() => {
    AOS.init();
  }, []); // Runs only once when component mounts

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nike" element={<HomeNike />} />
    </Routes>
  );
}

export default App;
