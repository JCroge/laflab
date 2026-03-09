import PageShell from "@/components/PageShell";

const content = {
  zh: {
    hero: {
      tag: "教育培训服务",
      title: "拉菲科技 · 教育培训事业部",
      subtitle: "Web3 · RWA · AI 前沿技术培训",
      description:
        "专注前沿科技领域的专业培训，帮助学习者与企业把握技术变革浪潮，构建面向未来的核心竞争力。",
    },
    stats: [
      { value: "1000+", label: "已培训学员" },
      { value: "50+", label: "企业客户" },
      { value: "95%", label: "学员满意度" },
    ],
    highlights: [
      "三大核心赛道：Web3 / RWA / AI",
      "行业大咖授课与真实项目实战",
      "就业/创业支持与孵化资源对接",
      "企业内训与高管认知培训定制",
    ],
    sections: [
      {
        title: "三大核心课程体系",
        desc: "Web3 · RWA · AI 全覆盖的系统化培训",
        items: [
          "Web3 技术与应用：区块链底层、智能合约、DeFi/NFT 生态",
          "RWA 真实资产数字化：合规框架、技术实现与项目孵化",
          "AI 人工智能应用：大模型开发、智能体应用与商业落地",
          "理论 + 实战双驱动：真实项目案例拆解与导师辅导",
        ],
        columns: 2,
      },
      {
        title: "Web3 完整课程体系",
        desc: "六大专业方向，从入门到精通",
        items: [
          "Web3 入门课程：区块链原理、钱包使用、生态全景",
          "区块链开发工程师：Solidity、DApp、智能合约安全",
          "DeFi 协议开发：AMM/Lending、跨链、MEV 与套利",
          "NFT 项目开发与运营：ERC 标准、发行与社区运营",
          "Web3 产品经理：Token 经济、DAO 治理与路演",
          "Web3 投研分析师：链上数据、尽调与投资决策框架",
        ],
        columns: 2,
      },
      {
        title: "RWA 完整课程体系",
        desc: "真实资产数字化全流程掌握",
        items: [
          "RWA 基础认知：核心价值与市场趋势",
          "RWA 法律合规：监管政策、SPV/信托结构",
          "RWA 技术实现：资产上链与合规智能合约",
          "RWA 项目孵化实战：募资策略与路演对接",
          "RWA 投资分析：资产评估与退出机制",
        ],
        columns: 2,
      },
      {
        title: "AI 完整课程体系",
        desc: "从基础应用到商业落地",
        items: [
          "AI 应用基础：机器学习、大模型原理与工具实战",
          "大模型应用开发：Prompt、RAG、向量数据库",
          "AI 智能体开发：多模态 Agent 与协作系统",
          "AI 商业化落地：MVP、融资与运营策略",
          "垂直应用课程：AI+营销/客服/教育/金融/制造",
        ],
        columns: 2,
      },
      {
        title: "跨领域融合实战项目",
        desc: "Web3 + AI / RWA + AI / Web3 + RWA + AI",
        items: [
          "AI 驱动链上数据分析平台",
          "AI Agent 智能交易机器人",
          "AI 资产估值与风控系统",
          "去中心化 RWA 投资 DAO",
          "每位学员至少完成 1 个完整项目",
        ],
        columns: 2,
      },
      {
        title: "三大运营中心",
        desc: "课程研发、培训运营与市场销售协同保障",
        items: [
          "课程研发中心：内容策划、案例更新与质量把控",
          "培训运营中心：双师资体系与小班制教学",
          "市场销售中心：公开课、技术沙龙与就业支持",
        ],
        columns: 3,
      },
      {
        title: "顶级师资团队",
        desc: "行业大咖 + 实战专家倾力授课",
        items: [
          "Web3 讲师：公链技术负责人、DeFi 创始人",
          "RWA 讲师：持牌金融机构与证券化专家",
          "AI 讲师：大厂 AI 工程师与应用开发专家",
          "严格选拔标准：实战经验 ≥ 5 年",
        ],
        columns: 2,
      },
      {
        title: "多样化培训形式",
        desc: "线下集训营、线上直播班、企业内训、VIP 1 对 1",
        items: [
          "线下集训营：沉浸式学习与项目辅导",
          "线上直播班：实时互动与录播回放",
          "企业内训：定制化课程 + 上门授课",
          "VIP 1 对 1：高管与创业者定制化辅导",
        ],
        columns: 2,
      },
      {
        title: "全方位学习支持",
        desc: "学习、就业与创业的终身支持",
        items: [
          "学习过程支持：社群、打卡督学与作业反馈",
          "项目实战指导：真实项目、代码评审与路演评审",
          "就业服务：简历优化、面试训练与企业内推",
          "创业服务：BP 指导、融资对接与孵化基金",
        ],
        columns: 2,
      },
      {
        title: "学员成功案例",
        desc: "转型、创业与企业数字化升级",
        items: [
          "Web3 开发者转型：年薪 30 万 → 80 万+",
          "RWA 创业成功：首期融资 500 万美元",
          "AI 转型企业：效率提升 50%，业绩翻倍",
          "企业全员培训：6 个月获得 B 轮融资",
        ],
        columns: 2,
      },
      {
        title: "企业培训服务",
        desc: "为企业打造前沿技术人才梯队",
        items: [
          "高管认知培训：趋势解读与战略规划",
          "技术团队赋能：Web3/RWA/AI 实战",
          "全员数字化培训：快速建立认知与文化",
          "定制化项目培训：顾问式陪伴交付",
        ],
        columns: 2,
      },
      {
        title: "课程价格体系",
        desc: "入门体验课、就业提升班、VIP 精英班",
        items: [
          "入门体验课：1,999-3,999 元 / 1-2 周",
          "就业提升班：24,999-39,999 元 / 2-6 个月",
          "VIP 精英班：59,999-99,999 元 / 6-12 个月",
          "企业培训：5-10 万 / 期（定制报价）",
        ],
        columns: 2,
      },
      {
        title: "我们的优势",
        desc: "前沿课程、顶级师资、实战项目、完善服务",
        items: [
          "课程前沿：紧跟技术趋势季度更新",
          "师资顶级：行业大咖实战授课",
          "项目实战：真实案例与商业化孵化",
          "就业创业支持：50+合作企业内推",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "立即开启学习之旅",
      desc: "预约免费公开课/体验课，获得 1 对 1 课程顾问咨询。",
      email: "edu@laphitech.com",
      phone: "400-XXX-XXXX",
      wechat: "LaPhiEdu",
      address: "北京 / 上海 / 深圳 / 杭州",
      ctaPrimary: "免费试听",
      ctaSecondary: "课程咨询",
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "拉菲实验室（LF Labs）人工智能孵化集团",
  },
  en: {
    hero: {
      tag: "Education & Training",
      title: "LF Labs · Education Division",
      subtitle: "Web3 · RWA · AI Frontier Training",
      description:
        "Professional training for Web3, RWA and AI to build future-ready talent and organizations.",
    },
    stats: [
      { value: "1000+", label: "Learners" },
      { value: "50+", label: "Enterprise Clients" },
      { value: "95%", label: "Satisfaction" },
    ],
    highlights: [
      "Three tracks: Web3 / RWA / AI",
      "Industry experts with real-world projects",
      "Career & startup support with incubation resources",
      "Corporate training and executive programs",
    ],
    sections: [
      {
        title: "Core Curriculum System",
        desc: "Full coverage across Web3, RWA and AI",
        items: [
          "Web3: blockchain fundamentals, smart contracts, DeFi/NFT",
          "RWA: compliance, technical implementation and incubation",
          "AI: LLM applications, agents and commercialization",
          "Theory + practice: real projects with mentor guidance",
        ],
        columns: 2,
      },
      {
        title: "Web3 Full Tracks",
        desc: "Six professional directions",
        items: [
          "Web3 Intro: blockchain, wallets, ecosystem overview",
          "Blockchain Engineer: Solidity, DApps and security",
          "DeFi Development: AMM/Lending, cross-chain, MEV",
          "NFT Projects: standards, minting, community operations",
          "Web3 Product Manager: tokenomics, DAO governance",
          "Web3 Research Analyst: on-chain data and investment",
        ],
        columns: 2,
      },
      {
        title: "RWA Full Tracks",
        desc: "Master the full digitization workflow",
        items: [
          "RWA Fundamentals and market trends",
          "RWA Legal & Compliance: SPV/trust structures",
          "RWA Technical Implementation and oracles",
          "RWA Incubation: fundraising and go-to-market",
          "RWA Investment Analysis and exit strategy",
        ],
        columns: 2,
      },
      {
        title: "AI Full Tracks",
        desc: "From fundamentals to commercialization",
        items: [
          "AI Fundamentals: ML, LLMs and tools",
          "LLM Application Dev: Prompt, RAG, vector DB",
          "AI Agents: multimodal systems and collaboration",
          "AI Commercialization: MVP and funding strategies",
          "Vertical AI: marketing, service, finance, manufacturing",
        ],
        columns: 2,
      },
      {
        title: "Cross-domain Projects",
        desc: "Web3 + AI / RWA + AI / Web3 + RWA + AI",
        items: [
          "AI-driven on-chain data analytics",
          "AI agent trading bots",
          "AI risk control & valuation systems",
          "Decentralized RWA investment DAO",
          "Each learner completes at least one project",
        ],
        columns: 2,
      },
      {
        title: "Operations Centers",
        desc: "Curriculum, delivery and market operations",
        items: [
          "R&D Center: curriculum updates and case libraries",
          "Training Center: dual-instructor system and cohorts",
          "Market Center: open classes and career support",
        ],
        columns: 3,
      },
      {
        title: "Top Instructor Team",
        desc: "Experts with proven track record",
        items: [
          "Web3 leads: chain CTOs and DeFi founders",
          "RWA leads: licensed finance experts",
          "AI leads: big-tech engineers and startup CTOs",
          "Strict selection: 5+ years practical experience",
        ],
        columns: 2,
      },
      {
        title: "Training Formats",
        desc: "Bootcamps, live classes, enterprise training, VIP",
        items: [
          "Offline bootcamps with hands-on mentoring",
          "Live online classes with replays",
          "Enterprise training with customized curriculum",
          "VIP 1-on-1 coaching for executives",
        ],
        columns: 2,
      },
      {
        title: "Learning Support",
        desc: "End-to-end support for study, career and startup",
        items: [
          "Community, progress tracking and feedback",
          "Project code review and demo day",
          "Career service with 50+ partner companies",
          "Startup support and incubation fund",
        ],
        columns: 2,
      },
      {
        title: "Success Stories",
        desc: "Career transformation and venture success",
        items: [
          "Web3 developer: 300k → 800k+ RMB",
          "RWA founder: $5M seed funding",
          "AI transformation: 50% efficiency uplift",
          "Enterprise training: Series B in 6 months",
        ],
        columns: 2,
      },
      {
        title: "Enterprise Training",
        desc: "Build frontier tech talent for enterprises",
        items: [
          "Executive training on trends and strategy",
          "Technical team enablement with real projects",
          "All-staff digital training and culture",
          "Custom projects with advisory delivery",
        ],
        columns: 2,
      },
      {
        title: "Pricing",
        desc: "Flexible pricing for different learner goals",
        items: [
          "Intro course: 1,999-3,999 RMB / 1-2 weeks",
          "Career program: 24,999-39,999 RMB / 2-6 months",
          "VIP program: 59,999-99,999 RMB / 6-12 months",
          "Enterprise training: 50k-100k RMB / session",
        ],
        columns: 2,
      },
      {
        title: "Why LF Labs",
        desc: "Cutting-edge content, experts, projects and support",
        items: [
          "Quarterly updated content and frontier focus",
          "Hands-on projects with commercialization support",
          "Employment and venture support",
          "Certified completion and recommendations",
        ],
        columns: 2,
      },
    ],
    contact: {
      title: "Start learning today",
      desc: "Book a free trial class and speak with an advisor.",
      email: "edu@laphitech.com",
      phone: "400-XXX-XXXX",
      wechat: "LaPhiEdu",
      address: "Beijing / Shanghai / Shenzhen / Hangzhou",
      ctaPrimary: "Free Trial",
      ctaSecondary: "Course Consultation",
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "LF Labs AI Incubation Group",
  },
};

export default function EducationPage() {
  return (
    <PageShell content={content} ctaLabel={{ zh: "预约合作", en: "Let’s Talk" }} />
  );
}
