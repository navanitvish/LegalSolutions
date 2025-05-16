import React, { useState, useEffect, useRef } from "react";
import CardList from "../CardList";

const LShapeContentWithVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null); // Reference to the video element

  const videos = [
    'https://videos.pexels.com/video-files/8061600/8061600-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/4475743/4475743-sd_640_360_25fps.mp4',
    'https://videos.pexels.com/video-files/4486498/4486498-sd_640_360_25fps.mp4'
  ];

  // Reset video playback when the currentVideoIndex changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload video to switch source
      videoRef.current.play(); // Start playing the new video
    }
  }, [currentVideoIndex]);

  return (
    <div className="w-full h-screen bg-gray-100 p-4 flex flex-col md:flex-row">
      {/* L-shaped content area */}
      <div className="flex flex-col w-full md:w-[500px] md:mr-4 mb-4 md:mb-0 overflow-y-auto custom-scrollbar">
        {/* Top part of L */}

        <CardList />
      </div>

      {/* Main video player taking up the rest of the space */}
      <div className="flex-grow bg-white border border-gray-300 p-4">
        <div className="w-full h-full  rounded-lg flex flex-col items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full rounded-lg"
            autoPlay
            loop
            muted
            
          >
            <source
              src={videos[currentVideoIndex]}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dots for the main video */}
          <div className="mt-4 flex justify-center">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 mx-1 rounded-full ${
                  index === currentVideoIndex ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentVideoIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LShapeContentWithVideo;
