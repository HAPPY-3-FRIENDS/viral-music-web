import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Menu from "../menu/Menu";
import "../../style/SearchResult.css";
import Next from "../../asset/Next_Song.png";
import Previous from "../../asset/Previous_Song.png";
import Volumn from "../../asset/Volumn.png";
import Audio from "../audio/Audio";
import TimeSlider from "react-input-slider";
import Pause from "../../asset/Pause.png";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import HNSinger from "../../asset/Home_Singer_HN.jpg";
import ScrollContainer from "react-indiana-drag-scroll";


function SearchResult() {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [volume, setVolume] = useState(60);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes} ` : ` ${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? ` 0${seconds}` : ` ${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);
  return (
    <div className="playlist-container">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Menu active1='menu-icon' active2='menu-icon' active3='menu-icon' active4='menu-icon'/>
        </Col>
        <Col span={22}>
          <div className="searchResult-container">
            <div className="searchResult-top-result-container">
              <h1>TOP RESULT</h1>
              <div className="searchResult-top-result">
                <div className="searchResult-song-result-container">
                  <img
                    className="searchResult-song-bottom-ava"
                    src={Music}
                    alt=""
                    srcset=""
                  />
                  <div className="searchResult-song-bottom-container">
                    <h3 className="searchResult-song-bottom-name">
                      {Audio[audioIndex].title}
                    </h3>
                    <p className="searchResult-song-bottom-artist-name">
                      {Audio[audioIndex].artist}
                    </p>
                  </div>
                </div>
                <div className="searchResult-song-bottom-control-container-full">
                  <div className="searchResult-song-bottom-control-container">
                    <div
                      className="searchResult-song-bottom-control-prev-button"
                      // onClick={() => setAudioIndex((audioIndex - 1) % Audio.length)}
                    >
                      <img src={Previous} alt="" srcset="" />
                    </div>
                    <div
                      className="searchResult-song-bottom-control-pause-play-button"
                      onClick={handlePausePlayClick}
                    >
                      {isPlay ? (
                        <img
                          className="searchResult-song-bottom-control-pause-button"
                          src={Pause}
                          alt=""
                          srcset=""
                        />
                      ) : (
                        <img
                          className="searchResult-song-bottom-control-play-button"
                          src={PlayYel}
                          alt=""
                          srcset=""
                        />
                      )}
                    </div>
                    <div
                      className="searchResult-song-bottom-control-next-Button"
                      onClick={() =>
                        setAudioIndex((audioIndex + 1) % Audio.length)
                      }
                    >
                      <img src={Next} alt="" srcset="" />
                    </div>
                  </div>
                  <div className="searchResult-song-bottom-control-play-duration">
                    <TimeSlider
                      axis="x"
                      xmax={duration}
                      x={currentTime}
                      onChange={handleTimeSliderChange}
                      styles={{
                        track: {
                          backgroundColor: "rgba(255, 255, 255, 0.04);",
                          height: "5px",
                          width: "630px",
                        },
                        active: {
                          backgroundColor: "#FACD66",
                          height: "5px",
                        },
                        thumb: {
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#FACD66",
                          borderRadius: 50,
                        },
                      }}
                    />
                    <p className="searchResult-song-bottom-control-duration">
                      {formatTime(currentTime)}
                    </p>
                  </div>
                  <audio
                    ref={audioRef}
                    src={Audio[audioIndex].src}
                    onLoadedData={handleLoadedData}
                    onTimeUpdate={() =>
                      setCurrentTime(audioRef.current.currentTime)
                    }
                    onEnded={() =>
                      setAudioIndex((audioIndex + 1) % Audio.length)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="searchResult-songs-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>SONGS</h1>
                <ArrowRightOutlined className="searchResult-songs-btn" />
              </div>
              <div className="searchResult-songs">
                <div className="searchResult-songs-content">
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                    }}
                    src={Music}
                    alt=""
                    srcset=""
                  />
                  <div className="searchResult-songs-text-container">
                    <h3 className="searchResult-songs-text-title">Tình đầu</h3>
                    <p className="searchResult-songs-text-artist">
                      Tăng Duy Tân
                    </p>
                  </div>
                </div>
                <p>02 : 20</p>
              </div>
              <div className="searchResult-songs">
                <div className="searchResult-songs-content">
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                    }}
                    src={Music}
                    alt=""
                    srcset=""
                  />
                  <div className="searchResult-songs-text-container">
                    <h3 className="searchResult-songs-text-title">Tình đầu</h3>
                    <p className="searchResult-songs-text-artist">
                      Tăng Duy Tân
                    </p>
                  </div>
                </div>
                <p>02 : 20</p>
              </div>
              <div className="searchResult-songs">
                <div className="searchResult-songs-content">
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                    }}
                    src={Music}
                    alt=""
                    srcset=""
                  />
                  <div className="searchResult-songs-text-container">
                    <h3 className="searchResult-songs-text-title">Tình đầu</h3>
                    <p className="searchResult-songs-text-artist">
                      Tăng Duy Tân
                    </p>
                  </div>
                </div>
                <p>02 : 20</p>
              </div>
            </div>
          </div>
          <div>
            <div className="playlistDetail-content-container">
              <h1 style={{marginTop: "48px"}} className="home-top-artist-header">RECENTLY SEARCHED SONGS</h1>
            </div>
            <div>
              <ScrollContainer style={{marginTop: "0", width: "1560px"}} className="home-scroll-container">
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
                <div className="home-type-container">
                  <img className="home-type-img" src={HNSinger} alt="" />
                  <div className="home-type-text-container">
                    <p className="home-type-name">Chưa quên người yêu cũ</p>
                    <p className="home-type-singer">Hà Nhi</p>
                  </div>
                </div>
              </ScrollContainer>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SearchResult;
