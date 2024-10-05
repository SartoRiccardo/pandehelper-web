import Link from "next/link";
import cssBase from "./BaseLayout.module.css";
import MobileNavbar from "./mobile/MobileNavbar";
import navlinks from "./navlinks";
import Image from "next/image";

export default function Header() {
  return (
    <div className={cssBase.header}>
      <Link href="/">
        <div>
          <Image
            src="/img/pandehelper.png"
            alt=""
            width={256}
            height={256}
            className={cssBase.logo}
          />
          <span className="fs-2">PandeHelper</span>
        </div>
      </Link>

      <nav className={cssBase.navigation}>
        <div className="d-none d-md-flex">
          <DesktopNavbar
            has_dropdown={cssBase.has_dropdown}
            dropdown={cssBase.dropdown}
          />
        </div>
        <div className="d-flex d-md-none">
          <MobileNavbar />
        </div>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return navlinks.map(({ label, url, children }) => {
    const isExt = url && url.startsWith("http");

    const comp = (
      <div>
        <span>{label}</span>
      </div>
    );

    return url ? (
      isExt ? (
        <a key={label} target="_blank" href={url}>
          {comp}
        </a>
      ) : (
        <Link href={url}>{comp}</Link>
      )
    ) : (
      <div key={label} className={cssBase.has_dropdown}>
        <span>
          {label} <i className="bi bi-caret-down ms-1" />
        </span>
        <div className={cssBase.dropdown}>
          <ul>
            {children.map(({ label, url }) => (
              <li key={label}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
}
