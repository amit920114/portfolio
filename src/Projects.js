import React from "react";
import "./projects.css";
import Netflix from "./netflix.mp4";

import Forms from "./forms.png";

function Projects() {
  const myStyle = {
    color: "white",
  };
  return (
    <div class="projects">
      <div>
        <h1 style={myStyle}>
          <u>Projects</u>
        </h1>
      </div>

      <div class="netflix">
        <a
          href={"https://netflix-clone-ab68b.web.app/"}
          style={{ textDecoration: "none" }}
        >
          <h3>Netflix-Clone</h3>
        </a>
        <p>
          An approach to make a Netflix like a page where tabbing
          <br /> on a poster shows not a movie but yes a Trailer for Sure
        </p>
        {/* <img
          class="rounded mx-auto d-block"
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"

            
          }
          alt="netflix-clone"
        /> */}
        <video
          // style={{ textAlign: "center" }}
          id="video"
          poster={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          }
          class="justify-content-center"
          width="500"
          height="300"
          controls
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={Netflix} type="video/mp4" />
        </video>{" "}
        <lottie-player
          src="https://assets7.lottiefiles.com/private_files/lf30_F6EtR7.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          controls
          autoplay
        ></lottie-player>
        <hr />
      </div>
      <div class="covid">
        <a href={"https://dazzling-edison-7d253e.netlify.app/"}>
          <h3>Covid-Tracker</h3>
        </a>
        <p>Track Corona cases from all over the world.</p>
        <iframe
          className="covid-chart"
          width="500"
          height="400"
          title="covid"
          src={"https://dazzling-edison-7d253e.netlify.app/"}
        ></iframe>{" "}
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_p2evb1ab.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          controls
          autoplay
        ></lottie-player>
        <hr />
      </div>
      <div class="khabar-aajtak">
        <a
          href={
            "https://606f41fbcaa88023e587af12--infallible-curie-d59a89.netlify.app/"
          }
        >
          <h3>Khabar-AajTak</h3>
        </a>
        <p>
          Gather all daily top news from listed sites
          <br /> and gives you the top best 10.
        </p>
        {/* <iframe
          width="1000"
          height="400"
          title="khabar"
          src={
            "https://606f41fbcaa88023e587af12--infallible-curie-d59a89.netlify.app/"
          }
        /> */}
      </div>
      <hr />
      <div class="forms">
        <a href={"https://reverent-hamilton-92a30f.netlify.app/"}>
          <h3>Forms</h3>
        </a>
        <p>Made Using RegularExp.</p>
        <img
          href="https://reverent-hamilton-92a30f.netlify.app/" //not working
          class="rounded float-left"
          src={Forms}
          width="500"
          height="300"
          alt="forms"
        />
      </div>
    </div>
  );
}

export default Projects;
