import PageShell from "@/components/PageShell";
import { contactLinks } from "@/lib/contacts";

const content = {
  zh: {
    hero: {
      tag: "家族办公室",
      title: "拉菲科技 · 家族办公室",
      subtitle: "世代传承 · 尊享定制",
      description:
        "为超高净值家族提供全方位、定制化的综合财富管理与家族事务服务，守护家族财富与价值观的传承。",
    },
    stats: [
      { value: "6", label: "核心板块" },
      { value: "≥5000万", label: "净资产门槛" },
      { value: "360°", label: "全方位守护" },
    ],
    highlights: [
      "家族事务规划与治理结构搭建",
      "全球资产配置与跨境架构规划",
      "税务筹划与合规风险管理",
      "生活管理与危机管控全覆盖",
    ],
    sections: [
      {
        title: "服务体系",
        desc: "六大核心板块全覆盖",
        items: [
          "家族事务规划：资源整合、国际事务、遗产继承、家族治理与教育",
          "资产规划：战略配置、跨境架构、海外资产与风险管理",
          "财务与税务筹划：税务筹划与现金流管理",
          "合规服务：跨境合规咨询与持续监管",
          "生活管理与行政服务：身份规划、健康管理与商务礼节",
          "危机管控：品牌管理与个人/企业/家族危机应对",
        ],
        columns: 2,
      },
      {
        title: "家族事务规划",
        desc: "构建家族长治久安的基石",
        items: [
          "资源整合与规划：家族资产梳理与跨代传承",
          "国际事务整合：跨境资产协调与多国税务筹划",
          "遗产与继承规划：遗嘱设计、信托架构与税筹",
          "家族治理规划：家族宪章、理事会与冲突解决机制",
        ],
        columns: 2,
      },
      {
        title: "家族治理教育",
        desc: "培养卓越的家族继承人",
        items: [
          "子女教育规划：名校路径、特长培养与价值观建设",
          "教育资源对接：国际学校申请与导师资源",
          "高端游学：全球名校游学与文化艺术项目",
          "家族教育活动：家族年会与领导力培养",
        ],
        columns: 2,
      },
      {
        title: "资产规划 · 全球配置",
        desc: "全球视野下的资产布局",
        items: [
          "战略资产配置：股权、固收、另类、现金多元配置",
          "地域配置：境内、香港、美国、欧洲等多区域布局",
          "跨境财富架构：离岸信托与国际寿险配置",
          "动态再平衡机制：风险偏好与目标驱动",
        ],
        columns: 2,
      },
      {
        title: "海外资产与投资",
        desc: "分散风险 · 全球布局",
        items: [
          "私人银行与 EAM 服务对接",
          "海外基金配置：PE/VC、对冲基金、母基金",
          "储蓄保险与海外房产配置",
          "直投机会与兼并收购支持",
        ],
        columns: 2,
      },
      {
        title: "财税与合规保障",
        desc: "合规节税 · 现金流优化",
        items: [
          "综合税务筹划与跨境税务安排",
          "现金流管理与家族财富报告",
          "法律合规、AML/KYC、CRS/FATCA 应对",
          "持续监控与合规审计",
        ],
        columns: 2,
      },
      {
        title: "生活管理与危机管控",
        desc: "尊享品质生活 · 未雨绸缪",
        items: [
          "身份规划：税务居民与移民咨询",
          "生活方式管理：置业、艺术品、健康与礼仪",
          "危机预警：品牌、公关与隐私安全",
          "家族危机处理：冲突调解与继承纠纷预防",
        ],
        columns: 2,
      },
      {
        title: "服务流程",
        desc: "定制化 · 全流程陪伴",
        items: [
          "第一阶段：家族诊断与需求明确",
          "第二阶段：方案设计与跨境架构规划",
          "第三阶段：分步骤实施与第三方机构协调",
          "第四阶段：长期服务与动态优化",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "服务费用",
        desc: "透明定价 · 物超所值",
        items: [
          "年度服务费：按资产规模定制报价",
          "项目制收费：信托设立、移民服务、税筹项目",
          "资产管理费：按 AUM 收取管理费",
          "增值服务：按实际发生费用收取",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "开启家族传承之旅",
      desc: "预约家族财富专家私密咨询，签署严格保密协议。",
      email: "familyoffice@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Family Office",
      address: "美国科罗拉多州",
      ctaPrimary: "预约私密咨询",
      ctaSecondary: "了解服务",
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "拉菲实验室（LF Labs）人工智能孵化集团",
  },
  en: {
    hero: {
      tag: "Family Office",
      title: "LF Labs · Family Office",
      subtitle: "Legacy & Bespoke Stewardship",
      description:
        "Comprehensive and customized wealth management and family affairs services for ultra-high-net-worth families.",
    },
    stats: [
      { value: "6", label: "Core Modules" },
      { value: "50M+", label: "Asset Threshold" },
      { value: "360°", label: "Full Coverage" },
    ],
    highlights: [
      "Family governance and succession planning",
      "Global asset allocation and cross-border structures",
      "Tax planning and compliance risk control",
      "Lifestyle management and crisis protection",
    ],
    sections: [
      {
        title: "Service System",
        desc: "Six core modules covering everything",
        items: [
          "Family affairs planning and governance",
          "Strategic asset allocation and cross-border structures",
          "Tax planning and cash flow management",
          "Compliance services and regulatory advisory",
          "Lifestyle and administrative management",
          "Crisis control for brand and family risk",
        ],
        columns: 2,
      },
      {
        title: "Family Affairs Planning",
        desc: "A foundation for long-term legacy",
        items: [
          "Resource integration and intergenerational planning",
          "International coordination and tax optimization",
          "Inheritance planning, wills and trust structures",
          "Governance mechanisms and conflict resolution",
        ],
        columns: 2,
      },
      {
        title: "Family Education",
        desc: "Cultivating next-generation leaders",
        items: [
          "Education pathways and value cultivation",
          "Global school admissions and mentor access",
          "Global study tours and cultural programs",
          "Family events and leadership development",
        ],
        columns: 2,
      },
      {
        title: "Strategic Asset Allocation",
        desc: "Global view, resilient portfolio",
        items: [
          "Allocation across equity, fixed income, alternatives, cash",
          "Regional distribution across China, HK, US, EU",
          "Offshore trust and international insurance structures",
          "Dynamic rebalancing aligned with family goals",
        ],
        columns: 2,
      },
      {
        title: "Overseas Assets & Investment",
        desc: "Diversification and global access",
        items: [
          "Private banking and EAM access",
          "Funds: PE/VC, hedge funds, FoF",
          "Savings insurance and overseas real estate",
          "Direct investments and M&A support",
        ],
        columns: 2,
      },
      {
        title: "Tax & Compliance",
        desc: "Compliance-driven tax optimization",
        items: [
          "Comprehensive tax planning and cross-border arrangements",
          "Cash flow management and wealth reporting",
          "AML/KYC, CRS/FATCA and legal compliance",
          "Ongoing monitoring and compliance audits",
        ],
        columns: 2,
      },
      {
        title: "Lifestyle & Crisis Control",
        desc: "Premium lifestyle with risk protection",
        items: [
          "Residency planning and immigration advisory",
          "Lifestyle management: real estate, art, health, etiquette",
          "Crisis monitoring and privacy protection",
          "Family dispute resolution and risk prevention",
        ],
        columns: 2,
      },
      {
        title: "Service Process",
        desc: "Customized and full-cycle delivery",
        items: [
          "Phase 1: Family diagnosis and needs assessment",
          "Phase 2: Solution design and cross-border structure",
          "Phase 3: Implementation and third-party coordination",
          "Phase 4: Long-term service and optimization",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "Pricing & Fees",
        desc: "Transparent and competitive",
        items: [
          "Annual service fee based on asset scale",
          "Project-based fees for trusts and immigration",
          "AUM-based management fees",
          "Value-added services billed as incurred",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "Start your legacy journey",
      desc: "Book a confidential consultation with strict NDA protection.",
      email: "familyoffice@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Family Office",
      address: "Colorado, USA",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      links: contactLinks.en,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "LF Labs AI Incubation Group",
  },
};

export default function FamilyOfficePage() {
  return (
    <PageShell content={content} ctaLabel={{ zh: "预约合作", en: "Let’s Talk" }} />
  );
}
