import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/PlaylistDetail.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";
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
import { useLocation, useNavigate } from "react-router-dom";

function PlaylistDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state.id);
  return (
    <div className="playlistDetail-home">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Menu
            active1="menu-icon"
            active2="active"
            active3="menu-icon"
            active4="menu-icon"
          />
        </Col>
        <Col span={22}>
          <div className="playlistDetail-container">
            <ArrowLeftOutlined
              onClick={() => navigate(-1)}
              className="playlistDetail-arrow-left"
            />
            <div className="playlistDetail-text-container">
              <p className="playlistDetail-text-playlist">Playlist</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>{state.name}</p>
            </div>
          </div>
          <div className="playlistDetail-content-container">
            <img className="playlistDetail-img" src={state.image} alt="" />
            <div className="playlistDetail-text-content">
              <h1 className="playlistDetail-text-content-listened">
                {state.name}
              </h1>
              <p className="playlistDetail-text-content-description">
                Hãy tận hưởng âm nhạc theo cách riêng của bạn
              </p>
            </div>
          </div>
          <div className="playlistDetail-list-container">
          </div>
        </Col>
      </Row>
      <PlayBottomSong />
    </div>
  );
}

export default PlaylistDetail;
