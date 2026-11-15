import type { Metadata } from "next";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: "EB Global — The Cotton Diplomat",
  description:
    "EB Global connects the world's most reputable cotton merchants with Bangladesh's leading spinning mills. A Trusted Bridge Between Continents.",
  openGraph: {
    title: "EB Global — The Cotton Diplomat",
    description:
      "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <Home />;
}
