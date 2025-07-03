import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/First_Page/Homepage";
import SecondHomepage from "./components/Second_Page/Homepage"; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/second" element={<SecondHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
