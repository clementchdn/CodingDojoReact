import CodeHighlighter from "../CodeHighlighter";
import MyFirstComponent from "../Challenge1/MyFirstComponent";
import MyFirstComponentSolution from "../Challenge1/MyFirstComponentSolution";
import MyFirstComponentSolutionRaw from "../Challenge1/MyFirstComponentSolution?raw";
import ChallengeWrapper from "../ChallengeWrapper";

export default function Slide1() {
  // Dynamically resolve the relative path to MyFirstComponentSolution
  const myFirstComponentPath = new URL(
    "../Challenge1/MyFirstComponent",
    import.meta.url,
  ).pathname;

  return (
    <section>
      <section>
        <ChallengeWrapper
          componentPath={myFirstComponentPath}
          type="Solution"
          challNumber={1}
        >
          <MyFirstComponentSolution />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper
          componentPath={myFirstComponentPath}
          type="Challenge"
          challNumber={1}
        >
          <MyFirstComponent />
        </ChallengeWrapper>
      </section>
      <section>
        <ChallengeWrapper
          componentPath={myFirstComponentPath}
          type="Code"
          challNumber={1}
        >
          <CodeHighlighter code={MyFirstComponentSolutionRaw} />
        </ChallengeWrapper>
      </section>
    </section>
  );
}
