import React from "react";
import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import MemoryApp from "./components/memory-blast/MemoryApp";
import TicTacGame from "./components/tic-tac-toe/Game";
import HangmanGame from "./components/hangman/HangmanGame";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="header-text">
          <h1>AniCade</h1>
          <h2>Anime-Based Arcade Games</h2>
        </div>
        

        <nav className="navigation">
          <NavLink id="home" to="/"
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
            })}
          >
            Home
          </NavLink>
          <NavLink id="memory" to="/memory-blast"
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
            })}
          >
            Memory Blast
          </NavLink>
          <NavLink id="tic-tac-toe" to="/tic-tac-toe"
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
            })}
          >
            Tic-Tac-Toe
          </NavLink>
          <NavLink id="hangman" to="/hangman"
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
            })}
          >
            Hangman
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/hangman" 
          element={<HangmanGame />}
        />
        <Route path="/tic-tac-toe"
          element={<TicTacGame />}
        
        />
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
