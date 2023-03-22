import React, { useEffect, useRef, useState } from "react";
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
import TimeSlider from "react-input-slider";
import axios from "axios";

function PlayBottomSong() {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [volume, setVolume] = useState(60);
  const [tracks, setTracks] = useState([]);

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
  });

  const handlePrevios = () => {
    if (audioIndex === 0) {
      setAudioIndex(audioIndex % tracks.length);
    } else {
      setAudioIndex((audioIndex - 1) % tracks.length);
    }
  };

  return (
    <div>
      {tracks.length !== 0 ? (
        <div className="playlistDetail-bottom-container">
          <img
            className="playlistDetail-song-bottom-ava"
            src={tracks[audioIndex].image}
            alt=""
            srcset=""
          />
          <div className="playlistDetail-song-bottom-container">
            <h3 className="playlistDetail-song-bottom-name">
              {tracks[audioIndex].title}
            </h3>
            {/* <p className="playlistDetail-song-bottom-artist-name">
          {Audio[audioIndex].artist}
        </p> */}
          </div>
          <div className="playlistDetail-song-bottom-control-container-full">
            <div className="playlistDetail-song-bottom-control-container">
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
                onClick={() => setAudioIndex((audioIndex + 1) % tracks.length)}
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
                    backgroundColor: "rgba(255, 255, 255, 0.04);",
                    height: "5px",
                    width: "1112px",
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
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
              onEnded={() => setAudioIndex((audioIndex + 1) % tracks.length)}
            />
          </div>
          <div className="playlistDetail-song-bottom-control-volumn-container">
            <img src={Volumn} alt="" srcset="" />
            <input
              type="range"
              min={0}
              max={100}
              className="playlistDetail-song-bottom-control-volumn"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default PlayBottomSong;
