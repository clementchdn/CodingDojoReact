import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function Counter() {
  const { getText } = useContext(LanguageContext);
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevValue) => ++prevValue);
  }

  return (
    <div>
      <p>
        {getText("Challenge2Description")}
        <button onClick={incrementCounter}> {getText("here")} </button>.
        {getText("count")}: {counter}
      </p>
    </div>
  );
}
