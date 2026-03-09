"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageProvider";
import { navItems } from "@/lib/nav";

export type PageSection = {
  title: string;
  desc?: string;
  items?: string[];
  columns?: number;
  variant?: "cards" | "list" | "steps";
};

export type PageContent = {
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
  };
  stats: { label: string; value: string }[];
  highlights: string[];
  sections: PageSection[];
  contact: {
    title: string;
    desc: string;
    email: string;
    phone: string;
    wechat: string;
    address: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: string;
  companyName: string;
};

type PageShellProps = {
  content: {
    zh: PageContent;
    en: PageContent;
  };
  ctaLabel: { zh: string; en: string };
};

export default function PageShell({ content, ctaLabel }: PageShellProps) {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];

  return (
    <div className="relative overflow-hidden bg-midnight text-mist">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 bg-hero-radial-2" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:var(--tw-gradient-stops),theme(backgroundImage.grid)]" />

      <SiteHeader
        navItems={navItems[lang]}
        lang={lang}
        onToggle={toggleLang}
        ctaLabel={lang === "zh" ? ctaLabel.zh : ctaLabel.en}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              {t.hero.tag}
            </div>
            <div className="space-y-5">
              <h1 className="font-grotesk text-4xl font-semibold leading-tight md:text-5xl">
                {t.hero.title}
                <span className="block gradient-text">{t.hero.subtitle}</span>
              </h1>
              <p className="max-w-xl text-lg text-slate/90">{t.hero.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {t.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-4">
              {t.highlights.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {t.sections.map((section) => (
          <section key={section.title} className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate/50">{section.title}</p>
              {section.desc && <p className="text-sm text-slate/60">{section.desc}</p>}
            </div>
            {section.items && (
              <div
                className={`grid gap-6 ${
                  section.columns === 4
                    ? "lg:grid-cols-4"
                    : section.columns === 2
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-3"
                }`}
              >
                {section.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    {section.variant === "steps" && (
                      <p className="text-xs text-slate/50">{String(index + 1).padStart(2, "0")}</p>
                    )}
                    <p className="mt-2 text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section id="contact" className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-graphite/80 px-10 py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/60">Contact</p>
                <h2 className="font-grotesk text-3xl font-semibold text-white">{t.contact.title}</h2>
                <p className="mt-3 text-sm text-slate/70">{t.contact.desc}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight" href={`mailto:${t.contact.email}`}>
                  {t.contact.ctaPrimary}
                </a>
                <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white" href={`tel:${t.contact.phone}`}>
                  {t.contact.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-6 text-sm text-slate/70 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase text-slate/60">Address</p>
                <p className="mt-2">{t.contact.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate/60">Email</p>
                <p className="mt-2">{t.contact.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate/60">WeChat</p>
                <p className="mt-2">{t.contact.wechat}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter copyright={t.footer} companyName={t.companyName} />
    </div>
  );
}
