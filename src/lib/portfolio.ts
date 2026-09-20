// ============================================================================
// Portfolio content — single source of truth
// ============================================================================

export interface Project {
  num: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  num: string;
  role: string;
  company: string;
  date: string;
  period: string;
  description: string;
  tags: string[];
  status: "current" | "internship" | "research";
  city: string;
}

export interface Skill {
  name: string;
  level: number; // 1-3
}

export interface SkillCluster {
  title: string;
  italicPart?: string;
  romanNum: string;
  featured?: boolean;
  skills: Skill[];
}

export const PROFILE = {
  name: "Naveen Khan",
  role: "AI Engineer",
  roleExtended: "AI Engineer · ML · Generative AI · Full-Stack",
  location: "Karachi · Pakistan",
  email: "naveenkhan0059@gmail.com",
  github: "github.com/Naveen-Khan",
  githubHref: "https://github.com/Naveen-Khan",
  experience: "06 Months · AI Engineering",
  education: "B.E. Computer Systems Engineering",
  school: "Mehran University of Engineering & Technology",
  educationPeriod: "2021 – 2025",
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    name: "ClinData Explorer",
    category: "AI for Healthcare",
    description:
      "AI-powered clinical cohort and data-quality explorer for hospital research desks.",
    tags: ["Text-to-SQL", "Data Quality", "Full-Stack AI"],
  },
  {
    num: "02",
    name: "McDonald's AI Agent",
    category: "Customer Support · Order Mgmt",
    description:
      "AI customer-support and order-management workflow for retail F&B.",
    tags: ["LLM", "AI Agents", "FastAPI"],
  },
  {
    num: "03",
    name: "CardioRisk AI",
    category: "Clinical Decision Support",
    description:
      "Heart-disease risk prediction prototype for clinical decision support.",
    tags: ["Classification", "Healthcare", "ML"],
  },
  {
    num: "04",
    name: "Enterprise RAG Assistant",
    category: "Document Intelligence",
    description:
      "Retrieval-augmented generation system for enterprise document intelligence.",
    tags: ["RAG", "Vector Embeddings", "Semantic Search"],
  },
  {
    num: "05",
    name: "Medical Image Classification",
    category: "Deep Learning · Healthcare",
    description:
      "Deep-learning system for medical image classification with augmentation pipeline.",
    tags: ["CNN", "Computer Vision", "Augmentation"],
  },
  {
    num: "06",
    name: "SAFELINK",
    category: "Multimodal Wearable · Research",
    description: "Multimodal smart wearable system for personal safety.",
    tags: ["Computer Vision", "Edge AI", "IoT"],
  },
  {
    num: "07",
    name: "Computer Vision Model Suite",
    category: "Detection · Classification · Tracking",
    description: "Suite of YOLO, image-classification and object-detection models.",
    tags: ["YOLO", "Roboflow", "Detection"],
  },
  {
    num: "08",
    name: "Sales Prediction System",
    category: "Forecasting · Regression",
    description: "Regression-based sales forecasting system with feature engineering.",
    tags: ["Regression", "EDA", "Forecasting"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    num: "01",
    role: "Full-Stack AI Engineer",
    company: "Sofstica Solutions",
    date: "08 / 2026",
    period: "Present",
    description:
      "Designing and shipping production AI features across the full stack — RAG assistants, AI agents, document-intelligence pipelines, and FastAPI services backing customer-facing products.",
    tags: ["Generative AI", "RAG", "FastAPI", "Full-Stack"],
    status: "current",
    city: "Karachi",
  },
  {
    num: "02",
    role: "AI Engineer Intern",
    company: "ITSolera Pvt. Ltd.",
    date: "01 / 2026 – 04 / 2026",
    period: "4 months",
    description:
      "Built LLM-powered features for client products, prototyped retrieval pipelines, and contributed to the deployment of AI agents wired into real customer workflows.",
    tags: ["LLM", "AI Agents", "Python"],
    status: "internship",
    city: "Karachi",
  },
  {
    num: "03",
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority of Pakistan",
    date: "07 / 2025 – 08 / 2025",
    period: "2 months",
    description:
      "Worked on internal data-driven tooling and prototype ML features supporting aviation operations — including exploratory analytics and prediction workflows on operational data.",
    tags: ["ML", "EDA", "Python"],
    status: "internship",
    city: "Karachi",
  },
  {
    num: "04",
    role: "AI Researcher",
    company: "SAFELINK — Multimodal Wearable",
    date: "11 / 2024 – 11 / 2025",
    period: "12 months",
    description:
      "Led research on a multimodal smart wearable for personal safety — fusing computer vision, edge inference and IoT sensors into a working prototype with an SOS escalation path.",
    tags: ["Computer Vision", "Edge AI", "IoT"],
    status: "research",
    city: "Mehran UET",
  },
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    title: "Generative",
    italicPart: "AI",
    romanNum: "i.",
    featured: true,
    skills: [
      { name: "RAG", level: 3 },
      { name: "LLM APIs", level: 3 },
      { name: "Prompt Engineering", level: 3 },
      { name: "Semantic Search", level: 2 },
      { name: "Vector Embeddings", level: 3 },
      { name: "Context Engineering", level: 2 },
    ],
  },
  {
    title: "Machine",
    italicPart: "Learning",
    romanNum: "ii.",
    skills: [
      { name: "Classification", level: 3 },
      { name: "Regression", level: 2 },
      { name: "Feature Engineering", level: 3 },
      { name: "EDA", level: 3 },
      { name: "Model Evaluation", level: 2 },
    ],
  },
  {
    title: "Computer",
    italicPart: "Vision",
    romanNum: "iii.",
    skills: [
      { name: "YOLO", level: 3 },
      { name: "Image Classification", level: 2 },
      { name: "Object Detection", level: 3 },
      { name: "Roboflow", level: 2 },
      { name: "Data Augmentation", level: 2 },
    ],
  },
  {
    title: "Engineering",
    italicPart: "",
    romanNum: "iv.",
    skills: [
      { name: "Python", level: 3 },
      { name: "C++", level: 2 },
      { name: "FastAPI", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "SQL", level: 3 },
      { name: "Git / GitHub", level: 3 },
    ],
  },
  {
    title: "AI",
    italicPart: "Automation",
    romanNum: "v.",
    skills: [
      { name: "n8n", level: 3 },
      { name: "AI Agents", level: 3 },
      { name: "Webhooks", level: 2 },
      { name: "API Integration", level: 3 },
      { name: "Workflow Automation", level: 2 },
    ],
  },
  {
    title: "Infrastructure",
    italicPart: "",
    romanNum: "vi.",
    skills: [
      { name: "Docker", level: 2 },
      { name: "Vercel", level: 2 },
      { name: "Azure", level: 1 },
      { name: "Streamlit", level: 3 },
      { name: "Jupyter", level: 3 },
      { name: "Google Colab", level: 3 },
    ],
  },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
