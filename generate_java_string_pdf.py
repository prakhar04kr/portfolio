#!/usr/bin/env python3
"""Generate a PDF cheat sheet of Java String methods with examples (tabular)."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Table,
    TableStyle,
    Paragraph,
    Spacer,
    PageBreak,
    KeepTogether,
)

OUTPUT = "/opt/cursor/artifacts/Java_String_Functions_Cheat_Sheet.pdf"
OUTPUT_REPO = "/workspace/public/Java_String_Functions_Cheat_Sheet.pdf"

# Method, Signature/Description, Example, Result
METHODS = [
    # --- Length & emptiness ---
    ("length()", "Returns number of characters", 's = "Hello";\ns.length()', "5"),
    ("isEmpty()", "true if length is 0", '"".isEmpty()', "true"),
    ("isBlank()", "true if empty or only whitespace (Java 11+)", '"  ".isBlank()', "true"),
    # --- Character access ---
    ("charAt(int index)", "Char at given index (0-based)", '"Java".charAt(2)', "'v'"),
    ("codePointAt(int index)", "Unicode code point at index", '"A".codePointAt(0)', "65"),
    ("codePointBefore(int index)", "Code point before index", '"AB".codePointBefore(1)', "65"),
    ("codePointCount(int b, int e)", "Code points in range [b, e)", '"Hi".codePointCount(0, 2)', "2"),
    ("toCharArray()", "Converts string to char array", '"Hi".toCharArray()', "['H','i']"),
    ("getChars(srcBegin, srcEnd, dst, dstBegin)", "Copies chars into array", 'See docs; fills dst[]', "—"),
    # --- Searching ---
    ("indexOf(String str)", "First index of substring (-1 if absent)", '"Hello".indexOf("l")', "2"),
    ("indexOf(String str, int from)", "First index from given offset", '"Hello".indexOf("l", 3)', "3"),
    ("indexOf(int ch)", "First index of character", '"Java".indexOf(\'a\')', "1"),
    ("lastIndexOf(String str)", "Last index of substring", '"Hello".lastIndexOf("l")', "3"),
    ("lastIndexOf(String str, int from)", "Last index searching backward from", '"Hello".lastIndexOf("l", 2)', "2"),
    ("contains(CharSequence s)", "true if substring found", '"Java".contains("av")', "true"),
    ("startsWith(String prefix)", "true if starts with prefix", '"Hello".startsWith("He")', "true"),
    ("startsWith(String prefix, int toffset)", "true if substring at offset starts with", '"Hello".startsWith("ll", 2)', "true"),
    ("endsWith(String suffix)", "true if ends with suffix", '"Hello".endsWith("lo")', "true"),
    ("matches(String regex)", "true if entire string matches regex", '"123".matches("\\\\d+")', "true"),
    ("regionMatches(...)", "Compares a region with another string", '"Hello".regionMatches(0,"He",0,2)', "true"),
    # --- Comparison ---
    ("equals(Object obj)", "Case-sensitive equality", '"Hi".equals("Hi")', "true"),
    ("equalsIgnoreCase(String another)", "Case-insensitive equality", '"Hi".equalsIgnoreCase("hi")', "true"),
    ("compareTo(String another)", "Lexicographic compare (0 = equal)", '"A".compareTo("B")', "-1"),
    ("compareToIgnoreCase(String another)", "Case-insensitive compare", '"a".compareToIgnoreCase("A")', "0"),
    ("contentEquals(CharSequence cs)", "Content equals CharSequence/StringBuffer", '"ab".contentEquals("ab")', "true"),
    # --- Extraction / substring ---
    ("substring(int begin)", "Substring from begin to end", '"Hello".substring(2)', '"llo"'),
    ("substring(int begin, int end)", "Substring [begin, end)", '"Hello".substring(1, 4)', '"ell"'),
    ("subSequence(int begin, int end)", "CharSequence for [begin, end)", '"Hello".subSequence(1, 4)', '"ell"'),
    # --- Modification (returns new String) ---
    ("concat(String str)", "Concatenates strings", '"Hello".concat("!")', '"Hello!"'),
    ("replace(char old, char new)", "Replace all matching chars", '"aabb".replace(\'a\',\'x\')', '"xxbb"'),
    ("replace(CharSequence t, CharSequence r)", "Replace all matching sequences", '"ab ab".replace("ab","X")', '"X X"'),
    ("replaceAll(String regex, String repl)", "Replace all regex matches", '"a1b2".replaceAll("\\\\d","")', '"ab"'),
    ("replaceFirst(String regex, String repl)", "Replace first regex match", '"a1b2".replaceFirst("\\\\d","")', '"ab2"'),
    ("toLowerCase()", "Lowercase (default locale)", '"JAVA".toLowerCase()', '"java"'),
    ("toUpperCase()", "Uppercase (default locale)", '"java".toUpperCase()', '"JAVA"'),
    ("trim()", "Strip leading/trailing whitespace (<= U+0020)", '" Hi ".trim()', '"Hi"'),
    ("strip()", "Strip leading/trailing Unicode whitespace (Java 11+)", '" Hi ".strip()', '"Hi"'),
    ("stripLeading()", "Strip leading whitespace (Java 11+)", '"  Hi".stripLeading()', '"Hi"'),
    ("stripTrailing()", "Strip trailing whitespace (Java 11+)", '"Hi  ".stripTrailing()', '"Hi"'),
    ("intern()", "Returns canonical pool string", '"Hi".intern()', "pooled ref"),
    ("repeat(int count)", "Repeat string count times (Java 11+)", '"ab".repeat(3)', '"ababab"'),
    ("indent(int n)", "Adjust indentation (Java 12+)", '"a\\nb".indent(2)', '"  a\\n  b\\n"'),
    ("stripIndent()", "Strip incidental indentation (Java 15+)", '"""\\n  a\\n  b\\n""".stripIndent()', '"a\\nb"'),
    ("translateEscapes()", "Translate escape sequences (Java 15+)", '"a\\\\nb".translateEscapes()', '"a\\nb"'),
    ("transform(Function f)", "Apply function; return result (Java 12+)", '"hi".transform(String::toUpperCase)', '"HI"'),
    # --- Splitting / joining ---
    ("split(String regex)", "Split around regex matches", '"a,b,c".split(",")', '["a","b","c"]'),
    ("split(String regex, int limit)", "Split with limit", '"a,b,c".split(",", 2)', '["a","b,c"]'),
    ("join(CharSequence delim, CharSequence... elems) [static]", "Join elements with delimiter", 'String.join("-", "a","b")', '"a-b"'),
    ("lines()", "Stream of lines (Java 11+)", '"a\\nb".lines().toList()', '["a","b"]'),
    # --- Formatting ---
    ("format(String format, Object... args) [static]", "Formatted string", 'String.format("%s %d", "Hi", 2)', '"Hi 2"'),
    ("formatted(Object... args)", "Instance format (Java 15+)", '"%s %d".formatted("Hi", 2)', '"Hi 2"'),
    ("valueOf(...) [static]", "Converts value to String", 'String.valueOf(42)', '"42"'),
    ("copyValueOf(char[] data) [static]", "String from char array", 'String.copyValueOf(new char[]{\'a\'})', '"a"'),
    # --- Bytes / encoding ---
    ("getBytes()", "Encode to bytes (platform default charset)", '"Hi".getBytes()', "byte[]"),
    ("getBytes(Charset charset)", "Encode with charset", '"Hi".getBytes(StandardCharsets.UTF_8)', "byte[]"),
    # --- Hash / identity helpers often used with strings ---
    ("hashCode()", "Hash code of string content", '"Hi".hashCode()', "int"),
    ("toString()", "Returns this string", '"Hi".toString()', '"Hi"'),
    # --- Newer APIs ---
    ("chars()", "IntStream of char values", '"AB".chars().toArray()', "[65, 66]"),
    ("codePoints()", "IntStream of code points", '"A".codePoints().toArray()', "[65]"),
    ("describeConstable()", "Optional describing this string (Java 12+)", '"Hi".describeConstable()', "Optional[Hi]"),
    ("resolveConstantDesc(Lookup)", "Resolves constant (Java 12+)", 'See Constable API', "String"),
]


def build_pdf(path: str) -> None:
    doc = SimpleDocTemplate(
        path,
        pagesize=landscape(letter),
        leftMargin=0.5 * inch,
        rightMargin=0.5 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title="Java String Functions Cheat Sheet",
        author="Generated for learning",
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        "TitleCustom",
        parent=styles["Heading1"],
        fontSize=18,
        alignment=TA_CENTER,
        spaceAfter=6,
        textColor=colors.HexColor("#1a365d"),
    )
    subtitle_style = ParagraphStyle(
        "Subtitle",
        parent=styles["Normal"],
        fontSize=9,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#4a5568"),
        spaceAfter=14,
    )
    cell = ParagraphStyle(
        "Cell",
        parent=styles["Normal"],
        fontSize=7.5,
        leading=9.5,
        alignment=TA_LEFT,
    )
    cell_mono = ParagraphStyle(
        "CellMono",
        parent=styles["Normal"],
        fontName="Courier",
        fontSize=7,
        leading=9,
        alignment=TA_LEFT,
    )
    header_cell = ParagraphStyle(
        "HeaderCell",
        parent=styles["Normal"],
        fontSize=9,
        fontName="Helvetica-Bold",
        textColor=colors.white,
        alignment=TA_CENTER,
    )
    note_style = ParagraphStyle(
        "Note",
        parent=styles["Normal"],
        fontSize=8,
        textColor=colors.HexColor("#2d3748"),
        spaceBefore=8,
        leading=11,
    )

    story = []
    story.append(Paragraph("Java String Functions — Cheat Sheet", title_style))
    story.append(
        Paragraph(
            "Common <b>java.lang.String</b> methods with signatures, short descriptions, examples, and results. "
            "Strings are immutable: methods return a new String unless noted.",
            subtitle_style,
        )
    )

    header = [
        Paragraph("Method", header_cell),
        Paragraph("Description", header_cell),
        Paragraph("Example", header_cell),
        Paragraph("Result", header_cell),
    ]

    data = [header]
    for method, desc, example, result in METHODS:
        data.append(
            [
                Paragraph(method.replace("<", "&lt;").replace(">", "&gt;"), cell_mono),
                Paragraph(desc.replace("<", "&lt;").replace(">", "&gt;"), cell),
                Paragraph(example.replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>"), cell_mono),
                Paragraph(result.replace("<", "&lt;").replace(">", "&gt;"), cell_mono),
            ]
        )

    col_widths = [2.55 * inch, 3.1 * inch, 3.0 * inch, 1.35 * inch]
    table = Table(data, colWidths=col_widths, repeatRows=1)

    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1a365d")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("ALIGN", (0, 0), (-1, 0), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#cbd5e0")),
        ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#1a365d")),
    ]
    for i in range(1, len(data)):
        bg = colors.HexColor("#edf2f7") if i % 2 == 0 else colors.white
        style_cmds.append(("BACKGROUND", (0, i), (-1, i), bg))

    table.setStyle(TableStyle(style_cmds))
    story.append(table)

    story.append(Spacer(1, 10))
    story.append(
        Paragraph(
            "<b>Notes:</b> "
            "(1) IndexOutOfBoundsException if index is invalid. "
            "(2) NullPointerException if a required argument is null (e.g. equalsIgnoreCase(null)). "
            "(3) Prefer <font face='Courier'>strip()</font> over <font face='Courier'>trim()</font> for Unicode whitespace. "
            "(4) Use <font face='Courier'>Objects.equals(a, b)</font> for null-safe equality. "
            "(5) For building many concatenations in a loop, use <font face='Courier'>StringBuilder</font>.",
            note_style,
        )
    )
    story.append(
        Paragraph(
            f"Total methods covered: <b>{len(METHODS)}</b> &nbsp;|&nbsp; "
            "Reference: Oracle Java SE String API (Java 11–21 features noted where relevant).",
            note_style,
        )
    )

    def add_page_number(canvas, doc_):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#718096"))
        page = canvas.getPageNumber()
        canvas.drawCentredString(
            landscape(letter)[0] / 2,
            0.25 * inch,
            f"Java String Functions Cheat Sheet  •  Page {page}",
        )
        canvas.restoreState()

    doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)
    print(f"Wrote: {path}")


if __name__ == "__main__":
    build_pdf(OUTPUT)
    build_pdf(OUTPUT_REPO)
