import React from "react";
import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import MemoryApp from "./components/memory-blast/MemoryApp";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Ani-Arcade</h1>

        <nav className="navigation">
          <NavLink id="home" to="/">
            Home
          </NavLink>
          <NavLink id="memory" to="/memory-blast">
            Memory Blast
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/memory-blast" 
          element={<MemoryApp />}
        />
        <Route path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
