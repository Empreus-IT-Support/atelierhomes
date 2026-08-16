import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      name: "Atelier Homes",
      short_name: "Atelier Homes",
      description:
        "Custom home builder in Canberra, ACT. New homes, knockdown rebuilds, extensions and renovations.",
      start_url: "/",
      display: "standalone",
      background_color: "#f6f3ec",
      theme_color: "#16130f",
      lang: "en-AU",
      icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    },
    { headers: { "Content-Type": "application/manifest+json" } }
  );
}
