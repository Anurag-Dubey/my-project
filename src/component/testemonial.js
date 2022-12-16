import React from "react";
import Top from "./top.js";
import "./style.css";
// import immg from './2C.jpg'

function Testemonial() {
  return (
    <div id="testimonial-area" style={{borderBottom:30}}>
      <div id="testimonial">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container" style={{padding:25}}>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  <b>- Mark John -</b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
            <div className="container" style={{padding:25}}>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  <b>- Tony Antonio -</b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
            <div className="container" style={{padding:25}}>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  <b>- Jaison Warner -</b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
            <div className="container" style={{padding:25}}>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  <b>- Leena Doe -</b>
                </p>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testemonial;
