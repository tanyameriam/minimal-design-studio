import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  team: string[];
  tools: string[];
  role: string;
  timeline: string[];
  painPoints: string[];
  marketInsight: string;
  opportunity: string;
  designApproach: { title: string; content: string }[];
  wireframing: { title: string; content: string }[];
  nextSteps: string;
  learnings: string[];
  heroImage: string;
}> = {
  'curateus-plugin': {
    title: "The hidden drop-off problem I found in Curateus",
    subtitle: "and how a plugin solved it",
    overview: "Curateus is a content curation platform where users recommend articles. However, the existing process required switching between the browser and the mobile app, creating friction and lowering engagement. This case study focuses on designing a browser-native workflow that enables seamless content recommendations.",
    challenge: "How might we reduce context switching and allow curators to save and recommend content directly within their browsing flow?",
    solution: "I designed a lightweight browser plugin that integrates Curateus' core recommendation features into the browsing experience, enabling rapid one-click curation without workflow disruption.",
    team: ["1 UX designer (me)", "3 developers", "1 project manager"],
    tools: ["Miro", "Figma", "Zeplin", "Invision"],
    role: "UX research, UX design, UI design",
    timeline: ["8+ weeks total", "2+ weeks discovery & research", "6 weeks design & testing"],
    painPoints: [
      "Frequent context switching reduced motivation to recommend content.",
      "The mobile-based workflow disrupted browsing and caused drop-offs.",
      "Manual entry steps made the process feel effort-heavy, especially for frequent curators."
    ],
    marketInsight: "Competitive analysis showed that most browser extensions functioned as simple bookmarks rather than curation tools. Users preferred inline actions, instant tagging, and zero-friction saving mechanisms.",
    opportunity: "A focused, intuitive plugin enabling recommendations in a single, uninterrupted flow.",
    designApproach: [
      {
        title: "1. Defining the Ideal Flow",
        content: "I mapped a minimal-step recommendation journey anchored in inline interaction, quick tagging and categorization, non-intrusive UI, and compatibility with Curateus' existing backend. This ensured feasibility while maintaining user-first logic."
      },
      {
        title: "2. Persona Development",
        content: "Based on interviews, I created a curator persona to guide decision-making around motivation, efficiency needs, and workflow patterns. The persona ensured design alignment with real user expectations."
      },
      {
        title: "3. Concepting & Early Exploration",
        content: "Insights from competitor analysis and internal analytics informed the first set of sketches. I collaborated with developers through multiple iterations to validate constraints, optimize interactions, and refine the recommendation steps."
      }
    ],
    wireframing: [
      {
        title: "Low-Fidelity Exploration",
        content: "Early wireframes focused on establishing clarity and reducing cognitive load. Key decisions included adding contextual headers to orient users, adding tooltips for feature discovery, and structuring the flow to minimize clicks. The wireframes were shared via Zeplin to streamline team feedback."
      },
      {
        title: "High-Fidelity Design & Validation",
        content: "Once usability issues were addressed, I created high-fidelity screens aligned with the Curateus brand. Design considerations included a dark UI to differentiate plugin content from the browser page, a clean hierarchy for tag selection and preview, and a layout optimized for 1440 × 1024 px screens. Usability testing validated that the new flow eliminated unnecessary steps and supported fast, interruption-free recommendations."
      }
    ],
    nextSteps: "Given that users encounter content primarily on desktop, the next recommendation is to extend the experience with a Curateus web app where curators can manage recommendations, profiles, and published content.",
    learnings: [
      "Plugins must reduce friction; this solution simplifies capturing, organizing, and tagging recommendations.",
      "Zeplin significantly accelerated design-to-development communication, though it introduced licensing constraints."
    ],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  }
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Case study not found</h1>
          <Link to="/#work" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 bg-background/80 backdrop-blur-sm">
        <Link 
          to="/#work" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to work
        </Link>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-up">
            {study.title}
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic animate-fade-up-delay-1">
            {study.subtitle}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-6 lg:px-12 mb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-[16/9] overflow-hidden bg-card animate-fade-up-delay-2">
            <img 
              src={study.heroImage} 
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Overview</h2>
              <p className="text-lg leading-relaxed">{study.overview}</p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Role</h3>
                <p className="text-sm">{study.role}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Timeline</h3>
                <ul className="text-sm space-y-1">
                  {study.timeline.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Tools</h3>
                <p className="text-sm">{study.tools.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 lg:px-12 py-16 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Challenge</h2>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">{study.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 lg:px-12 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Solution</h2>
          <p className="text-lg leading-relaxed">{study.solution}</p>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Team & Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl mb-4">Team</h3>
              <ul className="space-y-2">
                {study.team.map((member, i) => (
                  <li key={i} className="text-muted-foreground">{member}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Tools</h3>
              <p className="text-muted-foreground">{study.tools.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Understanding */}
      <section className="px-6 lg:px-12 py-16 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Problem Understanding</h2>
          <h3 className="font-serif text-2xl mb-8">Key User Pain Points</h3>
          <p className="text-muted-foreground mb-6">User interviews and behavioral data revealed that:</p>
          <ul className="space-y-4 mb-12">
            {study.painPoints.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-muted-foreground">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="font-serif text-2xl mb-4">Market Insight</h3>
          <p className="text-muted-foreground mb-8">{study.marketInsight}</p>
          
          <div className="p-6 border border-border bg-background">
            <p className="font-serif text-lg">
              <span className="text-muted-foreground">Opportunity: </span>
              {study.opportunity}
            </p>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="px-6 lg:px-12 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Design Approach</h2>
          <div className="space-y-12">
            {study.designApproach.map((step, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframing */}
      <section className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Wireframing</h2>
          <div className="space-y-12">
            {study.wireframing.map((step, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-6 lg:px-12 py-16 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Next Steps</h2>
          <p className="text-lg leading-relaxed">{study.nextSteps}</p>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-6 lg:px-12 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Learnings</h2>
          <ul className="space-y-4">
            {study.learnings.map((learning, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-muted-foreground">•</span>
                <span className="text-lg">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Link 
            to="/#work" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default CaseStudy;
