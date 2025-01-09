import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function MyFirstComponent() {
  const { getText } = useContext(LanguageContext);

  const firstname = "Clément";
  return (
    <>
      <p>{getText("Challenge1Description")}</p>
      <Greetings name={firstname} />
    </>
  );
}

function Greetings({ name }: { name: string }) {
  return <h3> Hello, {name} </h3>;
}
