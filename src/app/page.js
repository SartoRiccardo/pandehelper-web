import cssHome from "./Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8 text-center align-self-center">
          <h1>PandeHelper</h1>
          <p className="fs-5">
            Contested Territory Discord bot used by most top teams.
          </p>
          <p className="pt-1 pb-3">
            Used in{" "}
            <u>
              <b>70</b> servers
            </u>
          </p>
          <p>
            <a
              href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_BOT_ID}&permissions=${process.env.NEXT_PUBLIC_BOT_PERMS}&scope=bot&integration_type=0`}
              target="_blank"
            >
              <i className="bi bi-discord" /> Invite
            </a>{" "}
            | <i className="bi bi-github" /> GitHub
          </p>
        </div>

        <div className="col-12 col-md-4 align-self-end">
          <Image
            className={cssHome.image}
            src="/img/koakuma.png"
            alt="Koakuma with a space helmet"
            width={490}
            height={460}
          />
        </div>
      </div>

      <hr className="mt-0 mb-5" />

      <h2 className="text-center">Features & Commands</h2>
    </>
  );
}
