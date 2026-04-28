import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Buy IPTV Subscription Blog — Best IPTV UK Guides, Setup Tips & Reviews",
  description:
    "Expert guides on buying an IPTV subscription, setup, streaming optimisation, device compatibility and the latest in IPTV UK. Learn how to choose the best IPTV providers before you buy.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
