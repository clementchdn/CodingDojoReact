import { ReactElement } from "react";
import Reveal from "reveal.js";

export default function ChallengeWrapper({
  children,
  componentPath,
  type,
}: {
  children: ReactElement;
  componentPath: string;
  type: "Challenge" | "Solution";
}) {
  const formattedPath =
    type === "Challenge"
      ? componentPath
      : componentPath.slice(1, componentPath.length - 4) +
        type +
        componentPath.slice(componentPath.length - 4);

  const indices = Reveal.getIndices();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "min-content min-content 1fr",
      }}
    >
      <h2 style={{ textAlign: "left" }}>
        {type} {indices.h}
      </h2>
      <h3 style={{ textAlign: "left" }}>
        {/* remove first "/" character in the path */}
        Component: {formattedPath}
      </h3>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
