import CodeHighlighter from "../CodeHighlighter";
import IntroductionComponent from "../IntroductionComponent";
import IntroductionComponentRaw from "../IntroductionComponent?raw";
import "../../App.scss";

export default function IntroductionSlide() {
  return (
    <section>
      <div className="lesson-slide">
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
          }}
        >
          <CodeHighlighter code={IntroductionComponentRaw} />
        </div>
        <div>
          <IntroductionComponent />
        </div>
      </div>
    </section>
  );
}
