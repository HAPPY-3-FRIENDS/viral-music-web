import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/Artist.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Home_Singer_HN.jpg";
import Play from "../../asset/Play.png";
import Pause from "../../asset/Pause.png";
import Line from "../../asset/Line.png";
import Love from "../../asset/Love_Icon_Inactive.png";
import Next from "../../asset/Next_Song.png";
import Previous from "../../asset/Previous_Song.png";
import Volumn from "../../asset/Volumn.png";
import Audio from "../audio/Audio";
import PlayBottomSong from "../play_song/PlayBottomSong";
import SongCom from "../song/SongCom";

function Artist() {
  return (
    <div className="playlistDetail-home">
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
          <div className="playlistDetail-container">
            <ArrowLeftOutlined className="playlistDetail-arrow-left" />
            <div className="playlistDetail-text-container">
              <p className="playlistDetail-text-playlist">Artist</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>Thuy Phuong</p>
            </div>
          </div>
          <div className="playlistDetail-content-container">
            <img className="artist-img" src={Music} alt="" />
            <div className="playlistDetail-text-content">
              <h1 className="playlistDetail-text-content-listened">Thuy Phuong</h1>
              <p className="playlistDetail-text-content-include">
              Thuy Phuong la ca si
              </p>
              <div className="playlistDetail-text-button-play-all">
                <img
                  className="playlistDetail-button-play-all"
                  src={PlayYel}
                  alt=""
                />
                <p className="playlistDetail-text-play-all">Play all</p>
              </div>
            </div>
          </div>
          <h1 style={{color: "#FFF"}}>PLAYLIST</h1>
          <div className="playlistDetail-list-container">
            <SongCom display="none" />
            <SongCom display="none" />
            <SongCom display="none" />
            <SongCom display="none" />
          </div>
        </Col>
      </Row>
      <PlayBottomSong />
    </div>
  );
}

export default Artist;
