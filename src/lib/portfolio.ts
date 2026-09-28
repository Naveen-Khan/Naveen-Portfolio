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
    | "cardiorisk"
    | "n8n-workflows";
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
  linkedin: "linkedin.com/in/naveen-khan-ai-engineer",
  linkedinHref: "https://www.linkedin.com/in/naveen-khan-ai-engineer/",
  experience: "06 Months · AI Engineering",
  education: "B.E. Computer Systems Engineering",
  school: "Mehran University of Engineering & Technology",
  educationPeriod: "11 / 2021 – 12 / 2025",
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
    slug: "enterprise-rag-assistant",
    name: "Enterprise RAG Assistant",
    category: "Document Intelligence",
    description:
      "Retrieval-augmented generation system for enterprise document intelligence.",
    tags: ["RAG", "Vector Embeddings", "Semantic Search"],
  },
  {
    num: "03",
    slug: "mcdonalds-ai-agent",
    name: "McDonald's AI Customer Support Agent",
    category: "Customer Support · Order Mgmt",
    description:
      "AI customer-support and order-management workflow for retail F&B.",
    tags: ["LLM", "AI Agents", "FastAPI"],
  },
  {
    num: "04",
    slug: "radiomed",
    name: "Radiomed",
    category: "Automated Medical Image Diagnosis Assistant",
    description:
      "Automated medical image diagnosis assistant for clinical decision support.",
    tags: ["CNN", "Computer Vision", "Healthcare"],
  },
  {
    num: "05",
    slug: "revenue-ai",
    name: "Revenue AI",
    category: "Sales Prediction · Forecasting",
    description: "AI-powered sales prediction dashboard using polynomial regression.",
    tags: ["Regression", "Forecasting", "Dashboard"],
  },
  {
    num: "06",
    slug: "cardiorisk-ai",
    name: "CardioRisk AI",
    category: "AI · Healthcare · Clinical Decision Support",
    description:
      "An intelligent web application that predicts heart disease risk using 13 clinical variables with 97.6% accuracy.",
    tags: ["Machine Learning", "Next.js", "Python", "SQLite", "Tailwind CSS", "Vercel"],
  },
  {
    num: "07",
    slug: "safelink",
    name: "SAFELINK",
    category: "Multimodal Smart Wearable · Research",
    description: "Multimodal smart wearable for personal safety with YOLO-based threat detection.",
    tags: ["Computer Vision", "Edge AI", "IoT"],
  },
  {
    num: "08",
    slug: "ai-automation-n8n",
    name: "AI Automation n8n",
    category: "n8n Workflows · AI Automation",
    description: "Collection of n8n automation workflows powering AI agents, RAG pipelines, and email outreach.",
    tags: ["n8n", "AI Agents", "Automation"],
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
    },
  },
  "mcdonalds-ai-agent": {
    ...PROJECTS[2],
    tagline:
      "An AI customer-support and order-management agent for a retail F&B operator.",
    longDescription:
      "Answering natural-language order queries, modifying live orders, handling refunds, and routing edge cases to the right human queue. The agent reads order state from the F&B backend, applies LLM-orchestrated actions through FastAPI endpoints, and surfaces confirmation cards so customers stay in control.",
    heroTitleLines: ["McDonald's AI", "Customer Support", "Agent"],
    heroItalicPart: "Agent",
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
  "enterprise-rag-assistant": {
    ...PROJECTS[1],
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
    ...PROJECTS[3],
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
    stack: "Python · CNN · Densenet · Flask · SQL · HTML · CSS · JS",
    year: "2025",
    links: {
      github: "https://github.com/Naveen-Khan",
    },
  },
  safelink: {
    ...PROJECTS[6],
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
    ...PROJECTS[4],
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
  "cardiorisk-ai": {
    ...PROJECTS[5],
    tagline:
      "An intelligent web application that predicts heart disease risk using 13 clinical variables with 97.6% accuracy.",
    longDescription:
      "An intelligent web application that predicts heart disease risk using 13 clinical variables with 97.6% accuracy. Powered by Support Vector Machine (SVM) and validated on 3,800+ patient records, the platform delivers real-time risk stratification, and multi-format medical reports (PDF, CSV, Excel). Logistic Regression baseline (80.5% accuracy) included for clinical comparison. Deployed globally via Vercel.",
    heroTitleLines: ["Cardio", "Risk", "AI"],
    heroItalicPart: "Risk",
    visualType: "cardiorisk",
    stats: [
      { roman: "i", label: "Accuracy", value: "97.6%", desc: "SVM classifier" },
      { roman: "ii", label: "Patients", value: "3,800+", desc: "Validated records" },
      { roman: "iii", label: "Variables", value: "13", desc: "Clinical features" },
      { roman: "iv", label: "Baseline", value: "80.5%", desc: "Logistic Regression", italic: true },
    ],
    scope: "AI · Healthcare · Clinical Decision Support",
    stack: "Machine Learning · Next.js · Python · SQLite · Tailwind CSS · Vercel",
    year: "2025",
    links: {
      github: "https://github.com/Naveen-Khan",
      live: "https://web-un87u2afa-naveenkhan0111-4662s-projects.vercel.app/",
    },
  },
  "ai-automation-n8n": {
    ...PROJECTS[7],
    tagline:
      "A collection of n8n automation workflows powering AI agents, RAG pipelines, and email outreach.",
    longDescription:
      "A curated collection of n8n automation workflows that power the AI systems across my portfolio — from AI customer support agents and RAG-based chatbots to lead generation pipelines and email automation. Each workflow is a production-ready automation graph connecting LLMs, vector databases, APIs, and scheduling triggers into end-to-end pipelines.",
    heroTitleLines: ["AI", "Automation"],
    heroItalicPart: "Automation",
    visualType: "n8n-workflows",
    stats: [
      { roman: "i", label: "Workflows", value: "4+", desc: "Production pipelines" },
      { roman: "ii", label: "Integrations", value: "10+", desc: "APIs · LLMs · DBs" },
      { roman: "iii", label: "Automation", value: "End-to-end", desc: "Trigger → action" },
      { roman: "iv", label: "Platform", value: "n8n", desc: "Visual workflow builder", italic: true },
    ],
    scope: "AI Automation · n8n Workflows",
    stack: "n8n · OpenRouter LLM · Google Sheets · Gmail API · Pinecone · Google Drive",
    year: "2026",
  },
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    num: "01",
    role: "Full Stack AI Engineer",
    company: "AI Hackathon · Sofstica Solutions (Pvt.) Ltd",
    date: "08 / 2026",
    period: "48-Hour Solo Hackathon Project",
    description:
      "Built a clinical research platform with Text-to-SQL capabilities and engineered an end-to-end data-quality engine from scratch across 912,284 patient records with full provenance tracking — entirely solo within a 48-hour hackathon sprint. Integrated a FastAPI + Next.js app featuring LLM-powered natural language interfaces for real-time cohort exploration, analysis, and AI-generated summaries.",
    tags: ["Python", "FastAPI", "Next.js", "LLM", "LangChain", "Docker", "Azure"],
    status: "project",
    city: "Karachi",
    details: [
      "Solo-built clinical research platform within a 48-hour hackathon sprint.",
      "Built Text-to-SQL across 912,284 patient records with full provenance tracking.",
      "Engineered end-to-end data-quality engine from scratch.",
      "Integrated FastAPI + Next.js app with LLM-powered natural language interfaces.",
    ],
  },
  {
    num: "02",
    role: "AI Engineer Intern",
    company: "ITSolera Pvt. Ltd.",
    date: "01 / 2026 – 04 / 2026",
    period: "4 months",
    description:
      "Trained CNN and YOLO-based computer vision models on 10,000+ images spanning three domains: medical image classification, damaged road detection, and theft detection. Fine-tuned models to 93%+ accuracy through systematic hyperparameter optimization. Automated repetitive data workflows, cutting manual processing time by approximately 40%.",
    tags: ["Python", "Deep Learning", "FastAPI", "Streamlit", "Roboflow", "Computer Vision"],
    status: "internship",
    city: "Karachi",
    details: [
      "Trained CNN + YOLO models on 10,000+ images across 3 domains (medical, road damage, theft).",
      "Fine-tuned models to 93%+ accuracy via systematic hyperparameter optimization.",
      "Automated repetitive data workflows, cutting manual processing by ~40%.",
      "Delivered multiple concurrent CV projects end-to-end.",
    ],
  },
  {
    num: "03",
    role: "AI Engineer Intern",
    company: "Civil Aviation Authority of Pakistan (CAA)",
    date: "07 / 2025 – 08 / 2025",
    period: "2 months",
    description:
      "Engineered an enterprise-level conversational system using LLMs that reduced internal query resolution time by 60%. Architected a semantic retrieval framework leveraging Retrieval-Augmented Generation (RAG) and embedding-based document indexing across 100+ organizational PDFs.",
    tags: ["Python", "FastAPI", "LangChain", "RAG", "NLP", "LLMs", "Hugging Face", ".NET"],
    status: "internship",
    city: "Karachi",
    details: [
      "Built enterprise conversational system with LLMs, cut query resolution time by 60%.",
      "Architected semantic retrieval framework with RAG across 100+ organizational PDFs.",
      "Implemented embedding-based document indexing for fast retrieval.",
      "Collaborated with technical teams on AI workflows and model integration.",
    ],
  },
  {
    num: "04",
    role: "AI Research",
    company: "Multimodal Smart Wearable for Personal Safety",
    date: "11 / 2024 – 11 / 2025",
    period: "12 months · Mehran UET",
    description:
      "Developed an AI-powered wearable with YOLO-based robbery detection, multilingual speech recognition, evidence capturing, and GPS/GSM emergency response. Achieved 95% accuracy in real-time threat detection with alert response time under 5 seconds. Won 2nd Place at IEEE CS Exhibition 2025 (among 45+ projects) and published a research paper globally in 2026.",
    tags: ["Python", "PyTorch", "YOLOv8", "Raspberry Pi 4", "ESP32", "IoT", "GPS/GSM", "Computer Vision"],
    status: "research",
    city: "Mehran UET",
    details: [
      "Built YOLO-based robbery detection with 95% accuracy and <5s alert response.",
      "Implemented multilingual speech recognition + evidence capturing on-device.",
      "Engineered GPS/GSM emergency response pipeline on Raspberry Pi 4 + ESP32.",
      "Won 2nd Place at IEEE CS Exhibition 2025 (45+ projects); published paper in 2026.",
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
      { name: "LLMs", level: 3 },
      { name: "LangChain", level: 3 },
      { name: "Prompt Engineering", level: 3 },
      { name: "AI Agents", level: 3 },
      { name: "Vector DBs (Pinecone, FAISS)", level: 3 },
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
      { name: "FastAPI", level: 3 },
      { name: "Streamlit", level: 3 },
      { name: "MySQL / PostgreSQL", level: 2 },
      { name: "HTML / CSS / JS", level: 3 },
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
      { name: "LLM API Integration", level: 3 },
      { name: "Workflow Automation", level: 3 },
      { name: "JSON Handling", level: 3 },
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
    ],
  },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
