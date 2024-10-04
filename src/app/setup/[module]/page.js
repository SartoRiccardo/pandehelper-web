import MarkdownPage from "@/components/MarkdownPage";
import fs from "fs/promises";

export default async function SetupGuide({ params }) {
  const contents = await fs.readFile(
    `${process.cwd()}/src/pages/setup/${params.module}.md`,
    "utf8"
  );
  return <MarkdownPage>{contents}</MarkdownPage>;
}
