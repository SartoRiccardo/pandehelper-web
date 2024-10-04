import cssCommand from "./Command.module.css";
import Markdown from "react-markdown";

export default function Command({ children }) {
  const [command, ...rest] = children.split("\n");
  const [description, params] = rest.join("\n").split("[params]");
  const paramList = (params?.split("\n>>> ") || []).slice(1);

  return (
    <div className={cssCommand.command}>
      <p
        id={command.replace(/ /, "-").substring(1)}
        className={cssCommand.name}
      >
        {command}
      </p>
      <div className={cssCommand.content}>
        <Markdown>{description}</Markdown>
        {paramList.length > 0 && (
          <>
            <p className={cssCommand.h_parameters}>Parameters</p>
            {paramList.map((param, i) => (
              <CommandParam key={i}>{param}</CommandParam>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function CommandParam({ children }) {
  const [paramInfo, ...description] = children.split("\n");
  const [param, ...properties] = paramInfo.split(/\s+/);
  let cls = cssCommand.param;
  if (properties.includes("required")) cls += " " + cssCommand.required;
  return (
    <div>
      <span className={cls}>
        <span>{param}</span>
      </span>
      <Markdown>{description.join("\n")}</Markdown>
    </div>
  );
}
