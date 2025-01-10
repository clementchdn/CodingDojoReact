import { useContext } from "react";
import {
  LanguageContext,
  LanguageProvider,
} from "./components/LanguageProvider";
import RevealWrapper from "./components/RevealWrapper";

import {
  FirstComponentSlide,
  TimerSlide,
  UseStateSlide,
  UseEffectSlide,
  IntroductionSlide,
} from "./components/Slides";

const WelcomeSlide = () => {
  const { getText } = useContext(LanguageContext);
  return (
    <section>
      <h2>Coding dojo React 1</h2>
      <p style={{ textAlign: "left", padding: "1em" }}>
        {getText("AppDescription")}
      </p>
    </section>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <RevealWrapper>
        <WelcomeSlide />
        <IntroductionSlide />
        <FirstComponentSlide />
        <UseStateSlide />
        <UseEffectSlide />
        <TimerSlide />
      </RevealWrapper>
    </LanguageProvider>
  );
};

export default App;
