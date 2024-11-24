import ChallengeWrapper from "../ChallengeWrapper";
import CodeHighlighter from "../CodeHighlighter";
import Holidays from "../Challenge3/Holidays";
import HolidaysSolution from "../Challenge3/HolidaysSolution";
import HolidaysSolutionRaw from "../Challenge3/HolidaysSolution?raw";

export default function Slide3() {
  const path = new URL("../Challenge3/Holidays", import.meta.url).pathname;
  return (
    <section>
      <section>
        <ChallengeWrapper componentPath={path} type="Challenge">
          <Holidays />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Solution">
          <HolidaysSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <CodeHighlighter code={HolidaysSolutionRaw} />
      </section>
    </section>
  );
}
