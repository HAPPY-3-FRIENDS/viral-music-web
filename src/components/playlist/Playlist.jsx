import { Col, Row } from "antd";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../../style/Playlist.css";
import Header from "../Header";
import Menu from "../menu/Menu";
import Music from "../../asset/Playlist_IMG.jpg";
import Singer from "../../asset/Home_Singer_HN.jpg";
import Play from "../../asset/Play_Music.png";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Playlist() {
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(true);

  const handleNext = () => {
    setNext(true);
    setPrevious(false);
  };
  const handlePrevious = () => {
    setNext(false);
    setPrevious(true);
  };

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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
              <div className="playlist-pic-relative">
                <img
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                  className="playlist-pic"
                  src={Music}
                  alt="Music pic"
                />
                {show && (
                  <div
                    onMouseLeave={() => setShow(false)}
                    className="playlist-pic-container-hover"
                  >
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
          <h1 className="playlist-header-text-top">PLAYLIST</h1>
          {previous && (
            <div className="playlist-scroll-container">
              <div>
                <div className="playlist-user-container-box">
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                </div>
                <div
                  style={{ marginTop: "24px", marginBottom: "48px" }}
                  className="playlist-user-container-box"
                >
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                </div>
              </div>
              <RightOutlined
                className="playlist-button-next"
                onClick={handleNext}
              />
            </div>
          )}
          {next && (
            <div className="playlist-scroll-container">
              <LeftOutlined
                className="playlist-button-next"
                onClick={handlePrevious}
              />
              <div>
                <div className="playlist-user-container-box">
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                </div>
                <div
                  style={{ marginTop: "24px", marginBottom: "48px" }}
                  className="playlist-user-container-box"
                >
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                  <div className="playlist-user-container">
                    <img
                      className="playlist-user-img"
                      src={Singer}
                      alt="playlist"
                    />
                    <div className="playlist-user-text-container">
                      <p className="playlist-user-title">Thanh xuân</p>
                      <p className="playlist-user-date">27 - 12 - 2022</p>
                    </div>
                    <img
                      className="playlist-user-play"
                      src={PlayYel}
                      alt="playlist"
                    />
                  </div>
                </div>
              </div>
              <RightOutlined
                className="playlist-button-next"
                onClick={handleNext}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Playlist;
