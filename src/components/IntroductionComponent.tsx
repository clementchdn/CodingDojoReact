export default function IntroductionComponent() {
  const myComponentSubtitle = "I'm a variable";

  const myLearningList = ["useState", "useEffect", "useMemo"];

  return (
    <>
      <h1> I am a react component </h1>
      <h2> {myComponentSubtitle}</h2>
      <ol>
        {myLearningList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
}
