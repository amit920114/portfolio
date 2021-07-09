import React from "react";
import "./footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
function Footer() {
  return (
    <>
      <div className="icons">
        <a href={"https://www.linkedin.com/in/amit-kumar-384015191/"}>
          <LinkedInIcon color="primary" fontSize="large" />
        </a>
        <a href={"https://github.com/amit920114"}>
          <GitHubIcon color="primary" fontSize="large" />
        </a>
        <a href={"https://twitter.com/AmitKum10479088"}>
          <TwitterIcon color="primary" fontSize="large" />
        </a>
        <a
          href={
            "https://mail.google.com/mail/u/0/?fs=1&to=kumaramit114920@gmail.com&tf=cm"
          }
        >
          <MailIcon color="primary" fontSize="large" />
        </a>
      </div>

      <div id="SOCIAL">
        <footer>
          <div
            class="text-center text-light p-3"
            style={{ "background-color": "rgba(0, 0, 0, 0.2);" }}
          >
            © 2021 Copyright:
            <a class="text-light" href="#!">
              Amit114920
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
