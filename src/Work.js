import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2">
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row justify-content-between"
            style={{ marginTop: "10px" }}
          >
            <span className="company-name">Cadence Design System</span>
            <span className="year-passedout">2019-present</span>{" "}
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Software Systems Engineer</span>
          <span className="description-position">
            <ul>
              <li>working as sharepoint developer </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
