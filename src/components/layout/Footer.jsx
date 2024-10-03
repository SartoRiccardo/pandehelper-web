import Link from "next/link";
import cssBase from "./BaseLayout.module.css";

export default function Footer() {
  return (
    <footer className={cssBase.footer}>
      <hr />
      <p>
        <a
          href="https://github.com/SartoRiccardo/ct-ticket-tracker"
          target="_blank"
        >
          <i className="bi bi-github" /> GitHub
        </a>
      </p>
      <p>
        <Link href="/terms-of-service">Terms of Service</Link> |&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </footer>
  );
}
