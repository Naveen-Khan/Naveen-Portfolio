#!/usr/bin/env python3
"""Generate a clean ATS-style resume PDF for Naveen Khan.
Uses ReportLab. Saves to /home/z/my-project/public/Naveen-Khan-Resume.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.enums import TA_LEFT

OUT = "/home/z/my-project/public/Naveen-Khan-Resume.pdf"

NAVY = HexColor("#10243A")
FOREST = HexColor("#0F6654")
TERRACOTTA = HexColor("#C86B45")
GRAY = HexColor("#5A6B7D")
LIGHT_GRAY = HexColor("#E6DECC")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "NameStyle", parent=styles["Normal"],
    fontName="Helvetica-Bold", fontSize=22, leading=26,
    textColor=NAVY, alignment=TA_LEFT, spaceAfter=2,
)
role_style = ParagraphStyle(
    "RoleStyle", parent=styles["Normal"],
    fontName="Helvetica", fontSize=10.5, leading=14,
    textColor=GRAY, alignment=TA_LEFT, spaceAfter=8,
)
contact_style = ParagraphStyle(
    "ContactStyle", parent=styles["Normal"],
    fontName="Helvetica", fontSize=9, leading=12,
    textColor=NAVY, alignment=TA_LEFT, spaceAfter=2,
)
section_style = ParagraphStyle(
    "SectionStyle", parent=styles["Normal"],
    fontName="Helvetica-Bold", fontSize=11, leading=14,
    textColor=NAVY, alignment=TA_LEFT, spaceAfter=4, spaceBefore=10,
)
item_title_style = ParagraphStyle(
    "ItemTitle", parent=styles["Normal"],
    fontName="Helvetica-Bold", fontSize=10, leading=13,
    textColor=NAVY, alignment=TA_LEFT,
)
item_meta_style = ParagraphStyle(
    "ItemMeta", parent=styles["Normal"],
    fontName="Helvetica-Oblique", fontSize=9, leading=11,
    textColor=GRAY, alignment=TA_LEFT,
)
item_desc_style = ParagraphStyle(
    "ItemDesc", parent=styles["Normal"],
    fontName="Helvetica", fontSize=9.5, leading=12,
    textColor=HexColor("#333333"), alignment=TA_LEFT,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=styles["Normal"],
    fontName="Helvetica", fontSize=9.5, leading=12,
    textColor=HexColor("#333333"), alignment=TA_LEFT,
    leftIndent=10, bulletIndent=0,
)
skill_style = ParagraphStyle(
    "Skill", parent=styles["Normal"],
    fontName="Helvetica", fontSize=9.5, leading=13,
    textColor=NAVY, alignment=TA_LEFT,
)


def build():
    doc = SimpleDocTemplate(
        OUT, pagesize=A4,
        leftMargin=1.6*cm, rightMargin=1.6*cm,
        topMargin=1.5*cm, bottomMargin=1.5*cm,
        title="Naveen Khan — AI Engineer Resume",
        author="Naveen Khan",
        subject="Resume",
        creator="Naveen Khan Portfolio",
    )
    s = []
    # HEADER
    s.append(Paragraph("Naveen Khan", name_style))
    s.append(Paragraph("AI Engineer · Machine Learning · Generative AI · Full-Stack AI", role_style))
    s.append(Paragraph("Karachi, Pakistan · naveenkhan0059@gmail.com · github.com/Naveen-Khan · linkedin.com/in/naveen-khan-ai-engineer", contact_style))
    s.append(Paragraph("B.E. Computer Systems Engineering · Mehran UET (11/2021 – 12/2025)", contact_style))
    s.append(Spacer(1, 4))
    s.append(HRFlowable(width="100%", thickness=1, color=LIGHT_GRAY))
    s.append(Spacer(1, 4))

    # SUMMARY
    s.append(Paragraph("SUMMARY", section_style))
    s.append(Paragraph(
        "AI Engineer with 6 months of professional experience plus a 12-month research project. "
        "I design and build AI systems across machine learning, generative AI (RAG, LLMs), computer "
        "vision and AI automation — turning complex data, documents and workflows into useful, "
        "well-engineered products. Strong full-stack background in Python, FastAPI, Next.js, "
        "PostgreSQL and vector databases (Faiss, Pinecone).",
        item_desc_style,
    ))

    # EXPERIENCE
    s.append(Paragraph("EXPERIENCE", section_style))
    exp_data = [
        ("Full Stack AI Engineer", "AI Hackathon · Sofstica Solutions (Pvt.) Ltd · Karachi", "08 / 2026 · 48-Hour Solo Hackathon Project",
         "Built a clinical research platform with Text-to-SQL capabilities across 912,284 patient records — entirely solo within a 48-hour hackathon sprint.",
         ["Solo-built clinical research platform within a 48-hour hackathon sprint.",
          "Engineered end-to-end data-quality engine from scratch with full provenance tracking.",
          "Integrated FastAPI + Next.js app with LLM-powered natural language interfaces.",
          "Enabled real-time cohort exploration, analysis, and AI-generated summaries.",
          "Tools: Python, FastAPI, Next.js, SQLite, LLM, LangChain, Docker, Azure."]),
        ("AI Engineer Intern", "ITSolera Pvt. Ltd. · Karachi", "01 / 2026 – 04 / 2026",
         "Trained CNN and YOLO-based computer vision models on 10,000+ images across 3 domains.",
         ["Fine-tuned models to 93%+ accuracy through systematic hyperparameter optimization.",
          "Domains: medical image classification, damaged road detection, theft detection.",
          "Automated repetitive data workflows, cutting manual processing time by ~40%.",
          "Tools: Python, Deep Learning, FastAPI, Streamlit, Roboflow, Computer Vision."]),
        ("AI Engineer Intern", "Civil Aviation Authority of Pakistan (CAA) · Karachi", "07 / 2025 – 08 / 2025",
         "Engineered enterprise-level conversational system using LLMs and RAG.",
         ["Reduced internal query resolution time by 60% via LLM-powered conversational system.",
          "Architected semantic retrieval framework with RAG across 100+ organizational PDFs.",
          "Implemented embedding-based document indexing for fast retrieval.",
          "Tools: Python, FastAPI, LangChain, RAG, NLP, LLMs, Hugging Face, .NET."]),
        ("AI Research", "Multimodal Smart Wearable for Personal Safety · Mehran UET", "11 / 2024 – 11 / 2025",
         "Developed AI-powered wearable with YOLO-based robbery detection, multilingual speech recognition, and GPS/GSM emergency response.",
         ["Achieved 95% accuracy in real-time threat detection with alert response under 5 seconds.",
          "Implemented multilingual speech recognition + evidence capturing on-device.",
          "Engineered GPS/GSM emergency response pipeline on Raspberry Pi 4 + ESP32.",
          "Won 2nd Place at IEEE CS Exhibition 2025 (45+ projects); published paper in 2026.",
          "Tools: Python, PyTorch, YOLOv8, Raspberry Pi 4, ESP32, IoT, GPS/GSM, Computer Vision."]),
    ]
    for title, place, date, desc, bullets in exp_data:
        s.append(Spacer(1, 3))
        s.append(Paragraph(f"<b>{title}</b> &nbsp;·&nbsp; <i>{place}</i> &nbsp;·&nbsp; {date}", item_title_style))
        s.append(Spacer(1, 1))
        s.append(Paragraph(desc, item_desc_style))
        for b in bullets:
            s.append(Paragraph(f"• {b}", bullet_style))

    # PROJECTS
    s.append(Spacer(1, 6))
    s.append(Paragraph("SELECTED PROJECTS", section_style))
    proj_data = [
        ("01 · ClinData Explorer", "Healthcare AI",
         "AI-powered clinical cohort and data-quality explorer · Text-to-SQL · 912K records · Live on Azure."),
        ("02 · McDonald's AI Agent", "Customer AI",
         "AI customer-support and order-management workflow · LLM · FastAPI."),
        ("03 · CardioRisk AI", "Clinical Decision Support",
         "Heart-disease risk prediction · 97.6% accuracy (SVM) · 3,800+ patients · Next.js + Python + Vercel."),
        ("04 · Enterprise RAG Assistant", "Document Intelligence",
         "Retrieval-augmented generation system for enterprise document intelligence · Vector DB · LLM."),
        ("05 · Radiomed", "Clinical AI",
         "Automated medical image diagnosis assistant · CNN + Densenet · 99.8% top accuracy · Brain MRI / Chest X-ray / Lung CT · Flask + SQL + HTML/CSS/JS."),
        ("06 · SAFELINK", "Multimodal Wearable",
         "Multimodal smart wearable for personal safety · Computer Vision + Edge AI + IoT."),
        ("07 · Revenue AI", "Sales Forecasting",
         "Sales forecasting platform · Polynomial Regression · 95.3% R² · 0.903 MAE · Streamlit · Live on Vercel."),
        ("08 · Lead Generation Agent", "AI Automation",
         "AI-powered lead generation agent · n8n + OpenRouter LLM · 50+ personalized emails/day · $0.02/email."),
    ]
    for title, cat, desc in proj_data:
        s.append(Spacer(1, 2))
        s.append(Paragraph(f"<b>{title}</b> &nbsp;·&nbsp; <i>{cat}</i>", item_title_style))
        s.append(Paragraph(desc, item_desc_style))

    # SKILLS
    s.append(Spacer(1, 6))
    s.append(Paragraph("SKILLS", section_style))
    skill_rows = [
        ("Generative AI", "RAG · LLMs · LangChain · Prompt Engineering · AI Agents · Vector Databases (Pinecone, FAISS)"),
        ("Machine Learning", "Classification · Regression · Feature Engineering · EDA · Model Evaluation"),
        ("Computer Vision", "YOLO · Image Classification · Object Detection · Roboflow · Data Augmentation"),
        ("Engineering", "Python · FastAPI · Streamlit · MySQL / PostgreSQL · HTML / CSS / JS · Git / GitHub"),
        ("AI Automation", "n8n · AI Agents · Webhooks · LLM API Integration · Workflow Automation · JSON Handling"),
        ("Infrastructure", "Docker · Vercel · Azure · GCP"),
    ]
    for cat, skills in skill_rows:
        s.append(Paragraph(f"<b>{cat}:</b> {skills}", skill_style))

    # EDUCATION
    s.append(Spacer(1, 6))
    s.append(Paragraph("EDUCATION", section_style))
    s.append(Paragraph("<b>BE Computer Systems Engineering</b> &nbsp;·&nbsp; <i>Mehran University of Engineering &amp; Technology, Pakistan</i> &nbsp;·&nbsp; 11 / 2021 – 12 / 2025", item_title_style))

    # PUBLICATIONS
    s.append(Spacer(1, 6))
    s.append(Paragraph("PUBLICATIONS", section_style))
    s.append(Paragraph(
        "• Khan, N., et al. (2026). <i>SAFELINK: A Multimodal Smart Wearable Device for Personal Safety.</i> "
        "THESES: International Journal of Multidisciplinary Research.",
        item_desc_style,
    ))

    # ACHIEVEMENTS
    s.append(Spacer(1, 6))
    s.append(Paragraph("ACHIEVEMENTS", section_style))
    ach = [
        "Built clinical research platform with Text-to-SQL across 912,284 patient records at Sofstica AI Hackathon.",
        "Trained CNN + YOLO models on 10,000+ images with 93%+ accuracy at ITSolera.",
        "Reduced enterprise query resolution time by 60% via LLM + RAG system at CAA.",
        "Won 2nd Place at IEEE CS Exhibition 2025 (among 45+ projects) for SAFELINK research.",
        "Published SAFELINK research paper globally in 2026.",
        "BE Computer Systems Engineering, Mehran UET (11/2021 – 12/2025).",
    ]
    for a in ach:
        s.append(Paragraph(f"• {a}", bullet_style))

    doc.build(s)
    print(f"✅ Resume PDF saved: {OUT}")


if __name__ == "__main__":
    build()
