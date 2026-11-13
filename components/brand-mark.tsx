import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export function BrandMark() {
  return (
    <Link href="/" aria-label="EB Global home" className="group inline-flex">
      <Image
        src={logo}
        alt="EB Global"
        priority
        sizes="160px"
        className="h-18 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
