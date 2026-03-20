import PageShell from "@/components/PageShell";
import { contactLinks } from "@/lib/contacts";

const content = {
  zh: {
    hero: {
      tag: "AI 技术解决方案",
      title: "拉菲科技 · AI 技术解决方案",
      subtitle: "智能驱动未来 · 算法创造价值",
      description:
        "让每个企业都拥有 AI 能力，将前沿人工智能技术转化为可落地的商业价值。",
    },
    stats: [
      { value: "4", label: "核心能力" },
      { value: "7×24", label: "运维支持" },
      { value: "多行业", label: "落地经验" },
    ],
    highlights: [
      "自主 AI 算法研发能力，掌握核心技术",
      "模型训练到部署的完整能力链",
      "智能体与数字人前沿技术储备",
      "多行业 AI 落地经验与最佳实践",
    ],
    sections: [
      {
        title: "核心能力",
        desc: "从算法到应用的全栈服务",
        items: [
          "算法研究：深度学习、NLP、CV、强化学习与大模型微调",
          "模型部署：优化压缩、云端/边缘/混合部署与监控运维",
          "智能体应用：Agent 智能体、多模态交互与企业级助手",
          "数字人服务：形象定制、语音克隆、实时互动与多场景应用",
        ],
        columns: 2,
      },
      {
        title: "AI 算法研发服务",
        desc: "为您的业务定制专属 AI 能力",
        items: [
          "算法定制开发：根据业务场景设计模型",
          "需求分析与可行性评估：深入理解业务痛点",
          "数据采集与标注：构建高质量训练数据集",
          "模型训练与优化：持续迭代提升性能",
          "效果评估与迭代：确保达到业务目标",
        ],
        columns: 3,
        variant: "steps",
      },
      {
        title: "模型部署方案",
        desc: "稳定高效的生产级交付",
        items: [
          "云端部署：弹性扩展架构设计，高并发处理与跨区域负载均衡",
          "边缘部署：低延迟响应、离线可用与隐私保护",
          "混合部署：云边协同计算与成本优化",
          "运维服务：7×24 监控、性能优化与版本迭代管理",
        ],
        columns: 2,
      },
      {
        title: "智能体开发服务",
        desc: "打造 AI 助手与自动化系统",
        items: [
          "企业级智能助手：客服、销售、办公与数据分析助手",
          "任务自动化 Agent：RPA+AI 流程、跨系统数据流转",
          "多模态交互：语音+文本+图像理解与多轮对话管理",
          "应用场景：电商、金融、教育、医疗、制造与政务",
        ],
        columns: 2,
      },
      {
        title: "数字人服务",
        desc: "打造专属品牌数字代言人",
        items: [
          "数字人定制：形象设计、声音克隆与动作表情系统",
          "直播带货：24 小时直播与实时互动回复",
          "客服接待：多语言虚拟客服与情感化交互",
          "品牌宣传：企业宣传片与社交媒体内容",
        ],
        columns: 2,
      },
      {
        title: "行业解决方案",
        desc: "深度理解行业 · 精准解决痛点",
        items: [
          "零售电商：智能推荐、商品识别与数字人直播",
          "金融科技：风控模型、智能投顾与反欺诈系统",
          "教育培训：学习推荐、作业批改与虚拟教师助手",
          "智能制造：视觉质检、预测性维护与智能排产",
          "其他行业：医疗健康、文旅娱乐、物流供应链、政务服务",
        ],
        columns: 3,
      },
    ],
    contact: {
      title: "立即开启 AI 之旅",
      desc: "预约技术专家 1 对 1 咨询与 AI 应用场景诊断。",
      email: "ai@laphitech.com",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs AI",
      address: "美国科罗拉多州",
      ctaPrimary: "免费咨询",
      ctaSecondary: "预约专家",
      links: contactLinks.zh,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "拉菲实验室（LF Labs）人工智能孵化集团",
  },
  en: {
    hero: {
      tag: "AI Solutions",
      title: "LF Labs · AI Technology Solutions",
      subtitle: "Intelligence drives the future",
      description:
        "Transform cutting-edge AI into real commercial value for every enterprise.",
    },
    stats: [
      { value: "4", label: "Core Capabilities" },
      { value: "7×24", label: "Ops Support" },
      { value: "Multi-industry", label: "Deployments" },
    ],
    highlights: [
      "Proprietary AI algorithms and core IP",
      "End-to-end capability from training to deployment",
      "Advanced agent and digital human expertise",
      "Proven AI delivery across industries",
    ],
    sections: [
      {
        title: "Core Capabilities",
        desc: "Full-stack service from algorithms to applications",
        items: [
          "Algorithm R&D: Deep learning, NLP, CV, RL and LLM fine-tuning",
          "Model Deployment: Optimization, cloud/edge/hybrid deployment and monitoring",
          "Agent Applications: Enterprise assistants and multimodal systems",
          "Digital Humans: Custom avatars, voice cloning, realtime interaction",
        ],
        columns: 2,
      },
      {
        title: "AI Algorithm Development",
        desc: "Custom AI for your business",
        items: [
          "Scenario-based algorithm design",
          "Feasibility assessment and requirement analysis",
          "Data collection and annotation",
          "Training, optimization and iteration",
          "Performance evaluation and KPI alignment",
        ],
        columns: 3,
        variant: "steps",
      },
      {
        title: "Deployment Solutions",
        desc: "Stable production-grade delivery",
        items: [
          "Cloud: Elastic scaling and global load balancing",
          "Edge: Low-latency inference and data privacy",
          "Hybrid: Cloud-edge collaboration and cost optimization",
          "Ops: 7×24 monitoring and continuous iteration",
        ],
        columns: 2,
      },
      {
        title: "Agent Development",
        desc: "AI assistants and automation systems",
        items: [
          "Enterprise assistants for service, sales and analytics",
          "RPA + AI automation and cross-system workflows",
          "Multimodal interaction with memory and context",
          "Use cases across retail, finance, education, healthcare",
        ],
        columns: 2,
      },
      {
        title: "Digital Humans",
        desc: "Your brand’s digital spokesperson",
        items: [
          "Avatar design, voice cloning and motion system",
          "24/7 streaming and real-time interaction",
          "Multilingual virtual customer service",
          "Brand video and social media content",
        ],
        columns: 2,
      },
      {
        title: "Industry Solutions",
        desc: "Deep industry insight, precise problem solving",
        items: [
          "Retail: Recommendation, product recognition and live commerce",
          "FinTech: Risk control, robo-advisory and fraud detection",
          "Education: Personalized learning and AI tutors",
          "Manufacturing: Vision QA and predictive maintenance",
          "Other: Healthcare, tourism, logistics, public sector",
        ],
        columns: 3,
      },
    ],
    contact: {
      title: "Start your AI journey",
      desc: "Book a 1-on-1 consultation and AI scenario assessment.",
      email: "lfsubs1@proton.me",
      phone: "+86-000-0000-0000",
      wechat: "LF Labs AI",
      address: "Colorado, USA",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "Book Expert",
      links: contactLinks.en,
    },
    footer: "© 2026 LF Labs Group. All rights reserved.",
    companyName: "LF Labs AI Incubation Group",
  },
};

export default function AiPage() {
  return <PageShell content={content} ctaLabel={{ zh: "预约合作", en: "Let’s Talk" }} />;
}
