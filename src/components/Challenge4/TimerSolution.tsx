import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function Timer() {
  const [timeSpentOnSlide, setTimeSpentOnslide] = useState<number>(0);

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const { getText } = useContext(LanguageContext);

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
      <p>
        {getText("Challenge4Description1")}
        <i>useEffect</i> {getText("Challenge4Description2")}
      </p>
      <span ref={elementRef}>
        {getText("Challenge4Description3")} {timeSpentOnSlide}&nbsp;
        {getText("seconds")}
      </span>
    </div>
  );
}
