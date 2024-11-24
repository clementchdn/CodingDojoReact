import RevealWrapper from "./components/RevealWrapper";

import { Slide1, Slide2, Slide3 } from "./components/Slides";

const App = () => {
  return (
    <RevealWrapper>
      <section>
        <h2>Coding dojo React 1</h2>
        <p>
          Ce coding dojo présenté sous la forme de slides a pour objectif
          d'apprendre les bases de React. Il vous faudra modifier le code des
          slides "Challenge" pour avancer dans le cours. Une solution sera
          proposé dans la slide suivante.
        </p>
      </section>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </RevealWrapper>
  );
};

export default App;
