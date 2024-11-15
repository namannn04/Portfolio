import React, { useState, useEffect } from 'react';

const greetings = [
  "Welcome",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "你好",
  "مرحبا",
];

const Preloader = () => {
  const [currentText, setCurrentText] = useState(greetings[0]);
  const [index, setIndex] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const changeText = setInterval(() => {
      if (index < greetings.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(changeText);
        setTimeout(() => setShowPreloader(false), 500); // Hide preloader quickly
      }
    }, 800); // Faster interval (0.8s)

    // Updating current text based on the index
    const textChangeTimer = setTimeout(() => {
      setCurrentText(greetings[index]);
    }, 600);  // Update text after a delay for smooth transition

    return () => {
      clearTimeout(textChangeTimer);
      clearInterval(changeText);
    };
  }, [index]);

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fadeInOut">
        {currentText}
      </h1>
    </div>
  );
};

export default Preloader;
