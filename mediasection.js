import React from "react";

const MediaSection = (props) => {
  return (
    <div className="media-section">
      <div className="image-container">
        <img
          src={props.imageSrc} 
          alt={props.imageAlt}
          className="media-image"
        />
      </div>
      <div className="video-container">
        <video
          controls
          poster={props.videoPoster} 
          className="media-video"
        >
          <source
            src={props.videoSrcMp4} 
            type="video/mp4"
          />
          <source
            src={props.videoSrcOgg} 
            type="video/ogg"
          />
          <source
            src={props.videoSrcWebm} 
            type="video/webm"
          />
          Your browser does not support videos!
        </video>
        <p className="video-description">{props.videoDescription}</p>
      </div>
    </div>
  );
};
export default MediaSection;