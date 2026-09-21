// ============================================================================
// Portfolio content — single source of truth
// ============================================================================

export interface Project {
  num: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export interface ProjectDetail extends Project {
  tagline: string; // short editorial one-liner shown in detail hero
  longDescription: string; // longer body for detail page
  heroTitleLines: string[]; // e.g. ["ClinData", "Explorer"]
  heroItalicPart?: string; // part to italicize (rendered in forest green)
  visualType:
    | "clindata"
    | "mcdonalds"
    | "safelink"
    | "cardio"
    | "rag"
    | "radiomed"
    | "revenue-ai"
    | "outreach";
  stats?: Array<{
    roman: string;
    label: string;
    value: string;
    desc: string;
    italic?: boolean;
  }>;
  metaRows?: Array<{ label: string; value: string }>;
  links?: {
    github?: string;
    live?: string;
  };
  flowStages?: Array<{ num: string; label: string; sub: string }>;
  scope: string;
  stack: string;
  year: string;
}

export interface ExperienceItem {
  num: string;
  role: string;
  company: string;
  date: string;
  period: string;
  description: string;
  tags: string[];
  status: "current" | "internship" | "research" | "project";
  city: string;
  details?: string[];
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
    slug: "clindata-explorer",
    name: "ClinData Explorer",
    category: "AI for Healthcare",
    description:
      "AI-powered clinical cohort and data-quality explorer for hospital research desks.",
    tags: ["Text-to-SQL", "Data Quality", "Full-Stack AI"],
  },
  {
    num: "02",
    slug: "mcdonalds-ai-agent",
    name: "McDonald's AI Agent",
    category: "Customer Support · Order Mgmt",
    description:
      "AI customer-support and order-management workflow for retail F&B.",
    tags: ["LLM", "AI Agents", "FastAPI"],
  },
  {
    num: "03",
    slug: "cardiorisk-ai",
    name: "CardioRisk AI",
    category: "Clinical Decision Support",
    description:
      "Heart-disease risk prediction prototype for clinical decision support.",
    tags: ["Classification", "Healthcare", "ML"],
  },
  {
    num: "04",
    slug: "enterprise-rag-assistant",
    name: "Enterprise RAG Assistant",
    category: "Document Intelligence",
    description:
      "Retrieval-augmented generation system for enterprise document intelligence.",
    tags: ["RAG", "Vector Embeddings", "Semantic Search"],
  },
  {
    num: "05",
    slug: "radiomed",
    name: "Radiomed",
    category: "Automated Medical Image Diagnosis Assistant",
    description:
      "Automated medical image diagnosis assistant for clinical decision support.",
    tags: ["CNN", "Computer Vision", "Healthcare"],
  },
  {
    num: "06",
    slug: "safelink",
    name: "SAFELINK",
    category: "Multimodal Wearable · Research",
    description: "Multimodal smart wearable system for personal safety.",
    tags: ["Computer Vision", "Edge AI", "IoT"],
  },
  {
    num: "07",
    slug: "revenue-ai",
    name: "Revenue AI",
    category: "Sales Prediction · Forecasting",
    description: "AI-powered sales prediction dashboard using polynomial regression.",
    tags: ["Regression", "Forecasting", "Dashboard"],
  },
  {
    num: "08",
    slug: "outreach-ai",
    name: "OutreachAI",
    category: "AI Automation · Email Outreach",
    description: "AI-powered email outreach agent that sends 50+ personalized emails daily.",
    tags: ["n8n", "LLM", "AI Agents"],
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "clindata-explorer": {
    ...PROJECTS[0],
    tagline:
      "An AI-powered clinical cohort and data-quality explorer for hospital research desks.",
    longDescription:
      "Turning 900K+ patient records into queryable insight with natural-language SQL, on-the-fly cohort filtering, and live data-quality rule evaluation. ClinData Explorer turns hospital EHR data into a research-grade workspace — clinicians and analysts ask questions in plain English, the system translates them to SQL, runs them against normalised clinical tables, and flags data-quality issues as it goes.",
    heroTitleLines: ["ClinData", "Explorer"],
    heroItalicPart: "Explorer",
    visualType: "clindata",
    stats: [
      { roman: "i", label: "Patient Records", value: "912,284", desc: "EHR records queried" },
      { roman: "ii", label: "Clinical Tables", value: "10", desc: "Normalised schema" },
      { roman: "iii", label: "Data Quality Rules", value: "12", desc: "Live-evaluated" },
      {
        roman: "iv",
        label: "Query Latency",
        value: "1.8s",
        desc: "Avg · NL → result set",
        italic: true,
      },
    ],
    scope: "Full-Stack AI",
    stack: "Python · FastAPI · LLM · SQL",
    year: "2026",
    links: {
      github: "https://github.com/Naveen-Khan/Ai-Based-Clinical-Data-Exprorar-Analysis",
      live: "https://clindata-frontend.agreeablehill-90bfeb84.centralindia.azurecontainerapps.io",
    },
  },
  "mcdonalds-ai-agent": {
    ...PROJECTS[1],
    tagline:
      "An AI customer-support and order-management agent for a retail F&B operator.",
    longDescription:
      "Answering natural-language order queries, modifying live orders, handling refunds, and routing edge cases to the right human queue. The agent reads order state from the F&B backend, applies LLM-orchestrated actions through FastAPI endpoints, and surfaces confirmation cards so customers stay in control.",
    heroTitleLines: ["Customer", "support,", "reimagined"],
    heroItalicPart: "reimagined",
    visualType: "mcdonalds",
    stats: [
      { roman: "i", label: "Channels", value: "Chat · API", desc: "Multi-channel intake" },
      { roman: "ii", label: "Actions", value: "12+", desc: "Order-modifying intents" },
      { roman: "iii", label: "Hand-off", value: "Auto", desc: "Routes to human queue" },
      { roman: "iv", label: "Stack", value: "FastAPI", desc: "LLM-orchestrated" },
    ],
    scope: "Customer AI · Production",
    stack: "LLM · FastAPI · AI Agents",
    year: "2026",
    links: {
      github: "https://github.com/Naveen-Khan/Machdonals-ai-agent",
    },
  },
  "cardiorisk-ai": {
    ...PROJECTS[2],
    tagline:
      "An intelligent web application that predicts heart-disease risk using 13 clinical variables with 97.6% accuracy.",
    longDescription:
      "An intelligent web application that predicts heart disease risk using 13 clinical variables with 97.6% accuracy. Powered by Support Vector Machine (SVM) and validated on 3,800+ patient records, the platform delivers real-time risk stratification and multi-format medical reports (PDF, CSV, Excel). A Logistic Regression baseline (80.5% accuracy) is included for clinical comparison. Deployed globally via Vercel.",
    heroTitleLines: ["Cardio", "Risk", "AI"],
    heroItalicPart: "Risk",
    visualType: "cardio",
    stats: [
      { roman: "i", label: "Accuracy", value: "97.6%", desc: "SVM classifier" },
      { roman: "ii", label: "Patients", value: "3,800+", desc: "Validated records" },
      { roman: "iii", label: "Variables", value: "13", desc: "Clinical features" },
      { roman: "iv", label: "Baseline", value: "80.5%", desc: "Logistic Regression", italic: true },
    ],
    scope: "Clinical Decision Support",
    stack: "Python · Next.js · SQLite · Tailwind · Vercel",
    year: "2025",
    links: {
      github: "https://github.com/Naveen-Khan",
      live: "https://web-un87u2afa-naveenkhan0111-4662s-projects.vercel.app/",
    },
  },
  "enterprise-rag-assistant": {
    ...PROJECTS[3],
    tagline:
      "Retrieval-augmented generation system for enterprise document intelligence.",
    longDescription:
      "An enterprise RAG assistant that ingests large document corpora (policies, contracts, technical specs), chunks and embeds them, and answers natural-language questions with grounded, source-cited responses. Built with chunking strategies that respect document structure, hybrid retrieval (vector + keyword), and an evaluation harness that catches hallucinations before they reach production.",
    heroTitleLines: ["Enterprise", "RAG"],
    heroItalicPart: "RAG",
    visualType: "rag",
    stats: [
      { roman: "i", label: "Retrieval", value: "Hybrid", desc: "Vector + keyword" },
      { roman: "ii", label: "Citations", value: "Always", desc: "Source-grounded" },
      { roman: "iii", label: "Eval", value: "Auto", desc: "Hallucination check" },
      { roman: "iv", label: "Stack", value: "Embeddings", desc: "Vector DB · LLM", italic: true },
    ],
    scope: "Document Intelligence",
    stack: "Python · LLM · Vector DB · FastAPI",
    year: "2026",
    links: {
      github: "https://github.com/Naveen-Khan/Ai-RAG-Based-Chatbot",
    },
  },
  radiomed: {
    ...PROJECTS[4],
    tagline:
      "Automated medical image diagnosis assistant for clinical decision support.",
    longDescription:
      "Radiomed is an automated medical image diagnosis assistant that helps clinicians review imaging studies (Brain MRI, Chest X-Ray, Lung CT) with AI-assisted diagnostic predictions, confidence scores, and explainability. The system wraps a CNN-based classifier with a clinical workspace UI for account-based access, study review, and explainability reports.",
    heroTitleLines: ["Radiomed"],
    heroItalicPart: "Radiomed",
    visualType: "radiomed",
    stats: [
      { roman: "i", label: "Modalities", value: "4", desc: "MRI · X-ray · CT" },
      { roman: "ii", label: "Top Accuracy", value: "99.8%", desc: "Pneumonia · X-ray" },
      { roman: "iii", label: "Features", value: "Explainable", desc: "Grad-CAM reports" },
      { roman: "iv", label: "Access", value: "Accounts", desc: "Clinician workspace", italic: true },
    ],
    scope: "Clinical Decision Support",
    stack: "Python · CNN · Streamlit · FastAPI",
    year: "2025",
    links: {
      github: "https://github.com/Naveen-Khan",
    },
  },
  safelink: {
    ...PROJECTS[5],
    tagline: "A multimodal smart wearable for personal safety.",
    longDescription:
      "A 12-month research project exploring how computer vision, on-device inference and IoT sensors can be fused into a discreet wearable that detects threat contexts in real time and routes live location + audio to trusted contacts through an SOS escalation path.",
    heroTitleLines: ["SAFE", "LINK"],
    heroItalicPart: "LINK",
    visualType: "safelink",
    flowStages: [
      { num: "1", label: "Sensors", sub: "6-channel" },
      { num: "2", label: "Edge CV", sub: "YOLO" },
      { num: "3", label: "Anomaly", sub: "ML" },
      { num: "4", label: "SOS Relay", sub: "IoT" },
    ],
    metaRows: [
      { label: "Duration", value: "11/2024 → 11/2025 (12 months)" },
      { label: "Output", value: "Working prototype · SAFELINK v1" },
      { label: "Venue", value: "Mehran UET · Undergraduate Research" },
    ],
    scope: "Hardware + Computer Vision · Research",
    stack: "Python · YOLO · Edge · IoT",
    year: "2024 → 2025",
    links: {
      github: "https://github.com/Naveen-Khan/Multimodal-Smar-Wearable-Device-For-Personal-Saftey",
    },
  },
  "revenue-ai": {
    ...PROJECTS[6],
    tagline:
      "An intelligent sales forecasting platform powered by Polynomial Regression.",
    longDescription:
      "Revenue AI is an intelligent sales forecasting platform powered by Polynomial Regression. It analyzes advertising investments across TV, Radio, and Newspaper channels to predict future sales, optimize marketing budgets, and deliver actionable business insights through an interactive dashboard. Achieved 95.3% R² accuracy with 0.903 MAE, enabling businesses to make data-driven marketing decisions with confidence.",
    heroTitleLines: ["Revenue", "AI"],
    heroItalicPart: "AI",
    visualType: "revenue-ai",
    stats: [
      { roman: "i", label: "R² Accuracy", value: "95.3%", desc: "Polynomial regression" },
      { roman: "ii", label: "MAE", value: "0.903", desc: "Mean absolute error" },
      { roman: "iii", label: "Inputs", value: "3 channels", desc: "TV · Radio · Newspaper" },
      { roman: "iv", label: "Output", value: "Forecast", desc: "Predicted sales (k)", italic: true },
    ],
    scope: "Sales Prediction · Forecasting",
    stack: "Python · Polynomial Regression · Streamlit",
    year: "2025",
    links: {
      github: "https://github.com/Naveen-Khan/RevenueAi",
    },
  },
  "outreach-ai": {
    ...PROJECTS[7],
    tagline:
      "An AI-powered email outreach agent that sends 50+ personalized emails daily.",
    longDescription:
      "OutreachAI is an AI-powered email automation agent built with n8n that sends 50+ personalized sales emails daily to potential clients. The system automatically reads company data from Google Sheets, generates tailored outreach emails using LLMs (via OpenRouter), sends them without manual intervention, and logs all email content back to the sheet. Reduced manual effort by 90% while maintaining a cost of approximately $0.02 per email.",
    heroTitleLines: ["Outreach", "AI"],
    heroItalicPart: "AI",
    visualType: "outreach",
    stats: [
      { roman: "i", label: "Throughput", value: "50+/day", desc: "Personalized emails" },
      { roman: "ii", label: "Cost / Email", value: "$0.02", desc: "LLM-driven generation" },
      { roman: "iii", label: "Effort Saved", value: "90%", desc: "Manual reduction" },
      { roman: "iv", label: "Automation", value: "n8n + LLM", desc: "End-to-end pipeline", italic: true },
    ],
    scope: "AI Automation · Email Outreach",
    stack: "n8n · OpenRouter LLM · Google Sheets · Gmail API · JS · GCP",
    year: "2026",
    links: {
      github: "https://github.com/Naveen-Khan/Smart-Email-Outreach-Agent",
    },
  },
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    num: "01",
    role: "AI Hackathon Participant",
    company: "Sofstica Solutions",
    date: "08 / 2026",
    period: "Project-Based Learning",
    description:
      "Participated in an intensive AI hackathon hosted by Sofstica Solutions — built and shipped end-to-end AI features across the full stack as part of a project-based learning sprint. Delivered RAG assistants, AI agents, document-intelligence pipelines, and FastAPI services backing customer-facing prototypes.",
    tags: ["Generative AI", "RAG", "FastAPI", "Full-Stack"],
    status: "project",
    city: "Karachi",
    details: [
      "Designed and shipped production RAG assistant prototype end-to-end.",
      "Built AI agents wired into real customer workflows through FastAPI.",
      "Implemented document-intelligence pipeline for unstructured data extraction.",
      "Worked in a sprint-based format with code reviews and live demos.",
    ],
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
    details: [
      "Engineered LLM-powered client features with retrieval pipelines.",
      "Deployed AI agents wired into customer-facing workflows.",
      "Built Python prototypes for internal data tooling.",
      "Collaborated with senior engineers on production rollouts.",
    ],
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
    details: [
      "Built exploratory analytics dashboards on operational aviation data.",
      "Prototyped ML prediction workflows for internal use.",
      "Wrote Python data-cleaning + feature-engineering pipelines.",
      "Presented findings to internal stakeholders.",
    ],
  },
  {
    num: "04",
    role: "AI Researcher",
    company: "SAFELINK — Multimodal Wearable",
    date: "11 / 2024 – 11 / 2025",
    period: "12 months",
    description:
      "Led research on a multimodal smart wearable for personal safety — fusing computer vision, edge inference and IoT sensors into a working prototype with an SOS escalation path that routes live location + audio to trusted contacts.",
    tags: ["Computer Vision", "Edge AI", "IoT"],
    status: "research",
    city: "Mehran UET",
    details: [
      "Fused computer vision + IMU + audio anomaly detection on-device.",
      "Implemented YOLO-based threat-context detector running on edge hardware.",
      "Built SOS escalation pipeline routing live location + audio to contacts.",
      "Delivered SAFELINK v1 working prototype at Mehran UET.",
    ],
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
      { name: "Vector DBs (Faiss, Pinecone)", level: 3 },
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
      { name: "PostgreSQL", level: 2 },
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "PHP", level: 2 },
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
      { name: "GCP", level: 2 },
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
