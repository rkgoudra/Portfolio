import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Visvesvaraya Technological University{" "}
            </span>
            <span className="university-degree">
              Master of Computer Applications{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2016-2018</span>
          </div>
        </div>
        {/* UG */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Karnataka University Dharwad{" "}
            </span>
            <span className="university-degree">
              Bachelor of Computer Applications{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2013-2016</span>
          </div>
        </div>
        {/* PUCC */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Pre University Department </span>
            <span className="university-degree">
              K.L.E's P.C Jabin Science College{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2010-2013</span>
          </div>
        </div>
        {/* schooling */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Karnataka Secondary Education Examination Board{" "}
            </span>
            <span className="university-degree">
              R.Y.E.S's S.G Shintri English Med School{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2010</span>
          </div>
        </div>
      </div>
    </>
  );
}
