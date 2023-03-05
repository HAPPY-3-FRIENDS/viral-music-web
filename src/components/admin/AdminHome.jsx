import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import MenuAdmin from "../menu/MenuAdmin";
import HNSinger from "../../asset/Home_Singer_HN.jpg";
import Edit from "../../asset/Edit.png";
import ScrollContainer from "react-indiana-drag-scroll";

function AdminHome() {
  return (
    <div className="playlistDetail-home">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <MenuAdmin />
        </Col>
        <Col span={22}>
          <div>
            <div className="playlistDetail-content-container">
              <h1 className="home-top-artist-header">VPOP</h1>
              <img style={{ marginLeft: "1%", marginTop: "2%" }} src={Edit} alt="" srcset="" />
            </div>
            <div>
              <ScrollContainer className="home-scroll-container">
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

export default AdminHome;
