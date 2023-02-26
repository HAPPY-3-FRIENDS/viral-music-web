import { Col, Row } from "antd";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../../style/Playlist.css";
import Header from "../Header";
import Menu from "../menu/Menu";
import Music from "../../asset/Playlist_IMG.jpg";
import Play from "../../asset/Play_Music.png";

function Playlist() {
  const [show, setShow] = useState(false);

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
              <p className="playlist-header-text-playlist">PLAYLIST</p>
              <p className="playlist-header-text-collection">COLLECTION</p>
            </div>
          </div>
          <ScrollContainer className="scroll-container">
            <div className="playlist-pic-container">
              <div>
                <img
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div className="playlist-pic-container-hover">
                    <img className="playlist-pic-hover" src={Play} alt="play" />
                    <div className="playlist-text-hover">
                      <p className="playlist-text-hover-most-listen">
                        Most Listened
                      </p>
                      <p className="playlist-text-hover-date">22 - 12 - 2021</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollContainer>
        </Col>
      </Row>
    </div>
  );
}

export default Playlist;
