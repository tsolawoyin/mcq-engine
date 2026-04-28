import Link from "next/link";
import { getAllReadings } from "@/lib/readings";

export default function ReadingsPage() {
  const readings = getAllReadings();

  return (
    <div className="mt-10 space-y-6">
      <h1>A curated list of personal notes and research. Some are also generated with ChatGPT.</h1>
      {readings.length === 0 && (
        <p className="text-muted-foreground">No readings available yet.</p>
      )}

      <div className="space-y-3">
        {readings.map((r) => (
          <Link
            key={r.slug}
            href={`/readings/${r.slug}`}
            className="block rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <h2 className="font-semibold underline underline-offset-4">
              {r.title}
            </h2>
            {r.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {r.description}
              </p>
            )}
            {/* {r.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
}
