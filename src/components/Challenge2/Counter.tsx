import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function Counter() {
  const { getText } = useContext(LanguageContext);
  const counter = 0;

  return (
    <div>
      <p>
        {getText("Challenge2Description")}
        <button> {getText("here")} </button>. {getText("count")}: {counter}
      </p>
    </div>
  );
}
