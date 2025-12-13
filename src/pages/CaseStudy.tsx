import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import streeAffinity1 from '@/assets/stree-affinity-1.png';
import streeAffinity2 from '@/assets/stree-affinity-2.png';
import streeAffinity3 from '@/assets/stree-affinity-3.png';
import streeAffinity4 from '@/assets/stree-affinity-4.png';
import streeAffinity5 from '@/assets/stree-affinity-5.png';
import streeAffinity6 from '@/assets/stree-affinity-6.png';
import streeInterview1 from '@/assets/stree-interview-1.png';
import streeInterview2 from '@/assets/stree-interview-2.png';
import streeInterview3 from '@/assets/stree-interview-3.png';
import streeInterview4 from '@/assets/stree-interview-4.png';
import streeInterview5 from '@/assets/stree-interview-5.png';
import streeSosFlow from '@/assets/stree-sos-flow.png';
import streeUserFlow from '@/assets/stree-user-flow.png';
import streeWireframe1 from '@/assets/stree-wireframe-1.png';
import streeWireframe2 from '@/assets/stree-wireframe-2.png';
import streeWireframe3 from '@/assets/stree-wireframe-3.png';
import streeWireframe4 from '@/assets/stree-wireframe-4.png';
import streeWireframe5 from '@/assets/stree-wireframe-5.png';
import streeWireframe6 from '@/assets/stree-wireframe-6.png';
import streeWireframe7 from '@/assets/stree-wireframe-7.png';
import streeWireframe8 from '@/assets/stree-wireframe-8.png';
import streeWireframe9 from '@/assets/stree-wireframe-9.png';
import streeWireframe10 from '@/assets/stree-wireframe-10.png';
import streeWireframe11 from '@/assets/stree-wireframe-11.png';
import streeWireframe12 from '@/assets/stree-wireframe-12.png';
import streeWireframe13 from '@/assets/stree-wireframe-13.png';
import streeWireframe14 from '@/assets/stree-wireframe-14.png';
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
  nextSteps?: string;
  learnings: string[];
  heroImage: string;
  // Extended sections for flexible content
  currentScenario?: CaseStudySection[];
  researchInsights?: {
    ngoQuotes?: string[];
    painPoints?: string[];
    opportunity?: string;
  };
  processFlow?: CaseStudySection[];
  // Curateus App specific sections
  researchFoundations?: CaseStudySection[];
  designGoals?: string[];
  earlyExplorations?: CaseStudySection[];
  uiDesign?: CaseStudySection[];
  colorSystem?: CaseStudySection[];
  outcome?: string[];
  // STREE specific sections
  projectDuration?: string;
  projectContext?: string;
  problemSpace?: {
    why: string;
    context: string;
  } | CaseStudySection[];
  brief?: {
    intro: string;
    coreIntent: string;
    goals: string[];
  };
  research?: {
    method: string;
    participants: {
      count: number;
      demographics: string;
      ethics: string;
    };
    interviewGoals: string[];
    imagePlaceholder?: boolean;
  };
  synthesis?: {
    method: string;
    imagePlaceholders?: number;
  };
  keyInsights?: CaseStudySection[];
  userGoals?: {
    primary?: string;
    motivations?: string[];
    challenges?: string[];
  };
  personaIntro?: string;
  personaImage?: string;
  productStrategy?: {
    reframe: string;
    mentorFeedback: string;
    phases: CaseStudySection[];
  } | CaseStudySection[];
  solutionPhase?: {
    storyboard: string;
    modes: CaseStudySection[];
    imagePlaceholder?: boolean;
  };
  informationArchitecture?: {
    rationale: string;
    structure: {
      area: string;
      reason: string;
    }[];
    onboarding: string;
    imagePlaceholder?: boolean;
  } | CaseStudySection[];
  wireframing?: {
    approach: string;
    imagePlaceholder?: boolean;
  } | CaseStudySection[];
  usabilityTesting?: {
    intro: string;
    findings: string[];
  };
  finalDesign?: {
    changes: CaseStudySection[];
    screens: string;
    imagePlaceholder?: boolean;
  };
  impact?: {
    functional: string[];
    note: string;
  } | string[];
  closing?: string;
  // AlHub specific sections
  projectScope?: string[];
  redesignGoals?: CaseStudySection[];
  constraints?: string[];
  redesignApproach?: CaseStudySection[];
  keyScreens?: string[];
  beforeAfter?: {
    before: string[];
    after: string[];
  };
  // BrynQ specific sections
  legacyProblems?: CaseStudySection[];
  visionGoals?: CaseStudySection[];
  responsibilities?: CaseStudySection[];
  researchThemes?: CaseStudySection[];
  transformationPillars?: CaseStudySection[];
  workshopTypes?: string[];
  businessOutcomes?: string[];
  skillsStrengthened?: CaseStudySection[];
  closingReflection?: string;
  // Merry Health specific sections
  contextPoints?: string[];
  problemDefinition?: CaseStudySection[];
  systemModules?: CaseStudySection[];
  designSolutions?: CaseStudySection[];
  edgeCases?: CaseStudySection[];
  deliverables?: string[];
}
const caseStudies: Record<string, CaseStudyData> = {
  'merry-health': {
    title: "Redesigning India's Hospital Dispatch System",
    subtitle: "for Speed, Clarity & Operational Reliability",
    overview: "Emergency ambulance coordination in India happens under extreme pressure. Hospital admins must make rapid decisions while navigating unpredictable emergencies, limited information, high message volume, and multi-stakeholder communication. At Merry Health, these challenges were amplified by a dispatch process that depended heavily on manual phone calls, WhatsApp chats, and inconsistent data capture. This case study captures how we redesigned Merry Health into a multi-channel, integrated dispatch ecosystem.",
    role: "Research & Discovery, Strategy & Systems Thinking, Design Execution, Collaboration & Delivery",
    tools: ["Figma", "Miro", "Prototyping tools"],
    heroImage: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&q=80",
    contextPoints: ["Unpredictable emergencies", "Limited information", "High message volume", "Multi-stakeholder communication", "Low digital maturity", "Unreliable networks", "Fragmented workflows"],
    problemDefinition: [{
      title: "01 — WhatsApp was the real operating system",
      content: "Hospital admins trusted WhatsApp more than the dashboard. However, chats were unstructured, free-text, missing key data, dependent on human memory, and impossible to audit."
    }, {
      title: "02 — The dashboard was not designed for emergency scenarios",
      content: "Admins found it slow, overwhelming, missing essential fields, and not aligned with their real workflow. They reverted to WhatsApp—even though it created data loss."
    }, {
      title: "03 — Ride information was fragmented",
      content: "Admins jumped between WhatsApp, phone calls, verbal confirmation, Excel sheets, and their own memory. This produced inaccurate records, delays, and unclear handover."
    }, {
      title: "04 — No real-time visibility or unified timeline",
      content: "Hospitals had no reliable way to see whether the driver accepted, ETA changes, driver movement, pickup confirmation, or drop confirmation."
    }, {
      title: "05 — No system could handle peak-load situations",
      content: "When multiple emergencies came in minutes apart: messages overlapped, drivers got confused, admins lost track, and trips were duplicated or missed."
    }, {
      title: "06 — No structured handover process",
      content: "Hospitals needed a verifiable sequence: driver confirms, hospital receiving staff confirms, MHA closes the ride. But the old system left these steps scattered and inconsistent."
    }],
    designGoals: ["Make emergency intake lightning-fast", "Standardize communication across channels", "Provide real-time visibility across the entire ride", "Create a structured, audit-ready Record Model", "Reduce manual coordination and increase operational reliability", "Design a system that works even with poor networks, low literacy, and inconsistent behavior"],
    systemModules: [{
      title: "1. WhatsApp Integration (Primary Intake & Communication)",
      content: "For Hospital Admin, Drivers, Patient Party, and Read-only Hospital Group. Each message flow was explicitly mapped, structured, and linked to system Milestones."
    }, {
      title: "2. Web-based Dispatch System (Dashboard)",
      content: "Redesigned for Add Ride, Tracking, Ride Lists, Ride Details & Timeline, Handover Process, and Reports & KPIs. This dashboard becomes the single source of truth."
    }, {
      title: "3. Telematics + Routing Engine",
      content: "GPS ingestion at regular intervals, ETA prediction, automatic milestone detection, and fallback to coarse mode when GPS fails. The system never leaves the admin without visibility."
    }, {
      title: "4. Patient Communication Layer",
      content: "Real-time tracking link, IVR confirmation in regional language, and SMS fallback. Designed for accessibility and trust."
    }],
    designSolutions: [{
      title: "Solution 1: Emergency-Ready Add Ride Flow",
      content: "Reduced the Add Ride experience from minutes to seconds. Key enhancements: map-based pickup selection, minimal priority-first fields, auto-adjusting form based on request type, tappable ambulance and facility selection, required field indicators, and mobile-first layout."
    }, {
      title: "Solution 2: Structured WhatsApp Experience",
      content: "Hospital Admin sees: case confirmation, driver assigned, en route updates, live location, pickup & drop updates, ride closed. Driver receives: one-tap Accept/Reject, pickup navigation, automated prompts for milestones. Patient party receives: tracking link, driver details, IVR comfort call."
    }, {
      title: "Solution 3: A Unified Ride Timeline",
      content: "Created a linear, event-driven timeline showing: request received, driver assignment, movement events, pickup, drop, handover checks, and ride closure. This transforms Merry Health into a true operations platform."
    }, {
      title: "Solution 4: Intelligent Live Tracking Module",
      content: "Designed for high-pressure environments: status-based map markers, filters for case type/patient name/status, driver + vehicle cards, ETA updates, smooth transitions between multiple rides. Admins get an air-traffic-control view of all ambulances."
    }, {
      title: "Solution 5: Structured Handover Workflow",
      content: "Introduced a 3-step verification: Hospital staff acknowledgment, Driver acknowledgment, MHA final closure. Each step is timestamped—solving disputes and strengthening auditability."
    }, {
      title: "Solution 6: Reporting & KPIs",
      content: "The new Reporting module provides: trip volumes, billing summaries, response times, TAT patterns, case severity patterns, and export options (CSV, Excel, PDF). Hospitals move from chaotic data to actionable insights."
    }],
    edgeCases: [{
      title: "When WhatsApp fails",
      content: "SMS fallback and Dashboard intake ensure continuity."
    }, {
      title: "When GPS fails",
      content: "Coarse ETA calculation and manual milestone prompts keep operations running."
    }, {
      title: "When information is unclear",
      content: "Bot/MHA prompts for missing fields ensure data completeness."
    }, {
      title: "Driver unreachable",
      content: "Automatic escalation to next available driver."
    }, {
      title: "Duplicate bookings",
      content: "Automatically merged to prevent confusion."
    }, {
      title: "Hospital group not reachable",
      content: "Message diverted to individual admin as fallback."
    }],
    businessOutcomes: ["Faster Emergency Handling — Admins can intake requests instantly with minimal data entry", "Higher Ride Success & Completion Rates — Real-time visibility prevents miscommunication and delays", "Significant Drop in Manual Calls — Automatic updates replace follow-up calls", "Improved Hospital Trust — Clear timelines and standardized updates build confidence", "Better Reporting & Data Accuracy — The dashboard now acts as a complete, verifiable record", "Operational Efficiency — The system supports high-volume emergencies without overwhelming staff", "Higher Dashboard Adoption — Hospitals now see clear value in the platform—not just WhatsApp"],
    learnings: ["Real-world emergency systems need resilience, not perfection. Design must survive low network, broken workflows, and human unpredictability.", "WhatsApp is India's most adopted enterprise tool. Designing around WhatsApp—rather than replacing it—was critical.", "A system is only as strong as its fallback modes. Every workflow required a Plan B, C, and D.", "Mobile-first is not optional. Hospital admins coordinate while walking, talking, and multitasking.", "UI is only 30% of the solution. The other 70% is workflow logic, integrations, and system constraints.", "Collaboration across tech and operations shaped the final output. Design was deeply integrated with technical feasibility and real constraints."],
    deliverables: ["Full system workflows", "User journey maps", "Low-fidelity wireframes", "High-fidelity UI (web + mobile)", "WhatsApp message flow screens", "Android module UI", "Complete prototype", "Redesign strategy", "System specification documents", "Final presentation deck"]
  },
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
    painPoints: ["Frequent context switching reduced motivation to recommend content.", "The mobile-based workflow disrupted browsing and caused drop-offs.", "Manual entry steps made the process feel effort-heavy, especially for frequent curators."],
    marketInsight: "Competitive analysis showed that most browser extensions functioned as simple bookmarks rather than curation tools. Users preferred inline actions, instant tagging, and zero-friction saving mechanisms.",
    opportunity: "A focused, intuitive plugin enabling recommendations in a single, uninterrupted flow.",
    designApproach: [{
      title: "1. Defining the Ideal Flow",
      content: "I mapped a minimal-step recommendation journey anchored in inline interaction, quick tagging and categorization, non-intrusive UI, and compatibility with Curateus' existing backend. This ensured feasibility while maintaining user-first logic."
    }, {
      title: "2. Persona Development",
      content: "Based on interviews, I created a curator persona to guide decision-making around motivation, efficiency needs, and workflow patterns. The persona ensured design alignment with real user expectations."
    }, {
      title: "3. Concepting & Early Exploration",
      content: "Insights from competitor analysis and internal analytics informed the first set of sketches. I collaborated with developers through multiple iterations to validate constraints, optimize interactions, and refine the recommendation steps."
    }],
    wireframing: [{
      title: "Low-Fidelity Exploration",
      content: "Early wireframes focused on establishing clarity and reducing cognitive load. Key decisions included adding contextual headers to orient users, adding tooltips for feature discovery, and structuring the flow to minimize clicks. The wireframes were shared via Zeplin to streamline team feedback."
    }, {
      title: "High-Fidelity Design & Validation",
      content: "Once usability issues were addressed, I created high-fidelity screens aligned with the Curateus brand. Design considerations included a dark UI to differentiate plugin content from the browser page, a clean hierarchy for tag selection and preview, and a layout optimized for 1440 × 1024 px screens. Usability testing validated that the new flow eliminated unnecessary steps and supported fast, interruption-free recommendations."
    }],
    nextSteps: "Given that users encounter content primarily on desktop, the next recommendation is to extend the experience with a Curateus web app where curators can manage recommendations, profiles, and published content.",
    learnings: ["Plugins must reduce friction; this solution simplifies capturing, organizing, and tagging recommendations.", "Zeplin significantly accelerated design-to-development communication, though it introduced licensing constraints."],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  },
  'food-waste-ngo': {
    title: "Turning wasted food into meals",
    subtitle: "A Solution for NGOs and Restaurants",
    overview: "India produces enough food to nourish its population, yet millions still experience hunger daily. A large portion of edible food is lost at restaurants, events, and distribution centers due to overproduction, spoilage, or lack of timely coordination. NGOs working to redistribute surplus food face severe challenges in collecting it consistently. This project focuses on designing a digital platform that synchronizes restaurants, NGOs, and delivery partners to build an efficient food donation and redistribution ecosystem.",
    role: "UX research, UX design, UI design, Information Architecture",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    currentScenario: [{
      title: "1. Fragmented and Unpredictable Communication",
      content: "Restaurants notify NGOs about leftover food only after service hours or at irregular times. Because there is no centralized platform, NGOs often miss opportunities to collect food on time. Impact: Large amounts of edible food are wasted simply because NGOs never receive the information early enough."
    }, {
      title: "2. Lack of Logistics Infrastructure for NGOs",
      content: "Most NGOs do not have dedicated vehicles or staff to travel across the city to pick up surplus food. Last-minute pickups are extremely difficult to coordinate. Impact: Even when NGOs are notified, they cannot retrieve the food before spoilage occurs."
    }, {
      title: "3. High Time Sensitivity of Surplus Food",
      content: "Leftover food has a narrow consumption window. Without timely pickup, quality deteriorates quickly. Impact: Food that could feed dozens becomes unsafe and must be discarded."
    }, {
      title: "4. No Matching Between Available Food and NGO Needs",
      content: "There is no system to estimate food quantity, match it with demand, coordinate pickup/delivery, or confirm successful donation. Impact: The process relies on luck and manual coordination rather than structure."
    }, {
      title: "5. Human-Dependent Processes Are Too Fragile to Scale",
      content: "Phone calls, manual planning, and volunteer-based transport create a fragile network that collapses under pressure. Impact: The ecosystem fails daily—not due to lack of food, but lack of system design."
    }],
    researchInsights: {
      painPoints: ["Irregular notifications", "Lack of manpower to collect food", "High transportation cost", "Difficulty coordinating pickups from multiple locations", "High spoilage risk due to delays"],
      ngoQuotes: ["Leftover food is going to waste while people outside are starving.", "We often get notified too late to do anything about it.", "Transporting food on time is our biggest challenge."],
      opportunity: "There was a clear need for a centralized, coordinated system that provides real-time connectivity between restaurants and NGOs, assigns delivery partners automatically, manages time-sensitive pickups efficiently, and offers transparency and accountability across all stakeholders."
    },
    processFlow: [{
      title: "1. Reducing Notification Delays",
      content: "Restaurants can instantly upload surplus food; NGOs receive real-time notifications. Design Logic: Reduces dependency on manual communication, prevents delays that cause spoilage, and supports time-sensitive actions."
    }, {
      title: "2. Enabling Flexible Logistics Options",
      content: "NGOs can choose Delivery or Pickup depending on their capacity. Delivery Path: Assigns delivery partners automatically, handles rejections with fallback rules, ensures timely movement of food. Pickup Path: Allows NGOs to self-collect when feasible, suitable for nearby or bulk pickups."
    }, {
      title: "3. Accountability Through Decision Nodes",
      content: "Critical checkpoints ensure clarity and structured communication: Restaurant confirms quantity & readiness, NGO confirms collection preference, delivery partners accept or reject requests, NGOs are alerted when delivery fails. Design Logic: Minimizes uncertainty and ensures every donation has a clear owner."
    }, {
      title: "4. Defined Roles & Seamless Handoffs",
      content: "To avoid confusion: Restaurants → publish and prepare surplus, NGOs → validate and accept, Delivery partners → transport on time. The flow ensures each step has a clear responsible actor."
    }, {
      title: "5. End-to-End Transparency",
      content: "Everyone knows: What food is available, who is assigned, when pickup happens, when delivery is completed. This transparency is crucial to scaling and maintaining trust."
    }],
    informationArchitecture: [{
      title: "Restaurant App Sitemap",
      content: "Restaurants need fast, operationally simple workflows. The IA reflects their real-life processes. Home → Orders, Listings, Account. Orders include Active Orders (require immediate action) and Past Orders (history, proof, analytics). Listings include View (monitor current surplus) and Add Listing (quickly upload new surplus food). Account includes Profile, Location (for precise pickup routing), Wallet (delivery fee or donation credits), Insights (impact visualization), and Reviews."
    }, {
      title: "NGO App Sitemap",
      content: "NGOs prioritize discovering food, evaluating availability, and coordinating logistics. Home → Food, Search, Account. Food & Search support two behaviours: Browsing real-time surplus and Searching when they have specific needs. Account includes Profile & address book (frequent hotspots), Order history, Create order request (for demand-driven needs), Feedback, help, and contact, and Logout. This structure reduces repeated steps, supports low digital literacy, and creates operational efficiency."
    }],
    wireframing: [{
      title: "Low-Fidelity & High-Fidelity Wireframes",
      content: "Wireframes were developed to validate flows, simplify interactions, and ensure clarity for all user groups. Iterations focused on minimizing steps, prioritizing visibility of time-sensitive tasks, creating visual hierarchy for urgency, and supporting users with limited bandwidth or devices."
    }],
    impact: ["Reduce food wastage significantly", "Improve NGO efficiency and reach", "Leverage delivery networks for last-mile distribution", "Increase timely pickups", "Create a scalable, transparent food redistribution model"],
    learnings: ["This project highlighted how systemic problems require systemic solutions.", "Logistics and UX cannot be separated in time-sensitive ecosystems.", "Small operational gaps multiply into large-scale failures.", "Technology can transform humanitarian workflows when designed around real user capacities.", "Hunger is not caused by scarcity, but by broken distribution systems.", "Thoughtful UX can directly contribute to social impact."]
  },
  'curateus-app': {
    title: "Curateus v2.0",
    subtitle: "Transforming content discovery through human curation",
    overview: "Curateus is a content discovery platform built on a simple idea: human recommendations lead to deeper, more meaningful consumption than algorithmic feeds. In a digital world where people are overwhelmed by choice, misinformation, and algorithm fatigue, Curateus aims to help users find what truly matters—through expert curation, community recommendations, and interest-driven discovery. This case study documents the transformation of Curateus from an MVP into a scalable v2.0 application with a refined content experience, dual user modes (curators + subscribers), and an updated UI system.",
    role: "UI Designer (working closely with the Founder & Product Owner)",
    tools: ["Figma", "Illustrator", "Invision", "Zeplin"],
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
    problemSpace: [{
      title: "1. Information Overload",
      content: "There is too much content and too little time. Users struggle to cut through noise to find high-quality material."
    }, {
      title: "2. Algorithm-Driven Bubbles",
      content: "Recommendation engines prioritize engagement, not quality. This leads to repetitive suggestions, mainstream bias, and missing out on niche, long-tail content."
    }, {
      title: "3. Fragmentation",
      content: "Content is spread across many apps. Users constantly switch contexts, save links across multiple devices, and lose track of what they want to consume. The deeper issue: People no longer trust that the content they are shown is the best content available."
    }],
    researchFoundations: [{
      title: "Content Producers (Netflix, Medium, Spotify)",
      content: "Issues: Recommendations restricted to internal catalogs, engagement-driven not satisfaction-driven, no unified discovery across mediums."
    }, {
      title: "Recommendation Apps (Pocket, Instapaper, JustWatch)",
      content: "Issues: Lacks serendipity, focus on mainstream content, poor support for multi-format discovery, fragmented workflows for reading/watching/listening."
    }, {
      title: "Social Media Platforms",
      content: "Issues: Not designed for intentional curation, recommendations disappear in noisy feeds, public recommendations ≠ personal recommendations."
    }, {
      title: "Human Curation Platforms (Letterboxd, Beyond, Curateus MVP)",
      content: "Strengths: Intention-first discovery, trust built through human gatekeepers, community-led curation, increased satisfaction vs algorithmic feeds. This category validated Curateus' business vision and potential."
    }],
    designGoals: ["Build Trust Through Human Curation — Shift from algorithm-first to intention-first content discovery.", "Support Both Curators and Subscribers — The MVP only supported curators. v2.0 needed a dual-experience model: Curators → publish, draft, manage content; Subscribers → discover, save, follow, personalize.", "Create a Unified Visual System — The existing UI lacked hierarchy, consistency, and scalability.", "Simplify Content Workflows — Saving, drafting, curating, searching, bookmarking — all needed clarity and predictability."],
    earlyExplorations: [{
      title: "Why Sketch First?",
      content: "Sketching allowed rapid exploration before committing to UI direction. It ensured all business requirements were represented early. Sketches explored homefeed layouts, metadata card variations, preference selection workflows, save-for-later interactions, draft creation vs publishing, curator public vs private view, and search & no-results states."
    }, {
      title: "Key Insights",
      content: "Users needed a clear separation between 'saving content' and 'recommending content.' Curators required private and public states for their recommendations. Subscribers needed strong onboarding to personalize their feed."
    }],
    informationArchitecture: [{
      title: "Core Modules",
      content: "The app was divided based on mental models: Homefeed → personalized discovery, Discover → explore new curators/topics, My Preferences → personalize interests, Bookmarks → save content privately, Drafts → work-in-progress recommendations, Curator Public Profile → trust-building identity, Search → find topics, curators, and content."
    }, {
      title: "Save for Later",
      content: "Users gather content before deciding whether to recommend. This flow needed to be low-friction and device-friendly."
    }, {
      title: "Metadata Page",
      content: "Curators need context (title, description, tags, source), and users must evaluate credibility quickly."
    }, {
      title: "Draft to Publish",
      content: "Curators often iterate. Drafts must be accessible, editable, and clearly distinguished from public recommendations."
    }, {
      title: "Onboarding Preferences",
      content: "Subscribers only trust human curation when it aligns with their interests. Personalization was essential to early engagement."
    }],
    uiDesign: [{
      title: "Content Above Interface",
      content: "UI elements intentionally stay neutral to let curated content shine."
    }, {
      title: "Trust Through Simplicity",
      content: "Minimalistic layouts communicate transparency and editorial integrity."
    }, {
      title: "Warm, Approachable Typography",
      content: "Nunito was chosen for high readability, rounded forms (friendly, modern), and versatile weights for hierarchy."
    }],
    colorSystem: [{
      title: "Primary Colors (Turquoise Family)",
      content: "Represents freshness, curiosity, discovery, and calmness. Chosen to differentiate Curateus from algorithm-heavy tech platforms that use darker, more aggressive palettes."
    }, {
      title: "Neutrals (#181818 & #CECECE)",
      content: "Provide high readability, focus on content, and balanced UI elements."
    }, {
      title: "Semantic Colors",
      content: "Used sparingly to convey feedback, support interactive states, and improve accessibility."
    }],
    outcome: ["A scalable dual-experience model — Curators and subscribers now have distinct, intuitive workflows.", "A refined UI language — Consistent typography, spacing, colors, and components.", "Improved discoverability — Personalized onboarding and structured feeds.", "Reduced friction for curators — Draft management, metadata entry, save-for-later workflow.", "Stronger brand identity — A unified visual system aligned with Curateus' positioning as a premium curation platform."],
    learnings: ["Designing for both creators and consumers requires balancing complexity.", "Even UI-driven projects benefit significantly from research.", "Human-curated systems demand interfaces that clearly communicate trust.", "Establishing a design system early prevents screen-level inconsistencies.", "Working directly with a founder/PO sharpens prioritization and product reasoning.", "Thoughtful UI can elevate a brand built on trust, expertise, and meaningful content discovery."]
  },
  'stree-safety-app': {
    title: "STREE",
    subtitle: "Designing a Virtual Safety Assistant for Women in India",
    overview: "Harassment in public spaces restricts women's freedom of movement, participation in public life, and overall wellbeing. While existing safety tools focus on post-incident response, fear often exists long before an incident and lingers long after. Project Stree explores how design can support women across the entire safety journey: before, during, and after unsafe experiences.",
    role: "UX Research • UX Design • UI Direction",
    projectDuration: "3 Iterations • 26 Screens",
    projectContext: "This project was completed as part of the IIT PG Diploma program, working with a team of 5 people. My responsibility was UX Research and UX Design, along with suggesting the direction for UI design.",
    heroImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
    problemSpace: {
      why: "Safety, for women, is not a single moment. It is a continuous state shaped by perception, environment, and systemic response. Most existing safety products focus only on emergencies. We wanted to understand what safety actually means in everyday life.",
      context: "Fear is influenced by location, time of day, social context, and cultural attitudes. Even when no incident occurs, the anticipation of risk shapes behaviour: choosing longer routes, avoiding places, or limiting mobility altogether."
    },
    brief: {
      intro: "Women across India lack a reliable digital tool that supports them during commutes. The existing safety apps fail due to poor network reliability, complex interfaces during panic, and lack of emotional support after incidents.",
      coreIntent: "Create a smart, reliable, low-friction safety companion that women can depend on during vulnerable moments—supporting them before, during, and after unsafe experiences.",
      goals: ["Support women before an incident by helping them make informed decisions", "Enable quick and reliable action during an incident", "Support reporting and emotional recovery after an incident", "Prioritise accessibility, privacy, and emotional sensitivity"]
    },
    research: {
      method: "We chose contextual interviews as our primary research method to deeply understand the problem from lived experiences.",
      participants: {
        count: 15,
        demographics: "Women aged 25-35 from Pune, Bangalore, Delhi, Mumbai, and Kerala",
        ethics: "Given the sensitive nature of the topic, we ensured all participant information remained anonymous. Every piece of information was documented with care and consent."
      },
      interviewGoals: ["How women define safety in their daily lives", "Past experiences of harassment and how they responded", "Safety concerns across different spaces (travel, work, public areas)", "Current technology use for safety and its limitations", "Who they approach for help and why"],
      imagePlaceholder: true
    },
    synthesis: {
      method: "We used affinity mapping on Miro to synthesise the information gathered from interviews. All notes were broken down into individual observations and clustered repeatedly to distinguish between what participants explicitly said, what they felt but struggled to articulate, and what behaviours emerged across multiple interviews.",
      imagePlaceholders: 3
    },
    keyInsights: [{
      title: "Safety means independence",
      content: "Women described safety as the ability to live independently without fear. \"I want safety without feeling controlled.\""
    }, {
      title: "Harassment is not limited to strangers",
      content: "Offenders are often known people, which complicates reporting. During incidents, many women freeze rather than react, often questioning whether their discomfort is justified."
    }, {
      title: "Bystanders rarely intervene",
      content: "Especially in public spaces. Reporting systems are perceived as slow or ineffective, leading many women to stop reporting entirely."
    }, {
      title: "Emotional recovery is long-lasting",
      content: "Experiences are shared only within close circles due to shame or fear of judgement. Post-incident emotional impact lingers for long periods."
    }, {
      title: "Safety perception is contextual",
      content: "What feels unsafe at 2 PM feels very different at 11 PM. Women adapted behaviour constantly: changing routes, avoiding spaces, travelling in groups."
    }],
    userGoals: {
      primary: "Feel safe while traveling alone, especially at night or in unfamiliar environments.",
      motivations: ["Freedom", "Independence", "Confidence", "Reliability"],
      challenges: ["Quick navigation during panic", "Visibility of system states (Is SOS active? Who got notified?)", "Avoiding cognitive overload", "Clarity around what information contacts receive", "Recovery from user error"]
    },
    personaIntro: "We brought all research findings together into a persona representing the goals, motivations, and challenges of our target users.",
    personaImage: "/assets/stree-persona.png",
    productStrategy: {
      reframe: "Based on research insights, we reframed the design challenge: How might we design a system that supports women before, during, and after safety incidents, without increasing fear or judgement?",
      mentorFeedback: "Mentor feedback raised concerns about unintended consequences, such as labelling places as unsafe and reinforcing fear. This led to a more nuanced design direction where safety maps were reframed as contextual and time-sensitive rather than absolute labels.",
      phases: [{
        title: "Before an incident",
        content: "Women needed awareness without alarm. Contextual awareness through crowdsourced safety maps and nearby safe spaces, framed as guidance rather than warnings."
      }, {
        title: "During an incident",
        content: "Women needed simplicity and speed. Quick actions like location sharing, emergency alerts, and passive evidence capture. SOS works even with locked screen and poor network."
      }, {
        title: "After an incident",
        content: "Women needed validation, recovery, and accountability. Anonymous sharing, support groups, and simplified reporting flows with visibility into what happens next."
      }]
    },
    solutionPhase: {
      storyboard: "To test whether our ideas worked together as a system, we created a storyboard following a young woman moving cities for education, navigating unfamiliar spaces, experiencing harassment, and gradually finding support through the platform. This exposed gaps that feature lists often hide: moments of loneliness, doubt, and emotional fatigue.",
      modes: [{
        title: "Offline Mode",
        content: "Shows last live location, last updated time, destination & transport type, closest police station, and contact details. Network unreliability should not compromise safety."
      }, {
        title: "Live Mode",
        content: "Provides video stream, current location, real-time route deviation detection, contact + official notifications, visible journey status, and estimated arrival time updates."
      }],
      imagePlaceholder: true
    },
    informationArchitecture: {
      rationale: "The architecture prioritised quick access to safety actions while keeping supportive and reflective spaces available without overwhelming the user. Accessibility was considered throughout: vernacular language support, minimal text, and icon-based navigation.",
      structure: [{
        area: "Home + SOS",
        reason: "All safety actions centered here for minimal thought during emergencies"
      }, {
        area: "Maps",
        reason: "Contextual safety information and nearby safe spaces"
      }, {
        area: "Profile & Contacts",
        reason: "Emergency contact management and preferences"
      }, {
        area: "Settings",
        reason: "Permissions and privacy controls"
      }],
      onboarding: "Progressive onboarding, not overwhelming. Walkthrough → Profile → Permissions → Emergency Contacts → Locations. Give users a sense of control and transparency.",
      imagePlaceholder: true
    },
    wireframing: {
      approach: "We created wireframes around the ideas generated from affinity mapping and research synthesis. Each wireframe addressed specific insights, from quick SOS access to emotional support features.",
      imagePlaceholder: true
    },
    usabilityTesting: {
      intro: "After initial wireframe iterations, we conducted usability testing with a few users to understand expectations and identify friction points.",
      findings: ["Users wanted profile pictures for quicker identification", "Lockscreen SOS drastically improved perceived safety", "Emergency contacts must receive start + end notifications", "Users needed immediate feedback after pressing SOS", "Need for clarity around what information contacts receive", "Users expected dynamic ETA updates"]
    },
    finalDesign: {
      changes: [{
        title: "Full-Width SOS Button",
        content: "High visibility under stress, easy thumb reach."
      }, {
        title: "Journey Card with ETA + Route",
        content: "Reduces cognitive load; reassures the user with contact visibility."
      }, {
        title: "Calm Color System",
        content: "Soft purples + neutrals → safe, calm, non-threatening palette."
      }, {
        title: "Lock Screen Shortcut",
        content: "Instant SOS activation in real emergencies."
      }, {
        title: "Refined Icons & Microcopy",
        content: "Provide clarity during panic situations."
      }],
      screens: "Login / Sign Up, Permissions, Emergency Contacts, Preferred Locations, Live Map, SOS Mode (Live & Offline), SOS End Flow, Settings & Profile.",
      imagePlaceholder: true
    },
    impact: {
      functional: ["Faster SOS activation with minimal taps", "Increased clarity in journey status", "Transparent communication with contacts", "Reduced hesitation in using safety features"],
      note: "Since this was an academic project, the app was not released for real-world deployment. The impact metrics are based on usability testing feedback and projected outcomes."
    },
    learnings: ["Designing for safety is as much about emotional design as it is about functionality.", "Fear, doubt, and social conditioning play a significant role in how women experience risk.", "Not every insight demands a feature, and not every problem can—or should—be solved through technology alone.", "I learned to navigate ambiguity, accept feedback that challenged assumptions, and design with empathy rather than urgency.", "Most importantly, I learned how to tell a clear, compelling research story: connecting evidence to decisions and decisions to outcomes."],
    closing: "Project Stree reflects my approach to UX research and design: grounded in lived experiences, guided by evidence, and shaped by responsibility. It demonstrated how thoughtful design can address sensitive, complex problems, not by providing all the answers, but by asking the right questions and designing with care."
  },
  'alhub-app': {
    title: "AlHub",
    subtitle: "Mobile App UI Redesign for a Lifestyle & Voucher Platform",
    overview: "AlHub is a lifestyle platform available in the UAE and Gulf countries, offering users access to retail vouchers, deals, and redeemable offers across fashion, lifestyle, food, and entertainment brands. The founders wanted a complete visual overhaul of the app's UI while retaining the existing user flows, all app interactions, and the current app structure. This was strictly a UI redesign project, not UX restructuring.",
    role: "Freelance UI Designer (Working directly with the founders and development team)",
    tools: ["Figma", "Illustrator", "Zeplin"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    projectScope: ["UI redesign for the entire mobile app", "Updated visual language", "Style consistency across screens", "Enhanced clarity, spacing, typography, and brand alignment", "Delivery-ready developer handoff"],
    redesignGoals: [{
      title: "1. Modernize the Visual Identity",
      content: "The existing interface felt dated and inconsistent. The goal was to adopt a cleaner, more premium look that aligns with lifestyle brands in the UAE."
    }, {
      title: "2. Improve Visual Hierarchy & Readability",
      content: "Since users mainly scroll through offers and vouchers, the interface needed better spacing, clearer card structures, hierarchy-driven layouts, and strong contrast for readability in bright outdoor environments."
    }, {
      title: "3. Maintain Existing UX & Workflows",
      content: "The founders were explicit: no changes to layout, navigation, or features. Only visual refinement was allowed, ensuring current users would not experience disruption."
    }, {
      title: "4. Enhance Brand Appeal for Partnerships",
      content: "A polished UI helps strengthen the app's credibility with partner brands, retailers, and influencers."
    }],
    constraints: ["No altering user journeys", "No modifying screen flow or navigation", "No adding or removing features", "No changing core layouts or component placement", "All enhancements had to be visual only"],
    redesignApproach: [{
      title: "1. Establish a Consistent Visual Language",
      content: "I audited the existing screens to identify inconsistencies in typography, spacing, icon styles, colors, card shapes, and alignment. Then I created a refined, consistent UI system that could be applied across all screens."
    }, {
      title: "2. Modern Typography",
      content: "A new font pairing was introduced to reflect a lifestyle & premium feel while still being highly readable."
    }, {
      title: "3. Refined Color Palette",
      content: "Colors were adjusted to feel more modern, energetic, and balanced—aligned with lifestyle brands in Dubai. The palette supports vouchers, price highlights, call-to-actions, and categories."
    }, {
      title: "4. Component Cleanup",
      content: "Buttons, cards, input fields, icons, and voucher elements were redesigned for consistency, clarity, minimalism, and developer-friendliness."
    }, {
      title: "5. Enhancing the Voucher Experience",
      content: "Since voucher redemption is the core of AlHub, emphasis was placed on clean card layout, clear voucher value, bold CTA visibility, easy scannability, and brand-aligned look for partners."
    }, {
      title: "6. Developer Collaboration",
      content: "I worked closely with the dev team to ensure all designs were feasible, visuals aligned with the existing architecture, and component specs, spacing, and interactions were documented in Zeplin."
    }],
    keyScreens: ["Home page (voucher categories, featured offers)", "Voucher detail page", "Redemption screen", "Transaction history", "Login/Signup", "Wallet & Rewards", "Profile & Settings"],
    beforeAfter: {
      before: ["UI felt outdated and cluttered", "Spacing and contrast issues affected readability", "Inconsistent elements created a visually fragmented experience", "Voucher cards lacked hierarchy and premium appeal"],
      after: ["Polished, modern lifestyle aesthetic", "Better clarity and readability", "More professional and credible brand image", "Consistent visual language across all screens", "Developers able to implement the redesign seamlessly"]
    },
    learnings: ["UI-only redesigns require deep respect for existing UX decisions.", "Working within strict constraints sharpens design discipline.", "Visual consistency is foundational to brand credibility.", "Developer collaboration early in the process prevents handoff issues.", "Premium aesthetics can be achieved through spacing, typography, and restraint.", "A polished UI directly impacts partnership opportunities and brand trust."]
  },
  'brynq': {
    title: "BrynQ",
    subtitle: "Transforming a Legacy B2B iPaaS into a Modern Integration Platform",
    overview: "BrynQ is a B2B Integration Platform-as-a-Service (iPaaS) that enables organizations—mostly HR and payroll teams—to automate data flows between systems. When I joined the company, the platform existed in its earlier form as SalureConnect, a legacy system built with strong functionality but limited user experience, inconsistent UI patterns, and workflows that had grown more complex over time. Over multiple years, I worked closely with the Product Owner, developers, stakeholders, and external freelancers to modernize the entire platform, redesign core workflows end-to-end, improve usability for both technical and non-technical users, establish design governance and design system foundations, introduce new capabilities such as AI-assisted interface creation, and evolve a fragmented legacy tool into a scalable, future-ready product.",
    role: "UX + Product Design • UI Design • Research & Evaluation • Technical Collaboration • Governance & Design Operations",
    projectDuration: "Multi-year engagement • NDA-Compliant Case Study",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    legacyProblems: [{
      title: "1. Fragmented User Experience",
      content: "Navigation, terminology, and layout varied across modules."
    }, {
      title: "2. Lack of Clarity for Non-Technical Users",
      content: "Interface status, system health, and error visibility were not intuitive."
    }, {
      title: "3. Increasing Product Complexity",
      content: "New features had been added over time without a cohesive UX strategy."
    }, {
      title: "4. Confusing Test vs Live Interface Behavior",
      content: "Users often did not understand what environment they were working in, what actions affected live systems, or how changes propagated."
    }, {
      title: "5. Support Teams Were Overwhelmed",
      content: "Users frequently contacted support because the platform lacked guidance and explanation."
    }, {
      title: "6. No Design System",
      content: "The UI was inconsistent across fonts, colors, spacing, and interactions."
    }, {
      title: "7. Unscalable Information Architecture",
      content: "As new features were added, navigation and discoverability became less intuitive."
    }],
    visionGoals: [{
      title: "1. Clarity",
      content: "At a glance, users should know system status, interface health, recent activity, and urgent actions."
    }, {
      title: "2. Predictability & Control",
      content: "Workflows needed to be explicit and reversible."
    }, {
      title: "3. Self-Service",
      content: "Non-technical customers should be able to manage integrations without depending on support or developers."
    }, {
      title: "4. Scalability",
      content: "A robust UX and UI foundation that supports years of new features."
    }, {
      title: "5. Intelligence",
      content: "AI-assisted creation and guided workflows for faster setup."
    }],
    responsibilities: [{
      title: "UX + Product Design",
      content: "Restructured navigation & platform information architecture. Designed new workflows (Test/Live, editing, approvals, logs). Introduced a multi-step governance flow for publishing changes."
    }, {
      title: "UI Design",
      content: "Brought visual consistency with a new design system (typography, colors, spacing, components). Designed dashboards, modals, forms, and visual language patterns."
    }, {
      title: "Research & Evaluation",
      content: "Conducted user interviews. Mapped user behavior models. Analyzed gaps in current platform usage. Facilitated internal workshops (including event storming)."
    }, {
      title: "Technical Collaboration",
      content: "Worked with developers daily. Ensured designs were buildable. Defined requirements & edge-case handling. Aligned on constraints and dependencies."
    }, {
      title: "Governance & Design Operations",
      content: "Structured Figma files & naming conventions. Created internal documentation. Managed workflows with freelancers. Supported design system scalability."
    }],
    researchThemes: [{
      title: "Insight 1 — Users Fear \"Breaking Something\"",
      content: "Non-technical users worried that small actions might impact live integrations."
    }, {
      title: "Insight 2 — Lack of Environmental Clarity",
      content: "Users could not distinguish between test and live environments, leading to confusion and errors."
    }, {
      title: "Insight 3 — Logs Were Not Actionable",
      content: "Users saw errors but did not know how to interpret or resolve them."
    }, {
      title: "Insight 4 — Interface Creation Was Overwhelming",
      content: "Custom integrations required too much manual input and technical knowledge."
    }, {
      title: "Insight 5 — Support Was Over-Reliant",
      content: "Users relied on the support team for tasks they could perform themselves—if the UI guided them."
    }, {
      title: "Insight 6 — Navigational Overload",
      content: "Users struggled to understand where to begin and what actions to prioritize."
    }],
    transformationPillars: [{
      title: "PILLAR 1 — Redesigning the Platform Foundation",
      content: "Home Dashboard Overhaul: Transformed the homepage into an operational monitoring hub showing system health, error visibility, quick access to logs, and run status. Logs Redesign: Created clearer grouping, human-readable error explanations, suggested next steps, and consistent terminology. Information Architecture: Simplified navigation into Monitor, Interfaces, Settings, Account, and Logs."
    }, {
      title: "PILLAR 2 — Interface Lifecycle Redesign",
      content: "Clear Separation of Test and Live Interfaces: Introduced distinct visual styling, rules for auto-creating test interfaces, explicit sync logic, and warnings before applying changes. Interface Overview Page: Enhanced with expandable cards, run buttons with visible states, direct links to logs, and status indicators. Editing & Approval Workflow: Designed Edit → Review → Confirm → Activate governance model reducing system failures."
    }, {
      title: "PILLAR 3 — Designing New Features That Modernize BrynQ",
      content: "AI-Assisted Interface Creation Wizard: Step-based conversational input, scenario mapping, data flow visualization, transformation summary, and validation steps—making integration setup accessible to non-technical users. Template-Based Creation Modal: Replaced outdated dropdowns with AI creation, template selection, and custom setup options. Scenario Submission Wizard: Streamlined flow for contact details, data mapping, transformation logic, system authorizations, and sequencing rules."
    }, {
      title: "PILLAR 4 — Design System & UX Governance",
      content: "Establishing the BrynQ Design System: Typography scale documentation, color palette refinement, spacing + grid system, interactive states, and patterns for cards, tables, and modals. Figma Governance: Introduced work files, stakeholder review files, final handoff files, and beta files. Freelancer Collaboration: Created clear requirements, structured feedback loops, daily syncs, and onboarding documentation."
    }],
    workshopTypes: ["Event storming for test/live flows", "Problem-mapping for logs clarity", "Action management system conception", "Scenario flow alignment"],
    businessOutcomes: ["Reduced support tickets", "Higher confidence for non-technical users", "More predictable and safer interface editing", "Better visibility into system health", "Smoother onboarding for new integrations", "Improved developer efficiency due to cleaner requirements", "Stronger foundation for future features (AI, metrics, actions)"],
    skillsStrengthened: [{
      title: "Systems Thinking",
      content: "Designing for interconnected workflows across environments."
    }, {
      title: "Enterprise UX Skills",
      content: "Balancing complexity with usability for technical and non-technical users."
    }, {
      title: "Alignment Across Teams",
      content: "Bringing product, engineering, support, and external designers to a shared understanding."
    }, {
      title: "Design Governance",
      content: "Building scalable foundations rather than isolated screens."
    }, {
      title: "Strategic Product Design",
      content: "Understanding how each design decision impacts the platform's long-term evolution."
    }],
    closingReflection: "This case study represents not just a redesign, but a product transformation. From legacy patterns in SalureConnect to a modern, AI-enabled, user-friendly iPaaS platform, I contributed across UX strategy, research, system design, UI redesign, process governance, new feature invention, and team alignment. BrynQ's shift into a future-ready product is a collective achievement, and this multi-year project represents some of my most impactful enterprise design work.",
    learnings: ["Enterprise UX requires balancing complexity with clarity.", "Multi-year projects demand design governance from the start.", "Cross-functional alignment is as important as pixel-perfect design.", "Legacy systems transformation needs empathy for existing users.", "AI-assisted features must be designed for non-technical users first.", "Design systems enable scalability and consistency across teams.", "Product transformation is a collective achievement requiring sustained collaboration."]
  }
};
const CaseStudy = () => {
  const {
    slug
  } = useParams();
  const study = slug ? caseStudies[slug] : null;
  if (!study) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Case study not found</h1>
          <Link to="/#work" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to work
          </Link>
        </div>
      </div>;
  }
  return <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 bg-background/80 backdrop-blur-sm">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
              {study.projectDuration && <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Duration</h3>
                  <p className="text-sm">{study.projectDuration}</p>
                </div>}
              {study.timeline && <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Timeline</h3>
                  <ul className="text-sm space-y-1">
                    {study.timeline.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>}
              {study.tools && <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Tools</h3>
                  <p className="text-sm">{study.tools.join(', ')}</p>
                </div>}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      {study.challenge && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Challenge</h2>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">{study.challenge}</p>
          </div>
        </section>}

      {/* Solution */}
      {study.solution && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Solution</h2>
            <p className="text-lg leading-relaxed">{study.solution}</p>
          </div>
        </section>}

      {/* Current Scenario (for food waste project) */}
      {study.currentScenario && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Current Scenario</h2>
            <p className="text-lg text-muted-foreground mb-12">Systemic Breakdowns in the Existing Ecosystem</p>
            <div className="space-y-10">
              {study.currentScenario.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Research Insights (for food waste project) */}
      {study.researchInsights && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Research Insights</h2>
            
            {study.researchInsights.painPoints && <div className="mb-12">
                <h3 className="font-serif text-2xl mb-6">NGO Pain Points</h3>
                <ul className="space-y-3">
                  {study.researchInsights.painPoints.map((point, i) => <li key={i} className="flex gap-4">
                      <span className="text-muted-foreground">•</span>
                      <span>{point}</span>
                    </li>)}
                </ul>
              </div>}
            
            {study.researchInsights.ngoQuotes && <div className="mb-12 space-y-4">
                <h3 className="font-serif text-xl mb-6">NGO Quotes</h3>
                {study.researchInsights.ngoQuotes.map((quote, i) => <blockquote key={i} className="border-l-2 border-border pl-6 italic text-muted-foreground">
                    "{quote}"
                  </blockquote>)}
              </div>}
            
            {study.researchInsights.opportunity && <div className="p-6 border border-border bg-card">
                <p className="font-serif text-lg">
                  <span className="text-muted-foreground">Opportunity: </span>
                  {study.researchInsights.opportunity}
                </p>
              </div>}
          </div>
        </section>}

      {/* Process Flow (for food waste project) */}
      {study.processFlow && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Process Flow</h2>
            <p className="text-lg text-muted-foreground mb-12">Logic & Design Reasoning</p>
            <div className="space-y-10">
              {study.processFlow.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Problem Space - handles both STREE object format and Curateus array format */}
      {study.problemSpace && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            {'why' in study.problemSpace ?
        // STREE format - compact visual
        <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border-l-2 border-primary/30">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Why This Project Mattered</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.problemSpace.why}</p>
                </div>
                <div className="p-6 border-l-2 border-primary/30">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">The Problem Space</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.problemSpace.context}</p>
                </div>
              </div> :
        // Curateus array format
        <>
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Problem Space</h2>
                <p className="text-lg text-muted-foreground mb-12">The Modern Content Dilemma</p>
                <div className="space-y-10">
                  {study.problemSpace.map((item, i) => <div key={i}>
                      <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>)}
                </div>
              </>}
          </div>
        </section>}

      {/* Research Foundations (for Curateus App) */}
      {study.researchFoundations && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Research Foundations</h2>
            <p className="text-lg text-muted-foreground mb-12">Competitive Audit Across Content Ecosystems</p>
            <div className="space-y-10">
              {study.researchFoundations.map((item, i) => <div key={i} className="p-6 border border-border">
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Design Goals (for Curateus App) */}
      {study.designGoals && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Design Goals for v2.0</h2>
            <div className="space-y-6">
              {study.designGoals.map((goal, i) => <div key={i} className="flex gap-4">
                  <span className="font-serif text-2xl text-muted-foreground">{i + 1}.</span>
                  <p className="text-lg leading-relaxed">{goal}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Early Explorations (for Curateus App) */}
      {study.earlyExplorations && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Early Explorations</h2>
            <div className="space-y-12">
              {study.earlyExplorations.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Information Architecture - Curateus array format only (STREE has its own section after Solution Design) */}
      {study.informationArchitecture && !('rationale' in study.informationArchitecture) && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Information Architecture</h2>
            <p className="text-lg text-muted-foreground mb-12">Workflow Logic & Reasoning</p>
            <div className="space-y-12">
              {study.informationArchitecture.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* UI Design Principles (for Curateus App) */}
      {study.uiDesign && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">UI Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {study.uiDesign.map((item, i) => <div key={i} className="space-y-3">
                  <h3 className="font-serif text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Color System (for Curateus App) */}
      {study.colorSystem && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Color System</h2>
            <div className="space-y-10">
              {study.colorSystem.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Outcome (for Curateus App) */}
      {study.outcome && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Outcome</h2>
            <p className="text-lg text-muted-foreground mb-8">Curateus v2.0 delivered:</p>
            <ul className="space-y-4">
              {study.outcome.map((item, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-lg">{item}</span>
                </li>)}
            </ul>
          </div>
        </section>}

      {/* Team (only if exists) */}
      {study.team && <section className="px-6 lg:px-12 py-16 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Team & Tools</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl mb-4">Team</h3>
                <ul className="space-y-2">
                  {study.team.map((member, i) => <li key={i} className="text-muted-foreground">{member}</li>)}
                </ul>
              </div>
              {study.tools && <div>
                  <h3 className="font-serif text-xl mb-4">Tools</h3>
                  <p className="text-muted-foreground">{study.tools.join(', ')}</p>
                </div>}
            </div>
          </div>
        </section>}

      {/* Problem Understanding (for curateus) */}
      {study.painPoints && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Problem Understanding</h2>
            <h3 className="font-serif text-2xl mb-8">Key User Pain Points</h3>
            <p className="text-muted-foreground mb-6">User interviews and behavioral data revealed that:</p>
            <ul className="space-y-4 mb-12">
              {study.painPoints.map((point, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span>{point}</span>
                </li>)}
            </ul>
            
            {study.marketInsight && <>
                <h3 className="font-serif text-2xl mb-4">Market Insight</h3>
                <p className="text-muted-foreground mb-8">{study.marketInsight}</p>
              </>}
            
            {study.opportunity && <div className="p-6 border border-border bg-background">
                <p className="font-serif text-lg">
                  <span className="text-muted-foreground">Opportunity: </span>
                  {study.opportunity}
                </p>
              </div>}
          </div>
        </section>}

      {/* Design Approach */}
      {study.designApproach && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Design Approach</h2>
            <div className="space-y-12">
              {study.designApproach.map((step, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Wireframing - array format only (STREE has its own section after Solution Design) */}
      {study.wireframing && !('approach' in study.wireframing) && <section className="px-6 lg:px-12 py-16 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Wireframing</h2>
            <div className="space-y-12">
              {study.wireframing.map((step, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* STREE: Brief Section */}
      {study.brief && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Brief</h2>
            <p className="text-muted-foreground mb-6">{study.brief.intro}</p>
            <div className="p-6 bg-card border-l-4 border-primary mb-8">
              <p className="font-serif text-lg italic">{study.brief.coreIntent}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {study.brief.goals.map((goal, i) => <div key={i} className="flex gap-3 text-sm">
                  <span className="text-primary font-medium">{i + 1}.</span>
                  <span className="text-muted-foreground">{goal}</span>
                </div>)}
            </div>
          </div>
        </section>}

      {/* STREE: Research Phase */}
      {study.research && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Phase 1</span>
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Research</h2>
            </div>
            <p className="text-muted-foreground mb-8">{study.research.method}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-background border border-border">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Participants</h4>
                <p className="text-2xl font-serif mb-1">{study.research.participants.count}</p>
                <p className="text-xs text-muted-foreground">{study.research.participants.demographics}</p>
              </div>
              <div className="p-4 bg-background border border-border md:col-span-2">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Ethics</h4>
                <p className="text-sm text-muted-foreground">{study.research.participants.ethics}</p>
              </div>
            </div>

            <div className="p-6 border border-border">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Interview Goals</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {study.research.interviewGoals.map((goal, i) => <div key={i} className="flex gap-2 text-sm">
                    <span className="text-primary/50">→</span>
                    <span className="text-muted-foreground">{goal}</span>
                  </div>)}
              </div>
            </div>

            {/* Interview Documentation for STREE */}
            {slug === 'stree-safety-app' && (
              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Interview Analysis</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Each interview was documented and coded using a structured framework to identify key patterns:
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">OB - Observations</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">US - User Statements</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">B - Breakdowns</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">IN - Insights</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">CI - Cultural Influences</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">I - Intents</span>
                  <span className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded">DI - Design Ideas</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <img src={streeInterview1} alt="Interview analysis with observation coding" className="w-full rounded border border-border" />
                  <img src={streeInterview2} alt="Interview analysis with observation coding" className="w-full rounded border border-border" />
                  <img src={streeInterview3} alt="Interview analysis with observation coding" className="w-full rounded border border-border" />
                  <img src={streeInterview4} alt="Interview analysis with observation coding" className="w-full rounded border border-border" />
                  <img src={streeInterview5} alt="Interview analysis with observation coding" className="w-full rounded border border-border" />
                </div>
              </div>
            )}

            {/* Placeholder for non-STREE projects */}
            {slug !== 'stree-safety-app' && study.research.imagePlaceholder && <div className="mt-8 aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Research Documentation / Interview Notes ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Synthesis Phase */}
      {study.synthesis && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Affinity Mapping & Synthesis</h2>
            <p className="text-muted-foreground mb-8">{study.synthesis.method}</p>
            
            {/* Affinity Mapping Images for STREE */}
            {slug === 'stree-safety-app' && (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <img src={streeAffinity1} alt="Affinity mapping: Safety perceptions and offender types" className="w-full rounded border border-border" />
                  <img src={streeAffinity2} alt="Affinity mapping: Reactions and reporting challenges" className="w-full rounded border border-border" />
                  <img src={streeAffinity3} alt="Affinity mapping: Emotional impact and sharing experiences" className="w-full rounded border border-border" />
                  <img src={streeAffinity4} alt="Affinity mapping: Adapting behaviors for safety" className="w-full rounded border border-border" />
                  <img src={streeAffinity5} alt="Affinity mapping: Safety measures and location perceptions" className="w-full rounded border border-border" />
                  <img src={streeAffinity6} alt="Affinity mapping: Societal attitudes and improvement ideas" className="w-full rounded border border-border" />
                </div>
                <div className="p-6 bg-card border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    From the affinity mapping exercise, we identified recurring <span className="text-foreground font-medium">themes</span> across participant responses. These themes helped us understand the underlying patterns in women's safety experiences, which directly informed our <span className="text-foreground font-medium">user goals</span> and <span className="text-foreground font-medium">challenges</span> framework below.
                  </p>
                </div>
              </>
            )}
            
            {/* Placeholder for non-STREE projects */}
            {slug !== 'stree-safety-app' && study.synthesis.imagePlaceholders && <div className="grid md:grid-cols-2 gap-4">
                {Array.from({
            length: study.synthesis.imagePlaceholders
          }).map((_, i) => <div key={i} className="aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">[ Affinity Map Screenshot {i + 1} ]</span>
                  </div>)}
              </div>}
          </div>
        </section>}

      {/* Key Insights (for STREE) */}
      {study.keyInsights && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Key Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.keyInsights.map((insight, i) => <div key={i} className="p-5 bg-background border border-border">
                  <h3 className="font-serif text-base mb-2">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* User Goals (for STREE) */}
      {study.userGoals && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">User Goals & Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {study.userGoals.primary && <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Primary Goal</h3>
                    <p className="font-serif text-lg">{study.userGoals.primary}</p>
                  </div>}
                {study.userGoals.motivations && <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Motivations</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.userGoals.motivations.map((m, i) => <span key={i} className="px-3 py-1 border border-primary/30 text-sm text-primary/80">{m}</span>)}
                    </div>
                  </div>}
              </div>
              {study.userGoals.challenges && <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Challenges Identified</h3>
                  <ul className="space-y-2">
                    {study.userGoals.challenges.map((c, i) => <li key={i} className="flex gap-2 text-sm">
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{c}</span>
                      </li>)}
                  </ul>
                </div>}
            </div>
          </div>
        </section>}

      {/* Persona (for STREE) */}
      {(study.personaIntro || study.personaImage) && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Persona</h2>
            {study.personaIntro && <p className="text-sm text-muted-foreground mb-6">{study.personaIntro}</p>}
            {study.personaImage && <img src={study.personaImage} alt="User Persona" className="w-full rounded-lg border border-border" />}
          </div>
        </section>}

      {/* Product Strategy - handles both formats */}
      {study.productStrategy && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Product Strategy</h2>
            {'reframe' in study.productStrategy ?
        // STREE format
        <>
                <p className="text-muted-foreground mb-4">{study.productStrategy.reframe}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {study.productStrategy.phases.map((phase, i) => <div key={i} className="p-5 border border-border">
                      <h3 className="font-serif text-base mb-3">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.content}</p>
                    </div>)}
                </div>
              </> :
        // Array format
        <div className="grid md:grid-cols-2 gap-8">
                {study.productStrategy.map((item, i) => <div key={i} className="p-6 border border-border">
                    <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>)}
              </div>}
          </div>
        </section>}

      {/* STREE: Solution Phase */}
      {study.solutionPhase && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Phase 2</span>
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Solution Design</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Storyboarding</h3>
              <p className="text-sm text-muted-foreground">{study.solutionPhase.storyboard}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {study.solutionPhase.modes.map((mode, i) => <div key={i} className="p-5 bg-background border border-border">
                  <h4 className="font-serif text-base mb-2">{mode.title}</h4>
                  <p className="text-sm text-muted-foreground">{mode.content}</p>
                </div>)}
            </div>

            {/* Flow Diagrams for STREE */}
            {slug === 'stree-safety-app' && (
              <div className="mt-10 space-y-8">
                <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">SOS Mode Flow</h4>
                  </div>
                  <div className="p-4">
                    <img src={streeSosFlow} alt="SOS Mode user flow showing interactions between user, officials, and contacts" className="w-full rounded" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">User Journey Flow</h4>
                  </div>
                  <div className="p-6 bg-white">
                    <img src={streeUserFlow} alt="User journey flow: Discovery, Onboarding, and App navigation" className="w-full" />
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for non-STREE */}
            {slug !== 'stree-safety-app' && study.solutionPhase.imagePlaceholder && <div className="mt-8 aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Storyboard / User Flow ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Information Architecture - placed before usability testing */}
      {study.informationArchitecture && 'rationale' in study.informationArchitecture && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Information Architecture</h2>
            <p className="text-muted-foreground text-sm mb-6">{study.informationArchitecture.rationale}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {study.informationArchitecture.structure.map((item, i) => <div key={i} className="p-4 border border-border bg-card">
                  <h4 className="font-medium text-sm mb-1">{item.area}</h4>
                  <p className="text-xs text-muted-foreground">{item.reason}</p>
                </div>)}
            </div>
            <div className="p-4 bg-card border border-border mb-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Onboarding Flow</h4>
              <p className="text-sm text-muted-foreground">{study.informationArchitecture.onboarding}</p>
            </div>
            {study.informationArchitecture.imagePlaceholder && <div className="aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Information Architecture Diagram ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Wireframing - placed before usability testing */}
      {study.wireframing && 'approach' in study.wireframing && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Wireframing</h2>
            <p className="text-muted-foreground text-sm mb-6">{study.wireframing.approach}</p>
            {/* Wireframe images for STREE */}
            {slug === 'stree-safety-app' && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe1} alt="Login wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe2} alt="Sign up wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe3} alt="Profile setup wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe8} alt="Permissions wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe9} alt="Emergency contacts wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe10} alt="Frequented places wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe7} alt="Home screen wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe4} alt="Reports wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe5} alt="All reports wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe6} alt="Settings wireframe" className="w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe11} alt="Map screen wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe12} alt="Route planning wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe13} alt="Safety assistance wireframe" className="w-full" />
                  </div>
                  <div className="bg-background rounded-lg border border-border overflow-hidden">
                    <img src={streeWireframe14} alt="SOS mode wireframe" className="w-full" />
                  </div>
                </div>
              </>
            )}

            {/* Placeholder for non-STREE */}
            {slug !== 'stree-safety-app' && study.wireframing.imagePlaceholder && <div className="aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Wireframe Explorations ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Usability Testing */}
      {study.usabilityTesting && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Usability Testing</h2>
            <p className="text-sm text-muted-foreground mb-6">{study.usabilityTesting.intro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {study.usabilityTesting.findings.map((finding, i) => <div key={i} className="flex gap-3 p-4 bg-card border border-border">
                  <span className="text-primary/50 text-sm">{i + 1}.</span>
                  <span className="text-sm text-muted-foreground">{finding}</span>
                </div>)}
            </div>
          </div>
        </section>}

      {/* STREE: Final Design */}
      {study.finalDesign && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Final Design</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {study.finalDesign.changes.map((change, i) => <div key={i} className="p-4 bg-background border border-border">
                  <h3 className="font-medium text-sm mb-2">{change.title}</h3>
                  <p className="text-xs text-muted-foreground">{change.content}</p>
                </div>)}
            </div>

            <div className="p-4 border border-border mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Screens Delivered</h4>
              <p className="text-sm text-muted-foreground">{study.finalDesign.screens}</p>
            </div>

            {study.finalDesign.imagePlaceholder && <div className="aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Final UI Screenshots ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Impact */}
      {study.impact && 'functional' in study.impact && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Projected Impact</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {study.impact.functional.map((item, i) => <div key={i} className="flex gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>)}
            </div>
            <p className="text-xs text-muted-foreground/70 italic">{study.impact.note}</p>
          </div>
        </section>}

      {/* Impact (for food waste project - array format) */}
      {study.impact && Array.isArray(study.impact) && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">The designed system helps:</p>
            <ul className="space-y-4">
              {study.impact.map((item, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-lg">{item}</span>
                </li>)}
            </ul>
          </div>
        </section>}

      {/* Project Scope (for AlHub) */}
      {study.projectScope && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Project Scope</h2>
            <ul className="space-y-3">
              {study.projectScope.map((item, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span>{item}</span>
                </li>)}
            </ul>
          </div>
        </section>}

      {/* Redesign Goals (for AlHub) */}
      {study.redesignGoals && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Goals of the Redesign</h2>
            <div className="space-y-10">
              {study.redesignGoals.map((goal, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Constraints (for AlHub) */}
      {study.constraints && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Understanding the Constraints</h2>
            <p className="text-lg text-muted-foreground mb-8">Because this was not a UX redesign, the following constraints shaped the work:</p>
            <ul className="space-y-3">
              {study.constraints.map((item, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span>{item}</span>
                </li>)}
            </ul>
            <p className="mt-8 font-serif text-lg text-muted-foreground italic">This required a design approach focused on elevating what already exists rather than solving structural issues.</p>
          </div>
        </section>}

      {/* Redesign Approach (for AlHub) */}
      {study.redesignApproach && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">UI Redesign Approach</h2>
            <div className="space-y-10">
              {study.redesignApproach.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Key Screens (for AlHub) */}
      {study.keyScreens && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Key Screens Refined</h2>
            <div className="flex flex-wrap gap-3">
              {study.keyScreens.map((screen, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{screen}</span>)}
            </div>
          </div>
        </section>}

      {/* Before/After (for AlHub) */}
      {study.beforeAfter && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">Impact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl mb-6">Before the Redesign</h3>
                <ul className="space-y-3">
                  {study.beforeAfter.before.map((item, i) => <li key={i} className="flex gap-4">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-6">After the Redesign</h3>
                <ul className="space-y-3">
                  {study.beforeAfter.after.map((item, i) => <li key={i} className="flex gap-4">
                      <span className="text-muted-foreground">•</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-lg">The updated app is now live on the Play Store, reflecting the new UI.</p>
          </div>
        </section>}

      {/* Legacy Problems (for BrynQ) */}
      {study.legacyProblems && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Legacy Problem</h2>
            <p className="text-lg text-muted-foreground mb-12">SalureConnect was functional but suffered from typical legacy product issues:</p>
            <div className="space-y-8">
              {study.legacyProblems.map((problem, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Vision Goals (for BrynQ) */}
      {study.visionGoals && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Vision for BrynQ</h2>
            <p className="text-lg text-muted-foreground mb-12">The goal was not just a facelift—it was a complete transformation. The product needed to evolve into a modern iPaaS that supported:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.visionGoals.map((goal, i) => <div key={i} className="p-6 border border-border">
                  <h3 className="font-serif text-lg mb-3">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Responsibilities (for BrynQ) */}
      {study.responsibilities && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">My Role & Responsibilities</h2>
            <p className="text-lg text-muted-foreground mb-12">Across multiple years, I contributed in the following ways:</p>
            <div className="space-y-10">
              {study.responsibilities.map((resp, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{resp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{resp.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Research Themes (for BrynQ) */}
      {study.researchThemes && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Research & User Insights</h2>
            <p className="text-lg text-muted-foreground mb-12">Key themes emerged from interviews with integration owners, HR administrators, technical consultants, support teams, and internal developers:</p>
            <div className="space-y-8">
              {study.researchThemes.map((theme, i) => <div key={i} className="p-6 border border-border">
                  <h3 className="font-serif text-lg mb-3">{theme.title}</h3>
                  <p className="text-muted-foreground">{theme.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Transformation Pillars (for BrynQ) */}
      {study.transformationPillars && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Major UX Transformations</h2>
            <p className="text-lg text-muted-foreground mb-12">Organized into 4 transformation pillars:</p>
            <div className="space-y-12">
              {study.transformationPillars.map((pillar, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Workshop Types (for BrynQ) */}
      {study.workshopTypes && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Workshops & Cross-Functional Alignment</h2>
            <p className="text-lg text-muted-foreground mb-8">Led multiple workshops to unify designers, developers, support, and product stakeholders:</p>
            <div className="flex flex-wrap gap-3">
              {study.workshopTypes.map((workshop, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{workshop}</span>)}
            </div>
          </div>
        </section>}

      {/* Business Outcomes (for BrynQ) */}
      {study.businessOutcomes && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Outcomes & Business Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">While exact numbers are confidential, the redesign resulted in:</p>
            <ul className="space-y-3">
              {study.businessOutcomes.map((outcome, i) => <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground">•</span>
                  <span>{outcome}</span>
                </li>)}
            </ul>
            <p className="mt-8 font-serif text-lg text-muted-foreground italic">The cumulative outcome was a significantly more modern, usable, and scalable platform.</p>
          </div>
        </section>}

      {/* Skills Strengthened (for BrynQ) */}
      {study.skillsStrengthened && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">What I Learned</h2>
            <p className="text-lg text-muted-foreground mb-12">Working on BrynQ over several years strengthened:</p>
            <div className="grid md:grid-cols-2 gap-8">
              {study.skillsStrengthened.map((skill, i) => <div key={i}>
                  <h3 className="font-serif text-lg mb-3">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Closing Reflection (for BrynQ) */}
      {study.closingReflection && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Closing Reflection</h2>
            <p className="font-serif text-xl leading-relaxed">{study.closingReflection}</p>
          </div>
        </section>}

      {/* Context Points (for Merry Health) */}
      {study.contextPoints && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Context & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">Hospital admins must navigate:</p>
            <div className="flex flex-wrap gap-3">
              {study.contextPoints.map((point, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{point}</span>)}
            </div>
          </div>
        </section>}

      {/* Problem Definition (for Merry Health) */}
      {study.problemDefinition && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Problem Definition</h2>
            <p className="text-lg text-muted-foreground mb-12">Our discovery phase revealed systemic issues:</p>
            <div className="space-y-10">
              {study.problemDefinition.map((problem, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* System Modules (for Merry Health) */}
      {study.systemModules && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Systems Thinking: End-to-End Dispatch Ecosystem</h2>
            <p className="text-lg text-muted-foreground mb-12">We reframed the system from a dashboard redesign to a full dispatch system redesign:</p>
            <div className="grid md:grid-cols-2 gap-8">
              {study.systemModules.map((module, i) => <div key={i} className="p-6 border border-border">
                  <h3 className="font-serif text-lg mb-4">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Design Solutions (for Merry Health) */}
      {study.designSolutions && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Key Design Solutions</h2>
            <div className="space-y-12">
              {study.designSolutions.map((solution, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Edge Cases (for Merry Health) */}
      {study.edgeCases && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Edge Cases & Fallback Logic</h2>
            <p className="text-lg text-muted-foreground mb-8">Designed for real-world unpredictability:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {study.edgeCases.map((edge, i) => <div key={i} className="p-4 border border-border">
                  <h3 className="font-medium mb-2">{edge.title}</h3>
                  <p className="text-sm text-muted-foreground">{edge.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Deliverables (for Merry Health) */}
      {study.deliverables && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Final Deliverables</h2>
            <div className="flex flex-wrap gap-3">
              {study.deliverables.map((deliverable, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{deliverable}</span>)}
            </div>
          </div>
        </section>}

      {/* Next Steps */}
      {study.nextSteps && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Next Steps</h2>
            <p className="text-lg leading-relaxed">{study.nextSteps}</p>
          </div>
        </section>}

      {/* Learnings */}
      <section className="px-6 lg:px-12 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Learnings</h2>
          <ul className="space-y-4">
            {study.learnings.map((learning, i) => <li key={i} className="flex gap-4">
                <span className="text-muted-foreground">•</span>
                <span className="text-lg">{learning}</span>
              </li>)}
          </ul>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
          <Link to="/#contact" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </main>;
};
export default CaseStudy;