import cssGuide from "./MarkdownPage.module.css";
import { Fragment } from "react";
import Markdown from "react-markdown";
import { titleFont } from "@/lib/fonts";

const noticeProperties = {
  info: { cls: cssGuide.info, icon: "bi-info-circle", label: "Info" },
  warn: {
    cls: cssGuide.warn,
    icon: "bi-exclamation-triangle-fill",
    label: "Warning",
  },
};

export default function MarkdownPage({ children }) {
  return (
    <Markdown
      className={cssGuide.markdown}
      components={{
        h1(props) {
          return <h1 className={cssGuide.heading} {...props} />;
        },
        h2(props) {
          return <h2 className={cssGuide.heading} {...props} />;
        },
        h3(props) {
          return <h3 className={cssGuide.heading} {...props} />;
        },
        h4(props) {
          return <h4 className={cssGuide.heading} {...props} />;
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

          if (match && Object.keys(noticeProperties).includes(match[1])) {
            const content = node.children[0].children[0].value;
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
  const cmdParts = children.split(" ");
  const cmdComp = cmdParts.map((part, i) => {
    if (part.includes(":")) {
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

    return (
      <Fragment key={part}>
        <span>{part}</span>
        {i < cmdParts.length - 1 && " "}
      </Fragment>
    );
  });

  return <code className={cssGuide.command}>{cmdComp}</code>;
}

function Notice({ children, language }) {
  const noticeProps = noticeProperties[language];
  return (
    <div className={`${cssGuide.notice} ${noticeProps.cls}`}>
      <div className={`${cssGuide.notice_header} fs-5`}>
        <i className={`bi ${noticeProps.icon}`} />{" "}
        <span className={titleFont.className}>{noticeProps.label}</span>
      </div>
      <div className={cssGuide.notice_body}>
        <Markdown>{children}</Markdown>
      </div>
    </div>
  );
}
