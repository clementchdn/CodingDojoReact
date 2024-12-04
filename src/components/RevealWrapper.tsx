import React, { useEffect, ReactNode } from "react";
import Reveal from "reveal.js";
import RevealSearch from "reveal.js/plugin/search/search";
import "reveal.js/dist/reveal.css"; // Core CSS
import "reveal.js/dist/theme/moon.css"; // Theme CSS

interface RevealWrapperProps {
  children: ReactNode;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({ children }) => {
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize({
      height: "100%",
      width: "100%",
      controls: true,
      progress: true,
      slideNumber: true,
      hash: true,
      margin: 0.04,
      center: false,
      highlight: {
        beforeHighlight: async (hljs) => await hljs.registerLanguage("tsx"),
      },
      plugins: [RevealSearch],
    });
  }, []);

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

export default RevealWrapper;
