import React from "react";
import "./Video.css";
 
const Video = ({ title, channel="chai aur code", views, time }) => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channle">{channel}</div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  );
};

export default Video;
