import React from "react";
import "./projects.css";
import Netflix from "./netflix.mp4";

import Forms from "./forms.png";

function Projects() {
  return (
    <div id="PROJECTS">
      <h1>
        <center>
          <u>Projects</u>
        </center>
      </h1>

      <div className="project">
        <div>
          <a href={"https://netflix-clone-ab68b.web.app/"}>
            <h3>Netflix-Clone</h3>
          </a>
          <p>
            An approach to make a Netflix like a page where tabbing
            <br /> on a poster shows not a movie but yes a Trailer for Sure
          </p>
        </div>

        <div>
          <video
            id="video"
            poster={
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            }
            width="400"
            height="400"
            autoPlay
            loop
            muted
          >
            <source src={Netflix} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="project">
        <div>
          <a href={"https://dazzling-edison-7d253e.netlify.app/"}>
            <h3>Covid-Tracker</h3>
          </a>
          <p>Track Corona cases from all over the world.</p>
        </div>
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_p2evb1ab.json"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="project">
        <div>
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
        </div>

        <div>
          <iframe
            width="400"
            height="400"
            title="khabar"
            src={
              "https://606f41fbcaa88023e587af12--infallible-curie-d59a89.netlify.app/"
            }
          />
        </div>
      </div>
      <div className="project">
        <div>
          <a href={"https://reverent-hamilton-92a30f.netlify.app/"}>
            <h3>Forms</h3>
          </a>
          <p>Made Using RegularExp.</p>
        </div>

        <div>
          <img
            href="https://reverent-hamilton-92a30f.netlify.app/" //not working
            src={Forms}
            width="400"
            height="400"
            alt="forms"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
