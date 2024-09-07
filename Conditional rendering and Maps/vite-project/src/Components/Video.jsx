import React from "react";
import "./Video.css";

const Video = ({id, title, channel = "chai aur code", views, time,verified}) => {
  // let channelJSX
  // if(verified){                                      //conditional rendering
  //   channelJSX = <div className="channle">{channel} ✔️</div>;
  // }
  // else{
  //   channelJSX = <div className="channle">{channel} </div>;
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://unsplash.com/photos/a-tall-building-with-a-sky-background-JF5SChGtuZQ`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        {verified ? <div className="channle">{channel} ✔️</div> : <div className="channle">{channel} </div>}
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  );
};

export default Video;
