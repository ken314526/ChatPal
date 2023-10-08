import React from "react";
import Meeting from "./Meeting";

export default function Meetings() {
  return (
    <div className="meetings">
      <div className="meetBar">
        <span>Meetings</span>
        <div className="badge">
          <span>5</span>
        </div>
      </div>

      <div className="meetingInfo">
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
      </div>
    </div>
  );
}
