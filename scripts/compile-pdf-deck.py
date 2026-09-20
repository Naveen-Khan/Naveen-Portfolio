#!/usr/bin/env python3
"""Compile the 12 portfolio mockup PNGs into a single PDF design deck."""
import os
from PIL import Image

SRC_DIR = '/home/z/my-project/download/naveen-portfolio'
OUT_PDF = '/home/z/my-project/download/naveen-portfolio-mockups.pdf'

PAGE_FILES = [
    '01-home.png',
    '02-introduction.png',
    '03-selected-work.png',
    '04-project-clindata.png',
    '05-project-mcdonalds.png',
    '06-project-safelink.png',
    '07-experience.png',
    '08-about.png',
    '09-skills.png',
    '10-research.png',
    '11-resume.png',
    '12-contact.png',
]

def main():
    images = []
    for fname in PAGE_FILES:
        path = os.path.join(SRC_DIR, fname)
        img = Image.open(path)
        # Convert to RGB (PDF doesn't support RGBA well)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        images.append(img)
        print(f"  loaded {fname}  {img.size[0]}x{img.size[1]}")

    # Save as multi-page PDF
    first = images[0]
    rest = images[1:]
    first.save(OUT_PDF, 'PDF', save_all=True, append_images=rest, resolution=144.0)
    size_kb = os.path.getsize(OUT_PDF) // 1024
    print(f"\n✅ PDF saved: {OUT_PDF}  ({size_kb} KB, {len(images)} pages)")

if __name__ == '__main__':
    main()
