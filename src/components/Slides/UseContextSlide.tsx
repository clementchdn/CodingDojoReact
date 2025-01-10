import ChallengeWrapper from "../ChallengeWrapper";
import CodeHighlighter from "../CodeHighlighter";
import ThemedSlide from "../Challenge5/ThemedSlide";
import ThemedSlideSolution from "../Challenge5/ThemedSlideSolution";
import ThemedSlideSolutionRaw from "../Challenge5/ThemedSlideSolution?raw";

export default function Slide5() {
  const path = new URL("../Challenge5/ThemedSlide", import.meta.url).pathname;
  return (
    <section>
      <section>
        <ChallengeWrapper componentPath={path} type="Solution" challNumber={5}>
          <ThemedSlideSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Challenge" challNumber={5}>
          <ThemedSlide />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Code" challNumber={5}>
          <CodeHighlighter code={ThemedSlideSolutionRaw} />
        </ChallengeWrapper>
      </section>
    </section>
  );
}
