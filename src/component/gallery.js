import React from "react";
import "./style.css";
import Top from "./top";
import { BiCodeAlt } from "react-icons/bi";

function Gallery() {
  return (
    <>
    <Top name="Portfolio"/>

    <div className="container ">
      <div className="row" style={{ marginTop: 30, marginBottom: 15 }}>
        <div className="col img-list">
          <img src="1 .jpg" className="imgstyle"/>{" "}
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="2.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
            <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="3.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="4.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="col img-list">
          <img src="5.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="6.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="7.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="8.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="col img-list">
          <img src="9.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="10.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="11.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
        <div className="col img-list">
          <img src="12.jpg" className="imgstyle" />
          <div className="gallery-overlay">
            <a href="#" className="gallery-icon" title="User Profile">
              <BiCodeAlt/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gallery;
