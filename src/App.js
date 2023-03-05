import logo from "./logo.svg";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import Home from "./components/home/Home";
import "./App.css";
import Playlist from "./components/playlist/Playlist";
import PlaylistDetail from "./components/playlist/PlaylistDetail";
import Song from "./components/song/Song";
import PlayBottomSong from "./components/play_song/PlayBottomSong";
import TagList from "./components/tag/TagList";
import Artist from "./components/artist/Artist";
import Chart from "./components/chart/Chart";
import Infor from "./components/infor/Infor";
import AdminHome from "./components/admin/AdminHome";
import AdminEdit from "./components/admin/AdminEdit";
import SearchResult from "./components/search/SearchResult";

function App() {
  return (
    <div className="app-background" style={{ height: "100%" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<SearchResult />} />
        <Route path="/playlistDetail" element={<PlaylistDetail />} />
      </Routes>
    </div>
  );
}

export default App;
