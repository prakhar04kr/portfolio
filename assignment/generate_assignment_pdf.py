#!/usr/bin/env python3
"""Generate Sathyabama University Malware Analysis Assignment PDF (SET 2) ~9 A4 pages."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, ListFlowable, ListItem, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

OUTPUT = os.environ.get(
    "ASSIGNMENT_PDF_OUT",
    "/opt/cursor/artifacts/Sathyabama_Malware_Analysis_Assignment_SET2.pdf",
)

PAGE_W, PAGE_H = A4
MARGIN = 0.75 * inch

NAVY = HexColor("#1a365d")
DARK = HexColor("#1a202c")
GRAY = HexColor("#4a5568")
LIGHT_BG = HexColor("#edf2f7")
ACCENT = HexColor("#2b6cb0")


def make_styles():
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name="UniTitle",
        fontName="Times-Bold",
        fontSize=16,
        leading=20,
        alignment=TA_CENTER,
        textColor=NAVY,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="UniSub",
        fontName="Times-Bold",
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=DARK,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="DocTitle",
        fontName="Times-Bold",
        fontSize=13,
        leading=16,
        alignment=TA_CENTER,
        textColor=NAVY,
        spaceBefore=8,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="Meta",
        fontName="Times-Roman",
        fontSize=10,
        leading=13,
        alignment=TA_LEFT,
        textColor=DARK,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="QHead",
        fontName="Times-Bold",
        fontSize=11,
        leading=14,
        alignment=TA_LEFT,
        textColor=NAVY,
        spaceBefore=10,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="QText",
        fontName="Times-Bold",
        fontSize=10.5,
        leading=14,
        alignment=TA_JUSTIFY,
        textColor=DARK,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="AnsLabel",
        fontName="Times-Bold",
        fontSize=10.5,
        leading=13,
        textColor=ACCENT,
        spaceBefore=2,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="BodyJust",
        fontName="Times-Roman",
        fontSize=11,
        leading=15.5,
        alignment=TA_JUSTIFY,
        textColor=DARK,
        spaceAfter=7,
        firstLineIndent=0,
    ))
    styles.add(ParagraphStyle(
        name="BodyIndent",
        fontName="Times-Roman",
        fontSize=11,
        leading=15.5,
        alignment=TA_JUSTIFY,
        textColor=DARK,
        spaceAfter=5,
        leftIndent=12,
    ))
    styles.add(ParagraphStyle(
        name="SubHead",
        fontName="Times-Bold",
        fontSize=11,
        leading=14,
        textColor=DARK,
        spaceBefore=10,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="BulletBody",
        fontName="Times-Roman",
        fontSize=11,
        leading=15,
        alignment=TA_JUSTIFY,
        textColor=DARK,
        leftIndent=18,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="Footer",
        fontName="Times-Roman",
        fontSize=8,
        textColor=GRAY,
        alignment=TA_CENTER,
    ))
    styles.add(ParagraphStyle(
        name="Marks",
        fontName="Times-Italic",
        fontSize=9,
        leading=11,
        textColor=GRAY,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="Conclusion",
        fontName="Times-Italic",
        fontSize=10.5,
        leading=14,
        alignment=TA_JUSTIFY,
        textColor=DARK,
        spaceBefore=4,
        spaceAfter=6,
    ))
    return styles


def add_page_number(canvas, doc):
    canvas.saveState()
    page_num = canvas.getPageNumber()
    text = (
        f"Page {page_num}  |  Malware Analysis — Assignment SET 2  |  "
        "Sathyabama Institute of Science and Technology"
    )
    canvas.setFont("Times-Roman", 8)
    canvas.setFillColor(GRAY)
    canvas.drawCentredString(PAGE_W / 2, 0.45 * inch, text)
    canvas.setStrokeColor(NAVY)
    canvas.setLineWidth(0.6)
    canvas.line(MARGIN, 0.65 * inch, PAGE_W - MARGIN, 0.65 * inch)
    canvas.restoreState()


def bullet(text, styles):
    return Paragraph(f"•  {text}", styles["BulletBody"])


def build():
    styles = make_styles()
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=0.65 * inch,
        bottomMargin=0.85 * inch,
        title="Malware Analysis Assignment SET 2 — Sathyabama",
        author="BE CSE IV Year Student",
    )

    story = []

    # ========== COVER / HEADER ==========
    story.append(Paragraph(
        "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        styles["UniTitle"],
    ))
    story.append(Paragraph(
        "(Deemed to be University)",
        styles["UniSub"],
    ))
    story.append(Paragraph(
        "School of Computing — Department of Computer Science and Engineering",
        styles["UniSub"],
    ))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.5, color=NAVY, spaceAfter=4))
    story.append(Paragraph("ASSIGNMENT — SET 2", styles["DocTitle"]))
    story.append(Paragraph(
        "Course: Malware Analysis &amp; Reverse Engineering / Cyber Security Elective",
        styles["DocTitle"],
    ))
    story.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=10))

    meta_data = [
        [Paragraph("<b>Programme:</b> B.E. Computer Science and Engineering", styles["Meta"]),
         Paragraph("<b>Year / Semester:</b> IV Year", styles["Meta"])],
        [Paragraph("<b>Student Name:</b> _______________________________", styles["Meta"]),
         Paragraph("<b>Register No.:</b> ___________________", styles["Meta"])],
        [Paragraph("<b>Course Outcomes Covered:</b> CO1 – CO6", styles["Meta"]),
         Paragraph("<b>Total Marks:</b> 20 (2+2+2+2+6+6)", styles["Meta"])],
        [Paragraph("<b>SDGs Addressed:</b> SDG 3, SDG 4, SDG 9, SDG 16", styles["Meta"]),
         Paragraph("<b>Bloom’s Levels:</b> BTL1, BTL5, BTL6", styles["Meta"])],
    ]
    meta_table = Table(meta_data, colWidths=[3.6 * inch, 3.2 * inch])
    meta_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BG),
        ("BOX", (0, 0), (-1, -1), 0.8, NAVY),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, HexColor("#cbd5e0")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 12))

    # ========== QUESTION 1 ==========
    story.append(Paragraph(
        "QUESTION 1  |  CO1  |  BTL1  |  SDG 9  |  [2 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "An organization delays installing operating system security updates. "
        "What security issue can this create?",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))
    story.append(Paragraph(
        "Delaying or postponing operating system security updates creates a serious vulnerability "
        "exposure window. Security patches are released by vendors (Microsoft, Apple, Linux "
        "distributions, etc.) specifically to fix known flaws that attackers already understand. "
        "When an organization does not install these updates promptly, systems remain open to "
        "exploitation of publicly documented weaknesses.",
        styles["BodyJust"],
    ))
    story.append(Paragraph("Primary security issue: Unpatched / known vulnerabilities", styles["SubHead"]))
    story.append(Paragraph(
        "The core problem is that unpatched systems become easy targets for malware, ransomware, "
        "remote code execution exploits, privilege escalation, and wormable attacks. Attackers "
        "regularly scan the internet for machines missing critical patches. Famous historical "
        "examples include WannaCry and NotPetya, which spread widely by exploiting unpatched "
        "SMBv1 vulnerabilities (EternalBlue) long after fixes were available.",
        styles["BodyJust"],
    ))
    story.append(Paragraph("Related risks that follow from delayed patching:", styles["SubHead"]))
    story.append(bullet(
        "<b>Increased attack surface:</b> Every delayed patch leaves a known door open for "
        "intrusion, phishing payloads, and drive-by downloads.",
        styles,
    ))
    story.append(bullet(
        "<b>Compliance and regulatory failure:</b> Standards such as ISO 27001, PCI-DSS, and "
        "sector guidelines expect timely patch management; delays can lead to audit failures.",
        styles,
    ))
    story.append(bullet(
        "<b>Lateral movement inside the network:</b> Once one unpatched host is compromised, "
        "malware can pivot to other machines that share the same missing updates.",
        styles,
    ))
    story.append(bullet(
        "<b>Data breach and service disruption:</b> Successful exploitation may result in theft "
        "of confidential data, encryption of files (ransomware), or downtime of critical services.",
        styles,
    ))
    story.append(Paragraph(
        "In summary, delaying OS security updates creates a preventable security gap: systems "
        "remain vulnerable to known exploits, raising the probability of malware infection, "
        "data loss, and large-scale compromise. Regular, tested patch management aligned with "
        "SDG 9 (resilient infrastructure) is essential for organizational cyber resilience.",
        styles["Conclusion"],
    ))
    story.append(Paragraph(
        "Recommended organisational practice: maintain an inventory of assets, classify patches "
        "by severity (critical/important), test updates in a staging environment, then deploy "
        "within a defined SLA (for example, 48–72 hours for critical internet-facing systems). "
        "Where immediate reboot is difficult, use compensating controls such as IDS/IPS "
        "signatures, virtual patching on WAFs, and network segmentation until the OS update "
        "is applied.",
        styles["BodyJust"],
    ))

    # ========== QUESTION 2 ==========
    story.append(Paragraph(
        "QUESTION 2  |  CO2  |  BTL6  |  SDG 16  |  [2 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "A malware analyst needs to inspect file hashes, running processes, registry changes, "
        "and network traffic. Discuss why a malware analysis toolkit is important.",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))
    story.append(Paragraph(
        "A malware analysis toolkit is a curated collection of static and dynamic analysis "
        "utilities that helps an analyst systematically examine suspicious software. When the "
        "task includes inspecting file hashes, running processes, registry changes, and network "
        "traffic, a toolkit is important for the following reasons:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "<b>Complete visibility across artefacts:</b> No single tool covers every indicator. "
        "Hashing utilities (MD5/SHA-256) identify known samples; process monitors reveal "
        "injected or hidden processes; registry watchers detect persistence; packet analyzers "
        "expose C2 (command-and-control) communication. A toolkit brings these views together.",
        styles,
    ))
    story.append(bullet(
        "<b>Speed and repeatability:</b> Standard tools (PEview, Detect It Easy, Process Monitor, "
        "Process Explorer, Regshot, Wireshark, FakeNet, IDA/Ghidra, x64dbg, Cuckoo/sandbox) "
        "allow consistent workflows so findings can be reproduced and documented for incident "
        "response and law-enforcement reporting (supporting SDG 16 — strong institutions).",
        styles,
    ))
    story.append(bullet(
        "<b>Safe isolation:</b> Toolkit components are typically used inside VMs or sandboxes, "
        "so analysts can observe behaviour without infecting production systems.",
        styles,
    ))
    story.append(bullet(
        "<b>Correlation of evidence:</b> Hash matches, process trees, registry keys, and network "
        "IOCs can be correlated to classify the malware family, map kill-chain stages, and "
        "recommend blocking rules for firewalls and EDR products.",
        styles,
    ))
    story.append(Paragraph(
        "Therefore, a malware analysis toolkit is indispensable because it enables structured, "
        "multi-layer inspection of hashes, processes, registry, and traffic—turning raw "
        "observations into actionable intelligence for detection, containment, and prosecution "
        "support.",
        styles["Conclusion"],
    ))

    # ========== QUESTION 3 ==========
    story.append(Paragraph(
        "QUESTION 3  |  CO3  |  BTL6  |  SDG 4  |  [2 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "While debugging a C program, you notice that local variables are accessed using "
        "offsets from the stack pointer. Discuss why offsets are used.",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))
    story.append(Paragraph(
        "In compiled C programs, local (automatic) variables, function parameters, saved "
        "registers, and return addresses live in a per-function region of memory called a "
        "<b>stack frame</b>. The CPU maintains a stack pointer register (ESP/RSP on x86/x64, "
        "or SP on ARM) that always points to the current top of the stack. Compilers access "
        "locals using <b>constant offsets from this pointer</b> (or from a frame pointer such "
        "as EBP/RBP) for several fundamental reasons:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "<b>Relative addressing is efficient:</b> Absolute addresses of locals are not known at "
        "compile time because the stack grows and shrinks at runtime as functions call and "
        "return. Offsets from SP/BP give a fixed, cheap way to locate each variable within "
        "the current frame (e.g., <font face='Courier'>[rbp-0x8]</font> for an integer).",
        styles,
    ))
    story.append(bullet(
        "<b>Frame layout is deterministic:</b> The compiler allocates space for each local at "
        "a known displacement when the function prologue runs (<font face='Courier'>sub rsp, N</font>). "
        "Using offsets keeps load/store instructions compact and predictable.",
        styles,
    ))
    story.append(bullet(
        "<b>Supports recursion and concurrency:</b> Each invocation has its own stack frame. "
        "Offsets relative to that frame’s pointer ensure that recursive or multi-threaded "
        "calls do not overwrite one another’s locals.",
        styles,
    ))
    story.append(bullet(
        "<b>Debugging and reverse engineering insight:</b> Analysts reading disassembly "
        "recognize patterns such as <font face='Courier'>mov eax, [rbp-4]</font> as local "
        "variable access—critical when reversing malware written in C/C++.",
        styles,
    ))
    story.append(Paragraph(
        "Hence, offsets from the stack (or frame) pointer are used because locals have no "
        "fixed absolute address; the offset model is compact, correct across nested calls, "
        "and central to understanding how high-level C maps to machine code during debugging "
        "and malware reverse engineering (aligned with SDG 4 — quality technical education).",
        styles["Conclusion"],
    ))

    # ========== QUESTION 4 ==========
    story.append(Paragraph(
        "QUESTION 4  |  CO4  |  BTL5  |  SDG 16  |  [2 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "A suspicious calculator application crashes while executing malicious code. "
        "Choose which debugging mode is appropriate?",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))
    story.append(Paragraph(
        "The appropriate debugging mode in this scenario is <b>post-mortem debugging</b> "
        "(also called <b>crash dump / dump analysis</b> mode), often combined with "
        "<b>user-mode debugging</b> when the process can still be attached. Because the "
        "suspicious calculator crashes while malicious code is running, a live interactive "
        "session may be lost at the moment of failure; post-mortem analysis recovers the "
        "state at crash time.",
        styles["BodyJust"],
    ))
    story.append(Paragraph("Why post-mortem / crash-dump debugging is appropriate:", styles["SubHead"]))
    story.append(bullet(
        "When malware triggers an access violation, heap corruption, or intentional crash "
        "(anti-analysis), the OS can generate a minidump or full memory dump. Tools such as "
        "WinDbg, OllyDbg/x64dbg (with exception handling), or Volatility on a memory image "
        "let the analyst inspect registers, call stack, loaded modules, and the faulting "
        "instruction after the crash.",
        styles,
    ))
    story.append(bullet(
        "If the sample is still running but unstable, <b>user-mode debugging</b> (attaching "
        "x64dbg/OllyDbg to the calculator process) with first-chance exception breakpoints "
        "is also suitable to catch the fault before termination.",
        styles,
    ))
    story.append(bullet(
        "<b>Kernel-mode debugging</b> is generally unnecessary for a user-space calculator "
        "unless a malicious driver is involved.",
        styles,
    ))
    story.append(Paragraph("Comparative note:", styles["SubHead"]))
    story.append(Paragraph(
        "Live (interactive) debugging is preferred when the program stays alive; post-mortem "
        "debugging is preferred when it terminates abruptly. For a crashing malicious "
        "calculator, start with exception breakpoints in a user-mode debugger inside a VM; "
        "if the process dies instantly, collect and analyse a crash dump. This approach "
        "supports reliable evidence collection for security investigations (SDG 16).",
        styles["Conclusion"],
    ))

    # ========== QUESTION 5 ==========
    story.append(Paragraph(
        "QUESTION 5  |  CO5  |  BTL6  |  SDG 9  |  [6 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "A newly discovered malware sample exhibits no suspicious behaviour during initial "
        "execution but activates only after specific user actions. Design a dynamic analysis "
        "environment using sandboxes, packet analyzers, debuggers, and monitoring tools to "
        "uncover the malware’s behaviour. Justify your design choices.",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))

    story.append(Paragraph("5.1 Problem understanding", styles["SubHead"]))
    story.append(Paragraph(
        "The sample is likely <b>user-action triggered</b>, <b>environment-aware</b>, or "
        "<b>sandbox-evasive</b>. It may wait for clicks, document opens, delayed timers, "
        "presence of user files, or mouse movement before decrypting its payload. A naïve "
        "“run for 30 seconds in a sandbox” will miss the behaviour. The lab must therefore "
        "combine automated dynamic analysis with interactive stimulation and deep monitoring.",
        styles["BodyJust"],
    ))

    story.append(Paragraph("5.2 High-level architecture of the analysis environment", styles["SubHead"]))
    story.append(Paragraph(
        "The proposed environment is an <b>isolated, multi-VM dynamic analysis lab</b> with "
        "the following layers:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "<b>Host / hypervisor:</b> Type-2 hypervisor (VMware Workstation or VirtualBox) on a "
        "dedicated analysis machine with host-only / custom NAT networking; snapshots before "
        "every run; no shared folders to production data.",
        styles,
    ))
    story.append(bullet(
        "<b>Guest analysis VMs:</b> Windows 10/11 and optionally Windows 7 x86/x64 with "
        "common user applications (Office, browsers, PDF readers), realistic user profile "
        "data, and disabled unnecessary cloud sync—so the malware “believes” it is on a "
        "real workstation.",
        styles,
    ))
    story.append(bullet(
        "<b>Network simulation VM:</b> Separate Linux VM running INetSim / FakeNet-NG / "
        "Remnux services to fake DNS, HTTP(S), SMTP, and C2 endpoints without allowing "
        "real internet egress (or controlled proxy egress with full logging).",
        styles,
    ))
    story.append(bullet(
        "<b>Optional automated sandbox:</b> Cuckoo Sandbox or CAPE Sandbox for baseline "
        "behaviour reports, extended with custom simulation scripts for mouse/keyboard events.",
        styles,
    ))

    story.append(Paragraph("5.3 Tool stack and roles", styles["SubHead"]))
    story.append(Paragraph(
        "<b>(A) Sandboxes — initial behavioural triage</b><br/>"
        "Use Cuckoo/CAPE or a commercial sandbox to obtain process trees, dropped files, "
        "mutexes, and API traces. Because the malware may be idle at first, configure "
        "<b>extended analysis time</b> (several minutes), <b>human interaction modules</b> "
        "(simulated clicks, typing, opening documents), and multiple OS profiles. Justification: "
        "sandboxes scale well for first-pass IOC extraction and family tagging.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>(B) System monitoring tools — detect dormant-then-active changes</b><br/>"
        "• Process Monitor (Procmon) with boot/advanced filters for process, file, registry, "
        "and network events.<br/>"
        "• Process Explorer / Process Hacker for live process trees, handles, and DLLs.<br/>"
        "• Regshot or Autoruns for before/after persistence comparison.<br/>"
        "• Sysmon (with a tuned config) for durable event logs of process creation and "
        "network connects.<br/>"
        "Justification: user-triggered malware often writes Run keys, scheduled tasks, or "
        "injects into explorer.exe only after interaction; continuous monitors catch the "
        "moment of activation.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>(C) Packet analyzers — uncover delayed C2</b><br/>"
        "• Wireshark or tcpdump on the virtual switch / host-only adapter.<br/>"
        "• FakeNet-NG or INetSim to answer DNS/HTTP so the malware proceeds past network checks.<br/>"
        "• Optional mitmproxy for TLS inspection with installed lab CA (when ethically and "
        "legally appropriate inside the isolated lab).<br/>"
        "Justification: dormant samples may beacon only after a trigger; capturing DNS queries, "
        "HTTP POSTs, and unusual ports reveals C2 domains and exfiltration patterns.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>(D) Debuggers — force and understand the trigger path</b><br/>"
        "• x64dbg / OllyDbg for user-mode stepping; set breakpoints on "
        "<font face='Courier'>GetAsyncKeyState</font>, <font face='Courier'>GetCursorPos</font>, "
        "<font face='Courier'>NtDelayExecution</font>, <font face='Courier'>CreateFile</font>, "
        "window-message handlers, and anti-VM checks.<br/>"
        "• IDA Pro / Ghidra for static mapping of trigger conditions before dynamic runs.<br/>"
        "• API Monitor to log high-level API sequences during interaction.<br/>"
        "Justification: when sandboxes show “nothing happened,” a debugger finds sleep loops, "
        "sandbox checks, and the exact user action that decrypts the payload.",
        styles["BodyJust"],
    ))

    story.append(Paragraph("5.4 Analysis workflow (step-by-step)", styles["SubHead"]))
    story.append(bullet(
        "<b>Step 1 — Safe intake:</b> Compute SHA-256 hash; submit hash to VirusTotal/MalwareBazaar "
        "for reputation (without uploading if policy forbids); store sample encrypted.",
        styles,
    ))
    story.append(bullet(
        "<b>Step 2 — Static preview:</b> PE headers, imports, strings, packer detection (DIE, "
        "PEiD), and disassembly of likely trigger functions.",
        styles,
    ))
    story.append(bullet(
        "<b>Step 3 — Baseline snapshot:</b> Clean VM snapshot; start Procmon, Wireshark, Sysmon, "
        "and FakeNet before execution.",
        styles,
    ))
    story.append(bullet(
        "<b>Step 4 — Passive run:</b> Execute sample with no interaction for a short window to "
        "confirm dormancy and record any anti-analysis checks.",
        styles,
    ))
    story.append(bullet(
        "<b>Step 5 — Stimulated run:</b> Perform realistic user actions—open calculator UI "
        "buttons, type text, open Office/PDF files, browse dummy intranet pages, idle with "
        "mouse movement, wait beyond common sleep thresholds (e.g., &gt;5–10 minutes).",
        styles,
    ))
    story.append(bullet(
        "<b>Step 6 — Debugger-assisted trigger:</b> If still quiet, attach debugger, patch or "
        "skip anti-VM/sleep, and force execution of suspicious branches; note decrypted "
        "strings and injected code.",
        styles,
    ))
    story.append(bullet(
        "<b>Step 7 — Correlate &amp; report:</b> Merge process, registry, file, and network "
        "timelines; extract IOCs (hashes, domains, mutexes, persistence keys); restore VM "
        "snapshot.",
        styles,
    ))

    story.append(Paragraph("5.5 Expected behavioural indicators after trigger", styles["SubHead"]))
    story.append(Paragraph(
        "Once the malware activates due to a specific user action, the monitoring stack should "
        "be ready to capture typical post-trigger artefacts. These indicators help confirm that "
        "the dormant phase has ended and that the payload is executing:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "<b>Process artefacts:</b> child processes spawned from the calculator (cmd.exe, "
        "powershell.exe, rundll32.exe, mshta.exe), process hollowing, or injection into "
        "trusted processes such as explorer.exe or svchost.exe.",
        styles,
    ))
    story.append(bullet(
        "<b>File system artefacts:</b> dropped DLLs/EXEs in %AppData%, %Temp%, or "
        "ProgramData; modification of existing binaries; creation of batch/VBS scripts.",
        styles,
    ))
    story.append(bullet(
        "<b>Registry / persistence:</b> Run / RunOnce keys, Winlogon Shell/Userinit changes, "
        "scheduled tasks, services, or COM hijacking entries appearing only after interaction.",
        styles,
    ))
    story.append(bullet(
        "<b>Network artefacts:</b> sudden DNS lookups for newly registered domains, HTTPS "
        "beacons with unusual JA3 fingerprints, raw TCP to high ports, or ICMP tunnelling.",
        styles,
    ))
    story.append(bullet(
        "<b>Anti-analysis remnants:</b> checks for VMware/VirtualBox MAC prefixes, CPUID "
        "hypervisor bits, short uptime, or missing recent documents—explaining why the "
        "first idle run looked benign.",
        styles,
    ))

    story.append(Paragraph("5.6 Safety, ethics, and lab hygiene", styles["SubHead"]))
    story.append(Paragraph(
        "Dynamic analysis of live malware must never be performed on production networks. "
        "Snapshots must be restored after every experiment; samples must be password-zipped "
        "during storage and transfer; and outbound internet should be blocked or tightly "
        "proxied. Screenshots, Procmon PML files, PCAP captures, and debugger notes form "
        "the evidence pack for the assignment report and for any institutional SOC hand-off.",
        styles["BodyJust"],
    ))

    story.append(Paragraph("5.7 Justification summary", styles["SubHead"]))
    story.append(Paragraph(
        "Sandboxes alone fail against interaction-aware malware; monitors alone lack "
        "deep code insight; packet captures alone miss host-only changes; debuggers alone "
        "do not scale. Combining all four creates a resilient dynamic analysis environment "
        "that (1) isolates risk, (2) simulates a believable user workstation, (3) records "
        "host and network side effects around the trigger moment, and (4) allows forced "
        "exploration of hidden paths. This design strengthens digital infrastructure "
        "defence capability (SDG 9) and yields reproducible engineering evidence for "
        "complex malware cases (HOTS / complex problem solving).",
        styles["Conclusion"],
    ))

    # ========== QUESTION 6 ==========
    story.append(Paragraph(
        "QUESTION 6  |  CO6  |  BTL6  |  SDG 3 &amp; SDG 9  |  [6 Marks]",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "A smart healthcare system stores patient records across multiple cloud platforms. "
        "Design an intelligent malware detection framework combining machine learning, "
        "signature-based detection, and behaviour-based analysis. Evaluate its effectiveness "
        "against polymorphic and metamorphic malware.",
        styles["QText"],
    ))
    story.append(Paragraph("Answer:", styles["AnsLabel"]))

    story.append(Paragraph("6.1 Context and security requirements", styles["SubHead"]))
    story.append(Paragraph(
        "A smart healthcare system handling Electronic Health Records (EHRs) across multi-cloud "
        "platforms (e.g., hospital private cloud + AWS/Azure + telemedicine SaaS) must protect "
        "confidentiality, integrity, and availability of highly sensitive patient data. Malware "
        "risks include ransomware encrypting clinical databases, info-stealers exfiltrating PHI "
        "(Protected Health Information), trojans on medical IoT gateways, and supply-chain "
        "compromises of cloud-connected apps. Detection must work across endpoints (clinician "
        "workstations), servers, containers, and cloud workloads while respecting low false "
        "positives—because blocking a legitimate clinical application can endanger care (SDG 3).",
        styles["BodyJust"],
    ))

    story.append(Paragraph("6.2 Framework architecture (hybrid intelligent detection)", styles["SubHead"]))
    story.append(Paragraph(
        "The proposed framework is a <b>layered, defence-in-depth pipeline</b> that fuses "
        "signature, behaviour, and machine-learning detectors behind a central correlation "
        "and response engine.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>Layer 1 — Data collection agents</b><br/>"
        "Lightweight sensors on endpoints, VMs, and cloud workloads collect: file hashes and "
        "PE metadata; process creation trees; registry/persistence events; DNS/HTTP telemetry; "
        "API call sequences; container syscalls (e.g., via Falco); cloud audit logs "
        "(CloudTrail / Azure Activity Log). Telemetry is shipped to a secure SIEM / data lake "
        "with encryption in transit and at rest.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>Layer 2 — Signature-based detection (fast known-threat filter)</b><br/>"
        "Traditional AV / YARA / ClamAV / cloud malware feeds match known hashes, byte "
        "patterns, and packer stubs. EDR blocklists and threat-intelligence IOCs (domains, "
        "IPs, certificates) are applied at email gateways, web proxies, and cloud CASB "
        "controls. <i>Role:</i> near-zero-latency blocking of commodity malware and known "
        "ransomware families before they touch EHR stores.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>Layer 3 — Behaviour-based analysis (dynamic &amp; heuristic)</b><br/>"
        "Sandbox detonation of unknown attachments/binaries; behavioural rules for "
        "ransomware-like mass file rename/encryption, credential dumping "
        "(LSASS access), unusual PowerShell / WMI, lateral movement via SMB/RDP, and "
        "abnormal database bulk exports. Cloud behaviour rules flag sudden mass object "
        "downloads from FHIR/EHR buckets or privilege escalation in IAM roles. "
        "<i>Role:</i> catch novel samples whose bytes are unknown but whose actions are malicious.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>Layer 4 — Machine learning detection (adaptive intelligence)</b><br/>"
        "• <b>Static ML:</b> gradient boosting / neural models on PE features (entropy, "
        "section sizes, import hashes, opcode n-grams) to score unknown binaries.<br/>"
        "• <b>Dynamic ML:</b> sequence models (LSTM/Transformer) or graph ML on process–file–"
        "network event graphs.<br/>"
        "• <b>Anomaly detection:</b> unsupervised models (autoencoders, Isolation Forest) on "
        "user and service baselines—e.g., a radiology workstation suddenly beaconing to a "
        "rare domain at 3 a.m.<br/>"
        "• <b>NLP on scripts:</b> classify obfuscated PowerShell/JS often used in healthcare "
        "phishing.<br/>"
        "Models are trained on labelled malware corpora plus healthcare-specific benign "
        "software (PACS viewers, LIS clients) to reduce false positives. Continuous "
        "retraining with analyst feedback (human-in-the-loop) is mandatory.",
        styles["BodyJust"],
    ))
    story.append(Paragraph(
        "<b>Layer 5 — Correlation, scoring, and automated response</b><br/>"
        "A SOAR/XDR brain aggregates alerts with weighted risk scores. High-confidence "
        "detections auto-isolate the host, revoke cloud tokens, snapshot affected volumes, "
        "and open tickets for the SOC. Medium-confidence items queue for analyst review. "
        "Immutable backups and network micro-segmentation limit blast radius across clouds.",
        styles["BodyJust"],
    ))

    story.append(Paragraph("6.3 Multi-cloud healthcare deployment considerations", styles["SubHead"]))
    story.append(bullet(
        "Unified agent policy across on-prem and cloud VMs; container image scanning in CI/CD "
        "before deployment to Kubernetes clusters hosting FHIR APIs.",
        styles,
    ))
    story.append(bullet(
        "Privacy-preserving telemetry: minimise PHI in logs; tokenize identifiers; comply with "
        "HIPAA/DISHA-equivalent local regulations and hospital ethics boards.",
        styles,
    ))
    story.append(bullet(
        "High availability: detection control plane must not become a single point of failure "
        "for clinical operations; fail-open vs fail-closed decisions are risk-assessed per tier.",
        styles,
    ))
    story.append(bullet(
        "Zero-trust access: MFA, least privilege, and continuous device posture checks for "
        "clinicians accessing multi-cloud records.",
        styles,
    ))

    story.append(Paragraph(
        "6.4 Evaluation against polymorphic and metamorphic malware",
        styles["SubHead"],
    ))
    story.append(Paragraph(
        "<b>Polymorphic malware</b> mutates its decryptor / appearance on each generation "
        "while keeping a similar encrypted payload body. Pure signature matching often fails "
        "because hash and byte signatures change. In the proposed framework:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "Signature layer remains useful for known decryptor stubs and shared C2 IOCs but is "
        "<b>insufficient alone</b>.",
        styles,
    ))
    story.append(bullet(
        "Behaviour layer remains strong: encryption behaviour, process injection, and C2 "
        "patterns are largely stable across polymorphic variants.",
        styles,
    ))
    story.append(bullet(
        "ML static features (opcode histograms, import graphs) and dynamic sequence models "
        "generalise across cosmetic mutations—<b>effectiveness: high</b> when models are "
        "retrained on fresh variants.",
        styles,
    ))
    story.append(Paragraph(
        "<b>Metamorphic malware</b> rewrites its own code (permutation, junk insertion, "
        "register renaming, control-flow flattening) so that successive copies are "
        "functionally similar but structurally dissimilar. This is harder:",
        styles["BodyJust"],
    ))
    story.append(bullet(
        "Classic signatures and simple static ML features degrade significantly.",
        styles,
    ))
    story.append(bullet(
        "Behaviour-based analysis and dynamic ML on API/system-call graphs retain the best "
        "signal because semantics of malicious goals (ransom, steal, lateral move) persist.",
        styles,
    ))
    story.append(bullet(
        "Graph-based ML, sandbox detonation, and memory analysis (detecting unpacked "
        "payloads in RAM) are critical; effectiveness is <b>moderate to high</b> with "
        "layered controls, but not perfect—advanced metamorphic threats may still require "
        "skilled reverse engineering.",
        styles,
    ))

    story.append(Paragraph("6.5 Overall effectiveness assessment", styles["SubHead"]))
    comparison = [
        [Paragraph("<b>Technique</b>", styles["Meta"]),
         Paragraph("<b>Known malware</b>", styles["Meta"]),
         Paragraph("<b>Polymorphic</b>", styles["Meta"]),
         Paragraph("<b>Metamorphic</b>", styles["Meta"])],
        [Paragraph("Signatures / YARA / hash", styles["Meta"]),
         Paragraph("Excellent", styles["Meta"]),
         Paragraph("Weak–Fair", styles["Meta"]),
         Paragraph("Poor", styles["Meta"])],
        [Paragraph("Behaviour / sandbox / heuristics", styles["Meta"]),
         Paragraph("Good", styles["Meta"]),
         Paragraph("Good–Excellent", styles["Meta"]),
         Paragraph("Good", styles["Meta"])],
        [Paragraph("Machine learning (static+dynamic)", styles["Meta"]),
         Paragraph("Excellent", styles["Meta"]),
         Paragraph("Good–Excellent", styles["Meta"]),
         Paragraph("Fair–Good", styles["Meta"])],
        [Paragraph("Hybrid framework (proposed)", styles["Meta"]),
         Paragraph("Excellent", styles["Meta"]),
         Paragraph("Excellent", styles["Meta"]),
         Paragraph("Good–Excellent*", styles["Meta"])],
    ]
    cmp_table = Table(comparison, colWidths=[2.1 * inch, 1.35 * inch, 1.35 * inch, 1.4 * inch])
    cmp_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("BACKGROUND", (0, 1), (-1, -2), LIGHT_BG),
        ("BACKGROUND", (0, -1), (-1, -1), HexColor("#c6f6d5")),
        ("BOX", (0, 0), (-1, -1), 0.7, NAVY),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, HexColor("#a0aec0")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(cmp_table)
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "*With continuous model updates, memory analysis, and rapid SOC response.",
        styles["Marks"],
    ))
    story.append(Paragraph(
        "For a multi-cloud smart healthcare system, a hybrid framework that "
        "combines signature speed, behavioural semantics, and adaptive ML provides the "
        "strongest practical defence against polymorphic and metamorphic malware. Signatures "
        "stop the known; behaviour and ML stop the unknown and the shape-shifting. Coupled "
        "with zero-trust cloud controls and immutable backups, the design protects patient "
        "safety and data (SDG 3) while hardening resilient digital health infrastructure "
        "(SDG 9).",
        styles["Conclusion"],
    ))

    story.append(Paragraph("6.6 Illustrative detection scenario (ransomware on EHR node)", styles["SubHead"]))
    story.append(Paragraph(
        "Consider a clinician workstation that downloads a malicious “invoice” macro document. "
        "The signature engine may miss a brand-new polymorphic dropper. Behavioural rules "
        "detect Office spawning PowerShell with encoded commands; the ML model scores the "
        "script high for obfuscation; sandbox detonation shows mass file encryption patterns. "
        "The correlation engine isolates the host, blocks the C2 domain at the cloud DNS "
        "firewall, and verifies that immutable EHR backups in a second cloud region remain "
        "untouched. This end-to-end story shows why a single detection method is inadequate "
        "in healthcare settings.",
        styles["BodyJust"],
    ))

    story.append(Paragraph("6.7 Limitations and future improvements", styles["SubHead"]))
    story.append(bullet(
        "<b>Adversarial ML:</b> attackers may craft samples to evade classifiers; adversarial "
        "training and ensemble models are needed.",
        styles,
    ))
    story.append(bullet(
        "<b>Encrypted C2 / living-off-the-land:</b> behaviour rules must focus on intent "
        "(unusual access to medical databases) rather than only known malware binaries.",
        styles,
    ))
    story.append(bullet(
        "<b>Alert fatigue:</b> tuning thresholds with clinical workflow owners reduces "
        "false positives that distract SOC analysts.",
        styles,
    ))
    story.append(bullet(
        "<b>Future work:</b> federated learning across hospitals (without sharing raw PHI), "
        "memory-only detection for fileless threats, and tighter integration with medical "
        "device (IoMT) anomaly monitoring.",
        styles,
    ))

    story.append(Paragraph(
        "Final evaluation: The hybrid intelligent framework is <b>highly effective</b> against "
        "polymorphic malware and <b>substantially effective</b> against metamorphic malware "
        "when behaviour and dynamic ML layers are prioritised. It meets the engineering need "
        "to protect multi-cloud patient records without relying on any single detection theory.",
        styles["Conclusion"],
    ))

    # ========== CO–SDG MAPPING ==========
    story.append(Paragraph(
        "COURSE OUTCOME &amp; SDG MAPPING SUMMARY",
        styles["QHead"],
    ))
    story.append(Paragraph(
        "The following table summarises how each answer addresses the stated course outcomes, "
        "Bloom’s taxonomy levels, and Sustainable Development Goals for this SET 2 assignment.",
        styles["BodyJust"],
    ))
    mapping = [
        [Paragraph("<b>Q</b>", styles["Meta"]),
         Paragraph("<b>CO</b>", styles["Meta"]),
         Paragraph("<b>BTL</b>", styles["Meta"]),
         Paragraph("<b>SDG</b>", styles["Meta"]),
         Paragraph("<b>Key learning demonstrated</b>", styles["Meta"])],
        [Paragraph("1", styles["Meta"]), Paragraph("CO1", styles["Meta"]),
         Paragraph("BTL1", styles["Meta"]), Paragraph("9", styles["Meta"]),
         Paragraph("Identify risk from delayed OS patching / unpatched vulnerabilities", styles["Meta"])],
        [Paragraph("2", styles["Meta"]), Paragraph("CO2", styles["Meta"]),
         Paragraph("BTL6", styles["Meta"]), Paragraph("16", styles["Meta"]),
         Paragraph("Justify importance of an integrated malware analysis toolkit", styles["Meta"])],
        [Paragraph("3", styles["Meta"]), Paragraph("CO3", styles["Meta"]),
         Paragraph("BTL6", styles["Meta"]), Paragraph("4", styles["Meta"]),
         Paragraph("Explain stack-pointer offsets for locals in C debugging", styles["Meta"])],
        [Paragraph("4", styles["Meta"]), Paragraph("CO4", styles["Meta"]),
         Paragraph("BTL5", styles["Meta"]), Paragraph("16", styles["Meta"]),
         Paragraph("Select post-mortem / user-mode debugging for crashing malware", styles["Meta"])],
        [Paragraph("5", styles["Meta"]), Paragraph("CO5", styles["Meta"]),
         Paragraph("BTL6", styles["Meta"]), Paragraph("9", styles["Meta"]),
         Paragraph("Design dynamic lab for user-action-triggered malware", styles["Meta"])],
        [Paragraph("6", styles["Meta"]), Paragraph("CO6", styles["Meta"]),
         Paragraph("BTL6", styles["Meta"]), Paragraph("3, 9", styles["Meta"]),
         Paragraph("Design hybrid ML+signature+behaviour detection for healthcare cloud", styles["Meta"])],
    ]
    map_t = Table(mapping, colWidths=[0.4*inch, 0.55*inch, 0.55*inch, 0.55*inch, 4.15*inch])
    map_t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("BACKGROUND", (0, 1), (-1, -1), LIGHT_BG),
        ("BOX", (0, 0), (-1, -1), 0.7, NAVY),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, HexColor("#a0aec0")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(map_t)
    story.append(Spacer(1, 10))

    # ========== REFERENCES ==========
    story.append(Paragraph("REFERENCES (Suggested)", styles["QHead"]))
    story.append(Paragraph(
        "1. Sikorski, M. &amp; Honig, A. — <i>Practical Malware Analysis</i>, No Starch Press.<br/>"
        "2. Monnappa, K. A. — <i>Learning Malware Analysis</i>, Packt Publishing.<br/>"
        "3. Eagle, C. &amp; Nance, K. — <i>The Ghidra Book</i>, No Starch Press.<br/>"
        "4. Microsoft Security — Windows debugging, Sysinternals Suite, and Microsoft Defender documentation.<br/>"
        "5. NIST SP 800-83 Rev. 1 — Guide to Malware Incident Prevention and Handling.<br/>"
        "6. NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide.<br/>"
        "7. ENISA — Cybersecurity guidelines for the health sector.<br/>"
        "8. WHO / national e-health security advisories on protecting patient data systems.<br/>"
        "9. MITRE ATT&amp;CK framework — adversary tactics and techniques for behaviour mapping.",
        styles["BodyJust"],
    ))
    story.append(Spacer(1, 10))

    # ========== KEY TAKEAWAYS ==========
    story.append(Paragraph("KEY TAKEAWAYS FOR MALWARE ANALYSIS PRACTICE", styles["QHead"]))
    story.append(bullet(
        "Keep systems patched—known vulnerabilities are the easiest entry path for malware.",
        styles,
    ))
    story.append(bullet(
        "Use a multi-tool toolkit so hash, process, registry, and network views can be correlated.",
        styles,
    ))
    story.append(bullet(
        "Understand stack frames and offsets—they are the language of low-level debugging and RE.",
        styles,
    ))
    story.append(bullet(
        "Match the debugging mode to the symptom: crashing malware often needs post-mortem dumps.",
        styles,
    ))
    story.append(bullet(
        "Dormant, user-triggered samples require stimulated dynamic analysis, not a short idle sandbox run.",
        styles,
    ))
    story.append(bullet(
        "Healthcare multi-cloud defence needs hybrid detection: signatures + behaviour + ML, with "
        "patient-safety-aware response.",
        styles,
    ))
    story.append(Spacer(1, 14))
    story.append(HRFlowable(width="100%", thickness=1, color=NAVY, spaceAfter=8))
    story.append(Paragraph(
        "Declaration: This assignment is submitted as part of the B.E. CSE (IV Year) curriculum at "
        "Sathyabama Institute of Science and Technology. The answers demonstrate understanding "
        "of malware analysis concepts mapped to CO1–CO6, Bloom’s taxonomy levels indicated in "
        "SET 2, and the relevant Sustainable Development Goals (SDG 3, 4, 9, and 16).",
        styles["BodyJust"],
    ))
    story.append(Spacer(1, 16))
    sign = [
        [Paragraph("<b>Student Signature:</b> ____________________", styles["Meta"]),
         Paragraph("<b>Date:</b> ____________________", styles["Meta"])],
        [Paragraph("<b>Faculty In-charge:</b> ____________________", styles["Meta"]),
         Paragraph("<b>Marks Awarded:</b> ______ / 20", styles["Meta"])],
    ]
    sign_t = Table(sign, colWidths=[3.6 * inch, 3.2 * inch])
    sign_t.setStyle(TableStyle([
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(sign_t)

    doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)

    # Verify page count using pypdf if available, else PyPDF2, else reportlab page count via canvas
    try:
        from pypdf import PdfReader
        reader = PdfReader(OUTPUT)
        pages = len(reader.pages)
    except Exception:
        try:
            from PyPDF2 import PdfReader
            reader = PdfReader(OUTPUT)
            pages = len(reader.pages)
        except Exception:
            pages = -1
    print(f"Wrote: {OUTPUT}")
    print(f"Pages: {pages}")
    return pages


if __name__ == "__main__":
    build()
