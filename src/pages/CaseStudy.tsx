import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudySection {
  title: string;
  content: string;
  type?: 'text' | 'list' | 'quote';
  items?: string[];
}

interface CaseStudyData {
  title: string;
  subtitle: string;
  overview: string;
  challenge?: string;
  solution?: string;
  team?: string[];
  tools?: string[];
  role: string;
  timeline?: string[];
  painPoints?: string[];
  marketInsight?: string;
  opportunity?: string;
  designApproach?: CaseStudySection[];
  wireframing?: CaseStudySection[];
  nextSteps?: string;
  learnings: string[];
  heroImage: string;
  // Extended sections for flexible content
  currentScenario?: CaseStudySection[];
  researchInsights?: { ngoQuotes?: string[]; painPoints?: string[]; opportunity?: string };
  processFlow?: CaseStudySection[];
  informationArchitecture?: CaseStudySection[];
  impact?: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
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
  },
  'food-waste-ngo': {
    title: "Turning wasted food into meals",
    subtitle: "A Solution for NGOs and Restaurants",
    overview: "India produces enough food to nourish its population, yet millions still experience hunger daily. A large portion of edible food is lost at restaurants, events, and distribution centers due to overproduction, spoilage, or lack of timely coordination. NGOs working to redistribute surplus food face severe challenges in collecting it consistently. This project focuses on designing a digital platform that synchronizes restaurants, NGOs, and delivery partners to build an efficient food donation and redistribution ecosystem.",
    role: "UX research, UX design, UI design, Information Architecture",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    currentScenario: [
      {
        title: "1. Fragmented and Unpredictable Communication",
        content: "Restaurants notify NGOs about leftover food only after service hours or at irregular times. Because there is no centralized platform, NGOs often miss opportunities to collect food on time. Impact: Large amounts of edible food are wasted simply because NGOs never receive the information early enough."
      },
      {
        title: "2. Lack of Logistics Infrastructure for NGOs",
        content: "Most NGOs do not have dedicated vehicles or staff to travel across the city to pick up surplus food. Last-minute pickups are extremely difficult to coordinate. Impact: Even when NGOs are notified, they cannot retrieve the food before spoilage occurs."
      },
      {
        title: "3. High Time Sensitivity of Surplus Food",
        content: "Leftover food has a narrow consumption window. Without timely pickup, quality deteriorates quickly. Impact: Food that could feed dozens becomes unsafe and must be discarded."
      },
      {
        title: "4. No Matching Between Available Food and NGO Needs",
        content: "There is no system to estimate food quantity, match it with demand, coordinate pickup/delivery, or confirm successful donation. Impact: The process relies on luck and manual coordination rather than structure."
      },
      {
        title: "5. Human-Dependent Processes Are Too Fragile to Scale",
        content: "Phone calls, manual planning, and volunteer-based transport create a fragile network that collapses under pressure. Impact: The ecosystem fails daily—not due to lack of food, but lack of system design."
      }
    ],
    researchInsights: {
      painPoints: [
        "Irregular notifications",
        "Lack of manpower to collect food",
        "High transportation cost",
        "Difficulty coordinating pickups from multiple locations",
        "High spoilage risk due to delays"
      ],
      ngoQuotes: [
        "Leftover food is going to waste while people outside are starving.",
        "We often get notified too late to do anything about it.",
        "Transporting food on time is our biggest challenge."
      ],
      opportunity: "There was a clear need for a centralized, coordinated system that provides real-time connectivity between restaurants and NGOs, assigns delivery partners automatically, manages time-sensitive pickups efficiently, and offers transparency and accountability across all stakeholders."
    },
    processFlow: [
      {
        title: "1. Reducing Notification Delays",
        content: "Restaurants can instantly upload surplus food; NGOs receive real-time notifications. Design Logic: Reduces dependency on manual communication, prevents delays that cause spoilage, and supports time-sensitive actions."
      },
      {
        title: "2. Enabling Flexible Logistics Options",
        content: "NGOs can choose Delivery or Pickup depending on their capacity. Delivery Path: Assigns delivery partners automatically, handles rejections with fallback rules, ensures timely movement of food. Pickup Path: Allows NGOs to self-collect when feasible, suitable for nearby or bulk pickups."
      },
      {
        title: "3. Accountability Through Decision Nodes",
        content: "Critical checkpoints ensure clarity and structured communication: Restaurant confirms quantity & readiness, NGO confirms collection preference, delivery partners accept or reject requests, NGOs are alerted when delivery fails. Design Logic: Minimizes uncertainty and ensures every donation has a clear owner."
      },
      {
        title: "4. Defined Roles & Seamless Handoffs",
        content: "To avoid confusion: Restaurants → publish and prepare surplus, NGOs → validate and accept, Delivery partners → transport on time. The flow ensures each step has a clear responsible actor."
      },
      {
        title: "5. End-to-End Transparency",
        content: "Everyone knows: What food is available, who is assigned, when pickup happens, when delivery is completed. This transparency is crucial to scaling and maintaining trust."
      }
    ],
    informationArchitecture: [
      {
        title: "Restaurant App Sitemap",
        content: "Restaurants need fast, operationally simple workflows. The IA reflects their real-life processes. Home → Orders, Listings, Account. Orders include Active Orders (require immediate action) and Past Orders (history, proof, analytics). Listings include View (monitor current surplus) and Add Listing (quickly upload new surplus food). Account includes Profile, Location (for precise pickup routing), Wallet (delivery fee or donation credits), Insights (impact visualization), and Reviews."
      },
      {
        title: "NGO App Sitemap",
        content: "NGOs prioritize discovering food, evaluating availability, and coordinating logistics. Home → Food, Search, Account. Food & Search support two behaviours: Browsing real-time surplus and Searching when they have specific needs. Account includes Profile & address book (frequent hotspots), Order history, Create order request (for demand-driven needs), Feedback, help, and contact, and Logout. This structure reduces repeated steps, supports low digital literacy, and creates operational efficiency."
      }
    ],
    wireframing: [
      {
        title: "Low-Fidelity & High-Fidelity Wireframes",
        content: "Wireframes were developed to validate flows, simplify interactions, and ensure clarity for all user groups. Iterations focused on minimizing steps, prioritizing visibility of time-sensitive tasks, creating visual hierarchy for urgency, and supporting users with limited bandwidth or devices."
      }
    ],
    impact: [
      "Reduce food wastage significantly",
      "Improve NGO efficiency and reach",
      "Leverage delivery networks for last-mile distribution",
      "Increase timely pickups",
      "Create a scalable, transparent food redistribution model"
    ],
    learnings: [
      "This project highlighted how systemic problems require systemic solutions.",
      "Logistics and UX cannot be separated in time-sensitive ecosystems.",
      "Small operational gaps multiply into large-scale failures.",
      "Technology can transform humanitarian workflows when designed around real user capacities.",
      "Hunger is not caused by scarcity, but by broken distribution systems.",
      "Thoughtful UX can directly contribute to social impact."
    ]
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
      {study.challenge && (
        <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Challenge</h2>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">{study.challenge}</p>
          </div>
        </section>
      )}

      {/* Solution */}
      {study.solution && (
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Solution</h2>
            <p className="text-lg leading-relaxed">{study.solution}</p>
          </div>
        </section>
      )}

      {/* Current Scenario (for food waste project) */}
      {study.currentScenario && (
        <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Current Scenario</h2>
            <p className="text-lg text-muted-foreground mb-12">Systemic Breakdowns in the Existing Ecosystem</p>
            <div className="space-y-10">
              {study.currentScenario.map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Insights (for food waste project) */}
      {study.researchInsights && (
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Research Insights</h2>
            
            {study.researchInsights.painPoints && (
              <div className="mb-12">
                <h3 className="font-serif text-2xl mb-6">NGO Pain Points</h3>
                <ul className="space-y-3">
                  {study.researchInsights.painPoints.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-muted-foreground">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {study.researchInsights.ngoQuotes && (
              <div className="mb-12 space-y-4">
                <h3 className="font-serif text-xl mb-6">NGO Quotes</h3>
                {study.researchInsights.ngoQuotes.map((quote, i) => (
                  <blockquote key={i} className="border-l-2 border-border pl-6 italic text-muted-foreground">
                    "{quote}"
                  </blockquote>
                ))}
              </div>
            )}
            
            {study.researchInsights.opportunity && (
              <div className="p-6 border border-border bg-card">
                <p className="font-serif text-lg">
                  <span className="text-muted-foreground">Opportunity: </span>
                  {study.researchInsights.opportunity}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process Flow (for food waste project) */}
      {study.processFlow && (
        <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Process Flow</h2>
            <p className="text-lg text-muted-foreground mb-12">Logic & Design Reasoning</p>
            <div className="space-y-10">
              {study.processFlow.map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Information Architecture (for food waste project) */}
      {study.informationArchitecture && (
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Information Architecture</h2>
            <p className="text-lg text-muted-foreground mb-12">Sitemaps — Reasoning & Structure</p>
            <div className="space-y-12">
              {study.informationArchitecture.map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team (only if exists) */}
      {study.team && (
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
              {study.tools && (
                <div>
                  <h3 className="font-serif text-xl mb-4">Tools</h3>
                  <p className="text-muted-foreground">{study.tools.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Problem Understanding (for curateus) */}
      {study.painPoints && (
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
            
            {study.marketInsight && (
              <>
                <h3 className="font-serif text-2xl mb-4">Market Insight</h3>
                <p className="text-muted-foreground mb-8">{study.marketInsight}</p>
              </>
            )}
            
            {study.opportunity && (
              <div className="p-6 border border-border bg-background">
                <p className="font-serif text-lg">
                  <span className="text-muted-foreground">Opportunity: </span>
                  {study.opportunity}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Design Approach */}
      {study.designApproach && (
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
      )}

      {/* Wireframing */}
      {study.wireframing && (
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
      )}

      {/* Impact (for food waste project) */}
      {study.impact && (
        <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">The designed system helps:</p>
            <ul className="space-y-4">
              {study.impact.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Next Steps */}
      {study.nextSteps && (
        <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Next Steps</h2>
            <p className="text-lg leading-relaxed">{study.nextSteps}</p>
          </div>
        </section>
      )}

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
