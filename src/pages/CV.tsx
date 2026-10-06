import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';

const CV = () => {
  usePageMeta('CV', 'Curriculum vitae for Tanya Sunny, product designer based in the Netherlands.');
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);
  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
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
          </style>
        </head>
        <body>
          <header>
            <h1>Tanya Sunny</h1>
            <p class="role">Product Designer</p>
            <p class="contact">
              Utrecht, Netherlands<span class="sep">|</span>+31 685 122 140<span class="sep">|</span>tanyameriamsunny@gmail.com<span class="sep">|</span><a href="https://www.linkedin.com/in/tanya-sunny/">linkedin.com/in/tanya-sunny</a>
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
              <div class="head"><span><span class="what">Product Designer</span> <span class="where">· BrynQ, Netherlands</span></span><span class="date">2023 to Present</span></div>
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
              <div class="head"><span><span class="what">UI Designer (Contract)</span> <span class="where">· Multiple Startups, India</span></span><span class="date">2022 to 2023</span></div>
              <ul>
                <li>Designed user interfaces for early-stage web and mobile products for Amphisoft Ventures and Lymdata Labs, working from defined product requirements.</li>
                <li>Delivered consistent, usable visual designs through to development handoff.</li>
              </ul>
            </div>
            <div class="job">
              <div class="head"><span><span class="what">UI Designer</span> <span class="where">· Segments Cloud LLC, Dubai, UAE</span></span><span class="date">2021 to 2022</span></div>
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
              <div class="head"><span><span class="what">Technical Support Engineer</span> <span class="where">· SAP Ariba, Bangalore, India</span></span><span class="date">2018 to 2021</span></div>
              <ul>
                <li>Supported enterprise clients through system troubleshooting and incident resolution.</li>
                <li>Collaborated with engineering teams on workflow and system-level issues.</li>
                <li>Developed a deep understanding of enterprise software behaviour and user pain points.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div class="row"><span><strong>Master's in UX (Specialisation: AI)</strong> <span class="note">· Jindal School of Art &amp; Architecture · Distinction, first in cohort</span></span><span class="date">2025 to 2026</span></div>
            <div class="row"><span><strong>PGP in UX Design</strong> <span class="note">· IDC, Indian Institute of Technology Bombay</span></span><span class="date">2021 to 2022</span></div>
            <div class="row"><span><strong>B.Tech in Computer Science</strong> <span class="note">· University of Calicut</span></span><span class="date">2013 to 2017</span></div>
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

          <script>
            window.onload = function () {
              (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () { window.print(); });
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };
  return <main className="bg-background min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md py-4">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-3">
            <Button onClick={handleDownloadPDF} variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl" ref={cvRef}>
          
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-sans text-3xl md:text-4xl mb-2">Tanya Sunny</h1>
            <p className="text-lg text-muted-foreground mb-6">Product Designer</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Netherlands
              </span>
              <a href="mailto:tanyameriamsunny@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                tanyameriamsunny@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/tanya-sunny/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </header>

          {/* Profile */}
          <section className="mb-12">
            <h2 className="font-sans text-lg mb-4 pb-2 border-b border-border">Profile</h2>
            <p className="text-muted-foreground leading-relaxed">
              Product Designer with 5+ years of design experience and a professional background since 2018,
              specialising in UX auditing, workflow and systems design, and interface design. At BrynQ, I led the
              redesign of SalureConnect into the BrynQ integration platform. Experienced in AI-integrated workflows
              with Claude, from integrating the design system into the codebase to a continuous implementation loop
              with developers. Master's in UX with a specialisation in AI (2026); background in computer science.
            </p>
          </section>

          {/* Key Competencies */}
          <section className="mb-12">
            <h2 className="font-sans text-lg mb-4 pb-2 border-b border-border">Key Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {['UX Auditing', 'Systems Thinking', 'Product Audit', 'Transactional Design', 'Workflow & Process Design', 'UI & Interaction Design', 'AI-Integrated UX Workflows'].map(skill => <span key={skill} className="px-3 py-1.5 bg-muted text-sm rounded-md">
                  {skill}
                </span>)}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="font-sans text-lg mb-6 pb-2 border-b border-border">Professional Experience</h2>
            
            <div className="space-y-8">
              {/* BrynQ */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium text-lg">Product Designer</h3>
                    <p className="text-muted-foreground text-sm">BrynQ, Netherlands</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023 to Present</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Led the complete redesign of SalureConnect into the BrynQ platform, from research and information architecture to the shipped interface.</li>
                  <li>Responsible for UX audits across the platform and for updating designs based on the findings.</li>
                  <li>Apply systems thinking to improve the product holistically, across integration flows, data mappings and interface states.</li>
                  <li>Integrated the design system into the codebase using Claude Code, closing the gap between design and implementation.</li>
                  <li>Run a continuous implementation loop with developers: design iterations are implemented with Claude Code, then taken to production by the development team, for faster and more frequent delivery.</li>
                  <li>Collaborate with Product Owners and Product Managers to align design work with product priorities.</li>
                </ul>
              </div>

              {/* Contract Work */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium text-lg">UI Designer (Contract)</h3>
                    <p className="text-muted-foreground text-sm">Multiple Startups, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2022 to 2023</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed user interfaces for early-stage web and mobile products, working from defined product requirements.</li>
                  <li>Delivered consistent, usable visual designs through to development handoff.</li>
                  <li>Clients: Amphisoft Ventures · Lymdata Labs · Amphisoft (Stealth EdTech Product)</li>
                </ul>
              </div>

              {/* Segments Cloud */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium text-lg">UI Designer</h3>
                    <p className="text-muted-foreground text-sm">Segments Cloud LLC, Dubai, UAE</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021 to 2022</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed interfaces and page layouts for a Bitcoin mining and warehousing platform.</li>
                  <li>Translated business requirements into structured, visually consistent interfaces.</li>
                </ul>
              </div>

              {/* Curateus */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium text-lg">UX/UI Intern</h3>
                    <p className="text-muted-foreground text-sm">Curateus, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed wireframes, interactive prototypes and UI for a content curation product across web and mobile.</li>
                  <li>Designed a browser extension that let curators recommend articles without leaving the page, reducing the flow from seven steps to four.</li>
                  <li>Worked with the Product Owner and three developers from early flows through to developer handoff.</li>
                </ul>
              </div>

              {/* SAP Ariba */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium text-lg">Technical Support Engineer</h3>
                    <p className="text-muted-foreground text-sm">SAP Ariba, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018 to 2021</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Supported enterprise clients through system troubleshooting and incident resolution.</li>
                  <li>Collaborated with engineering teams on workflow and system-level issues.</li>
                  <li>Developed a deep understanding of enterprise software behaviour and user pain points.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="font-sans text-lg mb-6 pb-2 border-b border-border">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Master's in UX (Specialization: AI)</h3>
                <p className="text-sm text-muted-foreground">
                  Jindal School of Art &amp; Architecture, 2025 to 2026 &middot; Graduated with distinction, ranked first in cohort
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg">PGP in UX Design</h3>
                <p className="text-sm text-muted-foreground">IDC, Indian Institute of Technology Bombay, 2021 to 2022</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Bachelor of Technology in Computer Science</h3>
                <p className="text-sm text-muted-foreground">University of Calicut, 2013 to 2017</p>
              </div>
            </div>
          </section>

          {/* Community */}
          <section className="mb-12">
            <h2 className="font-sans text-lg mb-4 pb-2 border-b border-border">Community</h2>
            <div>
              <h3 className="font-medium text-lg">Co-organiser</h3>
              <a href="https://www.linkedin.com/company/design-reimagined-utrecht" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                Design Reimagined Utrecht
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                A design community in the Netherlands hosting sessions and workshops on design practice.
              </p>
            </div>
          </section>


          {/* Languages */}
          <section>
            <h2 className="font-sans text-lg mb-4 pb-2 border-b border-border">Languages</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <span><strong>English</strong>: Fluent</span>
              <span><strong>Dutch</strong>: Beginner</span>
            </div>
          </section>
        </div>
      </div>
    </main>;
};
export default CV;