import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import "../../style/Home.css";
import Menu from "../menu/Menu";
import PlayBottomSong from "../play_song/PlayBottomSong";
import ScrollContainer from "react-indiana-drag-scroll";
import FIcon from "../../asset/Home_Favourite_Icon.png";
import Singer from "../../asset/Home_Singer.jpg";
import HNSinger from "../../asset/Home_Singer_HN.jpg";
import { useNavigate } from "react-router-dom";
import Next from "../../asset/Next_Song.png";
import Previous from "../../asset/Previous_Song.png";
import Volumn from "../../asset/Volumn.png";
import Audio from "../audio/Audio";
import TimeSlider from "react-input-slider";
import axios from "axios";
import Pause from "../../asset/Pause.png";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import swal from "sweetalert";

function Home() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [volume, setVolume] = useState(60);
  const [tracks, setTracks] = useState([]);
  const [genresFilter, setGenresFilter] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlaylist = () => {
    axios
      .post(
        `https://localhost:44377/api/playlists/${localStorage.getItem(
          "username"
        )}`,
        {
          name: name,
          image: image,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
          },
        }
      )
      .then((res) => {
        res.status === 201
          ? swal("Successfully!", res.data.message, "success")
          : swal("Fail!", "Try again", "error");
        setModalOpen(false);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/genres/genrefilter`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        setGenresFilter(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/genres`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        setGenres(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/artists`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        setArtists(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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

  console.log(genresFilter);

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef && tracks.length !== 0) {
      audioRef.current.volume = volume / 100;
    }
  }, [tracks, volume, audioRef]);

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/tracks`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        setTracks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handlePrevios = () => {
    if (audioIndex === 0) {
      setAudioIndex(audioIndex % tracks.length);
    } else {
      setAudioIndex((audioIndex - 1) % tracks.length);
    }
  };

  return (
    <div className="home-container">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Menu
            active1="active"
            active2="menu-icon"
            active3="menu-icon"
            active4="menu-icon"
          />
        </Col>
        <Col span={22}>
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={[
              <div className="modal-footer-container-2">
                <div>
                  <Button
                    key="back"
                    type="link"
                    onClick={() => setModalOpen(false)}
                    style={{ color: "#FFF" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    key="submit"
                    type="primary"
                    className="modal-footer-btn"
                    onClick={handlePlaylist}
                  >
                    Save
                  </Button>
                </div>
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">
                ADD TRACK TO YOUR PLAYLIST
              </p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Name</p>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="songCom-modal-input"
                    placeholder=""
                  />
                </div>
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Image</p>
                  <div>
                    <Input
                      className="songCom-modal-input"
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="Link here"
                      value={image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <div className="home-tag-scroll">
            <ScrollContainer className="scroll-container">
              {genres.length !== 0
                ? genres.map((gen, index) => {
                    return (
                      <a
                        key={index}
                        onClick={() =>
                          navigate("/tagList", {
                            state: { genId: gen.id, genName: gen.name },
                          })
                        }
                      >
                        {gen.name}
                      </a>
                    );
                  })
                : "Waiting"}
            </ScrollContainer>
          </div>
          <Row>
            <Col className="home-banner-container" span={16}>
              {tracks.length !== 0 ? (
                <div className="playlistDetail-banner-container">
                  <img
                    className="playlistDetail-song-banner-ava"
                    src={tracks[audioIndex].image}
                    alt=""
                    srcset=""
                  />
                  <div className="playlistDetail-song-banner-container">
                    <h3 className="playlistDetail-song-banner-name">
                      {tracks[audioIndex].title}
                    </h3>
                    <p className="playlistDetail-song-banner-artist-name">
                      {tracks[audioIndex].trackArtists.map((art) => {
                        return art.length > 1
                          ? art.artist.name
                          : `${art.artist.name} `;
                        // return art.artist.name
                      })}
                    </p>
                  </div>
                  <div className="playlistDetail-song-banner-control-container-full">
                    <div className="playlistDetail-song-bottom-banner-container">
                      <div
                        className="playlistDetail-song-bottom-control-prev-button"
                        onClick={handlePrevios}
                      >
                        <img src={Previous} alt="" srcset="" />
                      </div>
                      <div
                        className="playlistDetail-song-bottom-control-pause-play-button"
                        onClick={handlePausePlayClick}
                      >
                        {isPlay ? (
                          <img
                            className="playlistDetail-song-bottom-control-pause-button"
                            src={Pause}
                            alt=""
                            srcset=""
                          />
                        ) : (
                          <img
                            className="playlistDetail-song-bottom-control-play-button"
                            src={PlayYel}
                            alt=""
                            srcset=""
                          />
                        )}
                      </div>
                      <div
                        className="playlistDetail-song-bottom-control-next-Button"
                        onClick={() =>
                          setAudioIndex((audioIndex + 1) % tracks.length)
                        }
                      >
                        <img src={Next} alt="" srcset="" />
                      </div>
                    </div>
                    <div className="playlistDetail-song-bottom-control-play-duration">
                      <TimeSlider
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}
                        styles={{
                          track: {
                            backgroundColor: "rgba(255, 255, 255, 0.4);",
                            height: "5px",
                            width: "800px",
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
                      <p className="playlistDetail-song-bottom-control-duration">
                        {formatTime(currentTime)}
                      </p>
                    </div>
                    <audio
                      ref={audioRef}
                      src={tracks[audioIndex].source}
                      onLoadedData={handleLoadedData}
                      onTimeUpdate={() =>
                        setCurrentTime(audioRef.current.currentTime)
                      }
                      onEnded={() =>
                        setAudioIndex((audioIndex + 1) % tracks.length)
                      }
                    />
                  </div>
                </div>
              ) : (
                "loading"
              )}
            </Col>
            <Col
              className="home-top-chart-container"
              style={{ marginLeft: "2%" }}
              span={6}
            >
              <div className="home-top-charts-container">
                <p className="home-top-charts-header">Top charts</p>
                <a
                  onClick={() => navigate("/song")}
                  className="home-top-charts-see-more"
                >
                  See more...
                </a>
              </div>
              {tracks.length !== 0
                ? tracks.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="home-top-charts-song-container"
                      >
                        <img
                          onClick={() => setAudioIndex(index)}
                          className="home-top-charts-song-singer"
                          src={item.image}
                          alt=""
                        />
                        <div className="home-top-charts-song-content">
                          <p className="home-top-charts-song-title">
                            {item.title}
                          </p>
                          <p className="home-top-charts-song-singer-name">
                            {item.trackArtists.map((art) => {
                              return art.length > 1
                                ? art.artist.name
                                : `${art.artist.name} `;
                            })}
                          </p>
                          <p className="home-top-charts-song-duration">
                            4 : 12
                          </p>
                        </div>
                        <img
                          className="home-top-charts-song-favourite"
                          onClick={() => setModalOpen(true)}
                          src={FIcon}
                          alt=""
                        />
                      </div>
                    );
                  })
                : "loading"}
            </Col>
          </Row>
          <div>
            <h1 className="home-top-artist-header">TOP ARTIST</h1>
            <div>
              <ScrollContainer className="home-scroll-container">
                {artists.map((item, index) => {
                  return (
                    <div
                      onClick={() =>
                        navigate("/artist", {
                          state: { id: item.id, name: item.name },
                        })
                      }
                      className="home-artist-container"
                    >
                      <img
                        className="home-artist-img"
                        src={item.avatar}
                        alt=""
                      />
                      <div>
                        <h1 className="home-artist-name">{item.name}</h1>
                        <p className="home-artist-type">Artist</p>
                      </div>
                    </div>
                  );
                })}
              </ScrollContainer>
            </div>
            {genresFilter.length !== 0
              ? genresFilter.map((item) =>
                  item.tracks.length !== 0 ? (
                    <div>
                      <h1 className="home-top-artist-header">{item.name}</h1>
                      <div>
                        <ScrollContainer className="home-scroll-container">
                          {item.tracks.map((song, index) => {
                            return (
                              <div
                                onClick={() =>
                                  navigate("/tagList", {
                                    state: { id: item.id, name: item.name },
                                  })
                                }
                                className="home-type-container"
                                style={{ cursor: "pointer" }}
                              >
                                <img
                                  className="home-type-img"
                                  src={song.image}
                                  alt=""
                                />
                                <div className="home-type-text-container">
                                  <p className="home-type-name">{song.title}</p>
                                  {song.artists.map((art) => {
                                    return art.length > 1 ? art : `${art} `;
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </ScrollContainer>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )
              : "Chưa có dữ liệu"}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
