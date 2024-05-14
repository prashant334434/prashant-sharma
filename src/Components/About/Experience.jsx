import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Experience = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                I've worked with three great companies, starting as a React.js
                Intern where I learned to create user-friendly interfaces. As a
                React Developer, I improved performance and added advanced
                features. Now, as a React Native Developer, I specialize in
                making mobile apps for both iOS and Android, expanding my skills
                in mobile development and cross-platform solutions.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Oct 2022 - Dec 2022</span>

                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">React Developer Intern</h4>
                    {/* <p className="fz-18 pra d-block">Diginifyd Digitals</p> */}
                  </div>
                  <span className="fz-18 fw-500 base">Diginifyd Digitals</span>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Jan 2023 - Sep 2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">React Developer </h4>
                    {/* <p className="fz-18 pra d-block">YA Markets</p> */}
                  </div>
                  <span className="fz-18 fw-500 base">YA Markets</span>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Sep 2023 - Present</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">
                      Senior React Native Developer
                    </h4>
                    {/* <p className="fz-18 pra d-block">BrokerApp</p> */}
                  </div>
                  <span className="fz-18 fw-500 base">BrokerApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
