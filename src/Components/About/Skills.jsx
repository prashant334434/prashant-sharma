import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
// import react from "../../assets/img/about/react.png";
// import reactnative from "../../assets/img/about/Rn.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";

const skillsList = [
  {
    id: 1,
    skill: "React",
    link: "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
    // percentage: "90%",
    // image: reactnative,
  },
  {
    id: 2,
    skill: "React Native",
    // percentage: "95%",
    // image: word,
    link: "https://appsvolt.com/wp-content/uploads/2022/09/react-imgage2-1.png",
  },
  {
    id: 3,
    skill: "JavaScript",
    // percentage: "85%",
    link: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png",
  },
  {
    id: 4,
    skill: "NodeJs",
    // percentage: "97%",
    link: "https://ih1.redbubble.net/image.2978060350.0568/st,small,507x507-pad,600x600,f8f8f8.jpg",
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                I'm skilled in Node.js, React.js, React Native, and JavaScript.
                These tools help me build user-friendly websites and mobile apps
                efficiently. I can handle both front-end and back-end tasks,
                ensuring smooth and effective digital solutions that meet
                industry standards.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, link, percentage }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                      >
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img
                              src={link}
                              alt="img"
                              style={{
                                height: "100px",
                                width: "100%",
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">
                              {skill}
                            </span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
