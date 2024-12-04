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
        <ChallengeWrapper componentPath={path} type="Challenge" challNumber={3}>
          <Holidays />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Solution" challNumber={3}>
          <HolidaysSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper componentPath={path} type="Code" challNumber={3}>
          <CodeHighlighter code={HolidaysSolutionRaw} />
        </ChallengeWrapper>
      </section>
    </section>
  );
}
