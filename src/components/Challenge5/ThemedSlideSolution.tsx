import { useEffect, useRef, useState } from "react";

export default function ThemedSlideSolution() {
  const [timeSpentOnSlide, setTimeSpentOnslide] = useState<number>(0);

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update visibility state based on intersection status
      setIsVisible(entry.isIntersecting);
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: number = NaN;
    if (isVisible) {
      interval = setInterval(() => {
        setTimeSpentOnslide((prevTime) => ++prevTime);
      }, 1000);
    } else {
      setTimeSpentOnslide(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div>
      <span ref={elementRef}>
        Watching this slide since: {timeSpentOnSlide} seconds
      </span>
    </div>
  );
}
