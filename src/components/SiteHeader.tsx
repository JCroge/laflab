"use client";

import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  lang: "zh" | "en";
  onToggle: () => void;
  ctaLabel: string;
};

export default function SiteHeader({
  navItems,
  lang,
  onToggle,
  ctaLabel,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/lf-logo.jpg"
            alt="LF Labs Logo"
            width={160}
            height={48}
            priority
            className="h-8 w-auto"
          />
          <span className="hidden text-xs uppercase tracking-[0.35em] text-white/50 md:block">
            LF Labs
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggle}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-white/40 hover:text-white"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-xs font-semibold text-midnight md:inline-flex"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
