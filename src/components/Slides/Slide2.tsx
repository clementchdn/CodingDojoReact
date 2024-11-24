import ChallengeWrapper from "../ChallengeWrapper";
import CodeHighlighter from "../CodeHighlighter";
import Counter from "../Challenge2/Counter";
import CounterSolution from "../Challenge2/CounterSolution";
import CounterSolutionRaw from "../Challenge2/CounterSolution?raw";

export default function Slide2() {
  // Dynamically resolve the relative path to MyFirstComponentSolution
  const path = new URL("../Challenge2/Counter", import.meta.url).pathname;
  return (
    <section>
      <section>
        <ChallengeWrapper componentPath={path} type="Challenge">
          <Counter />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Solution">
          <CounterSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <CodeHighlighter code={CounterSolutionRaw} />
      </section>
    </section>
  );
}
