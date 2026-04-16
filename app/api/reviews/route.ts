import { NextResponse } from "next/server";

export interface AppReview {
  id: string;
  name: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}

const FALLBACK_REVIEWS: AppReview[] = [
  {
    id: "fallback-1",
    name: "SandieSlayyerr",
    rating: 5,
    title: "Strategic, Smooth, and Addictive!",
    content:
      "I've played quite a few 2048-style games, but 2248 Linko stands out because of its fluid mechanics. The ability to link numbers in eight directions adds a layer of strategy that standard sliding puzzles lack. The minimalist design is very 'zen' and perfect for unwinding after work.",
    date: "2026-04-05",
  },
  {
    id: "fallback-2",
    name: "Sohhini Dey Ssarkar",
    rating: 5,
    title: "Learning math again 😋",
    content:
      "I stumbled across 2248 Linko and honestly didn't expect to enjoy it as much as I did. What really got me was how the game naturally pushes you to think in numbers. It's one of those rare games where you feel like you're genuinely learning something while having fun.",
    date: "2026-04-02",
  },
  {
    id: "fallback-3",
    name: "AnnyShiv",
    rating: 5,
    title: "Highly recommended, definitely a must-try game!",
    content:
      "I've been playing 2248 Linko recently and it's honestly a great experience. It feels like a perfect mix of fun and brain exercise, helping improve focus while also being super relaxing. The UI is clean, simple, and very user-friendly.",
    date: "2026-04-02",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseEntry(entry: any): AppReview {
  const rawContent: string = entry.content?.label ?? "";
  const truncated =
    rawContent.length > 280 ? rawContent.slice(0, 277) + "…" : rawContent;

  return {
    id: entry.id?.label ?? Math.random().toString(36).slice(2),
    name: entry.author?.name?.label ?? "App Store User",
    rating: parseInt(entry["im:rating"]?.label ?? "5", 10),
    title: entry.title?.label ?? "",
    content: truncated,
    date: entry.updated?.label
      ? new Date(entry.updated.label).toISOString().split("T")[0]
      : "",
  };
}

export async function GET() {
  try {
    const res = await fetch(
      "https://itunes.apple.com/us/rss/customerreviews/id=6760681337/sortBy=mostRecent/json",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const data = await res.json();
    const entries = data?.feed?.entry ?? [];

    if (!Array.isArray(entries) || entries.length === 0) {
      return NextResponse.json(FALLBACK_REVIEWS);
    }

    const reviews: AppReview[] = entries
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((e: any) => parseEntry(e))
      .filter((r: AppReview) => r.content.length > 10);

    return NextResponse.json(reviews, {
      headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch {
    return NextResponse.json(FALLBACK_REVIEWS);
  }
}
