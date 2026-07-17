#!/usr/bin/env python3
"""Minimal PDF: Method | Example | Output for Java String methods."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph

OUTPUT = "/opt/cursor/artifacts/Java_String_Functions_Cheat_Sheet.pdf"
OUTPUT_REPO = "/workspace/public/Java_String_Functions_Cheat_Sheet.pdf"

# Method | Example | Output — only these rows (+ matches)
ROWS = [
    ("length()", '"Java".length()', "4"),
    ("charAt(i)", '"Java".charAt(2)', "v"),
    ("substring(start)", '"Java".substring(2)', "va"),
    ("substring(start,end)", '"Java".substring(1,3)', "av"),
    ("equals()", '"abc".equals("abc")', "true"),
    ("equalsIgnoreCase()", '"JAVA".equalsIgnoreCase("java")', "true"),
    ("compareTo()", '"abc".compareTo("abd")', "-1"),
    ("contains()", '"Hello".contains("ell")', "true"),
    ("matches()", '"123".matches("\\\\d+")', "true"),
    ("startsWith()", '"Java".startsWith("Ja")', "true"),
    ("endsWith()", '"Java".endsWith("va")', "true"),
    ("indexOf()", '"banana".indexOf(\'a\')', "1"),
    ("lastIndexOf()", '"banana".lastIndexOf(\'a\')', "5"),
    ("replace()", '"Java".replace(\'a\',\'o\')', "Jovo"),
    ("replaceAll()", '"a1b2".replaceAll("\\\\d","")', "ab"),
    ("toUpperCase()", '"java".toUpperCase()', "JAVA"),
    ("toLowerCase()", '"JAVA".toLowerCase()', "java"),
    ("trim()", '" Java ".trim()', '"Java"'),
    ("isEmpty()", '"".isEmpty()', "true"),
    ("concat()", '"Hi".concat(" All")', "Hi All"),
    ("split()", '"a,b,c".split(",")', '["a","b","c"]'),
    ("toCharArray()", '"Java".toCharArray()', "['J','a','v','a']"),
    ("valueOf()", "String.valueOf(123)", '"123"'),
    ("join()", 'String.join("-","A","B","C")', "A-B-C"),
    ("repeat()", '"Hi".repeat(3)', "HiHiHi"),
]


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def build_pdf(path: str) -> None:
    doc = SimpleDocTemplate(
        path,
        pagesize=letter,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        title="Java String Functions",
    )

    styles = getSampleStyleSheet()
    header_cell = ParagraphStyle(
        "HeaderCell",
        parent=styles["Normal"],
        fontSize=11,
        fontName="Helvetica-Bold",
        textColor=colors.white,
        alignment=TA_CENTER,
        leading=14,
    )
    cell_method = ParagraphStyle(
        "CellMethod",
        parent=styles["Normal"],
        fontName="Courier-Bold",
        fontSize=9,
        leading=11,
        alignment=TA_LEFT,
    )
    cell_example = ParagraphStyle(
        "CellExample",
        parent=styles["Normal"],
        fontName="Courier",
        fontSize=8.5,
        leading=11,
        alignment=TA_LEFT,
    )
    cell_output = ParagraphStyle(
        "CellOutput",
        parent=styles["Normal"],
        fontName="Courier",
        fontSize=9,
        leading=11,
        alignment=TA_CENTER,
    )

    header = [
        Paragraph("Method", header_cell),
        Paragraph("Example", header_cell),
        Paragraph("Output", header_cell),
    ]

    data = [header]
    for method, example, output in ROWS:
        data.append(
            [
                Paragraph(esc(method), cell_method),
                Paragraph(esc(example), cell_example),
                Paragraph(esc(output), cell_output),
            ]
        )

    table = Table(data, colWidths=[1.9 * inch, 3.6 * inch, 1.7 * inch], repeatRows=1)

    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1a365d")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#a0aec0")),
        ("BOX", (0, 0), (-1, -1), 1.25, colors.HexColor("#1a365d")),
        ("ALIGN", (2, 1), (2, -1), "CENTER"),
    ]
    for i in range(1, len(data)):
        bg = colors.HexColor("#edf2f7") if i % 2 == 0 else colors.white
        style_cmds.append(("BACKGROUND", (0, i), (-1, i), bg))

    table.setStyle(TableStyle(style_cmds))
    doc.build([table])
    print(f"Wrote: {path} ({len(ROWS)} rows)")


if __name__ == "__main__":
    build_pdf(OUTPUT)
    build_pdf(OUTPUT_REPO)
