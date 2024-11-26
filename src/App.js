import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"; 
import CalorieCalculator from "./CalorieCalculator"; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Bench Press Calculator</Link>
            </li>
            <li className="nav-item">
              <Link to="/calorie-calculator" className="nav-link">Calorie Calculator</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
