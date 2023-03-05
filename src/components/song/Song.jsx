import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import PlayBottomSong from "../play_song/PlayBottomSong";
import SongCom from "./SongCom";
import "../../style/Song.css";

function Song() {
  return (
    <div className="song-home">
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
              <p className="playlistDetail-text-playlist">Songs</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>More Result Songs</p>
            </div>
          </div>
          <div style={{marginBottom: "200px"}}>
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
            <SongCom display="flex"/>
          </div>
        </Col>
      </Row>
      <PlayBottomSong />
    </div>
  );
}

export default Song;
