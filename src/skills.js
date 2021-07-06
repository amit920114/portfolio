import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./skills.css";

function skills() {
  return (
    <div>
      <div
        className="mb-2 mx-5 d-grid gap-2 "
        id="SKILL"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Button variant="danger" size="lg">
          SKILLS
        </Button>
      </div>
      <div
        class="container skills"
        className="mb-2 mx-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Button className="my-2 mx-2" variant="outline-warning">
          JavaScript
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-primary">
          ReactJs
        </Button>{" "}
        <Button className="my-2" variant="outline-success">
          HTML5
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-info">
          CSS
        </Button>{" "}
        <br />
        <Button className="my-2 mx-2" variant="outline-danger">
          Flask
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-info">
          Bootstrap
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-warning">
          Express
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-primary">
          Python
        </Button>{" "}
        <br />
        <Button className="my-2 mx-2" variant="outline-info">
          GitHub
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-warning">
          SASS
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-success">
          jQuery
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-info">
          PostgreSQL
        </Button>{" "}
        <br />
        <Button className="my-2 mx-2" variant="outline-danger">
          WordPress
        </Button>{" "}
        <Button className="my-2 mx-2" variant="outline-primary">
          ReactBootsreap
        </Button>{" "}
        {/* <div class="lottie">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_xrmk3h1x.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            controls
            autoplay
          ></lottie-player>
        </div> */}
      </div>
    </div>
  );
}

export default skills;
