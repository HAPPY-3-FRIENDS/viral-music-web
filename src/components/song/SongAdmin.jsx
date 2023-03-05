import React from "react";
import Music from "../../asset/Playlist_IMG.jpg";
import Edit from "../../asset/EditYel.png";
import Line from "../../asset/Line.png";
import Del from "../../asset/Delete.png";
import "../../style/PlaylistDetail.css";

function SongAdmin(props) {
  return (
    <div>
      <div className="playlistDetail-song-list-container">
        <div style={{display: props.display}}>
          <h1 style={{ marginLeft: "32px", marginRight: "32px" }}>1</h1>
          <img src={Line} alt="" srcset="" />
        </div>
        <img
          className="playlistDetail-song-list-ava"
          src={Music}
          alt=""
          srcset=""
        />
        <div className="playlistDetail-song-name-container">
          <h3 className="playlistDetail-song-name">Let me love you</h3>
          <p className="playlistDetail-song-artist-name">Krisx</p>
        </div>
        <p className="playlistDetail-song-list-duration">4:17</p>
        <p className="playlistDetail-song-list-album">Single</p>
        <img
          className="playlistDetail-song-list-play"
          src={Edit}
          alt=""
          srcset=""
        />
        <img
          className="playlistDetail-song-list-line"
          src={Line}
          alt=""
          srcset=""
        />
        <img
          className="playlistDetail-song-list-del"
          src={Del}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default SongAdmin;
