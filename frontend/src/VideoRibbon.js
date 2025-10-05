import React from 'react';
import './VideoRibbon.css';

const VideoRibbon = () => {
  return (
    <div className="video-ribbon-container">
      <video
        className="video-ribbon"
        src="frontend\public\Videos\hero.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoRibbon;