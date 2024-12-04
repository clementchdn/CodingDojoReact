import ChallengeWrapper from "../ChallengeWrapper";
import CodeHighlighter from "../CodeHighlighter";
import Timer from "../Challenge4/Timer";
import TimerSolution from "../Challenge4/TimerSolution";
import TimerSolutionRaw from "../Challenge4/TimerSolution?raw";

const challengeNumber = 4;

export default function TimerSlide() {
  // Dynamically resolve the relative path to MyFirstComponentSolution
  const path = new URL("../Challenge4/Timer", import.meta.url).pathname;
  return (
    <section>
      <section>
        <ChallengeWrapper
          componentPath={path}
          type="Solution"
          challNumber={challengeNumber}
        >
          <TimerSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper
          componentPath={path}
          type="Challenge"
          challNumber={challengeNumber}
        >
          <Timer />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper
          componentPath={path}
          type="Code"
          challNumber={challengeNumber}
        >
          <CodeHighlighter code={TimerSolutionRaw} />
        </ChallengeWrapper>
      </section>
    </section>
  );
}
