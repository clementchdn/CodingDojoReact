export default function MyFirstComponent() {
  const firstname = "Clément";
  return (
    <div>
      This is an exemple of React component. Now create a new function component
      named Greetings which takes a string and displays it in a header tag.
      <Greetings name={firstname} />
    </div>
  );
}

function Greetings(props: { name: string }) {
  return <h1> Hello, {props.name} </h1>;
}
