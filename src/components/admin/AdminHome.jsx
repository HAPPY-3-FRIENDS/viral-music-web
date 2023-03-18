import { Button, Col, Input, Modal, Row, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import MenuAdmin from "../menu/MenuAdmin";
import HNSinger from "../../asset/Home_Singer_HN.jpg";
import Edit from "../../asset/Edit.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import swal from "sweetalert";

const URL = "https://localhost:44377/api/tracks";

function AdminHome() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [avatar, setAvatar] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [mp3, setMp3] = useState(null);
  const [options, setOptions] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [selectedItems, setSelectedItems] = useState("");
  const [selectedGenreItems, setSelectedGenreItems] = useState([]);

  const handleTrack = () => {
    axios
      .post(
        URL,
        {
          title: title,
          image: imgUrl,
          source: mp3,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setId(res.data.data.id);
        res.status === 201
          ? swal("Successfully!", res.data.message, "success")
          : swal("Fail!", "Try again", "error");
        setModalOpen3(true);
        setModalOpen(false);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

  const handleArtist = () => {
    axios({
      method: "post",
      url: `https://localhost:44377/tracks/${id}`,
      headers: {
        Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
      },
      data: selectedItems, // This is the body part
    })
      .then((res) => {
        res.status === 201
          ? swal("Successfully!", res.data.message, "success")
          : swal("Fail!", "Try again", "error");
        setModalOpen3(false);
        setModalOpen4(true);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/artists`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        setOptions(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [options]);

  useEffect(() => {
    axios
      .get(`https://localhost:44377/api/tracks`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
        },
      })
      .then(function (response) {
        console.log(response.data.data)
        setTracks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const handleNewArtist = () => {
    axios
      .post(
        "https://localhost:44377/api/artists",
        {
          name: name,
          profile: profile,
          avatar: avatar,
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
        setModalOpen2(false);
        setModalOpen3(true);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

  ////////////mới
  const handleGenre = () => {
    axios({
      method: "post",
      url: `https://localhost:44377/track/${id}`,
      headers: {
        Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
      },
      data: selectedItems, // This is the body part
    })
      .then((res) => {
        res.status === 201
          ? swal("Successfully!", res.data.message, "success")
          : swal("Fail!", "Try again", "error");
        setModalOpen4(false);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

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
  }, [genres]);

  const handleNewGenre = () => {
    axios
      .post(
        "https://localhost:44377/api/genres",
        {
          name: genre,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("tokenLogin")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.status);
        console.log(res);
        res.status === 201
          ? swal("Successfully!", res.data.message, "success")
          : swal("Fail!", "Try again", "error");
        setModalOpen4(true);
        setModalOpen5(false);
      })
      .catch((res) => {
        swal("Fail!", "Try again", "error");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    const file2 = e.target[1]?.files[0];
    if (!file) return;
    if (!file2) return;
    const storageRef = ref(storage, `img/${file.name}`);
    const storageRef2 = ref(storage, `src/${file2.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const uploadTask2 = uploadBytesResumable(storageRef2, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL) => {
          setMp3(downloadURL);
        });
      }
    );
  };

  console.log(tracks.map((item) => item.trackGenres))

  return (
    <div className="playlistDetail-home">
      <Row>
        <Col span={24}>
          <Header />
          <Icon
            onClick={() => setModalOpen(true)}
            className="playlistDetail-btn"
            icon="mdi:plus-circle-outline"
          />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <MenuAdmin active1="menu-icon" active2="menu-icon" />
        </Col>
        <Col span={22}>
          {genres.length !== 0
            ? genres.map((item) => {
                return (
                  <div>
                    <div className="playlistDetail-content-container">
                      <h1 className="home-top-artist-header">{item.name}</h1>
                      <img
                        style={{
                          marginLeft: "1%",
                          marginTop: "2%",
                          cursor: "pointer",
                        }}
                        src={Edit}
                        alt=""
                        srcset=""
                        onClick={() => navigate("/adminEdit")}
                      />
                    </div>
                    <div style={{ marginTop: "-32px" }}>
                      <ScrollContainer className="home-scroll-container">
                        {tracks.length !== 0
                          ? tracks.map((track) => {
                              return (
                                <div className="home-type-container">
                                  <img
                                    className="home-type-img"
                                    src={track.image}
                                    alt=""
                                  />
                                  <div className="home-type-text-container">
                                    <p className="home-type-name">
                                      {track.title}
                                    </p>
                                    <p className="home-type-singer">
                                      {track.trackArtists[0].artistId}
                                    </p>
                                  </div>
                                </div>
                              );
                            })
                          : <p style={{color: "#FFF"}}>Chưa có dữ liệu</p>}
                      </ScrollContainer>
                    </div>
                  </div>
                );
              })
            : "Chưa có dữ liệu"}

          {/* add track */}
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onCancel={() => setModalOpen(false)}
            footer={[
              <div className="modal-footer-container-2">
                <Button
                  key="back"
                  type="link"
                  onClick={() => setModalOpen(false)}
                  style={{ color: "#FFF" }}
                >
                  Cancel
                </Button>
                {imgUrl !== null && mp3 !== null ? (
                  <Button
                    key="submit"
                    type="submit"
                    className="modal-footer-btn"
                    onClick={() => [handleTrack()]}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    key="submit"
                    type="submit"
                    disabled
                    className="modal-footer-btn-inactive"
                  >
                    Save
                  </Button>
                )}
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">
                ADD TRACK TO GENRE
              </p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Title</p>
                  <Input
                    className="songCom-modal-input"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=""
                    value={title}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="songCom-modal-content">
                    <p className="songCom-modal-title">Image</p>
                    <div>
                      <Input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="songCom-modal-input-file"
                      />
                    </div>
                  </div>
                  <div className="songCom-modal-content">
                    <p className="songCom-modal-title">Source</p>
                    <Input
                      type="file"
                      accept=".mp3"
                      className="songCom-modal-input-file"
                    />
                  </div>
                  <button className="songCom-modal-btn" type="submit">
                    <Icon icon="material-symbols:arrow-circle-up-rounded" />
                  </button>
                </form>
              </div>
            </div>
          </Modal>

          {/* add new artist */}
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen2}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onCancel={() => setModalOpen2(false)}
            footer={[
              <div className="modal-footer-container-2">
                <Button
                  key="back"
                  type="link"
                  onClick={() => setModalOpen2(false)}
                  style={{ color: "#FFF" }}
                >
                  Cancel
                </Button>
                <Button
                  key="submit"
                  type="submit"
                  className="modal-footer-btn"
                  onClick={() => [handleNewArtist()]}
                >
                  Add
                </Button>
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">ADD NEW ARTIST</p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Name</p>
                  <Input
                    className="songCom-modal-input"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name of artist"
                    value={name}
                  />
                </div>
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Profile</p>
                  <Input
                    className="songCom-modal-input"
                    onChange={(e) => setProfile(e.target.value)}
                    placeholder="Description profile"
                    value={profile}
                  />
                </div>
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Avatar</p>
                  <Input
                    className="songCom-modal-input"
                    onChange={(e) => setAvatar(e.target.value)}
                    placeholder="Link here"
                    value={avatar}
                  />
                </div>
              </div>
            </div>
          </Modal>

          {/* add artist */}
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen3}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onOk={() => setModalOpen3(false)}
            onCancel={() => setModalOpen3(false)}
            footer={[
              <div className="modal-footer-container">
                <Button
                  className="modal-footer-btn"
                  key="link"
                  type="link"
                  onClick={() => setModalOpen2(true)}
                >
                  Add...
                </Button>
                <div>
                  <Button
                    key="back"
                    type="link"
                    onClick={() => setModalOpen3(false)}
                    style={{ color: "#FFF" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    key="submit"
                    type="primary"
                    className="modal-footer-btn"
                    onClick={() => [handleArtist()]}
                  >
                    Save
                  </Button>
                </div>
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">
                ADD ARTIST TO TRACK
              </p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Artist</p>
                  <Select
                    mode="multiple"
                    value={selectedItems}
                    className="songCom-mocal-input"
                    placeholder="Select artist"
                    onChange={setSelectedItems}
                    style={{
                      width: "80%",
                    }}
                    options={options.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                  />
                </div>
              </div>
            </div>
          </Modal>

          {/* add new genre */}
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen5}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onCancel={() => setModalOpen5(false)}
            footer={[
              <div className="modal-footer-container-2">
                <Button
                  key="back"
                  type="link"
                  onClick={() => [setModalOpen5(false), setModalOpen4(true)]}
                  style={{ color: "#FFF" }}
                >
                  Cancel
                </Button>
                <Button
                  key="submit"
                  type="submit"
                  className="modal-footer-btn"
                  // onClick={() => [handleNewGenre(), setModalOpen5(false), setModalOpen4(true)]}
                  onClick={() => [handleNewGenre()]}
                >
                  Add
                </Button>
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">ADD NEW GENRE</p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Genre</p>
                  <Input
                    className="songCom-modal-input"
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Name of artist"
                    value={genre}
                  />
                </div>
              </div>
            </div>
          </Modal>

          {/* add GENRE */}
          <Modal
            centered
            wrapClassName="songCom-modal-addTrack-container"
            open={modalOpen4}
            width={700}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onOk={() => setModalOpen4(false)}
            onCancel={() => setModalOpen4(false)}
            footer={[
              <div className="modal-footer-container">
                <Button
                  className="modal-footer-btn"
                  key="link"
                  type="link"
                  onClick={() => setModalOpen5(true)}
                >
                  Add...
                </Button>
                <div>
                  <Button
                    key="back"
                    type="link"
                    onClick={() => setModalOpen4(false)}
                    style={{ color: "#FFF" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    key="submit"
                    type="primary"
                    className="modal-footer-btn"
                    onClick={handleGenre}
                  >
                    Save
                  </Button>
                </div>
              </div>,
            ]}
          >
            <div className="songCom-modal-addTrack">
              <p className="songCom-modal-addTrack-header">
                ADD GENRE TO TRACK
              </p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Genre</p>
                  <Select
                    value={selectedGenreItems}
                    className="songCom-mocal-input"
                    placeholder="Select genre"
                    onChange={setSelectedGenreItems}
                    style={{
                      width: "80%",
                      background: "none",
                    }}
                    options={genres.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default AdminHome;
