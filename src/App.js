import logo from "./logo.svg";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import Home from "./components/home/Home";
import "./App.css";
import Playlist from "./components/playlist/Playlist";

function App() {
  return (
    <div className="app-background" style={{ height: "100%" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
