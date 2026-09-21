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
    s.append(Paragraph("Karachi, Pakistan · naveenkhan0059@gmail.com · github.com/Naveen-Khan", contact_style))
    s.append(Paragraph("B.E. Computer Systems Engineering · Mehran UET (2021–2025)", contact_style))
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
        ("AI Hackathon Participant", "Sofstica Solutions · Karachi", "08 / 2026 · Project-Based Learning",
         "Built and shipped end-to-end AI features across the full stack as part of a project-based learning sprint.",
         ["Designed and shipped production RAG assistant prototype end-to-end.",
          "Built AI agents wired into real customer workflows through FastAPI.",
          "Implemented document-intelligence pipeline for unstructured data extraction."]),
        ("AI Engineer Intern", "ITSolera Pvt. Ltd. · Karachi", "01 / 2026 – 04 / 2026",
         "Built LLM-powered features for client products.",
         ["Engineered LLM-powered client features with retrieval pipelines.",
          "Deployed AI agents wired into customer-facing workflows.",
          "Built Python prototypes for internal data tooling."]),
        ("AI Engineer Intern", "Civil Aviation Authority of Pakistan · Karachi", "07 / 2025 – 08 / 2025",
         "Worked on internal data-driven tooling and prototype ML features for aviation operations.",
         ["Built exploratory analytics dashboards on operational aviation data.",
          "Prototyped ML prediction workflows for internal use.",
          "Wrote Python data-cleaning + feature-engineering pipelines."]),
        ("AI Researcher · SAFELINK", "Mehran UET · Undergraduate Research", "11 / 2024 – 11 / 2025",
         "Led research on a multimodal smart wearable for personal safety.",
         ["Fused computer vision + IMU + audio anomaly detection on-device.",
          "Implemented YOLO-based threat-context detector running on edge hardware.",
          "Built SOS escalation pipeline routing live location + audio to contacts.",
          "Delivered SAFELINK v1 working prototype at Mehran UET."]),
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
         "Automated medical image diagnosis assistant · CNN · 99.8% top accuracy · Brain MRI / Chest X-ray / Lung CT."),
        ("06 · SAFELINK", "Multimodal Wearable",
         "Multimodal smart wearable for personal safety · Computer Vision + Edge AI + IoT."),
        ("07 · Revenue AI", "Sales Forecasting",
         "Sales forecasting platform · Polynomial Regression · 95.3% R² · 0.903 MAE · Streamlit."),
        ("08 · OutreachAI", "AI Automation",
         "AI-powered email outreach agent · n8n + OpenRouter LLM · 50+ personalized emails/day · $0.02/email."),
    ]
    for title, cat, desc in proj_data:
        s.append(Spacer(1, 2))
        s.append(Paragraph(f"<b>{title}</b> &nbsp;·&nbsp; <i>{cat}</i>", item_title_style))
        s.append(Paragraph(desc, item_desc_style))

    # SKILLS
    s.append(Spacer(1, 6))
    s.append(Paragraph("SKILLS", section_style))
    skill_rows = [
        ("Generative AI", "RAG · LLM APIs · Prompt Engineering · Semantic Search · Vector Embeddings · Faiss · Pinecone · Context Engineering"),
        ("Machine Learning", "Classification · Regression · Feature Engineering · EDA · Model Evaluation"),
        ("Computer Vision", "YOLO · Image Classification · Object Detection · Roboflow · Data Augmentation"),
        ("Engineering", "Python · C++ · FastAPI · REST APIs · SQL · PostgreSQL · HTML · CSS · JavaScript · PHP · Git/GitHub"),
        ("AI Automation", "n8n · AI Agents · Webhooks · API Integration · Workflow Automation"),
        ("Infrastructure", "Docker · Vercel · Azure · GCP · Streamlit · Jupyter · Google Colab"),
    ]
    for cat, skills in skill_rows:
        s.append(Paragraph(f"<b>{cat}:</b> {skills}", skill_style))

    # EDUCATION
    s.append(Spacer(1, 6))
    s.append(Paragraph("EDUCATION", section_style))
    s.append(Paragraph("<b>B.E. Computer Systems Engineering</b> &nbsp;·&nbsp; <i>Mehran University of Engineering &amp; Technology</i> &nbsp;·&nbsp; 2021 – 2025", item_title_style))

    # ACHIEVEMENTS
    s.append(Spacer(1, 6))
    s.append(Paragraph("ACHIEVEMENTS", section_style))
    ach = [
        "Designed and shipped production RAG assistant prototype at Sofstica hackathon.",
        "Led 12-month SAFELINK research project to working prototype at Mehran UET.",
        "Completed 3 AI internships across industry (ITSolera) and government (Civil Aviation Authority).",
        "B.E. Computer Systems Engineering, Mehran UET (2021–2025).",
    ]
    for a in ach:
        s.append(Paragraph(f"• {a}", bullet_style))

    doc.build(s)
    print(f"✅ Resume PDF saved: {OUT}")


if __name__ == "__main__":
    build()
