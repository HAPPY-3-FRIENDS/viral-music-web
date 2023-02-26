import { Col, Row } from "antd";
import React from "react";
import Header from "../Header";
import "../../style/Home.css";
import Menu from "../menu/Menu";
import ScrollContainer from "react-indiana-drag-scroll";
import FIcon from "../../asset/Home_Favourite_Icon.png";
import Singer from "../../asset/Home_Singer.jpg";
import HNSinger from "../../asset/Home_Singer_HN.jpg";

function Home() {
  return (
    <div className="home-container">
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
          <div className="home-tag-scroll">
            <ScrollContainer className="scroll-container">
              <a href="#">Vpop</a>
              <a href="#">Kpop</a>
              <a href="#">Cpop</a>
              <a href="#">Jpop</a>
              <a href="#">US-UK</a>
              <a href="#">Pop</a>
              <a href="#">Rock</a>
              <a href="#">Country</a>
              <a href="#">R&B</a>
              <a href="#">Jazz</a>
              <a href="#">Hip Hop</a>
              <a href="#">Reggae</a>
              <a href="#">Funk</a>
              <a href="#">EDM</a>
              <a href="#">Kids</a>
            </ScrollContainer>
          </div>
          <Row>
            <Col className="home-banner-container" span={16}></Col>
            <Col style={{ marginLeft: "2%" }} span={6}>
              <div className="home-top-charts-container">
                <p className="home-top-charts-header">Top charts</p>
                <a className="home-top-charts-see-more">See more...</a>
              </div>
              <div className="home-top-charts-song-container">
                <img
                  className="home-top-charts-song-singer"
                  src={Singer}
                  alt=""
                />
                <div className="home-top-charts-song-content">
                  <p className="home-top-charts-song-title">
                    Tháng 4 là lời nói dối của emmmmmmmmmmmmmmmmmmmmmmm
                  </p>
                  <p className="home-top-charts-song-singer-name">
                    Hà Anh Tuấn
                  </p>
                  <p className="home-top-charts-song-duration">4 : 12</p>
                </div>
                <img
                  className="home-top-charts-song-favourite"
                  src={FIcon}
                  alt=""
                />
              </div>
              <div className="home-top-charts-song-container">
                <img
                  className="home-top-charts-song-singer"
                  src={Singer}
                  alt=""
                />
                <div className="home-top-charts-song-content">
                  <p className="home-top-charts-song-title">
                    Tháng 4 là lời nói dối của emmmmmmmmmmmmmmmmmmmmmmm
                  </p>
                  <p className="home-top-charts-song-singer-name">
                    Hà Anh Tuấn
                  </p>
                  <p className="home-top-charts-song-duration">4 : 12</p>
                </div>
                <img
                  className="home-top-charts-song-favourite"
                  src={FIcon}
                  alt=""
                />
              </div>
              <div className="home-top-charts-song-container">
                <img
                  className="home-top-charts-song-singer"
                  src={Singer}
                  alt=""
                />
                <div className="home-top-charts-song-content">
                  <p className="home-top-charts-song-title">
                    Tháng 4 là lời nói dối của emmmmmmmmmmmmmmmmmmmmmmm
                  </p>
                  <p className="home-top-charts-song-singer-name">
                    Hà Anh Tuấn
                  </p>
                  <p className="home-top-charts-song-duration">4 : 12</p>
                </div>
                <img
                  className="home-top-charts-song-favourite"
                  src={FIcon}
                  alt=""
                />
              </div>
              <div className="home-top-charts-song-container">
                <img
                  className="home-top-charts-song-singer"
                  src={Singer}
                  alt=""
                />
                <div className="home-top-charts-song-content">
                  <p className="home-top-charts-song-title">
                    Tháng 4 là lời nói dối của emmmmmmmmmmmmmmmmmmmmmmm
                  </p>
                  <p className="home-top-charts-song-singer-name">
                    Hà Anh Tuấn
                  </p>
                  <p className="home-top-charts-song-duration">4 : 12</p>
                </div>
                <img
                  className="home-top-charts-song-favourite"
                  src={FIcon}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <div>
            <h1 className="home-top-artist-header">TOP ARTIST</h1>
            <div>
              <ScrollContainer className="home-scroll-container">
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
                <div className="home-artist-container">
                  <img className="home-artist-img" src={Singer} alt="" />
                  <div>
                    <h1 className="home-artist-name">Thuy Phuong</h1>
                    <p className="home-artist-type">Artist</p>
                  </div>
                </div>
              </ScrollContainer>
            </div>
            <div>
              <h1 className="home-top-artist-header">VPOP</h1>
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
            <div>
              <h1 className="home-top-artist-header">CPOP</h1>
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
            <div>
              <h1 className="home-top-artist-header">JPOP</h1>
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
            <div>
              <h1 className="home-top-artist-header">US_UK</h1>
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
            <div>
              <h1 className="home-top-artist-header">POP</h1>
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
            <div>
              <h1 className="home-top-artist-header">ROCK</h1>
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
            <div>
              <h1 className="home-top-artist-header">COUNTRY</h1>
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
            <div>
              <h1 className="home-top-artist-header">R&B</h1>
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
            <div>
              <h1 className="home-top-artist-header">JAZZ</h1>
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
            <div>
              <h1 className="home-top-artist-header">HIPHOP</h1>
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
            <div>
              <h1 className="home-top-artist-header">REGGAE</h1>
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
            <div>
              <h1 className="home-top-artist-header">FUNK</h1>
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
            <div>
              <h1 className="home-top-artist-header">KIDS</h1>
              <div className="home-bottom">
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
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
