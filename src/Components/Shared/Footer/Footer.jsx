import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "LinkedIn",
    icon: <ArrowRight />,
    link: "https://www.linkedin.com/in/prashant-sharma-dev/",
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    link: "https://www.instagram.com/preet_sharma3456/",
  },
  {
    id: 3,
    platfrom: "Twitter",
    icon: <ArrowRight />,
    link: "https://twitter.com/preetsharma7701",
  },
  {
    id: 4,
    platfrom: "Github",
    icon: <ArrowRight />,
    link: "https://github.com/prashant334434",
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I’m Prashant Sharma, Website & Mobile Application
                  Developer based in Delhi.
                </p>
                <a href="#0">Prashanatvashisth53@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={link} className="social__footer">
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2024{" "}
              <Link to={"/"} className="base">
                prashant
              </Link>{" "}
              All rights reserved.
            </p>
            {/* <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
            </ul> */}
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
