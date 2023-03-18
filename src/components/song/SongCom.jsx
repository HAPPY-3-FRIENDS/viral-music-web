import React, { useState } from "react";
import Music from "../../asset/Playlist_IMG.jpg";
import Play from "../../asset/Play.png";
import Line from "../../asset/Line.png";
import Love from "../../asset/Love_Icon_Inactive.png";
import "../../style/PlaylistDetail.css";
import { Button, Input, Modal, Select, Upload } from "antd";

function SongCom(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onChange2 = ({ fileList: newFileList }) => {
    setFileList2(newFileList);
  };
  return (
    <div>
      <div className="playlistDetail-song-list-container">
        <div style={{ display: props.display }}>
          <h1 style={{ marginLeft: "32px", marginRight: "32px" }}>1</h1>
          <img src={Line} alt="" srcset="" />
        </div>
        <img
          className="playlistDetail-song-list-ava"
          src={Music}
          alt=""
          srcset=""
        />
        <div className="playlistDetail-song-name-container">
          <h3 className="playlistDetail-song-name">Let me love you</h3>
          <p className="playlistDetail-song-artist-name">Krisx</p>
        </div>
        <p className="playlistDetail-song-list-duration">4:17</p>
        <p className="playlistDetail-song-list-album">Single</p>
        <img
          className="playlistDetail-song-list-play"
          src={Play}
          alt=""
          srcset=""
        />
        <img
          className="playlistDetail-song-list-line"
          src={Line}
          alt=""
          srcset=""
        />
        <img
          className="playlistDetail-song-list-favor"
          src={Love}
          onClick={() => setModalOpen(true)}
          alt=""
          srcset=""
        />
      </div>

      {/* add track */}
      <Modal
        centered
        wrapClassName="songCom-modal-addTrack-container"
        open={modalOpen}
        width={700}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <div className="modal-footer-container">
            <Button
              className="modal-footer-btn"
              key="link"
              onClick={() => setModal2Open(true)}
            >
              Add...
            </Button>
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
                onClick={() => setModalOpen(false)}
              >
                Save
              </Button>
            </div>
          </div>,
        ]}
      >
        <div className="songCom-modal-addTrack">
          <p className="songCom-modal-addTrack-header">ADD TRACK TO MY PLAYLIST</p>
          <div className="songCom-modal-content-container">
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Title</p>
              <Input className="songCom-modal-input" placeholder="" />
            </div>
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Playlist (*)</p>
              <Select
                className="songCom-modal-input"
                placeholder="Choose playlist"
              />
            </div>
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Image</p>
              <div>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* add playlist */}
      <Modal
        centered
        wrapClassName="songCom-modal-addTrack-container"
        open={modal2Open}
        width={480}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
          <div className="modal-footer-container-2">
            <Button
              key="back"
              type="link"
              onClick={() => setModal2Open(false)}
              style={{ color: "#FFF" }}
            >
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              className="modal-footer-btn"
              onClick={() => setModal2Open(false)}
            >
              Create
            </Button>
          </div>,
        ]}
      >
        <div className="songCom-modal-addTrack">
          <p className="songCom-modal-addTrack-header">NEW PLAYLIST</p>
          <div className="songCom-modal-content-container">
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Title (*)</p>
              <Input className="songCom-modal-input-modal-2" placeholder="" />
            </div>
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Add image</p>
              <div>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList2}
                  onChange={onChange2}
                >
                  {fileList2.length < 1 && "+ Upload"}
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SongCom;
