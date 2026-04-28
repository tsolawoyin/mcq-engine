import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllSlugs, getReading } from "@/lib/readings";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reading = await getReading(slug);

  return (
    <div className="space-y-6 my-10">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{reading.title}</h1>
        {reading.description && (
          <p className="mt-1 text-muted-foreground">{reading.description}</p>
        )}
        {reading.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {reading.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article
        className="prose prose-neutral dark:prose-invert prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: reading.html }}
      />
    </div>
  );
}
