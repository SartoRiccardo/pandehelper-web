import cssGuide from "./MarkdownPage.module.css";
import { Fragment } from "react";
import Markdown from "react-markdown";
import { noticeProperties } from "./Notice";
import Notice from "./Notice";
import commandModules from "@/utils/command-modules";
import Link from "next/link";

export default function MarkdownPage({ children }) {
  return (
    <Markdown
      className={cssGuide.markdown}
      components={{
        h1(props) {
          return (
            <h1
              className={cssGuide.heading}
              id={props.children.replace(/ /g, "-").toLowerCase()}
              {...props}
            />
          );
        },
        h2(props) {
          return (
            <h2
              className={cssGuide.heading}
              id={props.children.replace(/ /g, "-").toLowerCase()}
              {...props}
            />
          );
        },
        h3(props) {
          return (
            <h3
              className={cssGuide.heading}
              id={props.children.replace(/ /g, "-").toLowerCase()}
              {...props}
            />
          );
        },
        h4(props) {
          return (
            <h4
              className={cssGuide.heading}
              id={props.children.replace(/ /g, "-").toLowerCase()}
              {...props}
            />
          );
        },

        code(props) {
          const { children } = props;
          if (children.startsWith("/")) {
            return <InlineCommand key={children}>{children}</InlineCommand>;
          }
          if (children.startsWith("#") || children.startsWith("@")) {
            return <code className={cssGuide.mention} {...props} />;
          }
          return <code {...props} />;
        },

        pre(props) {
          const { node } = props;
          const classes = node.children[0].properties.className || [];
          const language = classes.find((el) => el.startsWith("language-"));
          const match = /language-(\w+)/.exec(language || "");
          const content = node.children[0].children[0].value;

          if (match && Object.keys(noticeProperties).includes(match[1])) {
            return <Notice language={match[1]}>{content}</Notice>;
          }

          return <pre {...props} />;
        },
      }}
    >
      {children}
    </Markdown>
  );
}

function InlineCommand({ children }) {
  let module = null;
  let commandName = [];
  let isCommandName = true;

  const cmdParts = children.split(" ");
  const cmdComp = (
    <code className={cssGuide.command}>
      {cmdParts.map((part, i) => {
        if (i === 0) module = commandModules[part.substring(1)] || null;

        if (part.includes(":")) {
          isCommandName = false;
          const [param, value] = part.split(":", 2);

          let clsValue = cssGuide.value;
          if (value.startsWith("#") || value.startsWith("@")) {
            clsValue += " " + cssGuide.mention;
          }

          return (
            <Fragment key={part}>
              <span>
                <span className={cssGuide.parameter}>{param}:</span>
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
      className={cssGuide.command_link}
      href={`/commands/${module}#${commandName.join("-").substring(1)}`}
    >
      {cmdComp}
    </Link>
  ) : (
    cmdComp
  );
}
