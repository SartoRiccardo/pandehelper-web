import cssGuide from "./MarkdownPage.module.css";
import { titleFont } from "@/lib/fonts";
import Markdown from "react-markdown";

export const noticeProperties = {
  info: { cls: cssGuide.info, icon: "bi-info-circle", label: "Info" },
  warn: {
    cls: cssGuide.warn,
    icon: "bi-exclamation-triangle-fill",
    label: "Warning",
  },
};

export default function Notice({ children, language }) {
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
