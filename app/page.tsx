import type { Metadata } from "next";
import { Home } from "@/components/home";
import summaryCard from "@/assets/footer-logo.png";

export const metadata: Metadata = {
  title: "EB Global — The Cotton Diplomat",
  description:
    "EB Global connects the world's most reputable cotton merchants with Bangladesh's leading spinning mills. A Trusted Bridge Between Continents.",
  openGraph: {
    title: "EB Global — The Cotton Diplomat",
    description:
      "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
    type: "website",
    images: [{ url: summaryCard.src, width: 1200, height: 630, alt: "EB Global" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EB Global — The Cotton Diplomat",
    description:
      "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
    images: [summaryCard.src],
  },
};
export default function Page() {
  return <Home />;
}
