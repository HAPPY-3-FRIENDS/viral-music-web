import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, Select, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Edit from "../../asset/Edit.png";
import Header from "../Header";
import MenuAdmin from "../menu/MenuAdmin";
import "../../style/PlaylistDetail.css";
import PlayYel from "../../asset/Playlist_Play_YeIcon.png";
import Music from "../../asset/Playlist_IMG.jpg";
import New from "../../asset/NewSong.png";
import PlayBottomSong from "../play_song/PlayBottomSong";
import SongCom from "../song/SongCom";
import SongAdmin from "../song/SongAdmin";
import { useNavigate } from "react-router-dom";

function AdminEdit() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  return (
    <div className="playlistDetail-home">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <MenuAdmin active1='menu-icon' active2='menu-icon'/>
        </Col>
        <Col span={22}>
          <div className="playlistDetail-container">
            <ArrowLeftOutlined onClick={() => navigate(-1)} className="playlistDetail-arrow-left" />
            <div className="playlistDetail-text-container">
              <p className="playlistDetail-text-playlist">VPOP</p>
              <RightOutlined className="playlistDetail-arrow-right" />
              <p>Track list</p>
            </div>
          </div>
          <div className="playlistDetail-content-container">
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
                <p
                  onClick={() => setModalOpen(true)}
                  className="playlistDetail-text-new-track"
                >
                  New track
                </p>
              </div>
            </div>
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
              <p className="songCom-modal-addTrack-header">
                ADD TRACK TO GENRE
              </p>
              <div className="songCom-modal-content-container">
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Title</p>
                  <Input className="songCom-modal-input" placeholder="" />
                </div>
                <div className="songCom-modal-content">
                  <p className="songCom-modal-title">Tag (*)</p>
                  <Select
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
                  <Input type="file" className="songCom-modal-input-file" placeholder="" />
                </div>
              </div>
            </div>
          </Modal>
          <div
            className="playlistDetail-list-container"
            style={{ marginBottom: "64px" }}
          >
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
