import React from "react";
import "./projects.css";
import Netflix from "./netflix.mp4";
import Covid from "./covid.png";
import Khabar from "./khabar.png";
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
        <h3>Netflix-clone</h3>
        <p>
          An approach to make a Netflix like a page where tabbing
          <br /> on a poster shows not a movie but yes a Trailer for Sure
        </p>
        <img
          class="rounded mx-auto d-block"
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          }
          alt="netflix-clone"
        />
        <video
          class="rounded max-auto d-block"
          width="500"
          height="300"
          controls
          autoPlay
        >
          <source src={Netflix} type="video/mp4" />
        </video>
      </div>
      <div class="covid">
        <h3>Covid-Tracker</h3>
        <p>Track Corona cases from all over the world.</p>
        <img
          class="rounded float-right"
          src={Covid}
          width="500"
          height="300"
          alt="Covid-Reports"
        />
      </div>
      <div class="khabar-aajtak">
        <h3>Khabar-AajTak</h3>
        <p>
          Gather all daily top news from listed sites
          <br /> and gives you the top best 10.:-
        </p>
        <img
          class="rounded mx-auto d-block"
          src={Khabar}
          alt="khabar-aajTak"
          width="500"
          height="300"
        />
      </div>
      <div class="forms">
        <h3>Forms</h3>
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
