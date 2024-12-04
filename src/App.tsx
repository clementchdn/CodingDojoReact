import RevealWrapper from "./components/RevealWrapper";

import {
  FirstComponentSlide,
  TimerSlide,
  UseStateSlide,
  UseEffectSlide,
  IntroductionSlide,
} from "./components/Slides";

const App = () => {
  return (
    <RevealWrapper>
      <section>
        <h2>Coding dojo React 1</h2>
        <p style={{ textAlign: "left", padding: "1em" }}>
          This coding dojo presented as a slideshow aims to provide a basic
          understanding of React. Use the arrow keys of your keyboard to move
          around slides. Some slides will be marked as "Challenge". They show
          the final result of the challenge. To practice on a challenge, go to
          the slide below (down arrow) and open the file at the path displayed
          on the slide. Update the component's code until it matches the first
          slide. An example solution is available on the slide below.
        </p>
      </section>
      <IntroductionSlide />
      <FirstComponentSlide />
      <UseStateSlide />
      <UseEffectSlide />
      <TimerSlide />
    </RevealWrapper>
  );
};

export default App;
