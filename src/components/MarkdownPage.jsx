import cssGuide from "./MarkdownPage.module.css";
import Markdown from "react-markdown";
import { noticeProperties } from "./markdown/Notice";
import Notice from "./markdown/Notice";
import InlineCommand from "./markdown/CommandInline";
import Command from "./markdown/Command";

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

        img(props) {
          return (
            <span className={cssGuide.image}>
              <img {...props} />
            </span>
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
          const clsLanguage = classes.find((el) => el.startsWith("language-"));
          const match = /language-(\w+)/.exec(clsLanguage || "");

          if (match) {
            const language = match[1];
            const content = node.children[0].children[0].value;

            if (Object.keys(noticeProperties).includes(language))
              return <Notice language={language}>{content}</Notice>;

            if (language === "command") return <Command>{content}</Command>;
          }

          return <pre {...props} />;
        },
      }}
    >
      {children}
    </Markdown>
  );
}
