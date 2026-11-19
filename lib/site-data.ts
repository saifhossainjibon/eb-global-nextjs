export const COMPANY = {
  name: "EB Global",
  tagline: "A Trusted Bridge Between Continents",
  founded: 2022,
  phones: ["+880 1726-642791"],
  phoneLinks: ["+8801726642791"],
  email: "info@ebglobalbd.com",
  addressLines: ["JCX Business Tower, 1136/A, Block-I, Bashundhara Vatara, Dhaka 1229, Bangladesh"],
  mapEmbed: "https://www.google.com/maps?q=JCX+Biz+Tower,+Bashundhara+R-A,+Dhaka+1229&output=embed",
};


import BCA from "@/assets/membership/BCA.webp";
// import ICA from "@/assets/membership/ICA.webp";
import BIAA from "@/assets/membership/BIAA.webp";

export type Buyer = { name: string; logo: string };
export const MEMBERSHIPS = [
  // {
  //   abbr: "ICA",
  //   name: "International Cotton Association",
  //   desc: "As an active ICA member, we trade under globally recognized contracts ensuring fair dealing and dispute resolution.",
  //   logo: ICA,
  // },
  {
    abbr: "BCA",
    name: "Bangladesh Cotton Association",
    desc: "Our BCA membership aligns us with Bangladesh's apex cotton trade standards and local manufacturing networks.",
    logo: BCA,
  },
  {
    abbr: "BIAA",
    name: "Bangladesh Indenting Agents' Association",
    desc: "Our BIAA membership certifies us as a fully compliant and transparent indenting agent in Bangladesh.",
    logo: BIAA,
  },
];

export const SOLUTIONS = [
  {
    title: "Strategic Indenting & Sourcing",
    desc: "Tailored cotton indenting and international sourcing aligned with the highest standards of the global textile industry.",
  },
  {
    title: "Direct Merchant Access",
    desc: "Direct engagement with world-class cotton merchants across the Americas, Africa, Central Asia and the Indian subcontinent.",
  },
  {
    title: "Transparent Trade Facilitation",
    desc: "Seamless end-to-end trade facilitation with full transparency for mills and merchants alike.",
  },
  {
    title: "Long-term Partnerships",
    desc: "Durable supply chain partnerships built on trust, precision and enduring global relationships.",
  },
];

export const EXCELLENCE = [
  "Among the youngest firms in the sector, yet recognized for exceptional reliability and consistency",
  "Deep-rooted expertise in textiles, garments and cotton trade dynamics",
  "Direct access to premier global cotton merchants",
  "A highly skilled team overseeing commercial, analytical, legal and operational excellence",
  "Robust financial standing, protecting the interests of all stakeholders",
  "A steadfast commitment to long-term partnerships built on trust and performance",
  "A fully owned office at the prestigious JCX Business Center, Dhaka",
] as const;
