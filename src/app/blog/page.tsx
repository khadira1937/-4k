import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "British IPTV Blog — Best IPTV UK Guides, Setup Tips & Reviews",
  description:
    "Expert guides on British IPTV setup, streaming optimisation, device compatibility and the latest in IPTV UK. Learn how to choose the best IPTV providers and unlock the full British IPTV 4K experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
