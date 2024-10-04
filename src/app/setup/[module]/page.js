import MarkdownPage from "@/components/MarkdownPage";
import fs from "fs/promises";

export async function generateMetadata({ params }) {
  let title = params.module
    .replace(/(^|-)(\w)/g, (_m, g1, g2) => `${g1}${g2.toUpperCase()}`)
    .replace(/-/, " ");
  return {
    title: `${title} | PandeHelper`,
  };
}

export default async function SetupGuide({ params }) {
  const contents = await fs.readFile(
    `${process.env.PAGES_FOLDER}/setup/${params.module}.md`,
    "utf8"
  );
  return <MarkdownPage>{contents}</MarkdownPage>;
}
