import MarkdownPage from "@/components/MarkdownPage";
import { promises as fs } from "fs";

export default async function SetupGuide({ params }) {
  const contents = await fs.readFile(
    `${process.cwd()}/src/pages/setup/${params.module}.md`,
    "utf8"
  );
  return <MarkdownPage>{contents}</MarkdownPage>;
}
