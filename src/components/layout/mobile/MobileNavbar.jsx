"use client";
import cssBase from "../BaseLayout.module.css";
import { useState } from "react";
import Link from "next/link";
import OffcMobileNav from "@/components/transitions/OffcMobileNav";
import navlinks from "../navlinks";
import CollapseDynamic from "@/components/transitions/CollapseDynamic";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHide = () => setMenuOpen(false);

  return (
    <>
      <span className={cssBase.mobile_menu} onClick={() => setMenuOpen(true)}>
        <i className="bi bi-list fs-1" />
      </span>

      <OffcMobileNav
        placement="top"
        show={menuOpen}
        onHide={handleHide}
        className={cssBase.mobile_dropdown}
      >
        <div className="d-flex justify-content-end p-3">
          <span className={`${cssBase.close} fs-1`} onClick={handleHide}>
            <i className="bi bi-x-lg" />
          </span>
        </div>

        <div className={`${cssBase.mobile_navlinks_container} px-3`}>
          <MobileNavlinks />
        </div>
      </OffcMobileNav>
    </>
  );
}

function MobileNavlinks() {
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
      <CollapseLink key={label} label={label}>
        {children}
      </CollapseLink>
    );
  });
}

function CollapseLink({ label, children }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const icon = open ? "bi-caret-down" : "bi-caret-right";

  return (
    <div className={cssBase.mobile_has_dropdown}>
      <span onClick={toggleOpen}>
        <i className={`bi ${icon} me-1`} /> {label}
      </span>

      <CollapseDynamic in={open}>
        <div className={cssBase.mobile_dropdown_menu}>
          <ul>
            {children.map(({ label, url }) => (
              <li key={label}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </CollapseDynamic>
    </div>
  );
}
