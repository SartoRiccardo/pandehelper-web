import Link from "next/link";
import cssBase from "./BaseLayout.module.css";

export default function Header() {
  return (
    <div className={cssBase.header}>
      <Link href="/">
        <div>
          <span className="fs-2">PandeHelper</span>
        </div>
      </Link>

      <nav class={cssBase.navigation}>
        <a
          href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_BOT_ID}&permissions=${process.env.NEXT_PUBLIC_BOT_PERMS}&scope=bot&integration_type=0`}
          target="_blank"
        >
          <div>
            <span>Invite</span>
          </div>
        </a>

        <div className={cssBase.has_dropdown}>
          <span>
            Commands <i className="bi bi-caret-down ms-1" />
          </span>
          <div className={cssBase.dropdown}>
            <ul>
              <li>
                <Link href="/commands/tile-capturing">Tile Capturing</Link>
              </li>
              <li>
                <Link href="/commands/banner-planner">Banner Planner</Link>
              </li>
              <li>
                <Link href="/commands/map-information">Map Information</Link>
              </li>
              <li>
                <Link href="/commands/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link href="/commands/other">Other</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cssBase.has_dropdown}>
          <span>
            Setting Up <i className="bi bi-caret-down ms-1" />
          </span>
          <div className={cssBase.dropdown}>
            <ul>
              <li>
                <Link href="/setup/tracker-channel">Tracker Channel</Link>
              </li>
              <li>
                <Link href="/setup/banner-planner">Banner Planner</Link>
              </li>
              <li>
                <Link href="/setup/strategy-forum">Strategy Forum</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
