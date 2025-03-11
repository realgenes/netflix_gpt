import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2xl">{overview}</p>
      <div className="">
        <button className="bg-white/90  text-black text-xl  py-3 px-3 w-32  rounded-md mx-4 ">
          ▶️ Play
        </button>
        <button className="bg-gray-600/60 text-white text-xl  py-3 px-3 w-36  rounded-md">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
