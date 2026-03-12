export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export const contactLinks: { zh: ContactLink[]; en: ContactLink[] } = {
  zh: [
    { label: "官网", value: "lflabs.org", href: "https://lflabs.org/" },
    { label: "X / Twitter", value: "@lf_labs", href: "https://x.com/lf_labs" },
    { label: "X 中文", value: "@LFLabs_zh", href: "https://x.com/LFLabs_zh" },
    { label: "Telegram", value: "加入官方电报", href: "https://t.me/+pP_hrbwtFlA3M2Q9" },
    {
      label: "YouTube",
      value: "LFLabs 中文频道",
      href: "https://www.youtube.com/@LFLabs%E4%B8%AD%E6%96%87%E9%A2%91%E9%81%93",
    },
    { label: "Discord", value: "加入社区", href: "https://discord.gg/cnB3sHXCd3" },
    {
      label: "Bilibili",
      value: "拉菲资本",
      href: "https://space.bilibili.com/3546689187088532?spm_id_from=333.337.0.0",
    },
    { label: "微信服务号", value: "LF.Labs" },
    { label: "微信公众号", value: "LF Labs 投研" },
  ],
  en: [
    { label: "Official Site", value: "lflabs.org", href: "https://lflabs.org/" },
    { label: "X / Twitter", value: "@lf_labs", href: "https://x.com/lf_labs" },
    { label: "X (CN)", value: "@LFLabs_zh", href: "https://x.com/LFLabs_zh" },
    { label: "Telegram", value: "Join the official channel", href: "https://t.me/+pP_hrbwtFlA3M2Q9" },
    {
      label: "YouTube",
      value: "LFLabs CN Channel",
      href: "https://www.youtube.com/@LFLabs%E4%B8%AD%E6%96%87%E9%A2%91%E9%81%93",
    },
    { label: "Discord", value: "Join the community", href: "https://discord.gg/cnB3sHXCd3" },
    {
      label: "Bilibili",
      value: "LFLabs Capital",
      href: "https://space.bilibili.com/3546689187088532?spm_id_from=333.337.0.0",
    },
    { label: "WeChat Service", value: "LF.Labs" },
    { label: "WeChat Official", value: "LF Labs 投研" },
  ],
};
