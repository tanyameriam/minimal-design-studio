import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CV = () => {
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    // Create a printable version for PDF download
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Tanya Sunny - CV</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: Arial, Helvetica, sans-serif; 
              font-size: 11pt; 
              line-height: 1.4; 
              color: #000; 
              padding: 40px 50px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 { font-size: 20pt; font-weight: 700; margin-bottom: 4px; }
            h2 { font-size: 12pt; font-weight: 600; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #000; padding-bottom: 4px; }
            h3 { font-size: 11pt; font-weight: 600; margin-bottom: 2px; }
            .subtitle { font-size: 12pt; color: #444; margin-bottom: 8px; }
            .contact { font-size: 10pt; color: #333; margin-bottom: 16px; }
            .contact a { color: #333; text-decoration: none; }
            .section { margin-bottom: 16px; }
            .job { margin-bottom: 14px; }
            .job-header { display: flex; justify-content: space-between; align-items: baseline; }
            .job-title { font-weight: 600; }
            .job-company { color: #333; }
            .job-date { font-size: 10pt; color: #555; }
            ul { margin-left: 18px; margin-top: 4px; }
            li { margin-bottom: 3px; }
            .profile { margin-bottom: 16px; }
            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill { background: #f0f0f0; padding: 2px 8px; border-radius: 2px; font-size: 10pt; }
            .edu-item { margin-bottom: 8px; }
            .edu-title { font-weight: 600; }
            .edu-school { color: #333; font-size: 10pt; }
            @media print {
              body { padding: 20px 30px; }
            }
          </style>
        </head>
        <body>
          <h1>Tanya Sunny</h1>
          <div class="subtitle">UX/UI Designer</div>
          <div class="contact">
            Netherlands · tanyameriamsunny@gmail.com · <a href="https://www.linkedin.com/in/tanya-sunny/">linkedin.com/in/tanya-sunny</a>
          </div>

          <div class="section profile">
            <h2>Profile</h2>
            <p>UX/UI Designer with 5 years of professional design experience and a broader corporate background since 2018. Experienced in UI execution, UX auditing, and workflow design for digital products. Currently working on BrynQ, an HR/Payroll integration product, focusing on improving usability, clarity, and decision-making within complex system-driven flows. Strong technical foundation and academic focus on UX for AI-supported systems.</p>
          </div>

          <div class="section">
            <h2>Key Competencies</h2>
            <div class="skills">
              <span class="skill">UX Auditing</span>
              <span class="skill">Systems Thinking</span>
              <span class="skill">Workflow & Process Design</span>
              <span class="skill">Problem Framing</span>
              <span class="skill">UI & Interaction Design</span>
              <span class="skill">AI-Integrated UX Workflows</span>
            </div>
          </div>

          <div class="section">
            <h2>Professional Experience</h2>
            
            <div class="job">
              <div class="job-header">
                <div>
                  <span class="job-title">UX/UI Designer</span> · <span class="job-company">BrynQ, Netherlands</span>
                </div>
                <span class="job-date">2023 – Present</span>
              </div>
              <ul>
                <li>Design and improve user flows within the BrynQ product, simplifying complex configuration and operational tasks.</li>
                <li>Identify usability issues through UX audits and propose iterative improvements.</li>
                <li>Apply systems thinking to structure interactions around data mappings, transformations, and interface states.</li>
                <li>Support design governance by guiding a junior designer and maintaining a clear Figma file structure.</li>
                <li>Collaborate with Product Owners and Product Managers to align design work with product priorities.</li>
                <li>Led design for an internal task-tracking feature to improve clarity around actions and responsibilities.</li>
                <li>Contribute to AI-assisted workflows that support users during setup and validation processes.</li>
              </ul>
            </div>

            <div class="job">
              <div class="job-header">
                <div>
                  <span class="job-title">UI Designer (Contract)</span> · <span class="job-company">Multiple Startups, India</span>
                </div>
                <span class="job-date">2022 – 2023</span>
              </div>
              <ul>
                <li>Designed UI screens based on defined requirements for early-stage products.</li>
                <li>Delivered visual designs with a focus on clarity, consistency, and usability.</li>
                <li>Clients: Amphisoft Ventures · Lymdata Labs · Amphisoft (Stealth EdTech Product)</li>
              </ul>
            </div>

            <div class="job">
              <div class="job-header">
                <div>
                  <span class="job-title">UI Designer</span> · <span class="job-company">Segments Cloud LLC, Dubai, UAE</span>
                </div>
                <span class="job-date">2021 – 2022</span>
              </div>
              <ul>
                <li>Designed UI screens and page layouts for a Bitcoin mining and warehousing product.</li>
                <li>Translated business requirements into structured and visually consistent interfaces.</li>
              </ul>
            </div>

            <div class="job">
              <div class="job-header">
                <div>
                  <span class="job-title">UX/UI Intern</span> · <span class="job-company">Curateus, Bangalore, India</span>
                </div>
                <span class="job-date">2021</span>
              </div>
              <ul>
                <li>Designed UI screens, wireframes, and prototypes for a content discovery product.</li>
                <li>Supported rapid design execution for web and mobile platforms.</li>
              </ul>
            </div>

            <div class="job">
              <div class="job-header">
                <div>
                  <span class="job-title">Technical Support Engineer</span> · <span class="job-company">SAP Ariba, Bangalore, India</span>
                </div>
                <span class="job-date">2018 – 2021</span>
              </div>
              <ul>
                <li>Supported enterprise clients through system troubleshooting and incident resolution.</li>
                <li>Collaborated with engineering teams on workflow and system-level issues.</li>
                <li>Developed a strong understanding of enterprise software behavior and user pain points.</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Education</h2>
            <div class="edu-item">
              <div class="edu-title">Master's in UX (Specialization: AI), Ongoing</div>
              <div class="edu-school">Jindal School of Art & Architecture, 2025–2026</div>
            </div>
            <div class="edu-item">
              <div class="edu-title">Post Graduate Programme in UX Design</div>
              <div class="edu-school">IDC, Indian Institute of Technology Bombay, 2021–2022</div>
            </div>
            <div class="edu-item">
              <div class="edu-title">Bachelor of Technology in Computer Science</div>
              <div class="edu-school">University of Calicut, 2013–2017</div>
            </div>
          </div>

          <div class="section">
            <h2>Community</h2>
            <p><strong>Co-organiser</strong> — Design Reimagined Utrecht</p>
            <p style="font-size: 10pt; color: #555;">A design community in the Netherlands hosting sessions and workshops on design learnings.</p>
          </div>

          <div class="section">
            <h2>Tools</h2>
            <div class="skills">
              <span class="skill">Figma</span>
              <span class="skill">FigJam</span>
              <span class="skill">Miro</span>
              <span class="skill">Zeplin</span>
            </div>
          </div>

          <div class="section">
            <h2>Languages</h2>
            <p>English: Fluent · Dutch: Beginner</p>
          </div>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md py-4">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Portfolio</span>
          </button>
          
          <Button onClick={handleDownloadPDF} variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl" ref={cvRef}>
          
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-2">Tanya Sunny</h1>
            <p className="text-xl text-muted-foreground mb-6">UX/UI Designer</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Netherlands
              </span>
              <a 
                href="mailto:tanyameriamsunny@gmail.com" 
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                tanyameriamsunny@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/tanya-sunny/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </header>

          {/* Profile */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-4 pb-2 border-b border-border">Profile</h2>
            <p className="text-muted-foreground leading-relaxed">
              UX/UI Designer with 5 years of professional design experience and a broader corporate background since 2018. 
              Experienced in UI execution, UX auditing, and workflow design for digital products. Currently working on BrynQ, 
              an HR/Payroll integration product, focusing on improving usability, clarity, and decision-making within complex 
              system-driven flows. Strong technical foundation and academic focus on UX for AI-supported systems.
            </p>
          </section>

          {/* Key Competencies */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-4 pb-2 border-b border-border">Key Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {['UX Auditing', 'Systems Thinking', 'Workflow & Process Design', 'Problem Framing', 'UI & Interaction Design', 'AI-Integrated UX Workflows'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-muted text-sm rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-6 pb-2 border-b border-border">Professional Experience</h2>
            
            <div className="space-y-8">
              {/* BrynQ */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium">UX/UI Designer</h3>
                    <p className="text-muted-foreground text-sm">BrynQ, Netherlands</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Design and improve user flows within the BrynQ product, simplifying complex configuration and operational tasks.</li>
                  <li>Identify usability issues through UX audits and propose iterative improvements.</li>
                  <li>Apply systems thinking to structure interactions around data mappings, transformations, and interface states.</li>
                  <li>Support design governance by guiding a junior designer and maintaining a clear Figma file structure.</li>
                  <li>Collaborate with Product Owners and Product Managers to align design work with product priorities.</li>
                  <li>Led design for an internal task-tracking feature to improve clarity around actions and responsibilities.</li>
                  <li>Contribute to AI-assisted workflows that support users during setup and validation processes.</li>
                </ul>
              </div>

              {/* Contract Work */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium">UI Designer (Contract)</h3>
                    <p className="text-muted-foreground text-sm">Multiple Startups, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2022 – 2023</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed UI screens based on defined requirements for early-stage products.</li>
                  <li>Delivered visual designs with a focus on clarity, consistency, and usability.</li>
                  <li>Clients: Amphisoft Ventures · Lymdata Labs · Amphisoft (Stealth EdTech Product)</li>
                </ul>
              </div>

              {/* Segments Cloud */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium">UI Designer</h3>
                    <p className="text-muted-foreground text-sm">Segments Cloud LLC, Dubai, UAE</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021 – 2022</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed UI screens and page layouts for a Bitcoin mining and warehousing product.</li>
                  <li>Translated business requirements into structured and visually consistent interfaces.</li>
                </ul>
              </div>

              {/* Curateus */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium">UX/UI Intern</h3>
                    <p className="text-muted-foreground text-sm">Curateus, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Designed UI screens, wireframes, and prototypes for a content discovery product.</li>
                  <li>Supported rapid design execution for web and mobile platforms.</li>
                </ul>
              </div>

              {/* SAP Ariba */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div>
                    <h3 className="font-medium">Technical Support Engineer</h3>
                    <p className="text-muted-foreground text-sm">SAP Ariba, Bangalore, India</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018 – 2021</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm space-y-1">
                  <li>Supported enterprise clients through system troubleshooting and incident resolution.</li>
                  <li>Collaborated with engineering teams on workflow and system-level issues.</li>
                  <li>Developed a strong understanding of enterprise software behavior and user pain points.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-6 pb-2 border-b border-border">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Master's in UX (Specialization: AI) <span className="text-muted-foreground font-normal">(Ongoing)</span></h3>
                <p className="text-sm text-muted-foreground">Jindal School of Art & Architecture, 2025–2026</p>
              </div>
              <div>
                <h3 className="font-medium">Post Graduate Programme in UX Design</h3>
                <p className="text-sm text-muted-foreground">IDC, Indian Institute of Technology Bombay, 2021–2022</p>
              </div>
              <div>
                <h3 className="font-medium">Bachelor of Technology in Computer Science</h3>
                <p className="text-sm text-muted-foreground">University of Calicut, 2013–2017</p>
              </div>
            </div>
          </section>

          {/* Community */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-4 pb-2 border-b border-border">Community</h2>
            <div>
              <h3 className="font-medium">Co-organiser</h3>
              <a 
                href="https://www.linkedin.com/company/design-reimagined-utrecht" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Design Reimagined Utrecht
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                A design community in the Netherlands hosting sessions and workshops on design learnings.
              </p>
            </div>
          </section>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="font-serif text-lg mb-4 pb-2 border-b border-border">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'FigJam', 'Miro', 'Zeplin'].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-muted text-sm rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="font-serif text-lg mb-4 pb-2 border-b border-border">Languages</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <span><strong>English</strong>: Fluent</span>
              <span><strong>Dutch</strong>: Beginner</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CV;
