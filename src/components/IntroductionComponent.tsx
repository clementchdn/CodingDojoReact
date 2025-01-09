import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import { translations } from "./i18n/translations";

export default function IntroductionComponent() {
  const { getText } = useContext(LanguageContext);
  const myComponentSubtitle = getText("IntroductionComponentSubtitle");

  const myLearningList = ["useState", "useEffect", "useMemo"];

  return (
    <>
      <h1> {getText("IntroductionComponentHeader")} </h1>
      <h2> {myComponentSubtitle}</h2>
      <ol>
        {myLearningList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
}
