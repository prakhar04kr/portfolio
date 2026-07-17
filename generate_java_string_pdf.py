#!/usr/bin/env python3
"""Generate a PDF of Java String methods matching the user's table exactly."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer

OUTPUT = "/opt/cursor/artifacts/Java_String_Functions_Cheat_Sheet.pdf"
OUTPUT_REPO = "/workspace/public/Java_String_Functions_Cheat_Sheet.pdf"

# Method | Example | Output  (exactly as requested)
ROWS = [
    ("length()", '"Java".length()', "4"),
    ("charAt(i)", '"Java".charAt(2)', "v"),
    ("substring(start)", '"Java".substring(2)', "va"),
    ("substring(start,end)", '"Java".substring(1,3)', "av"),
    ("equals()", '"abc".equals("abc")', "true"),
    ("equalsIgnoreCase()", '"JAVA".equalsIgnoreCase("java")', "true"),
    ("compareTo()", '"abc".compareTo("abd")', "-1"),
    ("contains()", '"Hello".contains("ell")', "true"),
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
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def build_pdf(path: str) -> None:
    doc = SimpleDocTemplate(
        path,
        pagesize=letter,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title="Java String Functions",
        author="Java String Cheat Sheet",
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        "TitleCustom",
        parent=styles["Heading1"],
        fontSize=20,
        alignment=TA_CENTER,
        spaceAfter=4,
        textColor=colors.HexColor("#1a365d"),
        fontName="Helvetica-Bold",
    )
    subtitle_style = ParagraphStyle(
        "Subtitle",
        parent=styles["Normal"],
        fontSize=10,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#4a5568"),
        spaceAfter=16,
    )
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
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#1a365d"),
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
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#276749"),
    )

    story = []
    story.append(Paragraph("Java String Functions", title_style))
    story.append(
        Paragraph(
            "Method &nbsp;•&nbsp; Example &nbsp;•&nbsp; Output",
            subtitle_style,
        )
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

    col_widths = [1.85 * inch, 3.55 * inch, 1.85 * inch]
    table = Table(data, colWidths=col_widths, repeatRows=1)

    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1a365d")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("ALIGN", (0, 0), (-1, 0), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#a0aec0")),
        ("BOX", (0, 0), (-1, -1), 1.5, colors.HexColor("#1a365d")),
        ("ALIGN", (2, 1), (2, -1), "CENTER"),
    ]
    for i in range(1, len(data)):
        bg = colors.HexColor("#edf2f7") if i % 2 == 0 else colors.white
        style_cmds.append(("BACKGROUND", (0, i), (-1, i), bg))

    table.setStyle(TableStyle(style_cmds))
    story.append(table)

    story.append(Spacer(1, 14))
    note = ParagraphStyle(
        "Note",
        parent=styles["Normal"],
        fontSize=8.5,
        textColor=colors.HexColor("#4a5568"),
        alignment=TA_CENTER,
    )
    story.append(
        Paragraph(
            f"{len(ROWS)} common <b>java.lang.String</b> methods &nbsp;|&nbsp; "
            "Strings are immutable — these methods return a new value.",
            note,
        )
    )

    def footer(canvas, doc_):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#718096"))
        canvas.drawCentredString(
            letter[0] / 2,
            0.3 * inch,
            f"Java String Functions  •  Page {canvas.getPageNumber()}",
        )
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Wrote: {path}")


if __name__ == "__main__":
    build_pdf(OUTPUT)
    build_pdf(OUTPUT_REPO)
