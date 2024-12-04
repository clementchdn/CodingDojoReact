import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons/faCopy";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export default function CodeHighlighter(props: { code: string }) {
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    const setter = async () =>
      setOutput(
        await codeToHtml(props.code, {
          lang: "tsx",
          theme: "catppuccin-mocha",
        }),
      );
    setter();
  }, [props.code]);

  function copyContent() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: output }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "20px",
          textAlign: "right",
          cursor: "pointer",
        }}
        onClick={copyContent}
      >
        <button style={{ padding: 0, background: "none" }}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </>
  );
}
