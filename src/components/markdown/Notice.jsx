import cssNotice from "./Notice.module.css";
import { titleFont } from "@/lib/fonts";
import Markdown from "react-markdown";

export const noticeProperties = {
  info: { cls: cssNotice.info, icon: "bi-info-circle", label: "Info" },
  warn: {
    cls: cssNotice.warn,
    icon: "bi-exclamation-triangle-fill",
    label: "Warning",
  },
};

export default function Notice({ children, language }) {
  const noticeProps = noticeProperties[language];
  return (
    <div className={`${cssNotice.notice} ${noticeProps.cls}`}>
      <div className={`${cssNotice.notice_header} fs-5`}>
        <i className={`bi ${noticeProps.icon}`} />{" "}
        <span className={titleFont.className}>{noticeProps.label}</span>
      </div>
      <div className={cssNotice.notice_body}>
        <Markdown>{children}</Markdown>
      </div>
    </div>
  );
}
