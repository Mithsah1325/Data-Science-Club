import React from 'react';
import { useNavigate } from 'react-router-dom';

function VideoSection() {
  const navigate = useNavigate();

  // Handle 'Get Started' button click
  const handleGetStartedClick = () => {
    navigate('/get-started');
  };

  // Handle 'Learn More' text click (scrolls the page down)
  const handleLearnMoreClick = () => {
    window.scrollBy(0, 800); // Adjust scroll value as necessary
  };

  return (
    <div className="video-container relative overflow-hidden h-screen font-klavika-bold text-3xl">
      {/* Background video */}
      <video className="background-video w-full h-full object-cover" autoPlay loop muted playsInline disablePictureInPicture>
        <source src="images/cover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="video-overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col  p-20">
        <div className="text-left text-white">
          {/* Main heading */}
          <h1 className="text-5xl font-bold mb-4 font-klavika">
            Data Science Club <br /> Starts Here.
          </h1>
          
          {/* Supporting text */}
          <p className="text-2xl mb-6">
            Learn how to convert <span className='text-[#ffc72c]'>data insight into action</span> for your next project<br />with 
            <span className='text-[#ffc72c]'> personalized support</span> from the peers and mentors.
          </p>

          {/* 'Get Started' button */}
          <button 
            className="bg-[#ffc72c] hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full mb-4"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>

          {/* 'Learn More' link */}
          <div 
            className="text-white underline cursor-pointer text-center" 
            onClick={handleLearnMoreClick}
          >
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
