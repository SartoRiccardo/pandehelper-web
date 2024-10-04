import { NextResponse } from "next/server";

const matcher = [
  { check: /^\/setup\/(.+)/, dir: `src/pages/setup` },
  { check: /^\/commands\/(.+)/, dir: `src/pages/commands` },
];

/**
 * Return 404 if attempting to access a page that doesn't exist.
 */
export default async function protectRoutesMiddleware(request, _rsp) {
  const resp404 = {
    response: NextResponse.rewrite(new URL("/not-found", request.url)),
    stop: true,
  };

  for (const { check, dir } of matcher) {
    const match = check.exec(request.nextUrl.pathname);
    if (match) {
      const existsResp = await fetch(
        `http://localhost:3000/api/checkfile?` +
          new URLSearchParams({ file: `${dir}/${match[1]}.md` })
      );
      return existsResp.ok ? null : resp404;
    }
  }
}
