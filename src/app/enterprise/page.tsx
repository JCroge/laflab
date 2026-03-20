import PageShell from "@/components/PageShell";
import { contactLinks } from "@/lib/contacts";

const content = {
  zh: {
    hero: {
      tag: "企业服务解决方案",
      title: "拉菲科技 · 企服事业部",
      subtitle: "赋能企业升级 · 护航成长之路",
      description:
        "从创业到上市的全程伙伴，用专业服务与技术创新驱动企业持续成长。",
    },
    stats: [
      { value: "8", label: "核心服务模块" },
      { value: "全周期", label: "企业陪伴" },
      { value: "双负责人", label: "业务+技术驱动" },
    ],
    highlights: [
      "IPO/RWA 孵化与资本市场通道支持",
      "数字化转型与 AI 赋能落地",
      "法务合规、技术安全、财务风控全覆盖",
      "品牌出海与全球化拓展服务",
    ],
    sections: [
      {
        title: "核心服务体系",
        desc: "八大专业服务模块 · 全方位护航企业发展",
        items: [
          "IPO/RWA 孵化：上市通道打通与资产数字化",
          "流程优化：提升运营效率，降低管理成本",
          "数字化转型：重构业务价值链与系统建设",
          "AI 赋能：智能化升级与业务场景落地",
          "数字金融：供应链金融与数字支付方案",
          "法务合规：合规体系建设与风险防范",
          "技术安全：安全审计与应急响应保障",
          "财务风控：预算管理与风险评估体系",
          "人力资源：人才招聘、绩效与组织发展",
          "品牌出海：国际市场推广与本地化运营",
        ],
        columns: 2,
      },
      {
        title: "IPO / RWA 孵化服务",
        desc: "打通资本市场的专业通道",
        items: [
          "前期准备：股权结构优化、财务梳理、内控建设",
          "申报辅导：券商律所协同、材料准备与反馈应对",
          "后续支持：路演策划、投资者关系、市值管理",
          "RWA 孵化：资产数字化方案、合规架构与技术对接",
        ],
        columns: 2,
      },
      {
        title: "企业升级 · 流程优化",
        desc: "提升运营效率 · 降低管理成本",
        items: [
          "流程诊断：现状调研、痛点定位与优化评估",
          "流程再造：标准化设计、跨部门协同优化",
          "系统固化：流程系统搭建与自动化工具应用",
          "效果保障：审批时间缩短 50%+、成本下降 30%+",
        ],
        columns: 2,
      },
      {
        title: "企业升级 · 数字化转型",
        desc: "用技术重构业务价值链",
        items: [
          "数字化战略规划：成熟度评估与转型路线图",
          "核心系统建设：ERP/CRM/OA 与营销平台",
          "数据中台建设：治理体系、BI 与数据能力培养",
          "组织变革管理：文化培育、人才培养与持续运营",
        ],
        columns: 2,
      },
      {
        title: "企业升级 · AI 赋能",
        desc: "让人工智能成为企业核心竞争力",
        items: [
          "AI 场景诊断：获客、生产、客服与决策分析",
          "AI 解决方案：智能客服、推荐引擎、质检系统",
          "AI 能力内化：团队组建、基础设施搭建",
          "典型成果：缺陷检出率 99%+，人工成本下降 60%+",
        ],
        columns: 2,
      },
      {
        title: "数字金融与合规保障",
        desc: "创新金融服务模式 · 释放资金价值",
        items: [
          "供应链金融与风控模型搭建",
          "数字支付与跨境支付方案设计",
          "金融科技应用：反欺诈、精准营销、客户画像",
          "法务合规：合同管理、IP 保护与合规审计",
          "技术安全：安全评估、体系建设与应急响应",
          "财务风控：预算管理、内控体系与共享中心",
        ],
        columns: 3,
      },
      {
        title: "人力资源与品牌出海",
        desc: "激活组织 · 成就全球化增长",
        items: [
          "人才招聘与绩效管理体系建设",
          "组织发展与培训体系规划",
          "出海战略规划与本地化运营",
          "海外品牌推广与合规风险管理",
        ],
        columns: 2,
      },
      {
        title: "服务流程",
        desc: "从诊断到落地的专业路径",
        items: [
          "需求诊断：现状调研与目标明确",
          "方案设计：实施路径与资源评估",
          "项目实施：阶段推进与成果交付",
          "持续优化：复盘评估与长期顾问支持",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "合作模式",
        desc: "灵活选择 · 按需定制",
        items: [
          "咨询顾问模式：战略规划与专项诊断",
          "项目制服务：IPO 孵化、数字化转型等专项",
          "长期服务模式：年度法律/财务/人力顾问",
          "股权合作：深度战略合作、资源换股权",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "立即开启合作",
      desc: "预约企业免费诊断与 1 对 1 专家咨询。",
      email: "service@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Enterprise",
      address: "美国科罗拉多州",
      ctaPrimary: "免费诊断",
      ctaSecondary: "专家咨询",
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "拉菲实验室（LF Labs）人工智能孵化集团",
  },
  en: {
    hero: {
      tag: "Enterprise Services",
      title: "LF Labs · Enterprise Services",
      subtitle: "Empower growth from startup to IPO",
      description:
        "A full-lifecycle partner with professional services and technology innovation.",
    },
    stats: [
      { value: "8", label: "Service Modules" },
      { value: "Full-cycle", label: "Enterprise Support" },
      { value: "Dual Leads", label: "Business + Tech" },
    ],
    highlights: [
      "IPO/RWA incubation and capital market access",
      "Digital transformation and AI enablement",
      "Legal, security, finance and compliance coverage",
      "Global branding and overseas expansion",
    ],
    sections: [
      {
        title: "Core Service System",
        desc: "Eight modules for end-to-end support",
        items: [
          "IPO/RWA incubation and asset digitization",
          "Process optimization and cost reduction",
          "Digital transformation and system 구축",
          "AI enablement for intelligent upgrade",
          "Digital finance and fintech solutions",
          "Legal compliance and risk control",
          "Security assurance and incident response",
          "Financial governance and internal control",
          "Human resources and organization development",
          "Global branding and localization",
        ],
        columns: 2,
      },
      {
        title: "IPO / RWA Incubation",
        desc: "Professional pathway to capital markets",
        items: [
          "Preparation: equity, finance normalization, internal control",
          "Filing guidance: intermediaries coordination and responses",
          "Post-IPO support: roadshows, IR and value management",
          "RWA digitization: compliance architecture and tech integration",
        ],
        columns: 2,
      },
      {
        title: "Process Optimization",
        desc: "Improve efficiency and reduce cost",
        items: [
          "Diagnosis and bottleneck identification",
          "Process redesign and cross-team collaboration",
          "System solidification and automation",
          "Average 50%+ cycle reduction, 30%+ cost decrease",
        ],
        columns: 2,
      },
      {
        title: "Digital Transformation",
        desc: "Rebuild the business value chain",
        items: [
          "Strategy roadmap and maturity assessment",
          "ERP/CRM/OA and marketing systems",
          "Data governance and BI capability",
          "Change management and talent enablement",
        ],
        columns: 2,
      },
      {
        title: "AI Enablement",
        desc: "Make AI a core competitive advantage",
        items: [
          "Scenario diagnostics across marketing, production, service",
          "AI solutions: customer service, recommendation, QA",
          "Capability internalization and infrastructure build",
          "Results: 99%+ defect detection, 60%+ cost reduction",
        ],
        columns: 2,
      },
      {
        title: "Finance & Compliance",
        desc: "Unlock funding efficiency with risk control",
        items: [
          "Supply chain finance and risk models",
          "Digital payments and cross-border solutions",
          "Fintech applications and fraud prevention",
          "Legal compliance, IP protection and audits",
          "Security assessment and emergency response",
          "Financial governance and internal control",
        ],
        columns: 3,
      },
      {
        title: "HR & Global Brand",
        desc: "Activate organization and go global",
        items: [
          "Hiring, performance and talent pipeline",
          "Organization development and training programs",
          "Overseas market entry and localization",
          "Brand marketing and compliance management",
        ],
        columns: 2,
      },
      {
        title: "Service Process",
        desc: "From diagnosis to long-term optimization",
        items: [
          "Diagnostic assessment",
          "Solution design",
          "Project implementation",
          "Continuous optimization",
        ],
        columns: 4,
        variant: "steps",
      },
      {
        title: "Engagement Models",
        desc: "Flexible and customized cooperation",
        items: [
          "Consulting model for strategic planning",
          "Project-based services for targeted outcomes",
          "Long-term advisory subscription",
          "Equity partnership for deep collaboration",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "Start your cooperation",
      desc: "Book a free enterprise diagnosis and expert consultation.",
      email: "lfsubs1@proton.me",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs Enterprise",
      address: "Colorado, USA",
      ctaPrimary: "Free Diagnosis",
      ctaSecondary: "Expert Consult",
      links: contactLinks.en,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "LF Labs AI Incubation Group",
  },
};

export default function EnterprisePage() {
  return (
    <PageShell content={content} ctaLabel={{ zh: "预约合作", en: "Let’s Talk" }} />
  );
}
