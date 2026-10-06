import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * The CV, as one document.
 *
 * The same HTML is the on-page preview and the PDF, so what a visitor reads
 * is exactly what they download. It is written for applicant tracking
 * systems first: one column, real text in reading order, standard section
 * names, no tables, icons or images. The look is type, spacing and one
 * quiet accent. European conventions: A4, en-dash date ranges, an
 * international phone number in Dutch grouping, reverse chronological.
 */
const PRINT_SCRIPT = `<script>
  window.onload = function () {
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () { window.print(); });
  };
</script>`;

const cvDocument = (print: boolean) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Tanya Sunny - Product Designer - CV</title>
  <!--
    One page, one column, real text. Applicant tracking systems read
    it top to bottom in the same order a person does: standard section
    names, no tables, icons, images or text in graphics. The look
    comes from type, spacing and one quiet accent colour, none of
    which a parser has to understand.
  -->
  <style>
    @page { size: A4; margin: 14mm 16mm 12mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root { --ink: #16181d; --muted: #5b616e; --rule: #d9dce1; --accent: #24527a; }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 9.2pt;
      line-height: 1.3;
      color: var(--ink);
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    a { color: inherit; text-decoration: none; }
    strong { font-weight: 600; }

    header { padding-bottom: 9px; border-bottom: 1.5px solid var(--ink); }
    h1 { font-size: 22pt; font-weight: 600; letter-spacing: -0.4px; line-height: 1.05; }
    .role { font-size: 11pt; color: var(--accent); margin-top: 3px; }
    .contact { font-size: 8.8pt; color: var(--muted); margin-top: 6px; }
    .contact .sep { color: var(--rule); margin: 0 6px; }

    section { margin-top: 11px; }
    h2 {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 6px;
    }
    h2::after { content: ""; flex: 1; height: 1px; background: var(--rule); }

    .summary { color: #2b2f37; }

    .job { margin-bottom: 7px; break-inside: avoid; }
    .job:last-child { margin-bottom: 0; }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .head .what { font-weight: 600; }
    .head .where { color: var(--muted); font-weight: 400; }
    .date { font-size: 8.6pt; color: var(--muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
    ul { margin: 2px 0 0 13px; }
    li { margin-bottom: 1px; padding-left: 2px; }
    li::marker { color: var(--accent); }

    .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 3px; }
    .row:last-child { margin-bottom: 0; }
    .note { color: var(--muted); }
    .skills p { margin-bottom: 2px; }
    .skills p:last-child { margin-bottom: 0; }
    .skills strong { color: var(--ink); }

    /* On screen the document is the preview on /cv: the page margins
       become padding, and narrow screens let the date rows wrap. */
    @media screen {
      body { padding: 14mm 16mm; }
    }
    @media screen and (max-width: 560px) {
      body { padding: 28px 20px; }
      .head, .row { flex-wrap: wrap; row-gap: 0; }
      .contact .sep { margin: 0 4px; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Tanya Sunny</h1>
    <p class="role">Product Designer</p>
    <p class="contact">
      Utrecht, Netherlands<span class="sep">|</span>+31 6 8512 2140<span class="sep">|</span>tanyameriamsunny@gmail.com<span class="sep">|</span><a href="https://www.linkedin.com/in/tanya-sunny/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tanya-sunny</a>
    </p>
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">
      Product Designer with 5+ years of design experience (working professionally since 2018), specialising
      in UX auditing, workflow and systems design, and interface design. Led the redesign of SalureConnect
      into the BrynQ integration platform. Experienced in AI-integrated workflows with Claude, from a design
      system in code to a continuous implementation loop with developers. Master's in UX with a
      specialisation in AI (2026); background in computer science.
    </p>
  </section>

  <section>
    <h2>Work Experience</h2>
    <div class="job">
      <div class="head"><span><span class="what">Product Designer</span> <span class="where">· BrynQ, Netherlands</span></span><span class="date">2023 – present</span></div>
      <ul>
        <li>Led the redesign of SalureConnect into the BrynQ platform, from research and information architecture to the shipped interface.</li>
        <li>Run UX audits across the platform and update designs based on the findings.</li>
        <li>Apply systems thinking across integration flows, data mappings and interface states.</li>
        <li>Integrated the design system into the codebase with Claude Code, closing the gap between design and build.</li>
        <li>Run a continuous implementation loop: iterations built with Claude Code, then taken to production by developers.</li>
        <li>Work with Product Owners and Product Managers to align design with product priorities.</li>
      </ul>
    </div>
    <div class="job">
      <div class="head"><span><span class="what">UI Designer (Contract)</span> <span class="where">· Multiple Startups, India</span></span><span class="date">2022 – 2023</span></div>
      <ul>
        <li>Designed user interfaces for early-stage web and mobile products for Amphisoft Ventures and Lymdata Labs, working from defined product requirements.</li>
        <li>Delivered consistent, usable visual designs through to development handoff.</li>
      </ul>
    </div>
    <div class="job">
      <div class="head"><span><span class="what">UI Designer</span> <span class="where">· Segments Cloud LLC, Dubai, UAE</span></span><span class="date">2021 – 2022</span></div>
      <ul>
        <li>Designed interfaces and page layouts for a Bitcoin mining and warehousing platform.</li>
        <li>Translated business requirements into structured, visually consistent interfaces.</li>
      </ul>
    </div>
    <div class="job">
      <div class="head"><span><span class="what">UX/UI Intern</span> <span class="where">· Curateus, Bangalore, India</span></span><span class="date">2021</span></div>
      <ul>
        <li>Designed wireframes, interactive prototypes and UI for a content curation product across web and mobile.</li>
        <li>Designed a browser extension for recommending articles without leaving the page, cutting the flow from seven steps to four.</li>
        <li>Worked with the Product Owner and three developers from early flows through to developer handoff.</li>
      </ul>
    </div>
    <div class="job">
      <div class="head"><span><span class="what">Technical Support Engineer</span> <span class="where">· SAP Ariba, Bangalore, India</span></span><span class="date">2018 – 2021</span></div>
      <ul>
        <li>Supported enterprise clients through system troubleshooting and incident resolution.</li>
        <li>Collaborated with engineering teams on workflow and system-level issues.</li>
        <li>Developed a deep understanding of enterprise software behaviour and user pain points.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="row"><span><strong>Master's in UX (Specialisation: AI)</strong> <span class="note">· Jindal School of Art &amp; Architecture · Distinction, first in cohort</span></span><span class="date">2025 – 2026</span></div>
    <div class="row"><span><strong>PGP in UX Design</strong> <span class="note">· IDC, Indian Institute of Technology Bombay</span></span><span class="date">2021 – 2022</span></div>
    <div class="row"><span><strong>B.Tech in Computer Science</strong> <span class="note">· University of Calicut</span></span><span class="date">2013 – 2017</span></div>
  </section>

  <section class="skills">
    <h2>Skills</h2>
    <p><strong>UX Design:</strong> UX Auditing, User Research, Workflow Design, Information Architecture, Usability Testing</p>
    <p><strong>UI Design:</strong> Interface Design, Visual Design, Interaction Design, Prototyping, Design Systems, Responsive Design</p>
    <p><strong>Methods:</strong> Systems Thinking, Problem Framing, Journey Mapping, Wireframing, Product Audit, AI-Integrated UX Workflows</p>
    <p><strong>Languages:</strong> English (Fluent), Dutch (Beginner)</p>
  </section>

  <section>
    <h2>Community</h2>
    <p><strong>Co-organiser, Design Reimagined Utrecht</strong> <span class="note">· a design community in the Netherlands hosting sessions and workshops on design practice</span></p>
  </section>

${print ? PRINT_SCRIPT : ''}
</body>
</html>
`;

/**
 * Sized to its content: the preview is an iframe so the document's own
 * styles stay sealed off from the site's, and it grows to the height of
 * what is inside it rather than scrolling inside the page.
 */
const usePreviewHeight = () => {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1123);

  const measure = useCallback(() => {
    const doc = frame.current?.contentDocument;
    if (doc) setHeight(doc.documentElement.scrollHeight);
  }, []);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  return { frame, height, measure };
};

const CV = () => {
  usePageMeta('CV', 'Curriculum vitae for Tanya Sunny, product designer based in the Netherlands.');
  const navigate = useNavigate();
  const { frame, height, measure } = usePreviewHeight();

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(cvDocument(true));
      printWindow.document.close();
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed left-0 right-0 top-0 z-50 bg-background/90 py-4 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Portfolio</span>
          </button>

          <Button onClick={handleDownloadPDF} variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* The sheet: A4 width at most, white, lifted off the dark page. */}
      <div className="px-4 pb-20 pt-24 md:px-6">
        <div className="mx-auto w-full max-w-[210mm] overflow-hidden rounded-sm bg-white shadow-2xl ring-1 ring-black/5">
          <iframe
            ref={frame}
            title="Tanya Sunny, CV"
            srcDoc={cvDocument(false)}
            onLoad={measure}
            className="block w-full border-0"
            style={{ height }}
          />
        </div>
        <p className="mx-auto mt-4 max-w-[210mm] text-center text-sm text-muted-foreground">
          One page, A4. Use Download PDF and choose Save as PDF.
        </p>
      </div>
    </main>
  );
};
export default CV;
