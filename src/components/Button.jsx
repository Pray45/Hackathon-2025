import React, { useState } from 'react';

const AnimatedPenguButton = ({ text = "Click Me", path = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = path;
  };

  return (
    <div className="flex items-center rounded-xl justify-center bg-blue-500">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative
          px-4 py-2 
          rounded-xl
          border-2 border-black
          text-white text-[1vw] font-bold
          overflow-hidden
          bg-blue-300
        "
      >
        <span className="relative z-20">{text}</span>

        <div
          className={`
            absolute bottom-0 left-1/2 transform -translate-x-1/2
            bg-black
            border-5 border-purple-500
            transition-all duration-500 ease-out
            z-10
            rounded-t-full
            ${isHovered ? 'h-full w-full scale-150' : 'h-0 w-0 opacity-0'}
          `}
          style={{
            boxShadow: isHovered
              ? '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)'
              : 'none'
          }}
        />
      </button>
    </div>
  );
};

export default AnimatedPenguButton;
