import cssHome from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import SvgTile from "@/svg/tile.svg";
import SvgBanner from "@/svg/banner.svg";
import { REST, Routes } from "discord.js";

export default async function Home() {
  let appInfo = null;
  try {
    const rest = new REST({ version: "10" }).setToken(process.env.APP_TOKEN);
    appInfo = await rest.get(
      Routes.currentApplication(process.env.APP_CLIENT_ID)
    );
  } catch (exc) {}

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8 text-center align-self-center">
          <h1>PandeHelper</h1>
          <p className="fs-5">
            Contested Territory Discord bot used by most top teams.
          </p>
          {appInfo && (
            <p className="pt-1 pb-3">
              Used in{" "}
              <u>
                <b>{appInfo.approximate_guild_count}</b> servers
              </u>
            </p>
          )}
          <p>
            <a
              href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_BOT_ID}&permissions=${process.env.NEXT_PUBLIC_BOT_PERMS}&scope=bot&integration_type=0`}
              target="_blank"
            >
              <i className="bi bi-discord" /> Invite
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://github.com/SartoRiccardo/ct-ticket-tracker"
              target="_blank"
            >
              <i className="bi bi-github" /> GitHub
            </a>
          </p>
        </div>

        <div className="col-12 col-md-4 align-self-end">
          <Image
            className={cssHome.image}
            src="/img/koakuma.png"
            alt="Koakuma with a space helmet"
            width={432}
            height={502}
          />
        </div>
      </div>

      <hr className="mt-0 mb-5" />

      <h2 className="text-center mb-4">Features & Commands</h2>

      <div className="row gy-4">
        <div className="col-12 col-md-6 flex-fill">
          <FeatureCard
            icon={<SvgTile className={cssHome.icon} />}
            href="/setup/tracker-channel"
            label="Tile Capturing System"
            description="A way for you to check what your team members are up to"
          />
        </div>
        <div className="col-12 col-md-6 flex-fill">
          <FeatureCard
            icon={<SvgBanner className={cssHome.icon} />}
            href="/setup/banner-planner"
            label="Banner Planner"
            description="Check which tiles need refreshing and plan who's available to take them"
          />
        </div>
        <div className="col-12 col-md-6 flex-fill">
          <FeatureCard
            icon={<i className="bi bi-search" />}
            href="/commands/map-information"
            label="Tile Challenge Data"
            description="Check a tile's restrictions without having to log in the game"
          />
        </div>
        <div className="col-12 col-md-6 flex-fill">
          <FeatureCard
            icon={<i className="bi bi-book" />}
            href="commands/leaderboard"
            label="Other Features"
            description="Big and small quality of life features to make your CT events a little better"
          />
        </div>
      </div>
    </>
  );
}

function FeatureCard({ href, label, description, icon }) {
  return (
    <Link className={cssHome.feature_card} href={href}>
      <div>
        <div className={cssHome.feature}>
          <div className={cssHome.feature_icon}>{icon}</div>
          <div className={cssHome.feature_info}>
            <p className={cssHome.feature_title}>{label}</p>
          </div>
        </div>
        <p className="mb-0">{description}</p>
      </div>
    </Link>
  );
}
