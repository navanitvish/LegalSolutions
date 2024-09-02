// src/Components/CustomPointer.js
import React, { useEffect, useRef } from 'react';
import './CustomPointer.css'; // Import CSS for custom pointer

const CustomPointer = () => {
  const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (pointerRef.current) {
        pointerRef.current.style.left = `${e.clientX}px`;
        pointerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="custom-pointer"
      ref={pointerRef}
    />
  );
};

export default CustomPointer;
