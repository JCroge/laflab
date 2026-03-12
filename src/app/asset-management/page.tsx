import PageShell from "@/components/PageShell";
import { contactLinks } from "@/lib/contacts";

const content = {
  zh: {
    hero: {
      tag: "资产管理",
      title: "拉菲科技 · 资管事业部",
      subtitle: "专业投资 · 价值创造",
      description:
        "以宏观研究与行业洞察为基础，结合 AI 量化与专业交易能力，为客户提供稳健的资产管理解决方案。",
    },
    stats: [
      { value: "募·投·管·退", label: "一级基金运作" },
      { value: "AI量化", label: "决策执行" },
      { value: "多渠道", label: "退出机制" },
    ],
    highlights: [
      "投资研究体系：宏观策略、行业深度分析与项目尽调",
      "一级基金运作：构建多元 LP 网络与投后赋能",
      "二级基金管理：量化策略与专业交易团队",
      "数据运维与风控体系，保障系统稳定高效",
    ],
    sections: [
      {
        title: "投资研究体系",
        desc: "以研究驱动决策",
        items: [
          "宏观策略研究：把握全球经济与周期变化",
          "行业深度分析：洞察赛道趋势与结构性机会",
          "项目尽职调查：多维评估与风控保障",
        ],
        columns: 3,
      },
      {
        title: "一级基金运作",
        desc: "募 · 投 · 管 · 退全链路管理",
        items: [
          "募：构建多元 LP 资源网络",
          "投：深度项目筛选与尽职调查",
          "管：投后赋能与价值提升",
          "退：多渠道退出机制设计",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "二级基金管理",
        desc: "技术驱动的投资决策体系",
        items: [
          "AI 量化执行：模型驱动交易策略",
          "专业交易团队：精准市场操作",
          "数据运维：系统稳定与高可用保障",
        ],
        columns: 3,
      },
      {
        title: "投资理念",
        desc: "专业研究 · 价值投资 · 风险管控",
        items: [
          "坚持长期主义与价值发现",
          "用技术提升研究与交易效率",
          "以风险控制为底线保障收益稳定",
        ],
        columns: 3,
      },
      {
        title: "服务价值",
        desc: "为投资机构与高净值客户创造长期价值",
        items: [
          "提供一二级市场投资机会与策略",
          "AI 量化交易策略与系统化执行",
          "投研与风控体系持续迭代",
        ],
        columns: 3,
      },
    ],
    contact: {
      title: "开启专业资产管理合作",
      desc: "欢迎投资机构与高净值客户洽谈合作。",
      email: "contact@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Asset",
      address: "江苏省苏州市相城区聚贤路365商业广场",
      ctaPrimary: "预约沟通",
      ctaSecondary: "获取方案",
      links: contactLinks.zh,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "拉菲实验室（LF Labs）人工智能孵化集团",
  },
  en: {
    hero: {
      tag: "Asset Management",
      title: "LF Labs · Asset Management",
      subtitle: "Professional Investing · Value Creation",
      description:
        "Macro research, industry insight and AI quant execution power a disciplined asset management system.",
    },
    stats: [
      { value: "Fund Cycle", label: "Raise·Invest·Manage·Exit" },
      { value: "AI Quant", label: "Decision Execution" },
      { value: "Multi-Exit", label: "Exit Channels" },
    ],
    highlights: [
      "Research system across macro, industry and diligence",
      "Primary fund operations with LP network and post-investment enablement",
      "Secondary fund management with quant strategies",
      "Data ops and risk control for stable execution",
    ],
    sections: [
      {
        title: "Investment Research",
        desc: "Research-driven decision making",
        items: [
          "Macro strategy research and cycle analysis",
          "Industry deep dives and structural opportunities",
          "Project due diligence and risk control",
        ],
        columns: 3,
      },
      {
        title: "Primary Fund Operations",
        desc: "Full-cycle management",
        items: [
          "Raise: diversified LP network",
          "Invest: deep screening and diligence",
          "Manage: post-investment enablement",
          "Exit: multi-channel exit design",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "Secondary Fund Management",
        desc: "Technology-driven investment system",
        items: [
          "AI quant execution and model-driven strategies",
          "Professional trading team for precise operations",
          "Data ops for stable, high-availability systems",
        ],
        columns: 3,
      },
      {
        title: "Investment Philosophy",
        desc: "Research · Value · Risk Control",
        items: [
          "Long-term value discovery",
          "Technology-enabled research and execution",
          "Risk management as a core principle",
        ],
        columns: 3,
      },
      {
        title: "Value Delivered",
        desc: "Creating long-term value for institutions and HNW clients",
        items: [
          "Primary & secondary market opportunities",
          "Systematic AI quant strategies",
          "Continuous iteration of research & risk systems",
        ],
        columns: 3,
      },
    ],
    contact: {
      title: "Partner with our asset management team",
      desc: "Let’s discuss investment strategies and collaboration.",
      email: "contact@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Asset",
      address: "Shanghai AI Industrial Park, China",
      ctaPrimary: "Book Meeting",
      ctaSecondary: "Get Proposal",
      links: contactLinks.en,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "LF Labs AI Incubation Group",
  },
};

export default function AssetManagementPage() {
  return (
    <PageShell content={content} ctaLabel={{ zh: "预约合作", en: "Let’s Talk" }} />
  );
}
