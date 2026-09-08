import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';
import ThemeToggle from '@/components/ThemeToggle';

const CV = () => {
  usePageMeta('CV', 'Curriculum vitae for Tanya Sunny, product designer based in the Netherlands.');
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);
  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Tanya Sunny - Product Designer</title>
          <style>
            @page { size: A4; margin: 0; }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              font-size: 9pt; 
              line-height: 1.35; 
              color: #333; 
              max-width: 210mm;
              min-height: 297mm;
              margin: 0 auto;
              background: white;
            }
            .container { padding: 24px 28px; }
            
            /* Header */
            .header { display: flex; justify-content: space-between; margin-bottom: 16px; }
            .header-left { flex: 1; }
            .header-right { text-align: right; font-size: 8.5pt; color: #555; }
            .header-right a { color: #555; text-decoration: none; }
            .header-right div { margin-bottom: 3px; display: flex; align-items: center; justify-content: flex-end; gap: 6px; }
            h1 { font-size: 22pt; font-weight: 700; color: #1a1a1a; margin-bottom: 2px; letter-spacing: -0.5px; }
            .title { font-size: 11pt; color: #666; margin-bottom: 8px; }
            .summary { font-size: 8.5pt; color: #444; line-height: 1.4; max-width: 380px; }
            .summary strong { font-weight: 600; }
            
            /* Two columns */
            .columns { display: flex; gap: 28px; }
            .left-col { flex: 1; }
            .right-col { width: 200px; }
            
            /* Section headings */
            .section-title { 
              font-size: 10pt; 
              font-weight: 700; 
              color: #2a7ab8; 
              text-transform: uppercase; 
              letter-spacing: 0.5px;
              margin-bottom: 10px; 
              padding-bottom: 4px;
              border-bottom: 2px solid #2a7ab8;
            }
            .section { margin-bottom: 14px; }
            
            /* Experience */
            .job { margin-bottom: 10px; }
            .job-title { font-size: 10pt; font-weight: 600; color: #1a1a1a; }
            .job-company { font-size: 9pt; color: #555; }
            .job-date { font-size: 8pt; color: #777; font-style: italic; margin-bottom: 3px; }
            .job ul { margin-left: 14px; margin-top: 3px; }
            .job li { margin-bottom: 2px; font-size: 8.5pt; color: #444; }
            .job li strong { font-weight: 600; color: #333; }
            
            /* Education */
            .edu-item { margin-bottom: 8px; }
            .edu-title { font-size: 9.5pt; font-weight: 600; color: #1a1a1a; }
            .edu-school { font-size: 8.5pt; color: #555; }
            .edu-date { font-size: 8pt; color: #777; font-style: italic; }
            
            /* Languages */
            .lang-grid { display: flex; flex-wrap: wrap; gap: 12px; }
            .lang-item { }
            .lang-name { font-size: 9pt; font-weight: 600; color: #333; }
            .lang-level { font-size: 8pt; color: #666; font-style: italic; }
            
            /* Skills */
            .skill-category { margin-bottom: 10px; }
            .skill-label { font-size: 9pt; font-weight: 600; color: #333; margin-bottom: 3px; }
            .skill-items { font-size: 8.5pt; color: #555; line-height: 1.4; }
            
            /* Tags */
            .tags { display: flex; flex-wrap: wrap; gap: 5px; }
            .tag { 
              font-size: 8pt; 
              color: #2a7ab8; 
              border: 1px solid #d0e3f0; 
              background: #f5f9fc;
              padding: 2px 8px; 
              border-radius: 3px; 
            }
            
            /* Community */
            .community-item { margin-bottom: 6px; }
            .community-name { font-size: 9pt; color: #333; }
            
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .container { padding: 20px 24px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <div class="header-left">
                <h1>Tanya Sunny</h1>
                <div class="title">Product Designer</div>
                <div class="summary">
                  Product Designer with <strong>5+ years of experience</strong> in UI execution, UX auditing, and workflow design.
                  Currently at BrynQ, improving usability within complex HR/Payroll integration flows.
                  MDes in UX with an AI specialization. Strong technical foundation.
                </div>
              </div>
              <div class="header-right">
                <div>+31 685 122 140 📞</div>
                <div>tanyameriamsunny@gmail.com ✉</div>
                <div>Netherlands 📍</div>
                <div><a href="https://linkedin.com/in/tanya-sunny">linkedin.com/in/tanya-sunny</a> 🔗</div>
              </div>
            </div>
            
            <!-- Two Column Layout -->
            <div class="columns">
              <!-- Left Column -->
              <div class="left-col">
                <div class="section">
                  <div class="section-title">Work Experience</div>
                  
                  <div class="job">
                    <div class="job-title">Product Designer</div>
                    <div class="job-company">BrynQ, Netherlands</div>
                    <div class="job-date">2023 to Present</div>
                    <ul>
                      <li>Designed the interface requirements wizard and template system, putting an interface build that historically took <strong>~6 months on a modelled path to ~2 weeks</strong></li>
                      <li>Design and improve user flows, <strong>simplifying complex configuration tasks</strong></li>
                      <li>Conduct UX audits and propose iterative improvements</li>
                      <li>Apply systems thinking to data mappings and interface states</li>
                      <li>Led design for internal task-tracking feature</li>
                      <li>Contribute to <strong>AI-assisted workflows</strong> for setup and validation</li>
                    </ul>
                  </div>

                  <div class="job">
                    <div class="job-title">UI Designer (Contract)</div>
                    <div class="job-company">Multiple Startups, India</div>
                    <div class="job-date">2022 to 2023</div>
                    <ul>
                      <li>Designed UI for early-stage products: Amphisoft Ventures, Lymdata Labs</li>
                      <li>Delivered visual designs focused on clarity and consistency</li>
                    </ul>
                  </div>
                  
                  <div class="job">
                    <div class="job-title">UI Designer</div>
                    <div class="job-company">Segments Cloud LLC, Dubai, UAE</div>
                    <div class="job-date">2021 to 2022</div>
                    <ul>
                      <li>Designed UI for a Bitcoin mining and warehousing product</li>
                    </ul>
                  </div>
                  
                  <div class="job">
                    <div class="job-title">UX/UI Intern</div>
                    <div class="job-company">Curateus, Bangalore, India</div>
                    <div class="job-date">2021</div>
                    <ul>
                      <li>Designed wireframes and prototypes for content discovery product</li>
                    </ul>
                  </div>
                  
                  <div class="job">
                    <div class="job-title">Technical Support Engineer</div>
                    <div class="job-company">SAP Ariba, Bangalore, India</div>
                    <div class="job-date">2018 to 2021</div>
                    <ul>
                      <li>Supported enterprise clients through troubleshooting and resolution</li>
                      <li>Built understanding of <strong>enterprise software user pain points</strong></li>
                    </ul>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">Education</div>
                  <div class="edu-item">
                    <div class="edu-title">Master's in UX (AI Specialization)</div>
                    <div class="edu-school">Jindal School of Art & Architecture</div>
                    <div class="edu-date">2025 to 2026</div>
                  </div>
                  <div class="edu-item">
                    <div class="edu-title">PG Programme in UX Design</div>
                    <div class="edu-school">IDC, IIT Bombay</div>
                    <div class="edu-date">2021 to 2022</div>
                  </div>
                  <div class="edu-item">
                    <div class="edu-title">B.Tech in Computer Science</div>
                    <div class="edu-school">University of Calicut</div>
                    <div class="edu-date">2013 to 2017</div>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">Languages</div>
                  <div class="lang-grid">
                    <div class="lang-item">
                      <div class="lang-name">English</div>
                      <div class="lang-level">Fluent</div>
                    </div>
                    <div class="lang-item">
                      <div class="lang-name">Dutch</div>
                      <div class="lang-level">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Right Column -->
              <div class="right-col">
                <div class="section">
                  <div class="section-title">Skills</div>
                  <div class="skill-category">
                    <div class="skill-label">UX Design:</div>
                    <div class="skill-items">UX Auditing, User Research, Workflow Design, Information Architecture, Usability Testing</div>
                  </div>
                  <div class="skill-category">
                    <div class="skill-label">UI Design:</div>
                    <div class="skill-items">Interface Design, Visual Design, Prototyping, Design Systems, Responsive Design</div>
                  </div>
                  <div class="skill-category">
                    <div class="skill-label">Methods:</div>
                    <div class="skill-items">Systems Thinking, Problem Framing, Journey Mapping, Wireframing</div>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">Key Strengths</div>
                  <div class="tags">
                    <span class="tag">UX Auditing</span>
                    <span class="tag">Systems Thinking</span>
                    <span class="tag">Product Audit</span>
                    <span class="tag">Transactional Design</span>
                    <span class="tag">Workflow & Process Design</span>
                    <span class="tag">UI & Interaction Design</span>
                    <span class="tag">AI-Integrated UX Workflows</span>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">Community</div>
                  <div class="community-item">
                    <div class="community-name"><strong>Co-organiser</strong>, Design Reimagined Utrecht</div>
                    <div class="skill-items">Design community hosting sessions and workshops in Netherlands</div>
                  </div>
                </div>
              </div>
            </div>
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
  return <main className="bg-background min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md py-4">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Portfolio</span>
          </button>
          
          {/* This page carries its own header rather than the site nav, so the
              theme switch has to be repeated here to stay reachable. */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
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
              Product Designer with 5 years of professional design experience and a broader corporate background since 2018.
              Experienced in UI execution, UX auditing, and workflow design for digital products. Currently working on BrynQ,
              an HR/Payroll integration product. MDes in UX with a specialisation in AI, completed 2026. Strong technical foundation.
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
                  <li>Designed the interface requirements wizard and template system, putting an interface build that historically took ~6 months on a modelled path to ~2 weeks. Estimated from the template-led delivery model, not measured in production.</li>
                  <li>Design and improve user flows within the BrynQ product, simplifying complex configuration and operational tasks.</li>
                  <li>Identify usability issues through UX audits and propose iterative improvements.</li>
                  <li>Apply systems thinking to structure interactions around data mappings, transformations, and interface states.</li>
                  <li>Support design governance by owning and maintaining a clear Figma file structure.</li>
                  <li>Collaborate with Product Owners and Product Managers to align design work with product priorities.</li>
                  <li>Led design for an internal task-tracking feature to improve clarity around actions and responsibilities.</li>
                  <li>Contribute to AI-assisted workflows that support users during setup and validation processes.</li>
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
                  <li>Designed UI screens based on defined requirements for early-stage products.</li>
                  <li>Delivered visual designs with a focus on clarity, consistency, and usability.</li>
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
                  <li>Designed UI screens and page layouts for a Bitcoin mining and warehousing product.</li>
                  <li>Translated business requirements into structured and visually consistent interfaces.</li>
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
                  <li>Designed UI screens, wireframes, and prototypes for a content discovery product.</li>
                  <li>Supported rapid design execution for web and mobile platforms.</li>
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
                  <li>Developed a strong understanding of enterprise software behavior and user pain points.</li>
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
                <p className="text-sm text-muted-foreground">Jindal School of Art & Architecture, 2025 to 2026</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Post Graduate Programme in UX Design</h3>
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
                A design community in the Netherlands hosting sessions and workshops on design learnings.
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