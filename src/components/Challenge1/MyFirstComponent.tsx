import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function MyFirstComponent() {
  const { getText } = useContext(LanguageContext);
  return (
    <div>
      <p>{getText("Challenge1Description")}</p>
      <Hello />
    </div>
  );
}

function Hello() {
  return <h3> Clément </h3>;
}
