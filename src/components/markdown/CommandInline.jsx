import cssCmdLn from "./CommandInline.module.css";
import cssGuide from "../MarkdownPage.module.css";
import commandModules from "@/utils/command-modules";
import { Fragment } from "react";
import Link from "next/link";

export default function InlineCommand({ children }) {
  let module = null;
  let commandName = [];
  let isCommandName = true;

  const cmdParts = children.split(" ");
  const cmdComp = (
    <code className={cssCmdLn.command}>
      {cmdParts.map((part, i) => {
        if (i === 0) module = commandModules[part.substring(1)] || null;

        if (part.includes(":")) {
          isCommandName = false;
          const [param, value] = part.split(":", 2);

          let clsValue = cssCmdLn.value;
          if (value.startsWith("#") || value.startsWith("@")) {
            clsValue += " " + cssGuide.mention;
          }

          return (
            <Fragment key={part}>
              <span>
                <span className={cssCmdLn.parameter}>{param}:</span>
                <span className={clsValue}>{value}</span>
              </span>
              {i < cmdParts.length - 1 && " "}
            </Fragment>
          );
        }

        if (isCommandName) commandName.push(part);

        return (
          <Fragment key={part}>
            <span>{part}</span>
            {i < cmdParts.length - 1 && " "}
          </Fragment>
        );
      })}
    </code>
  );

  return module ? (
    <Link
      className={cssCmdLn.command_link}
      href={`/commands/${module}#${commandName.join("-").substring(1)}`}
    >
      {cmdComp}
    </Link>
  ) : (
    cmdComp
  );
}
