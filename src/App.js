import { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Project from "./Projects";
import "./styles.css";

export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programming, setprogramming] = useState(false);
  const [project, setproject] = useState(false);

  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setproject(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">EvilGenius Crafts</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About Me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact Me</span>
          </div>
        </nav>
        {/* nav ends here */}
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello I'm, <span className="name-Im-text">Ramanagouda K S</span>
              </span>
              <span className="Im-text-enthuastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Experienced Frontend Developer. Knack of building back-end
                operations.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire Me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="hero-image"
                src="https://res.cloudinary.com/dlujt4wlv/image/upload/v1649693860/IMG20220228180024_avtrxs.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div id="about-me" className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-item-center justify-content-center">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_5o8zf8kq.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 c0l-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Experienced Frontend Developer with a demonstrated history of
                working in the computer software industry. with knowledge in
                UI/UX, along with a knack of building applications with utmost
                efficiency.Strong software engineering professional. post
                graduated in Computer Applications from Visvesvaraya
                Technological University.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Skilled in SharePoint Online, Power Automate and C#</li>
                    <li>
                      Interactive Frontend developer as per the design with
                      ReactJS(BS5,CSS3,HTML5)
                    </li>
                    <li>
                      Knack of building back end-applications and API's in PHP
                      and C#.
                    </li>
                    <li>
                      knowledge of hosting applications/websites in
                      Linux(RHEL-7.6) virtual machine.
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My Formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fa-solid fa-graduation-cap"></i>
                {""}
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-briefcase"></i>
                {""}
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-laptop-code"></i>
                {""}
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-list-check"></i>
                {""}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  project === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setproject, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programming === true && <Programming />}
            {project === true && <Project />}
          </div>
        </div>
      </div>
    </div>
  );
}
