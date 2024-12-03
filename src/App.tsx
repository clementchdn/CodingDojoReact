import RevealWrapper from "./components/RevealWrapper";

import {
  FirstComponentSlide,
  UseStateSlide,
  UseEffectSlide,
  IntroductionSlide,
} from "./components/Slides";

const App = () => {
  return (
    <RevealWrapper>
      <section>
        <h2>Coding dojo React 1</h2>
        <p>
          Ce coding dojo présenté sous la forme de slides a pour objectif
          d'apprendre les bases de React. Il vous faudra modifier le code des
          slides "Challenge" pour avancer dans le cours. Pour passer à la slide
          suivante ou revenir à la précédente, vous pouvez utiliser les flèches
          de votre clavier.
        </p>
      </section>
      <IntroductionSlide />
      <FirstComponentSlide />
      <UseStateSlide />
      <UseEffectSlide />
    </RevealWrapper>
  );
};

export default App;
