import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Edit from "../../asset/Edit.png";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/PlaylistDetail.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";
import New from "../../asset/NewSong.png";
import PlayBottomSong from "../play_song/PlayBottomSong";
import SongCom from "../song/SongCom";
import SongAdmin from "../song/SongAdmin";

function AdminEdit() {
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
              <p className="playlistDetail-text-playlist">VPOP</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>Track list</p>
            </div>
          </div>
          <div className="playlistDetail-content-container" >
            <img className="playlistDetail-img" src={Music} alt="" />
            <div className="playlistDetail-text-content">
              <div className="playlistDetail-content-container">
                <h1 className="playlistDetail-text-content-listened">VPOP</h1>
                <img
                  style={{ marginLeft: "4%", marginTop: "2%" }}
                  src={Edit}
                  alt=""
                  srcset=""
                />
              </div>
              <p className="playlistDetail-text-content-include">
                64 songs ~ 16hrs
              </p>
              <div className="playlistDetail-text-button-new-track">
                <img
                  className="playlistDetail-button-new-track"
                  src={New}
                  alt=""
                />
                <p className="playlistDetail-text-new-track">New track</p>
              </div>
            </div>
          </div>
          <div className="playlistDetail-list-container" style={{marginBottom: "64px"}}>
            <SongAdmin display="none" />
            <SongAdmin display="none" />
            <SongAdmin display="none" />
            <SongAdmin display="none" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AdminEdit;
