import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                I'm currently studying for my Bachelor of Computer Applications
                (BCA) degree, diving into the exciting realm of technology and
                software development. Additionally, I've completed a Full Stack
                Developer certification focusing on React and Node.js. This
                certification has given me a solid foundation in building
                powerful web applications from start to finish, enhancing my
                skills in software development.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2022-2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">
                      Bachelor Of Computer Applications
                    </h4>
                    <p className="fz-18 pra d-block">
                      Mangalaytan University ,Aligrah
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">
                    April 2022- Oct 2022
                  </span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">
                      Full Stack Development Certification
                    </h4>
                    <p className="fz-18 pra d-block">Ducat ,Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
