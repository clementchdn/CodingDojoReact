import CodeHighlighter from "../CodeHighlighter";
import IntroductionComponent from "../IntroductionComponent";
import IntroductionComponentRaw from "../IntroductionComponent?raw";
import "../../App.scss";

export default function IntroductionSlide() {
  return (
    <section>
      <div className="lesson-slide">
        <CodeHighlighter code={IntroductionComponentRaw} />
        <div>
          <IntroductionComponent />
        </div>
      </div>
    </section>
  );
}
