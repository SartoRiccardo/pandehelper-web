import Markdown from "react-markdown";

export default function Command({ children }) {
  const [command, ...rest] = children.split("\n");
  const [description, params] = rest.join("\n").split("[params]");
  const paramList = (params?.split("\n>>> ") || []).slice(1);

  return (
    <div className={cssGuide.command_info}>
      <div>{command}</div>
      <Markdown>{description}</Markdown>
      {paramList.map((param, i) => (
        <CommandParam key={i}>{param}</CommandParam>
      ))}
    </div>
  );
}

function CommandParam({ children }) {
  const [paramInfo, ...description] = children.split("\n");
  const [param, ...properties] = paramInfo.split(/\s+/);
  return (
    <div>
      {param}
      <Markdown>{description.join("\n")}</Markdown>
    </div>
  );
}
