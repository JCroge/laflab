"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageProvider";
import { contactLinks } from "@/lib/contacts";
import { navItems } from "@/lib/nav";

const content = {
  zh: {
    heroTag: "AI 项目孵化主航道",
    heroTitle: "拉菲实验室（LF Labs）人工智能孵化集团",
    heroSubtitle: "连接技术、资本与产业的创新引擎",
    heroDesc:
      "以 AI 项目孵化为核心，提供从洞察、产品化到商业化的全链路支持，打造高成长科技企业。",
    heroDescEn:
      "We incubate AI ventures with product strategy, capital alignment and industry collaboration.",
    ctaPrimary: "查看孵化能力",
    ctaSecondary: "加入孵化计划",
    stats: [
      { value: "30+", label: "孵化项目", en: "Ventures incubated" },
      { value: "12", label: "核心合伙人", en: "Core partners" },
      { value: "6", label: "行业场景", en: "Industry verticals" },
    ],
    heroBriefTitle: "AI 孵化 × 产业协同 × 资本赋能",
    heroBriefDesc: "以“产品 + 产业 + 资本”三轮驱动，打造高成长创新项目。",
    heroBullets: [
      "AI 产业洞察与机会识别",
      "全周期孵化与商业化增长",
      "生态伙伴与投融资网络",
    ],
    heroHighlight: "当前重点孵化：AI Agent、企业 Copilot、智能投研、行业大模型",
    aboutTitle: "以科技创新孵化未来企业",
    aboutDesc:
      "LF Labs 聚焦生成式 AI、智能体与产业大模型，联合产业龙头、资本机构与科研团队打造系统化孵化平台。",
    aboutDescEn:
      "We build a scalable incubation engine combining technology, capital and enterprise adoption.",
    capabilityTitle: "核心能力矩阵",
    capabilityDesc: "覆盖洞察、产品、增长与资本的完整支持体系。",
    capabilities: [
      {
        title: "战略洞察",
        desc: "识别行业痛点与技术机会，形成清晰的产品方向。",
      },
      {
        title: "产品孵化",
        desc: "MVP 快速验证，搭建商业模型与产品化能力。",
      },
      {
        title: "产业协同",
        desc: "对接头部产业资源，助力场景化落地。",
      },
      {
        title: "资本赋能",
        desc: "引入长期资本与生态伙伴，推动规模化增长。",
      },
    ],
    incubationTitle: "孵化路径",
    incubationDesc: "从洞察到规模化落地，每一步都有专家陪跑。",
    incubationSteps: [
      { step: "01", title: "洞察与验证", desc: "行业研究、需求验证与技术评估。" },
      { step: "02", title: "产品孵化", desc: "MVP 构建、产品打磨与方案设计。" },
      { step: "03", title: "市场增长", desc: "客户共创、渠道搭建与收入增长。" },
      { step: "04", title: "资本生态", desc: "投融资对接与生态协作升级。" },
    ],
    businessTitle: "业务板块",
    businessDesc: "以 AI 孵化为主轴，延展多元业务布局。",
    businessModules: [
      {
        title: "AI 技术解决方案",
        desc: "算法研发、智能体与数字人应用交付。",
        href: "/ai",
      },
      {
        title: "企业服务解决方案",
        desc: "IPO/RWA、数字化、AI 赋能与合规保障。",
        href: "/enterprise",
      },
      {
        title: "家族办公室",
        desc: "家族治理、资产配置与跨境规划。",
        href: "/family-office",
      },
      {
        title: "教育培训",
        desc: "Web3 / RWA / AI 课程体系与企业内训。",
        href: "/education",
      },
      {
        title: "资产管理",
        desc: "投研体系、基金管理与 AI 量化交易。",
        href: "/asset-management",
      },
    ],
    insightTitle: "研究与洞察",
    insightDesc: "持续输出 AI 产业趋势与可落地的创新实践。",
    insights: [
      { title: "AI 商业化地图", desc: "2026 关键落地场景与商业模型。" },
      { title: "产业协同指数", desc: "评估产业链协作效率与投资机会。" },
      { title: "未来组织与人才", desc: "洞察 AI 时代组织结构与人才战略。" },
    ],
    ecosystemTitle: "项目生态与合作伙伴",
    ecosystemDesc: "与产业龙头、科研机构、投资基金保持长期合作，构建高质量项目生态。",
    ecosystemRows: [
      { label: "产业伙伴", value: "能源、制造、金融、教育" },
      { label: "资本伙伴", value: "VC、产业基金、家族办公室" },
      { label: "科研伙伴", value: "高校实验室、AI 研究院" },
    ],
    contactTitle: "加入 LF Labs 生态，共创 AI 未来",
    contactDesc: "让我们一起孵化 AI 项目，连接产业资源与资本力量。",
    contactPrimary: "发送邮件",
    contactSecondary: "预约沟通",
    contactInfo: {
      addressLabel: "地址",
      addressValue: "江苏省苏州市相城区聚贤路365商业广场",
      emailLabel: "邮箱",
      emailValue: "hello@lflabs.ai",
      wechatLabel: "微信",
      wechatValue: "LF Labs Group",
      links: contactLinks.zh,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    openCollab: "开放合作",
    openCollabDesc: "欢迎 AI 创业团队、产业伙伴与投资机构共同加入。",
  },
  en: {
    heroTag: "AI Incubation First",
    heroTitle: "LF Labs AI Incubation Group",
    heroSubtitle: "An innovation engine connecting technology, capital and industry",
    heroDesc:
      "We incubate AI ventures end-to-end, from insight and productization to commercialization and scale.",
    heroDescEn:
      "LF Labs empowers founders with capital, industry partners and product strategy.",
    ctaPrimary: "Explore Capabilities",
    ctaSecondary: "Join Incubation",
    stats: [
      { value: "30+", label: "Ventures Incubated", en: "Ventures incubated" },
      { value: "12", label: "Core Partners", en: "Core partners" },
      { value: "6", label: "Industry Verticals", en: "Industry verticals" },
    ],
    heroBriefTitle: "Incubation × Industry × Capital",
    heroBriefDesc: "A three-engine model for high-growth AI ventures.",
    heroBullets: [
      "AI insight and opportunity discovery",
      "Full-cycle incubation & commercialization",
      "Ecosystem and investment network",
    ],
    heroHighlight: "Current focus: AI Agents, Enterprise Copilot, AI Research, Vertical Models",
    aboutTitle: "Incubating the future of intelligent enterprises",
    aboutDesc:
      "We focus on generative AI, intelligent agents and vertical foundation models, aligning capital, enterprises and research labs.",
    aboutDescEn:
      "A full-stack incubation platform for AI commercialization and scale.",
    capabilityTitle: "Core Capabilities",
    capabilityDesc: "A complete system across insight, product, growth and capital.",
    capabilities: [
      {
        title: "Strategic Insight",
        desc: "Identify industry pain points and translate them into product direction.",
      },
      {
        title: "Product Incubation",
        desc: "MVP validation, roadmap design and productization support.",
      },
      {
        title: "Industry Collaboration",
        desc: "Access enterprise partners to unlock real-world adoption.",
      },
      {
        title: "Capital Enablement",
        desc: "Long-term capital and ecosystem support for scale.",
      },
    ],
    incubationTitle: "Incubation Pipeline",
    incubationDesc: "From insight to scaled impact, every step has expert support.",
    incubationSteps: [
      { step: "01", title: "Insight & Validation", desc: "Research, demand validation, technical assessment." },
      { step: "02", title: "Product Incubation", desc: "MVP build, product design, business model." },
      { step: "03", title: "Market Expansion", desc: "Customer co-creation, channel and revenue growth." },
      { step: "04", title: "Capital & Ecosystem", desc: "Fundraising and ecosystem partnerships." },
    ],
    businessTitle: "Business Lines",
    businessDesc: "AI incubation as the core, extended business capabilities.",
    businessModules: [
      {
        title: "AI Solutions",
        desc: "Algorithms, agents and digital humans delivered end-to-end.",
        href: "/ai",
      },
      {
        title: "Enterprise Services",
        desc: "IPO/RWA, digital transformation, AI enablement and compliance.",
        href: "/enterprise",
      },
      {
        title: "Family Office",
        desc: "Governance, asset allocation and global planning.",
        href: "/family-office",
      },
      {
        title: "Education & Training",
        desc: "Web3, RWA and AI curriculum plus corporate programs.",
        href: "/education",
      },
      {
        title: "Asset Management",
        desc: "Research, fund operations and AI quant trading.",
        href: "/asset-management",
      },
    ],
    insightTitle: "Research & Insights",
    insightDesc: "Continuous output of AI industry trends and proven practices.",
    insights: [
      { title: "AI Commercialization Map", desc: "Key scenarios and models for 2026." },
      { title: "Industry Synergy Index", desc: "Measure collaboration efficiency and investment signals." },
      { title: "Future Workforce", desc: "Organizational and talent strategies in the AI era." },
    ],
    ecosystemTitle: "Ecosystem & Partners",
    ecosystemDesc: "Long-term partnerships with enterprises, research labs and funds.",
    ecosystemRows: [
      { label: "Industry", value: "Energy, Manufacturing, Finance" },
      { label: "Capital", value: "VC, Industry Funds" },
      { label: "Research", value: "Universities, AI Labs" },
    ],
    contactTitle: "Join LF Labs to build the AI future",
    contactDesc: "Let’s incubate AI ventures with capital and industry access.",
    contactPrimary: "Email Us",
    contactSecondary: "Schedule a Call",
    contactInfo: {
      addressLabel: "Address",
      addressValue: "Shanghai AI Industrial Park, China",
      emailLabel: "Email",
      emailValue: "hello@lflabs.ai",
      wechatLabel: "WeChat",
      wechatValue: "LF Labs Group",
      links: contactLinks.en,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    openCollab: "Open Collaboration",
    openCollabDesc: "We welcome founders, industry partners and investors.",
  },
};

export default function Home() {
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
        ctaLabel={lang === "zh" ? "预约合作" : "Let’s Talk"}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <section id="hero" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              {t.heroTag}
            </div>
            <div className="space-y-6">
              <h1 className="font-grotesk text-4xl font-semibold leading-tight md:text-5xl">
                {t.heroTitle}
                <span className="block gradient-text">{t.heroSubtitle}</span>
              </h1>
              <p className="max-w-xl text-lg text-slate/90">{t.heroDesc}</p>
              <p className="max-w-xl text-sm text-slate/70">{t.heroDescEn}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-glow"
                href="#capabilities"
              >
                {t.ctaPrimary}
              </a>
              <a
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/50"
                href="#contact"
              >
                {t.ctaSecondary}
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {t.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                  <div className="text-xs text-slate/60">{item.en}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate/60">Incubation Brief</p>
                <h2 className="mt-3 text-xl font-semibold text-white">{t.heroBriefTitle}</h2>
                <p className="mt-3 text-sm text-slate/70">{t.heroBriefDesc}</p>
              </div>
              <div className="space-y-3">
                {t.heroBullets.map((text) => (
                  <div key={text} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    {text}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-neon/30 bg-neon/10 px-5 py-4 text-sm text-white/80">
                {t.heroHighlight}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate/50">About LF Labs</p>
            <h2 className="font-grotesk text-3xl font-semibold text-white">{t.aboutTitle}</h2>
            <p className="text-base text-slate/80">{t.aboutDesc}</p>
            <p className="text-sm text-slate/60">{t.aboutDescEn}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.capabilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate/50">Capabilities</p>
              <h2 className="font-grotesk text-3xl font-semibold text-white">{t.capabilityTitle}</h2>
            </div>
            <p className="max-w-xl text-sm text-slate/60">{t.capabilityDesc}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {t.capabilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-graphite/60 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="incubation" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate/50">Pipeline</p>
              <h2 className="font-grotesk text-3xl font-semibold text-white">{t.incubationTitle}</h2>
            </div>
            <p className="max-w-xl text-sm text-slate/60">{t.incubationDesc}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {t.incubationSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs text-slate/60">{item.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="business" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate/50">Business</p>
              <h2 className="font-grotesk text-3xl font-semibold text-white">{t.businessTitle}</h2>
            </div>
            <p className="max-w-xl text-sm text-slate/60">{t.businessDesc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.businessModules.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate/70">{item.desc}</p>
              </Link>
            ))}
            <div className="rounded-2xl border border-neon/30 bg-neon/10 p-6">
              <h3 className="text-lg font-semibold text-white">{t.openCollab}</h3>
              <p className="mt-3 text-sm text-white/70">{t.openCollabDesc}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate/50">Insights</p>
            <h2 className="font-grotesk text-3xl font-semibold text-white">{t.insightTitle}</h2>
            <p className="text-sm text-slate/60">{t.insightDesc}</p>
            <div className="grid gap-4">
              {t.insights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white">{t.ecosystemTitle}</h3>
            <p className="mt-3 text-sm text-slate/70">{t.ecosystemDesc}</p>
            <div className="mt-6 space-y-3 text-sm text-slate/70">
              {t.ecosystemRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-10">
          <div className="rounded-3xl border border-white/10 bg-graphite/80 px-10 py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/60">Contact</p>
                <h2 className="font-grotesk text-3xl font-semibold text-white">{t.contactTitle}</h2>
                <p className="mt-3 text-sm text-slate/70">{t.contactDesc}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight" href="mailto:hello@lflabs.ai">
                  {t.contactPrimary}
                </a>
                <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white" href="tel:+86-000-0000-0000">
                  {t.contactSecondary}
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-6 text-sm text-slate/70 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase text-slate/60">{t.contactInfo.addressLabel}</p>
                <p className="mt-2">{t.contactInfo.addressValue}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate/60">{t.contactInfo.emailLabel}</p>
                <p className="mt-2">{t.contactInfo.emailValue}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate/60">{t.contactInfo.wechatLabel}</p>
                <p className="mt-2">{t.contactInfo.wechatValue}</p>
              </div>
            </div>
            {t.contactInfo.links && t.contactInfo.links.length > 0 && (
              <div className="mt-8 grid gap-4 text-sm text-slate/70 sm:grid-cols-2 lg:grid-cols-3">
                {t.contactInfo.links.map((link) => (
                  <div key={`${link.label}-${link.value}`} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase text-slate/50">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block text-sm text-white/80 hover:text-white"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-white/80">{link.value}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter
        copyright={t.footer}
        companyName="拉菲实验室（LF Labs）人工智能孵化集团"
      />
    </div>
  );
}
