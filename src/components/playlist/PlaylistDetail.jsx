import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/PlaylistDetail.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";

function PlaylistDetail() {
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
                <ArrowLeftOutlined className="playlistDetail-arrow-left"/>
                <div className="playlistDetail-text-container">
                    <p className="playlistDetail-text-playlist">Playlist</p>
                    <RightOutlined className="playlistDetail-arrow-right" />
                    <p>Most Listened</p>
                </div>
            </div>
            <div className="playlistDetail-content-container">
                <img className="playlistDetail-img" src={Music} alt="" />
                <div className="playlistDetail-text-content">
                    <h1 className="playlistDetail-text-content-listened">Most listened</h1>
                    <p className="playlistDetail-text-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venen.</p>
                    <p className="playlistDetail-text-content-include">64 songs ~ 16hrs</p>
                    <div className="playlistDetail-text-button-play-all">
                        <img className="playlistDetail-button-play-all" src={PlayYel} alt="" />
                        <p className="playlistDetail-text-play-all">Play all</p>
                    </div>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  );
}

export default PlaylistDetail;
