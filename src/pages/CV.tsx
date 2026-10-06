import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * The CV, as one document.
 *
 * The same HTML is the on-page preview and the PDF, so what a visitor reads
 * is exactly what they download. Two columns: experience on the left, and a
 * tinted side panel on the right for contact, skills, education and the
 * rest, so the page scans as blocks rather than one long run of text. It is
 * still real text with standard section names, and the main column comes
 * first in the source, so applicant tracking systems read experience before
 * the side panel. European conventions: A4, en-dash date ranges, an
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
  <style>
    @page { size: A4; margin: 0; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --ink: #16181d; --muted: #5b616e; --rule: #d9dce1;
      --accent: #24527a; --panel: #eef2f7; --panel-rule: #d3dbe5;
    }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 9.2pt;
      line-height: 1.35;
      color: var(--ink);
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    a { color: inherit; text-decoration: none; }
    strong { font-weight: 600; }
    ul { list-style: none; }

    /* The sheet: main column and a tinted side panel, full A4 height. */
    .sheet {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 64mm;
      width: 100%;
      min-height: 297mm;
    }
    main { padding: 15mm 10mm 12mm 15mm; }
    aside { background: var(--panel); padding: 15mm 9mm 12mm 9mm; }

    h1 { font-size: 24pt; font-weight: 700; letter-spacing: -0.5px; line-height: 1.05; color: var(--accent); }
    .role { font-size: 11.5pt; color: #2b2f37; margin-top: 4px; }
    .summary { color: #2b2f37; margin-top: 10px; }

    section { margin-top: 15px; }
    h2 {
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      color: var(--accent);
      padding-bottom: 4px;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--rule);
    }
    aside h2 { border-color: var(--panel-rule); }
    aside section:first-child { margin-top: 0; }

    /* Jobs: company on one line, role and dates under it. */
    .job { margin-bottom: 10px; break-inside: avoid; }
    .job:last-child { margin-bottom: 0; }
    .company { font-weight: 700; }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; color: #2b2f37; }
    .date { font-size: 8.6pt; color: var(--muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
    .job ul { margin-top: 3px; }
    .job li { position: relative; padding-left: 11px; margin-bottom: 2px; }
    .job li::before { content: ""; position: absolute; left: 1px; top: 0.55em; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }

    /* Side panel. */
    aside { font-size: 8.8pt; }
    aside li { margin-bottom: 3px; }
    .group + .group { margin-top: 8px; }
    .group-label { font-style: italic; color: var(--muted); margin-bottom: 3px; }
    .entry + .entry { margin-top: 8px; }
    .entry .title { font-weight: 600; }
    .entry .meta { color: var(--muted); }

    @media screen and (max-width: 640px) {
      .sheet { grid-template-columns: 1fr; min-height: 0; }
      main, aside { padding: 28px 20px; }
    }
  </style>
</head>
<body>
<div class="sheet">
  <main>
    <header>
      <h1>Tanya Sunny</h1>
      <p class="role">Product Designer</p>
      <p class="summary">
        Product Designer with 5+ years of design experience, focused on UX auditing, workflow and systems
        design, and interface design. Led the redesign of SalureConnect into the BrynQ integration platform,
        and works with Claude Code to bring the design system into the codebase. Master's in UX with a
        specialisation in AI; background in computer science.
      </p>
    </header>

    <section>
      <h2>Work Experience</h2>
      <div class="job">
        <p class="company">BrynQ, Netherlands</p>
        <div class="head"><span>Product Designer</span><span class="date">2023 – present</span></div>
        <ul>
          <li>Led the redesign of SalureConnect into the BrynQ platform, from research and information architecture to the shipped interface.</li>
          <li>Designed integration templates and guided setup, cutting a standard connection from about six months to about two weeks.</li>
          <li>Run UX audits across the platform and apply systems thinking to integration flows, data mappings and states.</li>
          <li>Brought the design system into the codebase with Claude Code; iterations are built there, then shipped by developers.</li>
          <li>Work with Product Owners and Product Managers to align design with product priorities.</li>
        </ul>
      </div>
      <div class="job">
        <p class="company">Multiple Startups, India</p>
        <div class="head"><span>UI Designer (Contract)</span><span class="date">2022 – 2023</span></div>
        <ul>
          <li>Designed web and mobile interfaces for Amphisoft Ventures and Lymdata Labs, from product requirements to development handoff.</li>
        </ul>
      </div>
      <div class="job">
        <p class="company">Segments Cloud LLC, Dubai, UAE</p>
        <div class="head"><span>UI Designer</span><span class="date">2021 – 2022</span></div>
        <ul>
          <li>Designed interfaces and page layouts for a Bitcoin mining and warehousing platform.</li>
        </ul>
      </div>
      <div class="job">
        <p class="company">Curateus, Bangalore, India</p>
        <div class="head"><span>UX/UI Intern</span><span class="date">2021</span></div>
        <ul>
          <li>Designed wireframes, prototypes and UI for a content curation product across web and mobile.</li>
          <li>Designed a browser extension for recommending articles, cutting the flow from seven steps to four.</li>
        </ul>
      </div>
      <div class="job">
        <p class="company">SAP Ariba, Bangalore, India</p>
        <div class="head"><span>Technical Support Engineer</span><span class="date">2018 – 2021</span></div>
        <ul>
          <li>Supported enterprise clients through troubleshooting and incident resolution, working with engineering on workflow and system issues.</li>
        </ul>
      </div>
    </section>
  </main>

  <aside>
    <section>
      <h2>Contact</h2>
      <ul>
        <li>Utrecht, Netherlands</li>
        <li>+31 6 8512 2140</li>
        <li>tanyameriamsunny@gmail.com</li>
        <li><a href="https://www.linkedin.com/in/tanya-sunny/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tanya-sunny</a></li>
      </ul>
    </section>

    <section>
      <h2>Skills</h2>
      <div class="group">
        <p class="group-label">UX Design</p>
        <ul>
          <li>UX Auditing</li>
          <li>User Research</li>
          <li>Workflow Design</li>
          <li>Information Architecture</li>
          <li>Usability Testing</li>
        </ul>
      </div>
      <div class="group">
        <p class="group-label">UI Design</p>
        <ul>
          <li>Interface and Visual Design</li>
          <li>Interaction Design</li>
          <li>Prototyping</li>
          <li>Design Systems</li>
        </ul>
      </div>
      <div class="group">
        <p class="group-label">Methods</p>
        <ul>
          <li>Systems Thinking</li>
          <li>Journey Mapping</li>
          <li>AI-Integrated UX Workflows</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="entry">
        <p class="title">Master's in UX (Specialisation: AI)</p>
        <p class="meta">Jindal School of Design &amp; Architecture</p>
        <p class="meta">2025 – 2026 · Distinction, CGPA 7.0/8</p>
      </div>
      <div class="entry">
        <p class="title">PGP in UX Design</p>
        <p class="meta">IDC, IIT Bombay</p>
        <p class="meta">2021 – 2022</p>
      </div>
      <div class="entry">
        <p class="title">B.Tech in Computer Science</p>
        <p class="meta">University of Calicut</p>
        <p class="meta">2013 – 2017</p>
      </div>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li>English (Fluent)</li>
        <li>Dutch (Beginner)</li>
      </ul>
    </section>

    <section>
      <h2>Community</h2>
      <div class="entry">
        <p class="title">Co-organiser, Design Reimagined Utrecht</p>
        <p class="meta">Sessions and workshops on design practice</p>
      </div>
    </section>
  </aside>
</div>
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
