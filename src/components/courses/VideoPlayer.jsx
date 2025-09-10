import React from "react";
const VideoPlayer = ({ videoURL }) => {
  if (!videoURL) return null;
  return (
    <div className="fixed top-70 left-30 w-[63%] py-8 h-[550px] px-6">
      <iframe className="w-[100%]  h-[550px] rounded-md" src={`${videoURL}?autoplay=1&mute=1`} />
    </div>
  );
};

export default VideoPlayer;
