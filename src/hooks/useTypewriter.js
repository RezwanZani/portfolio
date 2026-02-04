import { useState, useEffect } from 'react';

export const useTypewriter = (texts, typingSpeed = 150, deletingSpeed = 50, pauseDuration = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    const handleTyping = () => {
      setDisplayedText((prev) => 
        isDeleting 
          ? currentText.substring(0, prev.length - 1) 
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const baseSpeed = isDeleting ? deletingSpeed : typingSpeed;
    const cursorSpeed = Math.max(120, baseSpeed * 2);
    if (isDeleting) {
      setShowCursor(true);
      return undefined;
    }
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorSpeed);

    return () => clearInterval(cursorTimer);
  }, [isDeleting, typingSpeed, deletingSpeed]);

  return `${displayedText}${showCursor ? '|' : ''}`;
};