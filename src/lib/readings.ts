import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

const readingsDir = path.join(process.cwd(), "src/data/readings");

export interface ReadingMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Reading extends ReadingMeta {
  html: string;
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(readingsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllReadings(): ReadingMeta[] {
  return getAllSlugs().map((slug) => {
    const raw = fs.readFileSync(path.join(readingsDir, `${slug}.md`), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      tags: data.tags ?? [],
    };
  });
}

export async function getReading(slug: string): Promise<Reading> {
  const raw = fs.readFileSync(
    path.join(readingsDir, `${slug}.md`),
    "utf-8",
  );
  const { data, content } = matter(raw);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    tags: data.tags ?? [],
    html: String(result),
  };
}
