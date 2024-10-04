import MarkdownPage from "@/components/MarkdownPage";
import fs from "fs/promises";

export default async function SetupGuide({ params }) {
  const contents = await fs.readFile(
    `${process.env.PAGES_FOLDER}/commands/${params.module}.md`,
    "utf8"
  );
  return <MarkdownPage>{contents}</MarkdownPage>;
}
