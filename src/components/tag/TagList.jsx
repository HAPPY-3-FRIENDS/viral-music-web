import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/PlaylistDetail.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";
import PlayBottomSong from "../play_song/PlayBottomSong";
import SongCom from "../song/SongCom";
import { useNavigate } from "react-router-dom";

function TagList() {
  const navigate = useNavigate();
  return (
    <div className="playlistDetail-home">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Menu active1='active' active2='menu-icon' active3='menu-icon' active4='menu-icon'/>
        </Col>
        <Col span={22}>
          <div className="playlistDetail-container">
            <ArrowLeftOutlined className="playlistDetail-arrow-left" onClick={() => navigate(-1)}/>
            <div className="playlistDetail-text-container">
              <p className="playlistDetail-text-playlist">VPOP</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>Track list</p>
            </div>
          </div>
          <div className="playlistDetail-content-container">
            <img className="playlistDetail-img" src={Music} alt="" />
            <div className="playlistDetail-text-content">
              <h1 className="playlistDetail-text-content-listened">VPOP</h1>
              <p className="playlistDetail-text-content-include">
                64 songs ~ 16hrs
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

export default TagList;
