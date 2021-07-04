import React from "react";
import "./center.css";
import Video from "./animation.mp4";

function center() {
  return (
    <div class="container">
      <div data-aos="zoom-in-down" class="name" data-aos-duration="2000">
        <h1>
          {" "}
          {/* <div data-aos="flip-up"></div> */}
          Hi, I'm
          <span class="amit ">AMIT</span>
          ,
          <br />A Web Developer!
        </h1>
      </div>
      <div class="video rounded float">
        <video width="500" height="300" controls autoPlay>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default center;
