"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Offcanvas = dynamic(() => import("react-bootstrap/Offcanvas"), {
  ssr: false,
});

export default function OffcMobileNav(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (props.show) setMounted(true);
  }, [props.show]);

  return mounted && <Offcanvas {...props}></Offcanvas>;
}
