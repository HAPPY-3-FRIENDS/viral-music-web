import React, { useState } from "react";
import Music from "../../asset/Playlist_IMG.jpg";
import Edit from "../../asset/EditYel.png";
import Line from "../../asset/Line.png";
import Del from "../../asset/Delete.png";
import "../../style/PlaylistDetail.css";
import { Button, Input, Modal, Select, Upload } from "antd";

function SongAdmin(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  return (
    <div>
      {/* edit track */}
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
          </div>,
        ]}
      >
        <div className="songCom-modal-addTrack">
          <p className="songCom-modal-addTrack-header">EDIT TRACK FROM GENRE</p>
          <div className="songCom-modal-content-container">
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Title</p>
              <Input className="songCom-modal-input" placeholder="" />
            </div>
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Tag (*)</p>
              <Select
                disabled
                className="songCom-modal-input"
                placeholder="Choose tag"
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
            <div className="songCom-modal-content">
              <p className="songCom-modal-title">Title</p>
              <Input
                type="file"
                className="songCom-modal-input-file"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </Modal>
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
          src={Edit}
          onClick={() => setModalOpen(true)}
          alt=""
          srcset=""
          style={{cursor: 'pointer'}}
        />
        <img
          className="playlistDetail-song-list-line"
          src={Line}
          alt=""
          srcset=""
        />
        <img
          className="playlistDetail-song-list-del"
          src={Del}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default SongAdmin;
