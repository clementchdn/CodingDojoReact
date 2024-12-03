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
    <div style={{ position: "relative" }}>
      <div
        dangerouslySetInnerHTML={{ __html: output }}
        style={{ position: "relative", width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 114,
          textAlign: "right",
          cursor: "pointer",
        }}
        onClick={copyContent}
      >
        <FontAwesomeIcon icon={faCopy} />
      </div>
    </div>
  );
}
