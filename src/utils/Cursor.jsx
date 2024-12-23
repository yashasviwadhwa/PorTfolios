import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Update CursorDot position
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      // Animate CursorOutline position
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            transform: `translate(${clientX}px, ${clientY}px)`,
          },
          {
            duration: 500,
            fill: "forwards",
          }
        );
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        data-cursor-dot
        className="fixed top-0 left-0 w-[12px] h-[12px]  rounded-full z-[1] pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-light-pinkColor"
      />
      <div
        ref={cursorOutlineRef}
        data-cursor-outline     
        className="fixed top-0 left-0 w-[35px] h-[35px] border-2 rounded-full z-[1] pointer-events-none -translate-x-1/2 -translate-y-1/2 border-light-pinkColor"
      />    
    </>
  );
};

export default CustomCursor;
