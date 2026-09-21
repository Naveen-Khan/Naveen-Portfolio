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
    | "cv-suite"
    | "revenue-ai";
  stats?: Array<{
    roman: string;
    label: string;
    value: string;
    desc: string;
    italic?: boolean;
  }>;
  metaRows?: Array<{ label: string; value: string }>;
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
    slug: "cv-model-suite",
    name: "Computer Vision Model Suite",
    category: "Detection · Classification · Tracking",
    description: "Suite of YOLO, image-classification and object-detection models.",
    tags: ["YOLO", "Roboflow", "Detection"],
  },
  {
    num: "08",
    slug: "revenue-ai",
    name: "Revenue AI",
    category: "Sales Prediction · Forecasting",
    description: "AI-powered sales prediction dashboard using polynomial regression.",
    tags: ["Regression", "Forecasting", "Dashboard"],
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
  },
  "cardiorisk-ai": {
    ...PROJECTS[2],
    tagline:
      "Heart-disease risk prediction prototype for clinical decision support.",
    longDescription:
      "A supervised-learning system that estimates a patient's 10-year cardiovascular risk score from routine vitals, lab results and history. The model is wrapped behind a calm, clinical UI that surfaces the contributing risk factors so a clinician can understand and validate the prediction rather than accept it blindly.",
    heroTitleLines: ["Cardio", "Risk", "AI"],
    heroItalicPart: "Risk",
    visualType: "cardio",
    stats: [
      { roman: "i", label: "Model", value: "Classifier", desc: "Gradient boosting" },
      { roman: "ii", label: "Features", value: "24", desc: "Vitals + labs + history" },
      { roman: "iii", label: "Output", value: "Risk Score", desc: "10-year CV risk" },
      {
        roman: "iv",
        label: "Explainability",
        value: "Yes",
        desc: "Per-feature contribution",
        italic: true,
      },
    ],
    scope: "Clinical Decision Support",
    stack: "Python · scikit-learn · Streamlit",
    year: "2025",
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
  },
  "cv-model-suite": {
    ...PROJECTS[6],
    tagline:
      "A suite of YOLO, image-classification and object-detection models trained across multiple domains.",
    longDescription:
      "A reusable suite of computer-vision models — YOLO-based real-time object detectors, image classifiers, and tracking pipelines — trained across industrial, retail and safety domains. Includes a data-preparation + augmentation layer powered by Roboflow, an evaluation harness, and an inference wrapper that exposes each model through a unified REST API.",
    heroTitleLines: ["Computer", "Vision", "Suite"],
    heroItalicPart: "Vision",
    visualType: "cv-suite",
    stats: [
      { roman: "i", label: "Models", value: "5+", desc: "YOLO + classifiers" },
      { roman: "ii", label: "Domains", value: "3", desc: "Industrial · Retail · Safety" },
      { roman: "iii", label: "Pipeline", value: "Roboflow", desc: "Augmentation + versioning" },
      { roman: "iv", label: "Inference", value: "REST API", desc: "Unified wrapper", italic: true },
    ],
    scope: "Detection · Classification · Tracking",
    stack: "Python · YOLO · Roboflow · FastAPI",
    year: "2025",
  },
  "revenue-ai": {
    ...PROJECTS[7],
    tagline:
      "AI-powered sales prediction dashboard using polynomial regression.",
    longDescription:
      "Revenue AI is an interactive sales prediction dashboard that forecasts product sales from advertising spend across TV, Radio, and Newspaper channels. A polynomial regression model trained on historical campaign data powers the predictions; the dashboard exposes budget sliders, a budget-breakdown donut chart, model statistics (R² and RMSE), and a real-time predicted-sales figure.",
    heroTitleLines: ["Revenue", "AI"],
    heroItalicPart: "AI",
    visualType: "revenue-ai",
    stats: [
      { roman: "i", label: "Model", value: "Poly Reg", desc: "Polynomial regression" },
      { roman: "ii", label: "Inputs", value: "3 channels", desc: "TV · Radio · Newspaper" },
      { roman: "iii", label: "Output", value: "Sales", desc: "Predicted units (k)" },
      { roman: "iv", label: "Eval", value: "R² / RMSE", desc: "Live model stats", italic: true },
    ],
    scope: "Sales Prediction · Forecasting",
    stack: "Python · scikit-learn · Streamlit",
    year: "2025",
  },
};

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
