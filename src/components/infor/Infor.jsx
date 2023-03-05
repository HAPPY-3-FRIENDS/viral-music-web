import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import SongCom from "../song/SongCom";
import Music from "../../asset/Home_Singer_HN.jpg";
import Edit from "../../asset/Edit.png";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import PlayBottomSong from "../play_song/PlayBottomSong";

function Infor() {
  return (
    <div className="playlist-container">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Menu />
        </Col>
        <Col span={22}>
          <div className="playlistDetail-content-container">
            <img className="artist-img" src={Music} alt="" />
            <div className="playlistDetail-text-content">
              <h1 className="playlistDetail-text-content-listened">
                Thuy Phuong
              </h1>
              <p
                style={{ color: "rgba(255, 255, 255, 0.4)" }}
                className="playlistDetail-text-content-include"
              >
                phuongnlt2001
              </p>
            </div>
            <img
              style={{ marginLeft: "2%", marginTop: "-2%" }}
              src={Edit}
              alt=""
              srcset=""
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ color: "#FFF" }}>FAVORITE LIST</h1>
            <img
              style={{ width: "56px", height: "56px", marginLeft: "24px" }}
              src={PlayYel}
              alt=""
              srcset=""
            />
          </div>
          <div className="playlistDetail-list-container">
            <SongCom display="none" />
            <SongCom display="none" />
            <SongCom display="none" />
            <SongCom display="none" />
            <div className="playlistDetail-more">
              <p>See more</p>
            </div>
          </div>
        </Col>
      </Row>
      <PlayBottomSong />
    </div>
  );
}

export default Infor;
