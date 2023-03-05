import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import SongCom from "../song/SongCom";
import PlayBottomSong from "../play_song/PlayBottomSong";

function Chart() {
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
          <div className="playlist-header-text-container">
            <h1 className="playlist-header-text-top">TOP</h1>
            <div className="playlist-header-text">
              <p className="playlist-header-text-playlist">MUSIC</p>
              <p className="playlist-header-text-collection">CHART</p>
            </div>
            <img style={{marginLeft:"16px"}} src={PlayYel} alt="" srcset="" />
          </div>
          <div className="playlistDetail-list-container">
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
            <SongCom display="flex"/>
          </div>
        </Col>
      </Row>
      <PlayBottomSong />
    </div>
  );
}

export default Chart;
