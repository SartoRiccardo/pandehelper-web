import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(request) {
  const file = request.nextUrl.searchParams.get("file");

  try {
    await fs.access(`${process.cwd()}/${file}`);
    return new NextResponse(null, { status: 200 });
  } catch (exc) {
    return new NextResponse(null, { status: 404 });
  }
}
