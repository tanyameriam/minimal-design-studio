import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, ChevronDown } from 'lucide-react';
import CaseStudySidebar from '@/components/CaseStudySidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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
import streeCultural1 from '@/assets/stree-cultural-1.png';
import streeCultural2 from '@/assets/stree-cultural-2.png';
import streeCultural3 from '@/assets/stree-cultural-3.png';
import streeHifi1 from '@/assets/stree-hifi-1.png';
import streeHifi2 from '@/assets/stree-hifi-2.png';
import streeHifi3 from '@/assets/stree-hifi-3.png';
import streeHifi4 from '@/assets/stree-hifi-4.png';
import streeHifi5 from '@/assets/stree-hifi-5.png';
import streeHifi6 from '@/assets/stree-hifi-6.png';
import streeHifi7 from '@/assets/stree-hifi-7.png';
import streeHifi8 from '@/assets/stree-hifi-8.png';
import streeHifi9 from '@/assets/stree-hifi-9.png';
import streeHifi10 from '@/assets/stree-hifi-10.png';
import streeHifi11 from '@/assets/stree-hifi-11.png';
import streeHifi12 from '@/assets/stree-hifi-12.png';
import streeHifi13 from '@/assets/stree-hifi-13.png';
import streeHifi14 from '@/assets/stree-hifi-14.png';
import streeHifi15 from '@/assets/stree-hifi-15.png';
import streeHifi16 from '@/assets/stree-hifi-16.png';
import streeHifi17 from '@/assets/stree-hifi-17.png';
import streeHifi18 from '@/assets/stree-hifi-18.png';
// Merry Health screenshots
import merryHealthDashboard from '@/assets/merry-health-dashboard.png';
import merryHealthBooking from '@/assets/merry-health-booking.png';
import merryHealthRides from '@/assets/merry-health-rides.png';
import merryHealthMap from '@/assets/merry-health-map.png';
// Merry Health flow diagrams
import merryCurrentFlow from '@/assets/merry-current-flow.png';
import merryIdealFlow from '@/assets/merry-ideal-flow.png';
import merryPhaseMapping from '@/assets/merry-phase-mapping.png';
// Merry Health opportunity mapping
import merryOpportunityMapping from '@/assets/merry-opportunity-mapping.png';
import merryOpportunityRefined from '@/assets/merry-opportunity-refined.png';
// Merry Health user journey maps
import merryPatientCurrentJourney from '@/assets/merry-patient-current-journey.jpg';
import merryPatientIdealJourney from '@/assets/merry-patient-ideal-journey.jpg';
import merryAdminCurrentJourney from '@/assets/merry-admin-current-journey.jpg';
import merryAdminIdealJourney from '@/assets/merry-admin-ideal-journey.jpg';
import merryHospitalJourney from '@/assets/merry-hospital-journey.jpg';
import merryProposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
// Merry Health wireframes and hi-fi screens
import merryWireframes from '@/assets/merry-wireframes.png';
import merryHifiDashboard from '@/assets/merry-hifi-dashboard.png';
import merryHifiReports from '@/assets/merry-hifi-reports.png';
import merryHifiBooking from '@/assets/merry-hifi-booking.png';
import merryHifiTracking from '@/assets/merry-hifi-tracking.png';
// Merry Health WhatsApp chat examples
import merryWhatsappDriver from '@/assets/merry-whatsapp-driver.png';
import merryWhatsappPatient from '@/assets/merry-whatsapp-patient.png';
import merryWhatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import merryWhatsappAdmin from '@/assets/merry-whatsapp-admin.png';
// Food Waste system flow and sitemaps
import foodWasteSystemFlow from '@/assets/food-waste-system-flow.png';
import foodWasteRestaurantSitemap from '@/assets/food-waste-restaurant-sitemap.png';
import foodWasteNgoSitemap from '@/assets/food-waste-ngo-sitemap.png';
// Food Waste NGO wireframes
import foodWasteWireframeHome from '@/assets/food-waste-wireframe-home.png';
import foodWasteWireframeCart from '@/assets/food-waste-wireframe-cart.png';
import foodWasteWireframeConfirm from '@/assets/food-waste-wireframe-confirm.png';
import foodWasteWireframeTrack from '@/assets/food-waste-wireframe-track.png';
import foodWasteWireframeAccount from '@/assets/food-waste-wireframe-account.png';
import foodWasteWireframeOrders from '@/assets/food-waste-wireframe-orders.png';
// Food Waste Restaurant wireframes
import foodWasteRestWireframeMyorders from '@/assets/food-waste-rest-wireframe-myorders.png';
import foodWasteRestWireframeOrderdetail from '@/assets/food-waste-rest-wireframe-orderdetail.png';
import foodWasteRestWireframeHandoff from '@/assets/food-waste-rest-wireframe-handoff.png';
import foodWasteRestWireframeListings from '@/assets/food-waste-rest-wireframe-listings.png';
import foodWasteRestWireframeAddlisting from '@/assets/food-waste-rest-wireframe-addlisting.png';
import foodWasteRestWireframeAccount from '@/assets/food-waste-rest-wireframe-account.png';
import foodWasteRestWireframeInsights from '@/assets/food-waste-rest-wireframe-insights.png';
import brynqScenarioRedacted from '@/assets/brynq-scenario-redacted.png';
import brynqWizardFlow from '@/assets/brynq-wizard-flow.png';
import brynqTemplateFlow from '@/assets/brynq-template-flow.png';
import { PlatformAuditPhase } from '@/components/ResearchPhaseCard';
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
    ngoRole?: string;
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
    method?: string;
    participants?: string;
    mode?: string;
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
  // BrynQ specific sections (new narrative structure)
  brynqHeroMeta?: {
    scope: string;
    context: string;
    focus: string;
  };
  brynqBackground?: string;
  brynqLegacyReality?: string;
  brynqProductProblem?: string;
  brynqResponsibility?: string;
  brynqResearch?: string;
  brynqKeyInsight?: {
    main: string;
    conclusion: string;
    reframe: string;
  };
  brynqMvpDirection?: string;
  brynqWizard?: {
    intro: string;
    phases: string[];
    benefits: string;
  };
  brynqReview?: string;
  brynqMvpOutcomes?: string;
  brynqTemplates?: string;
  brynqEvolution?: string;
  brynqReflection?: string;
  brynqNdaNote?: string;
  // BrynQ legacy sections (keeping for backward compatibility)
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
  // Merry Health new structure
  merryOverview?: string;
  merryCurrentProblem?: string;
  merryDataAudit?: {
    intro: string;
    questions: string[];
    actors: string[];
    actorAudits: {
      actor: string;
      experienceFlow?: {
        step: number;
        name: string;
        description: string;
        channel: string;
        data: string;
      }[];
      dataPoints?: {
        dataPoint: string;
        source: string;
        usedBy: string;
        purpose: string;
        frequency: string;
        issues: string;
      }[];
      minEssentialData?: {
        flow: string;
        data: string;
        reason: string;
      }[];
      absoluteMinData?: {
        category: string;
        fields: string;
        reason: string;
      }[];
    }[];
    overlappingData: {
      dataPoint: string;
      hospitalAdmin: string;
      driver: string;
      patientParty: string;
      merryHealthAdmin: string;
      notes: string;
    }[];
  };
  merrySystemFlow?: {
    intro: string;
    currentFlow: {
      description: string;
      painPoints: string[];
    };
    idealFlow: {
      description: string;
      improvements: string[];
    };
    phaseMapping: {
      description: string;
      breakdownReasons: string[];
    };
  };
  merrySolutionPhases?: {
    title: string;
    content: string;
  }[];
  designSolutions?: CaseStudySection[];
  edgeCases?: CaseStudySection[];
  deliverables?: string[];
}
const caseStudies: Record<string, CaseStudyData> = {
  'merry-health': {
    title: "Redesigning India's Hospital Dispatch System",
    subtitle: "for Speed, Clarity & Operational Reliability",
    overview: "Merry Health is a hospital technology platform focused on emergency ambulance dispatch management. The system connects hospitals, drivers, and patients to ensure faster, reliable ambulance deployment especially in Tier 2 and Tier 3 cities, where hospitals rely heavily on phone calls and WhatsApp due to low digital adoption and staff shortages.",
    role: "Research & Discovery, Strategy & Systems Thinking, Design Execution, Collaboration & Delivery",
    tools: ["Figma", "Miro", "Prototyping tools"],
    heroImage: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&q=80",
    // New structure
    merryOverview: "",
    // Placeholder - add content here
    merryCurrentProblem: "",
    // Placeholder - add content here
    merryDataAudit: {
      intro: "We conducted a data audit across all actors in the dispatch flow to understand who owns the data, who initiates it, and what decisions it enables.",
      questions: ["Who owns the data?", "Who initiates the data?", "What decisions does data enable?"],
      actors: ["Patient Party", "Hospital Admin", "Merry Health Admin", "Driver"],
      actorAudits: [{
        actor: "Patient Party",
        experienceFlow: [{
          step: 1,
          name: "Identify emergency",
          description: "Patient or family decides to call for ambulance",
          channel: "Phone",
          data: "Caller ID"
        }, {
          step: 2,
          name: "Contact hospital",
          description: "Calls hospital/Merry Health helpline",
          channel: "Phone",
          data: "Location, patient condition, severity"
        }, {
          step: 3,
          name: "Provide details",
          description: "Shares details on call/WhatsApp",
          channel: "Phone/WhatsApp",
          data: "Contact number, pickup address, floor, lift"
        }, {
          step: 4,
          name: "Wait for confirmation",
          description: "Hospital acknowledges request",
          channel: "Phone/SMS/WhatsApp",
          data: "Expected time"
        }, {
          step: 5,
          name: "Receive ambulance details",
          description: "Gets driver info",
          channel: "SMS/WhatsApp",
          data: "Driver contact number, tracking link"
        }, {
          step: 6,
          name: "Patient pickup",
          description: "Ambulance arrives and loads patient",
          channel: "In person",
          data: "Arrival time, transit status, assigned time"
        }, {
          step: 7,
          name: "In transit",
          description: "Patient reaches destination",
          channel: "Physical handover",
          data: "Drop timestamp, total duration"
        }],
        dataPoints: [{
          dataPoint: "Patient name",
          source: "PP",
          usedBy: "Hospital admin",
          purpose: "Identification",
          frequency: "E",
          issues: "Incorrect data"
        }, {
          dataPoint: "Contact number",
          source: "PP",
          usedBy: "Hospital admin/Driver",
          purpose: "Callback and confirmation",
          frequency: "E",
          issues: "Incorrect data"
        }, {
          dataPoint: "Location",
          source: "PP",
          usedBy: "Driver/Hospital admin",
          purpose: "Locate pickup point",
          frequency: "E",
          issues: "Not being exact"
        }, {
          dataPoint: "Patient condition",
          source: "PP",
          usedBy: "Hospital admin",
          purpose: "Decide urgency and ambulance type",
          frequency: "E",
          issues: "Can be unknown to PP"
        }, {
          dataPoint: "Pickup address",
          source: "PP",
          usedBy: "Hospital admin/Driver",
          purpose: "Pickup the patient from address",
          frequency: "E",
          issues: "Incorrect data"
        }, {
          dataPoint: "Driver contact number",
          source: "Hospital admin",
          usedBy: "PP/Hospital admin",
          purpose: "Enable communication with driver",
          frequency: "E",
          issues: "Incorrect data"
        }, {
          dataPoint: "Tracking link",
          source: "Hospital admin",
          usedBy: "PP/Hospital admin",
          purpose: "Track transit of patient",
          frequency: "E",
          issues: "Not operational or not updated"
        }, {
          dataPoint: "Duration of trip",
          source: "System/Driver",
          usedBy: "MerryHealth",
          purpose: "Understand total time",
          frequency: "E",
          issues: "Not starting or ending trip"
        }, {
          dataPoint: "Drop timestamp",
          source: "System/Driver",
          usedBy: "MerryHealth",
          purpose: "Operational analysis",
          frequency: "E",
          issues: ""
        }, {
          dataPoint: "Floor",
          source: "PP",
          usedBy: "Driver",
          purpose: "Pickup the patient",
          frequency: "C",
          issues: "Not being shared by PP"
        }, {
          dataPoint: "Lift",
          source: "PP",
          usedBy: "Driver",
          purpose: "Pickup patient accessibility",
          frequency: "C",
          issues: "Not being shared by PP"
        }],
        minEssentialData: [{
          flow: "Request initiation (PP → Hospital Admin)",
          data: "Patient name, contact number, location, patient(s) condition",
          reason: "Without these, HA cannot verify urgency, match ambulance type, or identify pickup."
        }, {
          flow: "When hospital/MHA confirms dispatch",
          data: "Driver name, driver contact number, vehicle No, ETA",
          reason: "Needed for trust, coordination, and tracking reassurance."
        }, {
          flow: "During the trip (driver en route)",
          data: "Tracking link/ETA, Landmark and address",
          reason: "Driver reach exact location efficiently; reduces back-and-forth calls"
        }, {
          flow: "At drop/completion",
          data: "Drop location (hospital name), acknowledgment of arrival",
          reason: "Closes the loop for PP"
        }]
      }, {
        actor: "Hospital Admin",
        experienceFlow: [{
          step: 1,
          name: "Request Ambulance",
          description: "Admin evaluates if an ambulance is needed based on urgency & doctor approval",
          channel: "Phone call, In-person",
          data: "Patient condition (critical/stable), Doctor approval, Destination hospital (for transfers)"
        }, {
          step: 2,
          name: "Determine Ambulance Type & Support",
          description: "Admin confirms what ambulance category/equipment is required",
          channel: "Phone call, WhatsApp",
          data: "Type: BLS/ALS/ICU, Oxygen requirement, Ventilator requirement, Paramedic support, Special equipment (monitor, suction, defibrillator)"
        }, {
          step: 3,
          name: "Capture Pickup Location",
          description: "Admin collects and forwards accurate address to Merry Health",
          channel: "WhatsApp, Phone call, Dashboard (ideal)",
          data: "Google Maps pin, Full address, Landmark, Caller's phone number"
        }, {
          step: 4,
          name: "Confirm Special Access Needs",
          description: "Admin checks if physical movement issues exist at pickup",
          channel: "Phone call, WhatsApp",
          data: "Floor number, Lift availability yes/no, Stretcher access possible, Patient weight (approx)"
        }, {
          step: 5,
          name: "Assess Urgency",
          description: "Admin decides how critical and time-sensitive the case is",
          channel: "WhatsApp, Phone call",
          data: "Priority tag (Routine / Emergency / Critical), Expected travel time, Internal note for escalation"
        }, {
          step: 6,
          name: "Receive Ambulance Assignment",
          description: "Merry Health shares ambulance & driver details",
          channel: "WhatsApp (primary), Dashboard",
          data: "Ambulance ID/number, Driver name, Driver phone number, Assigned timestamp"
        }, {
          step: 7,
          name: "Confirm Ambulance Departure",
          description: "Admin ensures ambulance has actually left toward pickup",
          channel: "WhatsApp, Call, Dashboard (if used)",
          data: "Dispatch timestamp, Status: Assigned vs Dispatched, Geolocation movement (if GPS-enabled)"
        }, {
          step: 8,
          name: "Confirm Arrival at Pickup",
          description: "Admin verifies ambulance reached patient location",
          channel: "WhatsApp, Call, Dashboard (GPS)",
          data: "Arrival timestamp, Status: \"Reached Pickup\", GPS confirmation"
        }, {
          step: 9,
          name: "Patient Onboard",
          description: "Admin ensures patient has entered ambulance & trip started",
          channel: "WhatsApp, Dashboard, Call",
          data: "Status: \"Onboard / On the way\", Live GPS movement, Any special medical notes"
        }, {
          step: 10,
          name: "Track En-route to Hospital",
          description: "Admin monitors ETA and notifies receiving team",
          channel: "WhatsApp (tracking link), Dashboard",
          data: "Live ETA, Location updates, Delay reasons (traffic, route change)"
        }, {
          step: 11,
          name: "Ride Completion",
          description: "Admin confirms patient is delivered safely",
          channel: "WhatsApp, Dashboard, Call",
          data: "Drop timestamp, Status: \"Ride Completed\", Driver confirmation, Any incident report"
        }, {
          step: 12,
          name: "Monthly Reporting & Audit",
          description: "Admin reviews summary of rides & hospital performance",
          channel: "Dashboard, Excel export, WhatsApp logs",
          data: "Total trips, Cancelled trips, SLA metrics (under 20/30/40 mins), Billing amounts, Average response time, Ambulance utilization patterns"
        }],
        dataPoints: [{
          dataPoint: "Patient condition (critical/stable)",
          source: "Caller (family/patient), Doctor",
          usedBy: "Hospital Admin, Merry Health Admin, Driver",
          purpose: "Determines urgency & ambulance type",
          frequency: "Every case",
          issues: "Caller may not describe condition clearly; panic leads to misinformation"
        }, {
          dataPoint: "Doctor approval",
          source: "Doctor, Nurse",
          usedBy: "Hospital Admin",
          purpose: "Confirms legitimacy of request; avoids duplicate/false calls",
          frequency: "Every case",
          issues: "Doctor may be busy; delays confirmation; admin sometimes proceeds based on caller only"
        }, {
          dataPoint: "Destination hospital",
          source: "Caller, Doctor",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Needed for hospital-hospital transfers; route calculation",
          frequency: "Conditional (transfers only)",
          issues: "Caller may not know exact hospital or spelling; wrong routing"
        }, {
          dataPoint: "Ambulance category (BLS/ALS/ICU)",
          source: "Doctor / Admin input",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Ensures correct equipment & staff",
          frequency: "Every case",
          issues: "Admin unsure which type to choose; mistakes cause medical risk"
        }, {
          dataPoint: "Oxygen requirement",
          source: "Caller or Doctor",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Send ambulance with oxygen cylinders",
          frequency: "Conditional",
          issues: "Caller may not know; missing data → wrong ambulance sent"
        }, {
          dataPoint: "Ventilator requirement",
          source: "Doctor",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Requires ICU ambulance with ventilator",
          frequency: "Conditional (critical cases)",
          issues: "High risk if missed; admin avoids asking due to urgency"
        }, {
          dataPoint: "Paramedic requirement",
          source: "Doctor / Admin",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Ensures trained support onboard",
          frequency: "Conditional",
          issues: "Often skipped on call; paramedic not available = delay"
        }, {
          dataPoint: "Special equipment (monitor/defibrillator/suction)",
          source: "Doctor / Admin",
          usedBy: "Merry Health Admin, Driver",
          purpose: "Needed for serious cardiac/ICU cases",
          frequency: "Conditional",
          issues: "Caller rarely knows; admin may skip"
        }, {
          dataPoint: "Pickup address",
          source: "Caller",
          usedBy: "Driver, Merry Health Admin",
          purpose: "Navigate to patient location",
          frequency: "Every case",
          issues: "Caller gives vague address; spelling mistakes"
        }, {
          dataPoint: "Google Maps location pin",
          source: "Caller via WhatsApp",
          usedBy: "Driver, Merry Health Admin",
          purpose: "Most accurate navigation to pickup",
          frequency: "Every case",
          issues: "Caller may not know how to drop pin; wrong pin shared"
        }, {
          dataPoint: "Landmark",
          source: "Caller",
          usedBy: "Driver, Admin",
          purpose: "Helps in areas with unclear addresses",
          frequency: "Frequent",
          issues: "Landmarks may be outdated or confusing"
        }, {
          dataPoint: "Caller's phone number",
          source: "Caller",
          usedBy: "Driver, Admin, Merry Health Admin",
          purpose: "Callback in case location unclear",
          frequency: "Every case",
          issues: "Caller phones often unreachable; incorrect digits"
        }, {
          dataPoint: "Floor number",
          source: "Caller",
          usedBy: "Driver, Paramedic Team",
          purpose: "Determines manpower and stretcher access",
          frequency: "Conditional (apartments)",
          issues: "Caller forgets to mention; leads to delays"
        }, {
          dataPoint: "Lift availability",
          source: "Caller",
          usedBy: "Driver, Paramedic Team",
          purpose: "If no lift → more manpower needed",
          frequency: "Conditional",
          issues: "Not confirmed → stretcher doesn't fit, manual lifting needed"
        }, {
          dataPoint: "Patient weight (approx)",
          source: "Caller / Attendant",
          usedBy: "Driver, Paramedic Team",
          purpose: "To estimate manpower required",
          frequency: "Conditional",
          issues: "Sensitive topic → caller lies or hides info"
        }, {
          dataPoint: "Ambulance assigned (ID/Plate)",
          source: "Merry Health Admin",
          usedBy: "Hospital Admin, Patient/Family",
          purpose: "Confirms assignment & accountability",
          frequency: "Every case",
          issues: "Shared late or missing; escalations begin"
        }, {
          dataPoint: "Driver name",
          source: "Merry Health Admin",
          usedBy: "Hospital Admin, Patient/Family",
          purpose: "Direct contact for updates",
          frequency: "Every case",
          issues: "Driver may not answer calls; admin forced to chase"
        }, {
          dataPoint: "Driver phone number",
          source: "Merry Health Admin",
          usedBy: "Patient/Family, Admin",
          purpose: "Location clarification, coordination",
          frequency: "Every case",
          issues: "Wrong number shared; driver network issues"
        }, {
          dataPoint: "Dispatch timestamp",
          source: "Merry Health Admin (manual)",
          usedBy: "Hospital Admin, Management",
          purpose: "Used for SLA/performance tracking",
          frequency: "Every case",
          issues: "Manual entry → prone to errors; sometimes skipped"
        }, {
          dataPoint: "\"Ambulance left for pickup\" status",
          source: "Merry Health Admin or Driver",
          usedBy: "Patient, Hospital Admin",
          purpose: "Confirms movement (not just assignment)",
          frequency: "Every case",
          issues: "Drivers delay leaving; updates not consistent"
        }, {
          dataPoint: "Arrival at pickup timestamp",
          source: "Merry Health Admin (manual)",
          usedBy: "",
          purpose: "SLA & tracking; patient reassurance",
          frequency: "Every case",
          issues: "Hard to verify without GPS; updates delayed"
        }, {
          dataPoint: "Patient onboard status",
          source: "Merry Health Admin or Driver",
          usedBy: "Hospital Admin, Doctors",
          purpose: "Indicates safe loading & departure",
          frequency: "Every case",
          issues: "Manual confirmations unreliable"
        }, {
          dataPoint: "Live tracking GPS location",
          source: "GPS in driver app or shared link",
          usedBy: "Hospital Admin, Doctors, Patient/Family",
          purpose: "Real-time status; reduces calls",
          frequency: "Every case",
          issues: "GPS often missing/not shared; link expires"
        }, {
          dataPoint: "Estimated Time of Arrival (ETA)",
          source: "GPS, Manual estimate",
          usedBy: "Patient, Doctors, Admin",
          purpose: "Hospital prepares receiving team",
          frequency: "Every case",
          issues: "Manual ETA inaccurate; traffic changes"
        }, {
          dataPoint: "Drop/Completion timestamp",
          source: "Merry Health Admin or Driver",
          usedBy: "Reports, Billing",
          purpose: "Ride closure and billing accuracy",
          frequency: "Every case",
          issues: "Manual toggle → errors or delays"
        }, {
          dataPoint: "Trip Invoice / Billing amount",
          source: "Dashboard export",
          usedBy: "Hospital Finance, Management",
          purpose: "Monthly reconciliation & payments",
          frequency: "Every case",
          issues: "Missing data → billing disputes"
        }, {
          dataPoint: "Total rides per month",
          source: "Dashboard / Excel",
          usedBy: "Hospital Management, Merry Health",
          purpose: "Continuation of contract; ROI",
          frequency: "Monthly",
          issues: "Missing rides (if only WhatsApp used)"
        }, {
          dataPoint: "SLA performance (avg response time)",
          source: "Combine timestamps",
          usedBy: "Hospital Management, Merry Health",
          purpose: "Measures performance; renewal driver",
          frequency: "Monthly",
          issues: "Data incomplete if request was only on WhatsApp"
        }, {
          dataPoint: "Cancelled/failed ride reason",
          source: "Merry Health Admin",
          usedBy: "Operations, Reporting",
          purpose: "Root cause analysis",
          frequency: "Conditional",
          issues: "Often not logged; missing visibility"
        }, {
          dataPoint: "Transfer direction (from which hospital to which hospital)",
          source: "Caller / Admin",
          usedBy: "Reporting, business impact",
          purpose: "",
          frequency: "Conditional",
          issues: "Caller may mention unclear hospital name"
        }],
        minEssentialData: [{
          flow: "1. Create / Request Ambulance",
          data: "Caller phone number, Pickup location (Google pin or full address), Patient condition/severity, Ambulance type (BLS/ALS/ICU)*",
          reason: "Without contact & location, the ambulance cannot navigate or reach patient. Ambulance type is critical to avoid medical mismatch."
        }, {
          flow: "2. Assign Ambulance to Case",
          data: "Pickup location, Available ambulance ID/vehicle, Driver availability & phone number",
          reason: "Assignment requires knowing where the ambulance needs to go and which ambulance+driver can serve."
        }, {
          flow: "3. Dispatch Ambulance (Ambulance leaves for pickup)",
          data: "Driver phone number, Pickup location, \"Left for pickup\" timestamp OR GPS start",
          reason: "Confirms actual movement, prevents silent delays, and begins SLA timer."
        }, {
          flow: "4. Driver Reaches Pickup Location",
          data: "Arrival timestamp OR geofence location ping",
          reason: "Needed to prove ambulance actually arrived for SLA + patient communication."
        }, {
          flow: "5. Patient Onboard & Trip Started",
          data: "\"Onboard\" status OR continuous GPS movement from pickup pin",
          reason: "Confirms patient is inside and transit has begun—critical milestone for doctors and family."
        }, {
          flow: "6. Live Tracking During Transit",
          data: "GPS location, Auto-calculated ETA",
          reason: "Reduces panic calls, allows hospital to prepare, provides transparency."
        }, {
          flow: "7. Trip Completion / Drop at Hospital",
          data: "\"Completed\" status, Drop timestamp, Destination hospital",
          reason: "Closes case, freezes SLA timings, necessary for billing & monthly reports."
        }, {
          flow: "8. Monthly Reports / Audit",
          data: "Total completed trips, Response time (request → dispatch), Drop time, Billing amount",
          reason: "Hospital uses this to justify renewal and measure service reliability."
        }],
        absoluteMinData: [{
          category: "Contact",
          fields: "Patient/attender phone",
          reason: "Driver or team must call if lost / access issue"
        }, {
          category: "Navigation",
          fields: "Google Maps pin (or full address + landmark)",
          reason: "Without this, ambulance cannot find pickup"
        }, {
          category: "Medical Safety",
          fields: "Ambulance type (BLS/ALS/ICU)**",
          reason: "Wrong ambulance can cause medical harm"
        }, {
          category: "Operations",
          fields: "Driver phone number, vehicle assigned",
          reason: "Allows admin/family to contact and verify"
        }, {
          category: "Tracking",
          fields: "GPS + basic status milestones",
          reason: "Reduces manual follow-up and panic"
        }, {
          category: "Completion",
          fields: "Drop time + completed status",
          reason: "Needed for billing, audit, and contract renewal"
        }]
      }, {
        actor: "Merry Health Admin",
        experienceFlow: [{
          step: 1,
          name: "Vehicle Dispatch/Assign",
          description: "The Admin identifies and assigns the nearest available, qualified ambulance using the map view and the \"Assign Ambulance\" button",
          channel: "Dispatcher Dashboard (Map view), Ride Detail Screen",
          data: "Ambulance ID, Driver ID, Estimated Time of Arrival (ETA), Ambulance Assigned Time"
        }, {
          step: 2,
          name: "Offline Data Entry",
          description: "Admin receives a manual booking and fills out all mandatory patient, logistical, and financial details in the Offline Booking form",
          channel: "Offline Booking Screen",
          data: "Patient Name, Case/Disease, Facilities, Fare Amount, Total Amount, Partner Commission"
        }, {
          step: 3,
          name: "Emergency Call Intake & Initial Logging",
          description: "The Dispatch Admin receives the emergency call, logs core incident details (caller information, location, patient status) predominantly via WhatsApp (~95%) or a supplementary dashboard form (~5%)",
          channel: "WhatsApp/Chat, Dispatcher Dashboard (Call Log/Form)",
          data: "Incident ID, Caller Data, Location, Preliminary Triage/Case Type"
        }, {
          step: 4,
          name: "Manual Driver Contact & Assignment",
          description: "The Admin contacts the nearest available, qualified driver manually to assign the emergency ride and waits for the driver's confirmation of acceptance",
          channel: "Manual Call/SMS (to Driver), Dispatcher Dashboard (Map view, Driver list)",
          data: "Driver ID, Estimated Time of Arrival (ETA), Ambulance Assigned Time"
        }, {
          step: 5,
          name: "Ride Status & Data Finalization",
          description: "Upon confirmation, the Admin manually updates the ride status on the dashboard and completes all mandatory operational, logistical, financial, and regulatory compliance details",
          channel: "Dispatcher Dashboard (Status Update, Ride Detail Screen)",
          data: "Patient Name, Case/Disease, Facilities, Fare Amount, Partner Commission, Final Ride Status (Confirmed/Dispatched)"
        }, {
          step: 6,
          name: "Refusal Audit & Re-Dispatch",
          description: "Admin immediately reviews the logged refusal reason and simultaneously initiates the process to assign the ride to the next available appropriate ambulance",
          channel: "Ride Refused List, Pending Ride List",
          data: "New Ambulance ID, New Dispatch Time, Audit Log Entry (for driver discipline)"
        }, {
          step: 7,
          name: "System Audit & Permanent Logging",
          description: "The record undergoes final system checks to ensure adherence to all financial and compliance standards before the emergency ride data is permanently finalized and logged in the system",
          channel: "Backend System/Audit Log",
          data: "Financial Compliance Status, Regulatory Compliance Status, Final Logged Timestamp"
        }],
        dataPoints: [{
          dataPoint: "Ambulance Current Status (Available/Busy/En-route/At-Scene)",
          source: "Dispatch Admin (selecting from a dropdown/typing in the Offline Booking form)",
          usedBy: "Dispatch Admin, Finance/Billing Team, Ambulance Operator",
          purpose: "To link a specific physical asset to the booking, enabling tracking, billing, and operator payout",
          frequency: "Every Offline Case. Required field",
          issues: ""
        }, {
          dataPoint: "Facilities (e.g., Ventilator, Bipap)",
          source: "Dispatch Admin (based on caller/hospital request)",
          usedBy: "Dispatch Admin, Ambulance Operator, Quality Assurance",
          purpose: "To ensure compliance with the medical needs of the patient and verify that the assigned ambulance is properly equipped",
          frequency: "Conditional (based on patient's critical needs)",
          issues: ""
        }, {
          dataPoint: "Initial Call Log (Text/Audio)",
          source: "Dispatch Admin (Receiving call, capturing details via WhatsApp)",
          usedBy: "Dispatch Admin, Quality Assurance Team, Compliance Team",
          purpose: "To establish the official time of emergency receipt and initial incident details (location, nature of emergency, caller contact) for time-stamp accountability",
          frequency: "Every Emergency Call",
          issues: ""
        }, {
          dataPoint: "Response Time",
          source: "Ride Detail Screen (Request received time to Ambulance assigned time)",
          usedBy: "Dispatch Admin, Quality Assurance Team",
          purpose: "To track efficiency and measure adherence to Service Level Agreements (SLAs)",
          frequency: "Every Case",
          issues: ""
        }, {
          dataPoint: "Refusal Reason",
          source: "Driver/Operator App (input by driver upon refusal) and Ride Refused List",
          usedBy: "Dispatch Admin, Compliance Team",
          purpose: "To determine the validity of the service denial and enforce fleet reliability/SLAs",
          frequency: "Conditional (Only on refusal)",
          issues: ""
        }, {
          dataPoint: "Ambulance Number (Currently 'Not Assigned')",
          source: "Ambulance List (database of registered vehicles)",
          usedBy: "Dispatch Admin, Driver, Hospital Admin",
          purpose: "To confirm which specific vehicle is responsible for the pick-up and to allow the Dispatch Admin to track its movement until assignment",
          frequency: "Every Case. Must be assigned post-request",
          issues: ""
        }, {
          dataPoint: "Number of Completed Rides",
          source: "Dashboard Reporting/Database (see Total Completed Rides on image)",
          usedBy: "Merry Health Admin, Finance/Billing Team, Dispatch Admin",
          purpose: "To track driver/operator performance, calculate monthly commissions, and report on overall system volume",
          frequency: "Every case. Calculated daily, weekly, or monthly",
          issues: ""
        }, {
          dataPoint: "Final Status Update (Confirmed/Cancelled)",
          source: "Dispatch Admin (Manual dashboard entry)",
          usedBy: "Billing/Finance Team, Compliance Team, Data Analytics",
          purpose: "To finalize the financial liability and operational completion of the ride; critical for commission calculation and service audits",
          frequency: "Every Ride Conclusion",
          issues: ""
        }, {
          dataPoint: "Ambulance Geo-Location (Real-Time)",
          source: "Driver App/GPS System",
          usedBy: "Dispatch Admin, Operations Team",
          purpose: "To select the nearest and most appropriate unit for assignment and track adherence to ETA",
          frequency: "Continuous (Map View)",
          issues: ""
        }],
        minEssentialData: [{
          flow: "Creating an Offline Booking",
          data: "Patient Name, Calling Number, Pickup/Drop Points, Ambulance Type, Case/Disease, Ambulance No. (to be assigned)",
          reason: "The Dispatch Admin acts as the booking agent, so they must capture all logistical, medical, and resource-allocation data before submitting"
        }, {
          flow: "Financial Entry for Offline Ride",
          data: "Fare Amount, Total Amount, Total Recd. Amount, Partner Commission, Company Commission",
          reason: "Offline bookings involve manual financial entries, requiring the Dispatch Admin to record all price components for accurate reconciliation"
        }, {
          flow: "Tracking Offline Ride Status",
          data: "Ride Status, Updated Time, Reached Location (Time/Status), Ride Completed (Time/Status)",
          reason: "Essential for the Dispatch Admin to track and update the ride progress manually, as the driver app might not automatically update all fields"
        }, {
          flow: "Dispatch a new ride (Emergency)",
          data: "Pickup Location, Patient Condition (triage level/BLS/ALS), Ambulance Type Req.",
          reason: "Essential for the Dispatch Admin to match the nearest, most appropriate ambulance to the immediate need"
        }, {
          flow: "Logging a Refusal",
          data: "Ride ID, Driver ID/Number, Refusal Reason (Comments), Timestamp of Refusal",
          reason: "All must be recorded to complete the audit trail for a service failure and hold the responsible party accountable"
        }, {
          flow: "Ride Completion & Billing",
          data: "Final Ride Status (Completed), Total Distance/Time traveled, Applicable Fare/Charges",
          reason: "Required to formally close the ride loop and trigger billing/payout calculations"
        }, {
          flow: "Assigning an Ambulance",
          data: "Ambulance Number/ID, Driver Name, Ambulance Geo-Location (live)",
          reason: "Needed to link the available physical asset to the digital ride request (via the Assign Ambulance button) and track its path"
        }]
      }],
      overlappingData: [{
        dataPoint: "Case / symptoms",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Critical for preparing the ambulance and medical crew"
      }, {
        dataPoint: "Facilities Req. (e.g., Ventilator, Bipap)",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Determines the required level of care/equipment for dispatch"
      }, {
        dataPoint: "Floor Number & Lift",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "NO",
        notes: "Crucial logistical data for the crew on arrival for rapid patient transfer"
      }, {
        dataPoint: "Approx Distance (in KM)",
        hospitalAdmin: "YES",
        driver: "NO",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Used to quickly calculate estimated fare and resource allocation"
      }, {
        dataPoint: "Ambulance No. & Driver Name",
        hospitalAdmin: "NO",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Must be manually input or selected by the Dispatch Admin for an Offline Booking"
      }, {
        dataPoint: "Ride Status",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "YES",
        merryHealthAdmin: "YES",
        notes: "Operational Monitoring (Tracking progress, deciding next action)"
      }, {
        dataPoint: "Request Received Time",
        hospitalAdmin: "YES",
        driver: "NO",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Performance KPI (Calculating response time)"
      }, {
        dataPoint: "Ambulance Type (BLS/ALS)",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Resource Matching (Ensuring correct vehicle is assigned)"
      }, {
        dataPoint: "Comments (Refusal Reason)",
        hospitalAdmin: "NO",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Compliance Audit (Investigating service denials/SLA breaches)"
      }, {
        dataPoint: "Facilities Req. (e.g., Ventilator)",
        hospitalAdmin: "YES",
        driver: "YES",
        patientParty: "NO",
        merryHealthAdmin: "YES",
        notes: "Medical Resource Allocation (Offline Booking)"
      }]
    },
    merrySystemFlow: {
      intro: "To understand how the current system works and identify opportunities for improvement, we mapped the complete system flow from patient emergency to ride completion.",
      currentFlow: {
        description: "The current system flow revealed multiple loops and manual intervention points that cause delays and errors. The diagram shows the existing process with pain points marked as sticky notes.",
        painPoints: ["Heavy Dependency on Manual Coordination: Driver assignment relies on manual calls/WhatsApp—delays and errors", "Lack of Real-Time Visibility: No live tracking or automated updates—forces repeated follow-ups, slowing dispatch", "Fragmented Data Across Multiple Channels: Info moves through WhatsApp, calls, dashboard—duplicated entry and inconsistent records", "Workflow Mismatch with Real Hospital Behavior: System expects structured entry, but staff use quick calls and WhatsApp—inconsistent data"]
      },
      idealFlow: {
        description: "The ideal system flow removes manual loops through automation, providing real-time visibility and structured data capture at every step.",
        improvements: ["Automated driver assignment based on location and availability", "Real-time status updates pushed to all stakeholders", "Single source of truth for all ride data", "Structured intake that works with existing hospital workflows"]
      },
      phaseMapping: {
        description: "We mapped how each actor participates across the four key phases: Intake, Assign, En-Route, and Handover & Close.",
        breakdownReasons: ["Heavy Dependency on Manual Coordination: Driver assignment relies on manual calls/WhatsApp—delays and errors", "Lack of Real-Time Visibility: No live tracking or automated updates—forces repeated follow-ups, slowing dispatch", "Fragmented Data Across Multiple Channels: Info moves through WhatsApp, calls, dashboard—duplicated entry and inconsistent records", "Workflow Mismatch with Real Hospital Behavior: System expects structured entry, but staff use quick calls and WhatsApp—inconsistent data"]
      }
    },
    merrySolutionPhases: [{
      title: "Data Audit",
      content: "Mapped data ownership, initiation, and decision-enabling across all actors"
    }, {
      title: "System Flow & Opportunity Mapping",
      content: "Analyzed current vs ideal system flows to identify automation opportunities"
    }, {
      title: "User Journey Mapping",
      content: "" // Placeholder - add content here
    }, {
      title: "Proposed: Workflow + Scenarios",
      content: "" // Placeholder - add content here
    }],
    contextPoints: ["Unpredictable emergencies", "Limited information", "High message volume", "Multi-stakeholder communication", "Low digital maturity", "Unreliable networks", "Fragmented workflows"],
    problemDefinition: [{
      title: "01: WhatsApp was the real operating system",
      content: "Hospital admins trusted WhatsApp more than the dashboard. However, chats were unstructured, free-text, missing key data, dependent on human memory, and impossible to audit."
    }, {
      title: "02: The dashboard was not designed for emergency scenarios",
      content: "Admins found it slow, overwhelming, missing essential fields, and not aligned with their real workflow. They reverted to WhatsApp, even though it created data loss."
    }, {
      title: "03: Ride information was fragmented",
      content: "Admins jumped between WhatsApp, phone calls, verbal confirmation, Excel sheets, and their own memory. This produced inaccurate records, delays, and unclear handover."
    }, {
      title: "04: No real-time visibility or unified timeline",
      content: "Hospitals had no reliable way to see whether the driver accepted, ETA changes, driver movement, pickup confirmation, or drop confirmation."
    }, {
      title: "05: No system could handle peak-load situations",
      content: "When multiple emergencies came in minutes apart: messages overlapped, drivers got confused, admins lost track, and trips were duplicated or missed."
    }, {
      title: "06: No structured handover process",
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
      content: "Introduced a 3-step verification: Hospital staff acknowledgment, Driver acknowledgment, MHA final closure. Each step is timestamped, solving disputes and strengthening auditability."
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
    businessOutcomes: ["Faster Emergency Handling: Admins will be able to intake requests instantly with minimal data entry", "Higher Ride Success & Completion Rates: Real-time visibility will prevent miscommunication and delays", "Significant Drop in Manual Calls: Automatic updates will replace follow-up calls", "Improved Hospital Trust: Clear timelines and standardized updates will build confidence", "Better Reporting & Data Accuracy: The dashboard will act as a complete, verifiable record", "Operational Efficiency: The system will support high-volume emergencies without overwhelming staff", "Higher Dashboard Adoption: Hospitals will see clear value in the platform, not just WhatsApp"],
    learnings: ["This project reinforced several key lessons. Real-world emergency systems need resilience, not perfection, design must survive low networks, broken workflows, and human unpredictability. WhatsApp is India's most adopted enterprise tool, so designing around it rather than replacing it was critical. A system is only as strong as its fallback modes; every workflow required a Plan B, C, and D. Mobile-first is not optional since hospital admins coordinate while walking, talking, and multitasking. Finally, UI is only 30% of the solution and the other 70% is workflow logic, integrations, and system constraints."],
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
    role: "Self-initiated project out of personal interest | UX Research, UX Design, UI Design, Information Architecture",
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
      content: "Phone calls, manual planning, and volunteer-based transport create a fragile network that collapses under pressure. Impact: The ecosystem fails daily, not due to lack of food, but lack of system design."
    }],
    researchInsights: {
      ngoRole: "Food leftover management has been a struggle for almost all NGOs in India. They facilitate the leftover food from restaurants, parties, etc to be channeled to the hunger hotspots. One such organization is **Manav Charities**, they collect leftover food from parties, weddings, or other events and distribute it in Hunger hotspots.",
      painPoints: ["Irregular notifications", "Lack of manpower to collect food", "High transportation cost", "Difficulty coordinating pickups from multiple locations", "High spoilage risk due to delays"],
      ngoQuotes: ["Leftover food at marriage functions or company events is going down the sewer when there are a lot of hungry stomachs on the street. Logistics and reaching out to them simultaneously has been a huge struggle throughout", "There have been a lot of instances when we couldn't collect food from parties because they were informed at odd timings", "The logistics in transporting the food on time to reach the hunger hotspots was very difficult to arrange and manage"],
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
    learnings: ["Small things make a great difference.", "Speaking with NGOs, I learned that the food shortage faced in hunger hotspots is very critical. Today's wastage is tomorrow's shortage.", "If we can join hands to provide surplus food to hunger hotspots, it would make a big difference.", "Consolidating food and storing it without spoilage is a real challenge. This app helps solve logistics, connectivity, and storage issues to enable food donation at scale."]
  },
  'curateus-app': {
    title: "Curateus v2.0",
    subtitle: "Transforming content discovery through human curation",
    overview: "Curateus is a content discovery platform built on a simple idea: human recommendations lead to deeper, more meaningful consumption than algorithmic feeds. In a digital world where people are overwhelmed by choice, misinformation, and algorithm fatigue, Curateus aims to help users find what truly matters through expert curation, community recommendations, and interest-driven discovery. This case study documents the transformation of Curateus from an MVP into a scalable v2.0 application with a refined content experience, dual user modes (curators + subscribers), and an updated UI system.",
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
    designGoals: ["Build Trust Through Human Curation: Shift from algorithm-first to intention-first content discovery.", "Support Both Curators and Subscribers: The MVP only supported curators. v2.0 needed a dual-experience model: Curators publish, draft, manage content; Subscribers discover, save, follow, personalize.", "Create a Unified Visual System: The existing UI lacked hierarchy, consistency, and scalability.", "Simplify Content Workflows: Saving, drafting, curating, searching, bookmarking, all needed clarity and predictability."],
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
    outcome: ["A scalable dual-experience model: Curators and subscribers now have distinct, intuitive workflows.", "A refined UI language: Consistent typography, spacing, colors, and components.", "Improved discoverability: Personalized onboarding and structured feeds.", "Reduced friction for curators: Draft management, metadata entry, save-for-later workflow.", "Stronger brand identity: A unified visual system aligned with Curateus' positioning as a premium curation platform."],
    learnings: ["Designing for both creators and consumers requires balancing complexity.", "Even UI-driven projects benefit significantly from research.", "Human-curated systems demand interfaces that clearly communicate trust.", "Establishing a design system early prevents screen-level inconsistencies.", "Working directly with a founder/PO sharpens prioritization and product reasoning.", "Thoughtful UI can elevate a brand built on trust, expertise, and meaningful content discovery."]
  },
  'stree-safety-app': {
    title: "STREE",
    subtitle: "Designing a Virtual Safety Assistant for Women in India",
    overview: "Harassment in public spaces restricts women's freedom of movement, participation in public life, and overall wellbeing. While existing safety tools focus on post-incident response, fear often exists long before an incident and lingers long after. Project Stree explores how design can support women across the entire safety journey: before, during, and after unsafe experiences.",
    role: "UX Research • UX Design • UI Direction",
    projectDuration: "1 Month",
    projectContext: "Final submission for PGP in UX Design, IDC IIT Bombay (2021–2022)",
    heroImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
    problemSpace: {
      why: "Safety, for women, is not a single moment. It is a continuous state shaped by perception, environment, and systemic response. Most existing safety products focus only on emergencies. We wanted to understand what safety actually means in everyday life.",
      context: "Fear is influenced by location, time of day, social context, and cultural attitudes. Even when no incident occurs, the anticipation of risk shapes behaviour: choosing longer routes, avoiding places, or limiting mobility altogether."
    },
    brief: {
      intro: "Women across India lack a reliable digital tool that supports them during commutes. The existing safety apps fail due to poor network reliability, complex interfaces during panic, and lack of emotional support after incidents.",
      coreIntent: "Create a smart, reliable, low-friction safety companion that women can depend on during vulnerable moments, supporting them before, during, and after unsafe experiences.",
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
      method: "Observational study; Think Aloud followed by a feedback session",
      participants: "Four; Women",
      mode: "Online, moderated",
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
    learnings: ["Designing for safety is as much about emotional design as it is about functionality.", "Fear, doubt, and social conditioning play a significant role in how women experience risk.", "Not every insight demands a feature, and not every problem can, or should, be solved through technology alone.", "I learned to navigate ambiguity, accept feedback that challenged assumptions, and design with empathy rather than urgency.", "Most importantly, I learned how to tell a clear, compelling research story: connecting evidence to decisions and decisions to outcomes."],
    closing: "Project Stree reflects my approach to UX research and design: grounded in lived experiences, guided by evidence, and shaped by responsibility. It demonstrated how thoughtful design can address sensitive, complex problems, not by providing all the answers, but by asking the right questions and designing with care."
  },
  'brynq': {
    title: "BrynQ",
    subtitle: "Transforming a legacy integration platform into a scalable B2B iPaaS",
    overview: "This case study focuses on process, reasoning, and outcomes. Product visuals are abstracted due to NDA.",
    role: "Product Designer (UX + UI)",
    projectDuration: "Multi-year platform redesign",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    // Hero metadata
    brynqHeroMeta: {
      scope: "Multi-year platform redesign",
      context: "Legacy system → modern B2B iPaaS",
      focus: "Digitising offline workflows, reducing delivery time, enabling self-serve integrations"
    },
    // Background section
    brynqBackground: "BrynQ is a B2B Integration Platform-as-a-Service that connects HRM and Payroll systems, enabling organisations to transfer and transform employee data between applications. When I started working on the platform, it was still operating under its legacy identity, SalureConnect. While technically capable, a large part of the operational workflow, especially integration onboarding and requirements gathering, lived outside the product in manual tools. This case study covers how I helped bring one of the most critical offline workflows into the platform, and how that decision shaped multiple product improvements over time.",
    // Legacy Reality section
    brynqLegacyReality: "Before any integration could be built, interface developers had to gather detailed requirements from customers using Excel files known internally as \"Scenarios.\" These files described how data should flow between systems, including field mappings and transformation logic. In practice, this process was slow, fragile, and heavily dependent on live calls, follow-ups, and manual clarification. Most integration delays did not occur during development; they occurred before development even started.",
    // Why This Became a Product Problem
    brynqProductProblem: "As BrynQ scaled, the limitations of this process became more visible. Customers often lacked technical clarity about their own systems, developers spent hours translating business intent into technical mappings, and incomplete information caused weeks of delay. There was no structured accountability, no visibility into progress, and no standardisation across integrations. What looked like a documentation issue was actually a product and systems problem.",
    // My Responsibility
    brynqResponsibility: "My responsibility was to rethink how integration requirements entered the system, not by redesigning integration logic itself, but by redesigning the workflow around it. The challenge was not just usability. It was change management. Any solution had to work within the realities of the interface team, the Product Owner, and existing customers.",
    // Research section
    brynqResearch: "To design responsibly, I focused on understanding the current process as it actually happened. I conducted contextual interviews with the interface team and Product Owner, reviewed multiple real scenario files, and shadowed interface developers as they worked with customers. I also observed customer support interactions to understand where confusion surfaced downstream. This helped me see the Excel file not as a form, but as a coordination tool, and any digital replacement needed to preserve that role before improving it.",
    // Key Insight
    brynqKeyInsight: {
      main: "The biggest delays were not technical. They were caused by incomplete, unclear, and unstable requirements.",
      conclusion: "Stabilising input early would unlock speed everywhere else.",
      reframe: "This insight reframed the problem from \"how do we build integrations faster?\" to \"how do we help people express what they need, clearly and early?\""
    },
    // MVP Direction
    brynqMvpDirection: "Together with the Product Owner and interface team PM, I aligned on a pragmatic MVP approach: Rather than redesigning the process from scratch, we would first bring the existing Excel workflow into the platform, mirroring the team's mental model to ensure adoption. Optimisation would come later.",
    // Interface Requirements Wizard
    brynqWizard: {
      intro: "Based on research, I structured the workflow into three explicit phases that already existed implicitly. At this stage, the wizard still relied on mostly manual entry — the key wins were establishing a single source of truth, enabling self-reliability, and eliminating redundant scenario files:",
      phases: ["Gathering basic context", "Defining scenarios and mappings", "Reviewing and confirming before development"],
      benefits: "The wizard helped users provide minimum viable context upfront, made missing information visible, and created a single source of truth for developers."
    },
    // Review & Accountability
    brynqReview: "Once submitted, requests entered a structured review flow. Developers were notified, could approve or reject with feedback, and the request reopened until it met development standards. This replaced long email threads with a predictable system state and clear ownership.",
    // MVP Outcomes
    brynqMvpOutcomes: "Without changing core integration logic, the wizard reduced friction across the process. Scenario completion time dropped significantly, missing information was identified earlier, and internal coordination became more transparent. More importantly, structured data now lived inside the platform, enabling the next phase.",
    // Wizard to Templates
    brynqTemplates: "Once patterns emerged across structured scenario data, it became possible to introduce templates for common system combinations and scenarios. Templates reduced input time further and shifted BrynQ from a fully custom, developer-driven model toward self-serve integration setup.",
    // Platform Evolution
    brynqEvolution: "This foundational work enabled additional capabilities, including lightweight project management and AI-assisted interface creation, covered in separate BrynQ sub-projects. What began as digitising an Excel file became a cornerstone of BrynQ's modernisation.",
    // Reflection
    brynqReflection: "This project reinforced the importance of respecting existing workflows while designing for scale. By digitising before optimising, we created a foundation that teams could trust and build upon. It also strengthened my experience in designing complex B2B systems where success depends as much on adoption and governance as on usability.",
    learnings: ["Respecting existing workflows while designing for scale creates foundations teams can trust", "Digitising before optimising reduces adoption friction", "Success in complex B2B systems depends as much on adoption and governance as on usability", "Change management is as critical as usability in enterprise product design"],
    brynqNdaNote: "Due to NDA, product visuals are abstracted. Happy to discuss details privately."
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
      content: "Colors were adjusted to feel more modern, energetic, and balanced, aligned with lifestyle brands in Dubai. The palette supports vouchers, price highlights, call-to-actions, and categories."
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
  }
};
const CaseStudy = () => {
  const {
    slug
  } = useParams();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showInterviewGallery, setShowInterviewGallery] = useState(false);
  const [showAffinityGallery, setShowAffinityGallery] = useState(false);
  const [showWireframeGallery, setShowWireframeGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Scroll to top when case study opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Wireframe images array
  const wireframeImages = [streeWireframe1, streeWireframe2, streeWireframe3, streeWireframe4, streeWireframe5, streeWireframe6, streeWireframe7, streeWireframe8, streeWireframe9, streeWireframe10, streeWireframe11, streeWireframe12, streeWireframe13, streeWireframe14];

  // Open gallery with specific images starting at index
  const openGallery = (images: string[], startIndex: number) => {
    setGalleryImages(images);
    setGalleryIndex(startIndex);
  };

  // Close gallery
  const closeGallery = () => {
    setGalleryImages([]);
    setGalleryIndex(0);
  };

  // Handle keyboard navigation in gallery
  useEffect(() => {
    if (galleryImages.length === 0) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGallery();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setGalleryIndex(prev => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryImages]);
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
      {/* Lightbox Modal */}
      {lightboxImage && <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer" onClick={() => setLightboxImage(null)} onKeyDown={e => e.key === 'Escape' && setLightboxImage(null)} tabIndex={0} ref={el => el?.focus()}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors" onClick={() => setLightboxImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">Press ESC or click outside to close</p>
        </div>}

      {/* Gallery Modal with Navigation */}
      {galleryImages.length > 0 && <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={closeGallery} tabIndex={0} ref={el => el?.focus()}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10" onClick={closeGallery}>
            <X className="w-8 h-8" />
          </button>
          
          {/* Previous button */}
          <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20" onClick={e => {
        e.stopPropagation();
        setGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
      }}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          {/* Image */}
          <img src={galleryImages[galleryIndex]} alt={`Gallery image ${galleryIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
          
          {/* Next button */}
          <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20" onClick={e => {
        e.stopPropagation();
        setGalleryIndex(prev => (prev + 1) % galleryImages.length);
      }}>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          {/* Counter and instructions */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/80 text-sm mb-1">{galleryIndex + 1} / {galleryImages.length}</p>
            <p className="text-white/50 text-xs">Use ← → keys to navigate • ESC to close</p>
          </div>
        </div>}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 bg-background/80 backdrop-blur-sm">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to work
        </Link>
      </nav>

      {/* Merry Health Sidebar Navigation */}
      {slug === 'merry-health' && <CaseStudySidebar sections={[{
      id: 'merry-context',
      label: 'Context'
    }, {
      id: 'merry-problem',
      label: 'Problem'
    }, {
      id: 'merry-research',
      label: 'Research'
    }, {
      id: 'merry-strategy',
      label: 'Solution'
    }, {
      id: 'merry-impact',
      label: 'Impact'
    }, {
      id: 'merry-reflection',
      label: 'Reflection'
    }]} />}

      {/* STREE Sidebar Navigation */}
      {slug === 'stree-safety-app' && <CaseStudySidebar sections={[{
      id: 'stree-context',
      label: 'Context'
    }, {
      id: 'stree-brief',
      label: 'Brief'
    }, {
      id: 'stree-research',
      label: 'Research'
    }, {
      id: 'stree-synthesis',
      label: 'Synthesis'
    }, {
      id: 'stree-solution',
      label: 'Solution'
    }, {
      id: 'stree-design',
      label: 'Design'
    }, {
      id: 'stree-impact',
      label: 'Impact'
    }]} />}

      {/* Food Waste Sidebar Navigation */}
      {slug === 'food-waste-ngo' && <CaseStudySidebar sections={[{
      id: 'foodwaste-context',
      label: 'Context'
    }, {
      id: 'foodwaste-research',
      label: 'Research'
    }, {
      id: 'foodwaste-solution',
      label: 'Solution'
    }, {
      id: 'foodwaste-design',
      label: 'Design'
    }, {
      id: 'foodwaste-impact',
      label: 'Impact'
    }]} />}

      {/* BrynQ Sidebar Navigation */}
      {slug === 'brynq' && <CaseStudySidebar sections={[{
      id: 'brynq-context',
      label: 'Context'
    }, {
      id: 'brynq-problem',
      label: 'Problem'
    }, {
      id: 'brynq-research',
      label: 'Research'
    }, {
      id: 'brynq-solution',
      label: 'Solution'
    }, {
      id: 'brynq-outcomes',
      label: 'Outcomes'
    }, {
      id: 'brynq-reflection',
      label: 'Reflection'
    }]} />}

      {/* STREE Context Section - Similar to Merry Health */}
      {slug === 'stree-safety-app' && <>
          <section id="stree-context" className="px-6 lg:px-12 pt-32 pb-16 scroll-mt-20">
            <div className="container mx-auto max-w-5xl">
              {/* Context Header */}
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Context</p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl leading-tight">Designing a Safety Companion for Independent Women Navigating Indian Cities</h1>
              <p className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-3xl">{study.overview}</p>

              {/* Meta Card - Horizontal layout like Merry Health */}
              <div className="rounded-xl border border-border bg-muted/30 mb-12">
                <div className="grid md:grid-cols-5">
                  <div className="p-5">
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Role</h3>
                    <p className="text-sm">{study.role}</p>
                  </div>
                  <div className="p-5 flex items-center">
                    <div className="hidden md:block w-px h-8 bg-border mr-5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Team</h3>
                      <p className="text-sm">Team of 5</p>
                    </div>
                  </div>
                  {study.projectDuration && <div className="p-5 flex items-center">
                    <div className="hidden md:block w-px h-8 bg-border mr-5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Duration</h3>
                      <p className="text-sm">{study.projectDuration}</p>
                    </div>
                  </div>}
                  {study.projectContext && <div className="p-5 flex items-center">
                    <div className="hidden md:block w-px h-8 bg-border mr-5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Program</h3>
                      <p className="text-sm">{study.projectContext}</p>
                    </div>
                  </div>}
                  {study.tools && <div className="p-5 flex items-center">
                    <div className="hidden md:block w-px h-8 bg-border mr-5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Tools</h3>
                      <p className="text-sm">{study.tools.join(', ')}</p>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </section>
        </>}

      {/* Other case studies header */}
      {slug !== 'merry-health' && slug !== 'stree-safety-app' && slug !== 'brynq' && slug !== 'food-waste-ngo' && <header className="pt-32 pb-20 px-6 lg:px-12 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-up">
              {study.title}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic animate-fade-up-delay-1">
              {study.subtitle}
            </p>
          </div>
        </header>}

      {/* Hero Image */}

      {/* Overview / Context - Merry Health specific layout */}
      {slug === 'merry-health' ? <>
          {/* Hero Banner with Platform Screenshots */}
          <section className="w-full bg-gradient-to-b from-muted/60 to-background pt-12 pb-8 border-b border-border/30">
            <div className="container mx-auto max-w-6xl px-6 lg:px-12">
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground/70 text-center">Merry Health's platform we audited and redesigned</p>
              </div>
            </div>
          </section>
          
          <section id="merry-context" className="px-6 lg:px-12 pt-16 pb-16 scroll-mt-20">
            <div className="container mx-auto max-w-5xl">
              {/* Background Content */}
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Context</p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl leading-tight">Simplifying Emergency Dispatch Across Tier 2 & 3 Cities in India</h1>
              <p className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-3xl">{study.overview}</p>

            {/* Meta Card - Combined with dividers */}
            <div className="rounded-xl border border-border bg-muted/30 mb-12">
              <div className="grid md:grid-cols-4">
                <div className="p-5">
                  <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Role</h3>
                  <p className="text-sm">{study.role}</p>
                </div>
                <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Team</h3>
                    <p className="text-sm">Team of 5 designers</p>
                  </div>
                </div>
                <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Context</h3>
                    <p className="text-sm">Academic Practicum, MDes. JSAA</p>
                  </div>
                </div>
                <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Tools</h3>
                    <p className="text-sm">{study.tools?.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Identified */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">The Problem</h3>
              <div className="p-6 rounded-xl border bg-gray-200 border-border">
                <p className="text-lg leading-relaxed text-foreground mb-4">Manual workflows were slowing down emergency response. Hospital admins relied on phone calls and WhatsApp messages to coordinate ambulance dispatch, leading to delays. Driver availability was unclear, tracking links weren't shared consistently, and critical data was lost in the process.<span className="font-medium">Manual workflows were slowing down emergency response.</span> ​
                </p>
                <p className="text-muted-foreground">This is where we stepped in to streamline the dispatch process, reduce coordination overhead, and build a system that works with existing behaviors rather than against them.</p>
              </div>
            </div>

            {/* What Are We Building - Sub-section */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl mb-6">What Are We Trying to Build?</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-3xl">
                The project aims to explore how the ambulance dispatch process can be simplified and made more responsive by aligning with existing end-user communication behaviors and operational realities.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <p className="text-sm text-muted-foreground">Simplify how hospital admins request and assign ambulances.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <p className="text-sm text-muted-foreground">Improve driver acknowledgment and communication reliability.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <p className="text-sm text-muted-foreground">Strengthen visibility, data capture, and reporting accuracy across all users.</p>
                </div>
              </div>
            </div>

            {/* Identified Users */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6">Identified Users</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-serif text-lg mb-2">Hospital Admins</h4>
                  <p className="text-sm text-muted-foreground">Coordinate ambulance bookings, track rides, and manage patient handoffs across facilities.</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-serif text-lg mb-2">Merry Health Admins</h4>
                  <p className="text-sm text-muted-foreground">Oversee system-wide operations, assign drivers, and ensure timely service delivery.</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-serif text-lg mb-2">Drivers</h4>
                  <p className="text-sm text-muted-foreground">Receive ride assignments, navigate to pickup locations, and update ride statuses.</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h4 className="font-serif text-lg mb-2">Patient Party</h4>
                  <p className="text-sm text-muted-foreground">Family members or attendants who need visibility into ambulance arrival and ride progress.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </> : slug !== 'stree-safety-app' && <section id={slug === 'food-waste-ngo' ? 'foodwaste-context' : slug === 'brynq' ? 'brynq-context' : undefined} className={`px-6 lg:px-12 pt-32 pb-16 border-t border-border scroll-mt-20`}>
          <div className="container mx-auto max-w-5xl">
            {/* Context Header */}
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Context</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {slug === 'food-waste-ngo' && 'Bridging Surplus Food with Hunger Hotspots Through Coordinated Redistribution'}
              {slug === 'brynq' && 'Transforming a Legacy Integration Platform into a Scalable B2B iPaaS'}
              {slug !== 'food-waste-ngo' && slug !== 'brynq' && study.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-3xl">{slug === 'brynq' && study.brynqBackground ? study.brynqBackground : study.overview}</p>
            
            {/* Meta Card - Horizontal layout like other case studies */}
            <div className="rounded-xl border border-border bg-muted/30 mb-12">
              <div className="grid md:grid-cols-4">
                <div className="p-5">
                  <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Role</h3>
                  <p className="text-sm">{study.role}</p>
                </div>
                {study.projectDuration && <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Duration</h3>
                    <p className="text-sm">{study.projectDuration}</p>
                  </div>
                </div>}
                {study.projectContext && <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Program</h3>
                    <p className="text-sm">{study.projectContext}</p>
                  </div>
                </div>}
                {study.tools && <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Tools</h3>
                    <p className="text-sm">{study.tools.join(', ')}</p>
                  </div>
                </div>}
                {study.brynqHeroMeta?.focus && <div className="p-5 flex items-center">
                  <div className="hidden md:block w-px h-8 bg-border mr-5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Focus</h3>
                    <p className="text-sm">{study.brynqHeroMeta.focus}</p>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </section>}

      {/* Challenge */}
      {study.challenge && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Challenge</h2>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">{study.challenge}</p>
          </div>
        </section>}

      {/* Solution */}
      {study.solution && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">The Solution</h2>
            <p className="text-lg leading-relaxed">{study.solution}</p>
          </div>
        </section>}



      {/* BrynQ: Problem Section - Legacy Reality + Product Problem merged */}
      {study.brynqLegacyReality && <section id="brynq-problem" className="px-6 lg:px-12 py-20 bg-card scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Problem</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Manual Workflows Blocking Platform Scale</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">{study.brynqLegacyReality}</p>
          
          {/* Current System Flow Diagram */}
          <div className="p-6 bg-background border border-border mb-12">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Current System Flow (Before)</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2">
              <div className="flex-1 text-center p-4 bg-muted/20 border border-dashed border-border rounded">
                <span className="text-xs font-medium">Customer</span>
                <p className="text-[10px] text-muted-foreground mt-1">Unclear requirements</p>
              </div>
              <div className="text-muted-foreground/50 rotate-90 md:rotate-0">→</div>
              <div className="flex-1 text-center p-4 bg-muted/20 border border-dashed border-border rounded">
                <span className="text-xs font-medium">Excel File</span>
                <p className="text-[10px] text-muted-foreground mt-1">Manual scenarios</p>
              </div>
              <div className="text-muted-foreground/50 rotate-90 md:rotate-0">→</div>
              <div className="flex-1 text-center p-4 bg-muted/20 border border-dashed border-border rounded">
                <span className="text-xs font-medium">Live Calls</span>
                <p className="text-[10px] text-muted-foreground mt-1">Clarifications</p>
              </div>
              <div className="text-muted-foreground/50 rotate-90 md:rotate-0">→</div>
              <div className="flex-1 text-center p-4 bg-muted/20 border border-dashed border-border rounded">
                <span className="text-xs font-medium">Email Threads</span>
                <p className="text-[10px] text-muted-foreground mt-1">Follow-ups</p>
              </div>
              <div className="text-muted-foreground/50 rotate-90 md:rotate-0">→</div>
              <div className="flex-1 text-center p-4 bg-destructive/10 border border-dashed border-destructive/30 rounded">
                <span className="text-xs font-medium text-destructive/80">Developer</span>
                <p className="text-[10px] text-muted-foreground mt-1">Incomplete info</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xs text-destructive/70">⟳</span>
              <p className="text-xs text-muted-foreground italic">Repeated back-and-forth cycles causing weeks of delay</p>
            </div>
          </div>

          {/* Product Problem content */}
          {study.brynqProductProblem && <>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">{study.brynqProductProblem}</p>
            
            {/* Time loss diagram */}
            <div className="p-8 bg-background border border-border">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Where Time Was Lost</h3>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex-1 text-center p-4 bg-muted/30 border border-dashed border-border">
                  <span className="text-2xl font-serif text-destructive/70">70%</span>
                  <p className="text-xs text-muted-foreground mt-1">Pre-development delays</p>
                </div>
                <div className="text-muted-foreground/50">→</div>
                <div className="flex-1 text-center p-4 bg-muted/30 border border-dashed border-border">
                  <span className="text-2xl font-serif text-muted-foreground">20%</span>
                  <p className="text-xs text-muted-foreground mt-1">Actual development</p>
                </div>
                <div className="text-muted-foreground/50">→</div>
                <div className="flex-1 text-center p-4 bg-muted/30 border border-dashed border-border">
                  <span className="text-2xl font-serif text-muted-foreground">10%</span>
                  <p className="text-xs text-muted-foreground mt-1">Review & handoff</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 italic text-center">* Indicative breakdown: most delays occurred before development even started</p>
            </div>
          </>}
        </div>
      </section>}

      {/* BrynQ: Research Section */}
      {study.brynqResearch && <section id="brynq-research" className="px-6 lg:px-12 py-20 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Research</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Understanding the Existing Workflow</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">{study.brynqResearch}</p>
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <img src={brynqScenarioRedacted} alt="Sample scenario file (redacted)" className="w-full h-auto" />
            <div className="px-4 py-3 bg-muted/30 border-t border-border">
              <p className="text-xs text-muted-foreground italic">Sample scenario file (redacted for confidentiality)</p>
            </div>
          </div>
        </div>
      </section>}

      {/* BrynQ: My Responsibility - now under Research */}
      {study.brynqResponsibility && <section className="px-6 lg:px-12 py-20 bg-card"><div className="container mx-auto max-w-5xl"><h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Design Approach & Framing</h2><p className="text-lg leading-relaxed text-muted-foreground">{study.brynqResponsibility}</p></div></section>}

      {/* BrynQ: Key Insight */}
      {study.brynqKeyInsight && <section className="px-6 lg:px-12 py-20 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Key Insight</h2>
          <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
            <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-6 relative z-10">{study.brynqKeyInsight.main}</p>
            <p className="text-lg italic text-foreground/80 relative z-10">{study.brynqKeyInsight.conclusion}</p>
            <p className="text-muted-foreground mt-4 relative z-10">{study.brynqKeyInsight.reframe}</p>
          </div>
        </div>
      </section>}

      {/* BrynQ: Solution Section - MVP Direction */}
      {study.brynqMvpDirection && <section id="brynq-solution" className="px-6 lg:px-12 py-20 scroll-mt-20"><div className="container mx-auto max-w-5xl"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Solution</p><h2 className="font-serif text-3xl md:text-4xl mb-8">Digitising the Scenario Workflow</h2><p className="text-lg leading-relaxed text-muted-foreground">{study.brynqMvpDirection}</p></div></section>}

      {/* BrynQ: Wizard */}
      {study.brynqWizard && <section className="px-6 lg:px-12 py-20 bg-card"><div className="container mx-auto max-w-5xl"><h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Designing the Interface Requirements Wizard</h2><p className="text-lg leading-relaxed text-muted-foreground mb-8">{study.brynqWizard.intro}</p><div className="grid md:grid-cols-3 gap-4 mb-8">{study.brynqWizard.phases.map((phase, i) => <div key={i} className="p-5 border border-border bg-background"><span className="text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">Phase {i + 1}</span><p className="mt-2">{phase}</p></div>)}</div><p className="text-muted-foreground">{study.brynqWizard.benefits}</p><div className="mt-8 bg-muted/30 border border-border rounded-lg overflow-hidden"><img src={brynqWizardFlow} alt="Wizard flow diagram" className="w-full h-auto" /></div></div></section>}

      {/* BrynQ: Review */}
      {study.brynqReview && <section className="px-6 lg:px-12 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Introducing Review & Accountability</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">{study.brynqReview}</p>
          
          {/* New System Flow Diagram */}
          <div className="p-6 bg-card border border-border">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">New System Flow (After Implementation)</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2">
              <div className="flex-1 text-center p-4 bg-primary/5 border border-primary/20 rounded">
                <span className="text-xs font-medium">Customer</span>
                <p className="text-[10px] text-muted-foreground mt-1">Guided wizard input</p>
              </div>
              <div className="text-primary/50">→</div>
              <div className="flex-1 text-center p-4 bg-primary/5 border border-primary/20 rounded">
                <span className="text-xs font-medium">In-App Wizard</span>
                <p className="text-[10px] text-muted-foreground mt-1">Structured scenarios</p>
              </div>
              <div className="text-primary/50">→</div>
              <div className="flex-1 text-center p-4 bg-primary/5 border border-primary/20 rounded">
                <span className="text-xs font-medium">Validation</span>
                <p className="text-[10px] text-muted-foreground mt-1">Missing info flagged</p>
              </div>
              <div className="text-primary/50">→</div>
              <div className="flex-1 text-center p-4 bg-primary/5 border border-primary/20 rounded">
                <span className="text-xs font-medium">Review Flow</span>
                <p className="text-[10px] text-muted-foreground mt-1">Approve / Reject</p>
              </div>
              <div className="text-primary/50">→</div>
              <div className="flex-1 text-center p-4 bg-primary/10 border border-primary/30 rounded">
                <span className="text-xs font-medium text-primary">Developer</span>
                <p className="text-[10px] text-muted-foreground mt-1">Complete info ready</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xs text-primary">✓</span>
              <p className="text-xs text-muted-foreground italic">Single source of truth with structured accountability</p>
            </div>
          </div>
        </div>
      </section>}

      {/* BrynQ: MVP Outcomes */}
      {study.brynqMvpOutcomes && <section id="brynq-outcomes" className="px-6 lg:px-12 py-20 bg-card scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Outcomes</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Measurable Impact</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">{study.brynqMvpOutcomes}</p>
          
          {/* Metric placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">~40%</span>
              <p className="text-sm text-muted-foreground mt-2">Reduction in scenario completion time</p>
            </div>
            <div className="p-6 bg-background border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">Earlier</span>
              <p className="text-sm text-muted-foreground mt-2">Missing information identified upfront</p>
            </div>
            <div className="p-6 bg-background border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">1</span>
              <p className="text-sm text-muted-foreground mt-2">Single source of truth for developers</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 italic text-center">* Metrics are indicative and abstracted due to NDA</p>
        </div>
      </section>}

      {/* BrynQ: Templates */}
      {study.brynqTemplates && <section className="px-6 lg:px-12 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">From Wizard to Templates</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">{study.brynqTemplates}</p>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-card border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">~60%</span>
              <p className="text-sm text-muted-foreground mt-2">Faster scenario setup with templates</p>
            </div>
            <div className="p-6 bg-card border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">Self-serve</span>
              <p className="text-sm text-muted-foreground mt-2">Customers can now configure integrations independently</p>
            </div>
            <div className="p-6 bg-card border border-border text-center">
              <span className="text-3xl md:text-4xl font-serif text-primary">Scalable</span>
              <p className="text-sm text-muted-foreground mt-2">Reusable patterns across client implementations</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mb-8 italic text-center">* Metrics are indicative and abstracted due to NDA</p>
          
          <div className="mb-4">
            <img src={brynqTemplateFlow} alt="Template builder flow diagram showing the workflow for admin template creation" className="w-full border border-border" />
          </div>
          <p className="text-sm text-muted-foreground italic text-center">Template builder flow — admins create reusable templates for known system combinations, enabling users to select prefilled fields from dropdown options based on historical knowledge.</p>
        </div>
      </section>}

      {/* BrynQ: Evolution */}
      {study.brynqEvolution && <section className="px-6 lg:px-12 py-20 bg-card"><div className="container mx-auto max-w-5xl"><h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Platform Evolution</h2><p className="text-lg leading-relaxed text-muted-foreground">{study.brynqEvolution}</p></div></section>}

      {/* BrynQ: Reflection */}
      {study.brynqReflection && <section id="brynq-reflection" className="px-6 lg:px-12 py-20 scroll-mt-20"><div className="container mx-auto max-w-5xl"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Reflection</p><h2 className="font-serif text-3xl md:text-4xl mb-8">What I Learned</h2><p className="font-serif text-xl leading-relaxed text-muted-foreground">{study.brynqReflection}</p></div></section>}

      {/* BrynQ: NDA Note */}
      {study.brynqNdaNote && <section className="px-6 lg:px-12 py-8 bg-muted/30 border-y border-border"><div className="container mx-auto max-w-5xl text-center"><p className="text-sm text-muted-foreground italic">{study.brynqNdaNote}</p></div></section>}

      {/* Merry Health Problem Section */}
      {slug === 'merry-health' && <section id="merry-problem" className="px-6 lg:px-12 py-16 bg-card scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header */}
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Problem</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Understanding the Challenges</h2>

            {/* User Problems - Reference Style Cards */}
            <div className="mb-12">
              <h3 className="font-serif text-xl mb-6">User Problems</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary/30">
                  <h4 className="font-serif text-lg mb-2">Dashboard Underutilization</h4>
                  <p className="text-sm text-muted-foreground mb-3">Hospital admins rely on phone calls instead of the dashboard, leading to delays in ambulance assignment and loss of structured data for reporting.</p>
                  <p className="text-sm italic text-foreground/70">"We just call because it's faster than logging in."</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary/30">
                  <h4 className="font-serif text-lg mb-2">Slow Dispatch Process</h4>
                  <p className="text-sm text-muted-foreground mb-3">Dispatch process takes 8–10 minutes due to manual entry and back-and-forth coordination.</p>
                  <p className="text-sm italic text-foreground/70">"By the time we confirm, we've already made 3-4 calls."</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary/30">
                  <h4 className="font-serif text-lg mb-2">Driver Communication Failures</h4>
                  <p className="text-sm text-muted-foreground mb-3">Drivers ignore app messages or fail to confirm, creating uncertainty about ambulance availability.</p>
                  <p className="text-sm italic text-foreground/70">"We never know if the driver actually saw the request."</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary/30">
                  <h4 className="font-serif text-lg mb-2">Patient Tracking Gaps</h4>
                  <p className="text-sm text-muted-foreground mb-3">Tracking links not always shared with patients, leading to anxiety and repeated follow-up calls.</p>
                  <p className="text-sm italic text-foreground/70">"Families keep calling to ask where the ambulance is."</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border-l-4 border-primary/30">
                  <h4 className="font-serif text-lg mb-2">Poor Data Visibility</h4>
                  <p className="text-sm text-muted-foreground mb-3">Low visibility of data quality and response metrics makes it hard to identify and fix systemic issues.</p>
                  <p className="text-sm italic text-foreground/70">"We don't have clear reports on what's working."</p>
                </div>
              </div>
            </div>

            {/* Business Problems - Reference Style Cards */}
            <div className="mb-12">
              <h3 className="font-serif text-xl mb-6">Business Problems</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-muted/30 border-l-4 border-muted-foreground/30">
                  <h4 className="font-serif text-lg mb-2">Low Platform Adoption</h4>
                  <p className="text-sm text-muted-foreground">Admins underuse the dashboard, lowering retention and reducing the platform's value proposition.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border-l-4 border-muted-foreground/30">
                  <h4 className="font-serif text-lg mb-2">No Centralized Data</h4>
                  <p className="text-sm text-muted-foreground">No centralized data for reporting or audits, making it difficult to demonstrate value to hospital partners.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border-l-4 border-muted-foreground/30">
                  <h4 className="font-serif text-lg mb-2">Credibility at Risk</h4>
                  <p className="text-sm text-muted-foreground">Delayed response time affects Merry Health's credibility and reputation with hospital partners.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border-l-4 border-muted-foreground/30">
                  <h4 className="font-serif text-lg mb-2">High Coordination Costs</h4>
                  <p className="text-sm text-muted-foreground">Manual coordination between admin and driver adds operational cost and reduces scalability.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border-l-4 border-muted-foreground/30">
                  <h4 className="font-serif text-lg mb-2">Weak Differentiation</h4>
                  <p className="text-sm text-muted-foreground">Without structured workflows and data, it's hard to differentiate from competitors.</p>
                </div>
              </div>
            </div>

            {/* Goals - Derived from Problems */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6">Project Goals</h3>
              
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 mb-8">
                <p className="font-serif text-lg text-center">
                  Design a high-adoption, low-friction emergency dispatch system that reduces manual coordination time, structures operational data, and strengthens Merry Health's enterprise positioning with measurable value for hospitals.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg mb-4">Business Goals</h4>
                  <ul className="space-y-3">
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Increase platform adoption among Tier 2 and Tier 3 partner hospitals (target: ≥ 80%)
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Reduce dispatch coordination time from hospital request to driver confirmation (target: under 3 minutes)
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Improve data completeness and accuracy through WhatsApp–dashboard sync (target: ≥ 70% fewer manual entry errors)
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Increase repeat hospital usage and retention (+20%)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-4">User Goals</h4>
                  <ul className="space-y-3">
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Respond quickly to emergency calls with minimal manual steps
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Request and track ambulances through familiar, simple workflows
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Get instant visibility into ambulance location, availability, and ETA
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">→</span>
                      Track each trip automatically and receive live status updates without repeated calls
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>}

      {/* Merry Health Research Section */}
      {slug === 'merry-health' && <section id="merry-research" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header */}
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Research & Insights</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Understanding the Dispatch Ecosystem: Users Under Pressure</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">Through platform audits, user journey mapping, and stakeholder analysis, we uncovered the following key insights:</p>
            
            {/* Insight Cards - Screenshot Style */}
            <div className="space-y-6 mb-16">
              {/* Insight 1 - From Audit */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Emergency-Mode Mismatch</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  The intake workflow demands complete, structured data upfront, but staff operate in panic mode during emergencies. They rely on paper, memory, and WhatsApp — not the dashboard — leading to delayed dispatch and frequent errors.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"We just call because it's faster than logging in."</p>
              </div>

              {/* Insight 2 - From Mapping */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Manual Coordination Bottleneck</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Dispatch depends on manual driver coordination — MHAs must call and follow up with multiple drivers to confirm availability. This creates unpredictable delays and forces staff to rely on memory and guesswork during high-pressure moments.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"By the time we confirm, we've already made 3-4 calls."</p>
              </div>

              {/* Insight 3 - From Findings */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Visibility Gaps Create Anxiety</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Active rides are visually buried, tracking links aren't consistently shared with patients, and there's no reliable real-time ETA. This triggers constant follow-up calls from families and breaks trust with hospital partners.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"Families keep calling to ask where the ambulance is."</p>
              </div>

              {/* Insight 4 - From Strategy */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">04</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Fragile Data, Weak Reporting</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Information is duplicated, overwritten, or incomplete across systems. Manual arrival and closure entries result in incorrect timestamps, making SLA tracking unreliable and audits difficult.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"We don't have clear reports on what's working."</p>
              </div>
            </div>

          </div>
        </section>}



      {/* Merry Health Platform Audit - Phase-by-Phase Analysis */}
      {slug === 'merry-health' && <section id="merry-audit" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl mb-4">Deep-Dive Audit Across All Phases</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">We conducted a data and platform audit for each phase to understand exactly where we can align better with user needs and business goals.</p>

            {/* Summary Insight Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">Intake & Data Capture</h3>
                  <p className="text-sm text-muted-foreground mb-3">System expects structured forms, but staff use WhatsApp, calls, and paper during emergencies—causing delays and errors.</p>
                  <p className="text-xs italic text-muted-foreground">"We can't fill long forms when a patient is critical."</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">Driver Assignment</h3>
                  <p className="text-sm text-muted-foreground mb-3">Manual coordination via calls and WhatsApp creates delays. No urgency visibility or smart matching.</p>
                  <p className="text-xs italic text-muted-foreground">"I call 3-4 drivers before one confirms."</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">En-Route Tracking</h3>
                  <p className="text-sm text-muted-foreground mb-3">No real-time tracking or status updates. Everyone relies on manual check-ins and phone calls.</p>
                  <p className="text-xs italic text-muted-foreground">"Family keeps calling us for ETA updates."</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">04</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">Handover & Closure</h3>
                  <p className="text-sm text-muted-foreground mb-3">Manual timestamps and bulk closure lead to inaccurate records, unreliable SLAs, and audit failures.</p>
                  <p className="text-xs italic text-muted-foreground">"We update records at the end of the day."</p>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 text-sm text-primary hover:underline mb-6 group">
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                <span>View detailed phase-by-phase audit findings</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-8">
                {/* Data Audit Link */}
                <div className="p-4 rounded-lg border border-border bg-card flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">Data Audit</span>
                    <span className="text-xs text-muted-foreground">— Understanding data ownership, initiation, and decision points across all actors</span>
                  </div>
                  <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=1-8&t=lxBxhBwv6frOZBTQ-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-primary hover:underline px-3 py-1.5 rounded bg-primary/10">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="currentColor">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                    </svg>
                    View in Figma
                  </a>
                </div>

                {/* Phase 1: Intake */}
                <PlatformAuditPhase phase="Phase 1" title="Intake" severity="high" description="First point of contact where hospital staff capture patient and case details during an emergency. It sets the foundation for the entire dispatch workflow by collecting the minimum critical information needed to initiate an ambulance request." taskGoal="Capture dispatch-critical information quickly and reliably" actorsInvolved="Patient/Patient Family, Hospital Receptionist, Merry Health Associate" issues={["Intake workflow requires full data upfront; staff rely on paper/WhatsApp.", "Data easily lost/mixed due to multitasking; no protection for in-progress entries.", "No priority context; admins rely on memory & manual judgment during panic."]} businessImpact={["Dispatch delays, errors, low hospital adoption.", "Inaccurate cases, rework, SLA inconsistencies.", "Wrong ambulance type, poor triage, slower response."]} recommendations={["Enable progressive intake (critical info first → rest later).", "Introduce workflow safeguards (preserve partial data, prevent overwrite).", "Surface priority & critical context early in intake workflow."]} platformFindings={[{
              number: 1,
              title: "Intake workflow is not designed for emergency-mode, leading to slow, error-prone data capture.",
              description: "The intake process demands complete, structured data upfront, forcing staff to use paper, memory, and WhatsApp during emergencies — slowing dispatch and increasing errors.",
              recommendations: ["Allow critical-first intake, complete the rest later.", "Auto-preserve early inputs during interruptions.", "Align flow with speed-first emergency behavior."]
            }, {
              number: 2,
              title: "Intake input is fragile and easily overwritten, causing lost or mixed case data.",
              description: "Ongoing intake entries are frequently reset, overwritten, or mixed between cases due to multitasking, interruptions, and lack of workflow protection.",
              recommendations: ["Auto-save partial entries continuously.", "Prevent overwrites when switching cases or calls.", "Support resume-from-where-left workflows.", "Ensure no re-entry of previously captured data."]
            }]} onImageClick={setLightboxImage} />

                {/* Phase 2: Assign */}
                <PlatformAuditPhase phase="Phase 2" title="Assign" severity="high" description="Connects a new case to an available ambulance through validation, coordination, and confirmation. Delays here slow dispatch and break workflow continuity." taskGoal="Match the right ambulance to the right case, fast and with full clarity" actorsInvolved="Merry Health Associate, Ambulance Driver, Hospital Admins" issues={["Manual driver coordination.", "No urgency/multi-case visibility.", "Weak ambulance discovery."]} businessImpact={["Slow dispatch, high ops load, low trust.", "Mis-prioritization, SLA failures, patient risk.", "Delayed decisions, wrong selection, dependency on manual channels."]} recommendations={["Enable system-led assignment & real-time driver status.", "Surface urgency & separate simultaneous cases.", "Improve availability-led discovery & streamline assignment path."]} platformFindings={[{
              number: 1,
              title: "Assignment depends on manual driver coordination, causing delays and uncertainty.",
              description: "MHA must call and follow up with multiple drivers to confirm availability, leading to unpredictable delays and inconsistent dispatch times.",
              recommendations: ["Provide real-time driver status to reduce repeated follow-ups.", "Support a single, streamlined assignment flow with clear confirmation."]
            }, {
              number: 2,
              title: "System does not surface urgency or simultaneous requests, resulting in wrong prioritization and case mix-ups.",
              description: "Urgency cues and simultaneous requests are not surfaced, forcing MHAs to rely on memory and guesswork, causing wrong prioritization or missed critical cases.",
              recommendations: ["Surface priority context early during assignment.", "Clearly separate concurrent cases to prevent mix-ups.", "Provide guided triage cues to support accurate decision-making."]
            }, {
              number: 3,
              title: "Ambulance discovery provides weak decision support — no clarity, no availability logic, no booking confidence.",
              description: "Ambulance list provides poor decision support — no sorting, no availability logic, unclear booking path — slowing down assignment and increasing reliance on manual channels.",
              recommendations: ["Use availability-driven discovery aligned with workflow needs.", "Support quick narrowing of options (urgency, type, proximity).", "Create a clear, confident assignment path with predictable next steps."]
            }]} onImageClick={setLightboxImage} />

                {/* Phase 3: En-Route */}
                <PlatformAuditPhase phase="Phase 3" title="En-Route" severity="high" description="The En Route phase covers everything that happens after an ambulance has been assigned and the driver begins traveling toward the pickup location. This is a high-dependency, high-visibility phase where hospitals, MHAs, and patient families all expect accurate, real-time updates." taskGoal="To provide reliable, continuous visibility of the ambulance's movement, status, and ETA across all parties" actorsInvolved="Ambulance Driver, Merry Health Associate, Hospital Admins, Patient Party" issues={["No reliable real-time tracking causing uncertainty and delays.", "Active rides not surfaced or prioritized causing delayed monitoring and missed escalations.", "Ride information hard to parse — unclear, long, and inconsistent."]} businessImpact={["Constant manual follow-ups.", "SLA Failures.", "Delayed decisions, dependency on manual channels."]} recommendations={["Provide continuous, system-led tracking with auto-updating ETA visible to all roles.", "Prioritize and clearly surface ongoing trips for quick access and proactive monitoring.", "Present critical information upfront with structured, consistent ride detail organization."]} platformFindings={[{
              number: 1,
              title: "Active rides aren't clearly surfaced → delays in monitoring & intervention",
              description: "Ongoing rides are visually buried, not distinguishable from other records, and lack clear prioritization — making it hard for MHAs and admins to monitor critical trips.",
              recommendations: ["Highlight in-progress trips as priority states in the workflow.", "Ensure quick access to active ride details without searching.", "Support proactive monitoring, reducing missed updates or delays."]
            }, {
              number: 2,
              title: "Poor ride detail structure → situational awareness is slow and error-prone",
              description: "Ride details are long, undifferentiated, and inconsistent, making it hard to extract status, timestamps, or critical info quickly during high-pressure moments.",
              recommendations: ["Present status-critical information upfront for fast scanning.", "Organize ride details into logical, workflow-aligned sections.", "Ensure consistent, clear time/event formatting for reliable reporting and decision-making."]
            }]} onImageClick={setLightboxImage} />

                {/* Phase 4: Handover & Close */}
                <PlatformAuditPhase phase="Phase 4" title="Handover & Close" severity="high" description="This phase covers the moment the ambulance reaches the hospital, the patient is handed over, and the trip is officially closed. It is a data-critical phase where timestamps, arrival confirmation, and final trip details must be accurately captured." taskGoal="To accurately confirm arrival, document the handover, and close the trip with complete and consistent data so that operations, reporting, billing, and SLAs stay reliable" actorsInvolved="Ambulance Driver, Merry Health Associate, Hospital Admins, Management / Reporting Teams" issues={["Inaccurate or missing timestamps due to manual confirmation.", "Overwritten or incomplete data due to manual, unchecked trip closure.", "Inaccurate case records & unsynced reports."]} businessImpact={["Unreliable SLAs and weak hospital trust.", "Poor data quality → broken reports, billing disputes, and audit failures.", "Inconsistent or incorrect reports, harming credibility."]} recommendations={["Enable system-led arrival validation to ensure accurate, consistent timestamps.", "Introduce closure validation workflow that checks required data before finalizing.", "Support guided, real-time closure with prompts."]} platformFindings={[{
              number: 1,
              title: "Manual arrival & closure entries → inaccurate, inconsistent timestamps",
              description: "Arrival and closure are entered manually (often delayed or in bulk), resulting in incorrect timestamps, missing events, and unreliable trip history.",
              recommendations: ["Enable workflow-driven arrival & handover confirmation aligned with real-world events.", "Reduce reliance on manual timestamps through system-assisted verification.", "Ensure closure requires complete event data before submission."]
            }, {
              number: 2,
              title: "No drill-down or visibility → inconsistent reporting & weak operational insight",
              description: "Static KPIs and limited reporting views prevent HAs and management from verifying trip details, diagnosing issues, or reconciling discrepancies across hospitals.",
              recommendations: ["Provide workflow-aligned drill-downs from KPIs to individual trip data.", "Standardize event labels and timestamps across all reporting surfaces.", "Ensure reports reflect synced, consistent, end-to-end trip data."]
            }]} onImageClick={setLightboxImage} />
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>}

      {/* Merry Health System Flow & Opportunity Mapping */}
      {slug === 'merry-health' && study.merrySystemFlow && <section id="merry-mapping" className="px-6 lg:px-12 py-16 bg-card scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl mb-4">Understanding the System & Opportunities</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">{study.merrySystemFlow.intro}</p>

            {/* Summary Insight Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">System Flow Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-3">Multiple loops and manual intervention points cause delays and errors across the dispatch workflow.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">Manual coordination</span>
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">Fragmented data</span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-2">Opportunity Mapping</h3>
                  <p className="text-sm text-muted-foreground mb-3">Key opportunities prioritized by impact: automation, real-time tracking, and structured data capture.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">40% faster dispatch</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">60% fewer calls</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 text-sm text-primary hover:underline mb-6 group">
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                <span>View detailed flow analysis and opportunity mapping</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-10">
                {/* System Flow Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-lg">System Flow Analysis</h3>
                      <p className="text-sm text-muted-foreground">{study.merrySystemFlow.currentFlow.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-muted/50 border border-border">
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Key Issues</h4>
                          <ul className="space-y-1.5">
                            {study.merrySystemFlow.currentFlow.painPoints.slice(0, 4).map((point, i) => <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-muted-foreground shrink-0">×</span>
                                <span>{point}</span>
                              </li>)}
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Key Improvements</h4>
                          <ul className="space-y-1.5">
                            {study.merrySystemFlow.idealFlow.improvements.slice(0, 4).map((point, i) => <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-primary shrink-0">✓</span>
                                <span>{point}</span>
                              </li>)}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">2 diagrams attached</span>
                        <div className="space-y-2">
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryCurrentFlow)}>
                            <img src={merryCurrentFlow} alt="Current System Flow" className="w-full h-20 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-muted px-2 py-1">
                              <span className="text-[10px] text-muted-foreground font-medium">Current Flow</span>
                            </div>
                          </div>
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryIdealFlow)}>
                            <img src={merryIdealFlow} alt="Ideal System Flow" className="w-full h-20 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-primary/10 px-2 py-1">
                              <span className="text-[10px] text-primary font-medium">Ideal Flow</span>
                            </div>
                          </div>
                        </div>
                        <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=2-493&t=lxBxhBwv6frOZBTQ-1" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-xs text-primary hover:underline">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="currentColor">
                            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                          </svg>
                          View in Figma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opportunity Mapping Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-lg">Opportunity Mapping</h3>
                      <p className="text-sm text-muted-foreground">From the system flow analysis, we identified key opportunities for improvement and mapped them to their potential impact and success metrics.</p>
                      
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-muted/20 border border-border/50">
                          <h5 className="text-sm font-semibold mb-2">Priority Opportunities</h5>
                          <ul className="space-y-2">
                            <li className="text-xs text-muted-foreground flex justify-between items-center">
                              <span className="flex gap-2"><span className="text-primary">→</span>Automate dispatch assignment</span>
                              <span className="px-1.5 py-0.5 bg-destructive/10 text-destructive rounded text-[10px]">High</span>
                            </li>
                            <li className="text-xs text-muted-foreground flex justify-between items-center">
                              <span className="flex gap-2"><span className="text-primary">→</span>Real-time status tracking</span>
                              <span className="px-1.5 py-0.5 bg-destructive/10 text-destructive rounded text-[10px]">High</span>
                            </li>
                            <li className="text-xs text-muted-foreground flex justify-between items-center">
                              <span className="flex gap-2"><span className="text-primary">→</span>Structured data capture</span>
                              <span className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px]">Med</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h5 className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Expected Impact</h5>
                          <ul className="space-y-1">
                            <li className="text-xs text-muted-foreground">• Avg. dispatch time ↓ by 40%</li>
                            <li className="text-xs text-muted-foreground">• Inbound calls ↓ by 60%</li>
                            <li className="text-xs text-muted-foreground">• Data error rate ↓ by 70%</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">2 diagrams attached</span>
                        <div className="space-y-2">
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryOpportunityMapping)}>
                            <img src={merryOpportunityMapping} alt="Opportunity Mapping" className="w-full h-16 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-muted/30 px-2 py-1">
                              <span className="text-[10px] text-muted-foreground font-medium">Opportunity Map</span>
                            </div>
                          </div>
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryOpportunityRefined)}>
                            <img src={merryOpportunityRefined} alt="Refined Opportunities" className="w-full h-16 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-primary/10 px-2 py-1">
                              <span className="text-[10px] text-primary font-medium">Refined Mapping</span>
                            </div>
                          </div>
                        </div>
                        <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=10-11098&t=lxBxhBwv6frOZBTQ-1" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-xs text-primary hover:underline">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="currentColor">
                            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                          </svg>
                          View in Figma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase Mapping Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-lg">Phase Mapping</h3>
                      <p className="text-sm text-muted-foreground">{study.merrySystemFlow.phaseMapping.description}</p>
                      
                      <div className="p-4 rounded-lg bg-muted/20 border border-border/50">
                        <h5 className="text-sm font-semibold mb-3">Why Phase Breakdown Matters</h5>
                        <ul className="space-y-2">
                          {study.merrySystemFlow.phaseMapping.breakdownReasons.map((reason, i) => <li key={i} className="text-xs text-muted-foreground flex gap-2">
                              <span className="text-primary shrink-0">{i + 1}.</span>
                              <span>{reason}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">1 diagram attached</span>
                        <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryPhaseMapping)}>
                          <img src={merryPhaseMapping} alt="Phase Mapping Matrix" className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                          <div className="bg-muted/30 px-2 py-1">
                            <span className="text-[10px] text-muted-foreground font-medium">Actor × Phase Matrix</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>}

      {/* Merry Health User Journey & Findings */}
      {slug === 'merry-health' && <section id="merry-findings" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl mb-4">Key Insights from User Journeys</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">We mapped current and ideal journeys for all actors to validate if our identified opportunities would truly make a difference.</p>

            {/* Summary Insight Cards - Always Visible */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-medium mb-3">PP</div>
                  <h3 className="font-serif text-lg mb-2">Patient Party</h3>
                  <p className="text-sm text-muted-foreground">Anxiety peaks during wait time. Tracking links and proactive SMS at milestones build trust.</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium mb-3">MH</div>
                  <h3 className="font-serif text-lg mb-2">Merry Health Admin</h3>
                  <p className="text-sm text-muted-foreground">Constantly switching tools. No single source of truth. High volume of status inquiry calls.</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-xs font-medium mb-3">HA</div>
                  <h3 className="font-serif text-lg mb-2">Hospital Admin</h3>
                  <p className="text-sm text-muted-foreground">Needs quick booking, ETA visibility, and self-service ride history without calling MHA.</p>
                </div>
              </div>
            </div>

            {/* Expandable Detailed Journeys */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 text-sm text-primary hover:underline mb-6 group">
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                <span>View detailed user journey maps</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-8 animate-fade-in">
                {/* Patient Party Journey Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-medium">PP</div>
                        <div>
                          <h3 className="font-serif text-lg">Patient Party Journey</h3>
                          <p className="text-xs text-muted-foreground">Family members coordinating emergency transport</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-blue-500/20">
                        <h4 className="text-xs font-semibold mb-3 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-600">✓</span>
                          Key Inferences
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-blue-600 font-bold">→</span>Anxiety peaks during wait time with no visibility</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-blue-600 font-bold">→</span>Multiple calls made to check ambulance status</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-blue-600 font-bold">→</span>Tracking link (when shared) significantly reduces stress</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-blue-600 font-bold">→</span>Proactive SMS at milestones builds trust</li>
                        </ul>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">2 journey maps</span>
                        <div className="space-y-2">
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryPatientCurrentJourney)}>
                            <img src={merryPatientCurrentJourney} alt="Current Journey" className="w-full h-14 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-muted px-2 py-1">
                              <span className="text-[10px] text-muted-foreground font-medium">Current</span>
                            </div>
                          </div>
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryPatientIdealJourney)}>
                            <img src={merryPatientIdealJourney} alt="Ideal Journey" className="w-full h-14 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-primary/10 px-2 py-1">
                              <span className="text-[10px] text-primary font-medium">Ideal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Merry Health Admin Journey Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">MH</div>
                        <div>
                          <h3 className="font-serif text-lg">Merry Health Admin Journey</h3>
                          <p className="text-xs text-muted-foreground">Central dispatch coordinators managing all requests</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-purple-600/5 border border-purple-500/20">
                        <h4 className="text-xs font-semibold mb-3 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-600">✓</span>
                          Key Inferences
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-purple-600 font-bold">→</span>Constantly switching between WhatsApp, calls, and dashboard</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-purple-600 font-bold">→</span>Manual relay of status from driver to hospital admin</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-purple-600 font-bold">→</span>No single source of truth for ride status</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-purple-600 font-bold">→</span>High volume of incoming status inquiry calls</li>
                        </ul>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">2 journey maps</span>
                        <div className="space-y-2">
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryAdminCurrentJourney)}>
                            <img src={merryAdminCurrentJourney} alt="Current Journey" className="w-full h-14 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-muted px-2 py-1">
                              <span className="text-[10px] text-muted-foreground font-medium">Current</span>
                            </div>
                          </div>
                          <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryAdminIdealJourney)}>
                            <img src={merryAdminIdealJourney} alt="Ideal Journey" className="w-full h-14 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            <div className="bg-primary/10 px-2 py-1">
                              <span className="text-[10px] text-primary font-medium">Ideal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hospital Admin Journey Card */}
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-xs font-medium">HA</div>
                        <div>
                          <h3 className="font-serif text-lg">Hospital Admin Journey</h3>
                          <p className="text-xs text-muted-foreground">Hospital staff initiating and tracking ambulance requests</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 border border-emerald-500/20">
                        <h4 className="text-xs font-semibold mb-3 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-600">✓</span>
                          Key Inferences
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-emerald-600 font-bold">→</span>Needs quick booking without lengthy phone calls</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-emerald-600 font-bold">→</span>Wants visibility into ETA to prepare receiving team</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-emerald-600 font-bold">→</span>Frustrated by having to call MHA for status updates</li>
                          <li className="text-xs text-muted-foreground flex gap-2"><span className="text-emerald-600 font-bold">→</span>Would benefit from self-service ride history and reports</li>
                        </ul>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">
                      <div className="bg-muted/20 border border-border rounded-lg p-3">
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">1 journey map</span>
                        <div className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryHospitalJourney)}>
                          <img src={merryHospitalJourney} alt="Hospital Admin Journey" className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                          <div className="bg-muted/30 px-2 py-1">
                            <span className="text-[10px] text-muted-foreground font-medium">Complete Journey Map</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=15-28403&t=lxBxhBwv6frOZBTQ-1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-primary hover:underline">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="currentColor">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                  </svg>
                  View all journey maps in Figma
                </a>
              </CollapsibleContent>
            </Collapsible>

            {/* Reasons for Breakdown - Always Visible */}
            <div className="mt-16">
              <h3 className="font-serif text-2xl mb-6">Why the System Was Breaking Down</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                  <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                  <div className="relative z-10">
                    <h4 className="font-serif text-lg mb-2">Workflow Mismatch</h4>
                    <p className="text-sm text-muted-foreground">System expects structured forms; staff use WhatsApp, calls, and quick notes in emergencies.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                  <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                  <div className="relative z-10">
                    <h4 className="font-serif text-lg mb-2">Fragmented Data</h4>
                    <p className="text-sm text-muted-foreground">Info moves through WhatsApp → calls → paper → dashboard, causing duplicates and missing fields.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                  <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                  <div className="relative z-10">
                    <h4 className="font-serif text-lg mb-2">Manual Coordination</h4>
                    <p className="text-sm text-muted-foreground">Driver assignment, confirmations, and updates rely on manual calls—increasing delays and errors.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-card">
                  <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">04</span>
                  <div className="relative z-10">
                    <h4 className="font-serif text-lg mb-2">No Real-Time Visibility</h4>
                    <p className="text-sm text-muted-foreground">No live tracking or automated updates—forcing repeated follow-ups and slowing dispatch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}

      {/* Merry Health Strategy & Recommendations */}
      {slug === 'merry-health' && <section id="merry-strategy" className="px-6 lg:px-12 py-16 bg-card scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Solution</span>
            <h2 className="font-serif text-3xl mb-4">Recommendations to Improve Adoption</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">Based on our research, we identified four key strategic recommendations to address the system breakdown.</p>
            
            {/* Summary Cards - Always Visible */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-base mb-2">Fix Workflow Gaps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Fix core booking → dispatch → closure sequence first.</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-base mb-2">Mobile-First Model</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Match real hospital behavior for higher adoption.</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-base mb-2">Smart Dispatch</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Use distance, ETA, and ratings for recommendations.</p>
                </div>
              </div>
              <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-background">
                <span className="absolute -top-4 -left-2 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">04</span>
                <div className="relative z-10">
                  <h3 className="font-serif text-base mb-2">Automated Tracking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Live tracking, auto updates, guided closure.</p>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 text-sm text-primary hover:underline mb-6 group">
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                <span>View detailed recommendations and expected outcomes</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-10 animate-fade-in">
                {/* Detailed Recommendations */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200/50 dark:border-amber-800/30">
                  <h3 className="font-serif text-lg mb-6">Detailed Recommendations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="text-3xl font-light text-muted-foreground">01</span>
                      <h4 className="font-serif text-base">Fix Tier-1 Workflow Gaps Immediately</h4>
                      <p className="text-sm text-muted-foreground">Resolve fundamental issues (redundant entries, broken data flow, missing feedback loops) to ensure the core booking → dispatch → closure sequence works reliably.</p>
                    </div>
                    <div className="space-y-3">
                      <span className="text-3xl font-light text-muted-foreground">02</span>
                      <h4 className="font-serif text-base">Shift to a Mobile-First, Dashboard-as-Record Model</h4>
                      <p className="text-sm text-muted-foreground">Match real hospital behavior to increase adoption, reduce coordination time, and ensure every case is captured consistently.</p>
                    </div>
                    <div className="space-y-3">
                      <span className="text-3xl font-light text-muted-foreground">03</span>
                      <h4 className="font-serif text-base">Smart Dispatch Recommendations & System Alerts</h4>
                      <p className="text-sm text-muted-foreground">Use distance, ETA, vehicle type, and ratings to suggest suitable ambulances and trigger system-led driver notifications.</p>
                    </div>
                    <div className="space-y-3">
                      <span className="text-3xl font-light text-muted-foreground">04</span>
                      <h4 className="font-serif text-base">Automated Tracking, Communication & Closure</h4>
                      <p className="text-sm text-muted-foreground">Enable live trip tracking, auto WhatsApp/SMS updates, and guided closure checks to reduce manual coordination.</p>
                    </div>
                  </div>
                </div>

                {/* Expected Outcomes */}
                <div>
                  <h3 className="font-serif text-lg mb-6">The Outcomes This Strategy Unlocks</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-border bg-background">
                      <h4 className="font-serif text-base mb-2">Faster Dispatch Speed</h4>
                      <p className="text-sm text-primary font-medium mb-2">20-40% improvement</p>
                      <p className="text-xs text-muted-foreground">By eliminating manual entry and enabling quicker driver confirmation.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-background">
                      <h4 className="font-serif text-base mb-2">Higher Dashboard Adoption</h4>
                      <p className="text-sm text-primary font-medium mb-2">30-50% lift</p>
                      <p className="text-xs text-muted-foreground">Mobile-first intake aligns with real hospital behavior.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-background">
                      <h4 className="font-serif text-base mb-2">Reduced Manual Coordination</h4>
                      <p className="text-sm text-primary font-medium mb-2">30-50% reduction</p>
                      <p className="text-xs text-muted-foreground">System-driven notifications cut down recurring calls.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-background">
                      <h4 className="font-serif text-base mb-2">Operational Efficiency</h4>
                      <p className="text-sm text-primary font-medium mb-2">25-45% gain</p>
                      <p className="text-xs text-muted-foreground">Automated updates and streamlined closure workflows.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-background lg:col-span-2">
                      <h4 className="font-serif text-base mb-2">Data Accuracy & Completeness</h4>
                      <p className="text-sm text-primary font-medium mb-2">40-60% improvement</p>
                      <p className="text-xs text-muted-foreground">From removing duplicate entries, auto-generating tickets, and introducing structured workflows.</p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>}


      {/* Merry Health Proposed Workflow */}
      {slug === 'merry-health' && <section id="merry-workflow" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h3 className="font-serif text-2xl mb-4">Proposed Workflow</h3>
            <p className="text-muted-foreground mb-10">Based on the research findings, we designed a new workflow that addresses the identified pain points and leverages opportunities for automation and clarity.</p>


            {/* Proposed Workflow Diagram */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">
          </h3>
              <p className="text-sm text-muted-foreground mb-6">The workflow integrates WhatsApp API, automated trip creation, driver assignment with priority rules, and automated notifications—while accounting for edge cases like driver unavailability and tracking issues.</p>
              
              <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-b from-primary/5 to-background shadow-sm overflow-hidden">
                <div className="bg-primary/10 px-4 py-2 border-b border-primary/20 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">Proposed Workflow with Edge Cases</span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>HA → WhatsApp API → MHA → Driver → PP</span>
                  </div>
                </div>
                <div className="p-6 bg-background">
                  <img src={merryProposedWorkflow} alt="Proposed edge case workflow showing 12 steps from Hospital Admin through WhatsApp API, MHA trip creation, driver assignment, to patient party notification with fallback mechanisms" className="w-full object-contain cursor-pointer hover:scale-[1.01] transition-transform duration-300" onClick={() => setLightboxImage(merryProposedWorkflow)} />
                </div>
                <div className="bg-primary/5 px-4 py-2 border-t border-primary/20 text-center">
                  <span className="text-xs text-muted-foreground">Click to view full workflow diagram with all edge cases and fallback mechanisms</span>
                </div>
              </div>
            </div>

            {/* Key Workflow Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border border-border bg-card">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary">✓</span>
                  Automated Flow
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span>WhatsApp API integration for seamless intake</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Auto Trip ID creation with priority tagging</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Automated patient party notifications</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Real-time status sync across all actors</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-border bg-card">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-xs text-amber-600">!</span>
                  Edge Case Handling
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-amber-600">•</span>Driver phone unreachable → SMS fallback</li>
                  <li className="flex gap-2"><span className="text-amber-600">•</span>Driver stagnant → MHA intervention alert</li>
                  <li className="flex gap-2"><span className="text-amber-600">•</span>Tracking failure → Manual status call</li>
                  <li className="flex gap-2"><span className="text-amber-600">•</span>Identity verification → MHA confirms before dispatch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>}

      {/* Merry Health Scenario Mapping & Modules */}
      {slug === 'merry-health' && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
            <h3 className="font-serif text-2xl mb-4">Scenario Mapping & Module Definition</h3>
            <p className="text-muted-foreground mb-10">After the proposed workflow, we conducted scenario mapping to understand the exact screens and workflows required for both WhatsApp integration and the desktop application.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-serif text-lg mb-4">Scenario Mapping Process</h3>
                <p className="text-sm text-muted-foreground mb-4">Based on our research findings, we mapped out user scenarios to identify the exact screens, interactions, and data flows needed for the platform.</p>
                <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=3-1576&t=lxBxhBwv6frOZBTQ-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <svg className="w-4 h-4" viewBox="0 0 38 57" fill="currentColor">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                  </svg>
                  View Scenario Mapping in Figma
                </a>
              </div>

              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="font-serif text-lg mb-4">Desktop App Modules Identified</h3>
                <p className="text-sm text-muted-foreground mb-4">Based on the scenario mapping, we identified four core modules for the Merry Health Admin web app:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-sm font-medium">Dashboard</span>
                    <p className="text-xs text-muted-foreground">Overview & quick actions</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-sm font-medium">Add Ride</span>
                    <p className="text-xs text-muted-foreground">New request creation</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-sm font-medium">Ride List</span>
                    <p className="text-xs text-muted-foreground">All rides & status tracking</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-sm font-medium">Reporting</span>
                    <p className="text-xs text-muted-foreground">Analytics & insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}

      {/* Merry Health Wireframes */}
      {slug === 'merry-health' && <section id="merry-solution" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-2xl">Wireframing</h3>
              <a href="https://www.figma.com/design/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=14-5439&t=D4QoBAFlTIFjCBK6-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-primary hover:underline">
                <svg className="w-3.5 h-3.5" viewBox="0 0 38 57" fill="currentColor">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                </svg>
                View in Figma
              </a>
            </div>
            <p className="text-muted-foreground mb-10">After identifying the required modules, we created wireframes for all key flows in the web application—covering dashboard, ride management, live tracking, and reporting.</p>

            <div className="grid grid-cols-5 gap-3">
              <div className="rounded-lg border border-border bg-background overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryWireframes)}>
                <img src={merryWireframes} alt="Merry Health wireframes" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg border border-border bg-background overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryHifiDashboard)}>
                <img src={merryHifiDashboard} alt="Dashboard wireframe" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg border border-border bg-background overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryHifiReports)}>
                <img src={merryHifiReports} alt="Reporting wireframe" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg border border-border bg-background overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryHifiBooking)}>
                <img src={merryHifiBooking} alt="Booking wireframe" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg border border-border bg-background overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setLightboxImage(merryHifiTracking)}>
                <img src={merryHifiTracking} alt="Tracking wireframe" className="w-full h-32 object-cover" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Click any image to view details</p>
          </div>
        </section>}

      {/* Merry Health Hi-Fi Screens */}
      {slug === 'merry-health' && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
            <h3 className="font-serif text-2xl mb-4">High-Fidelity Screens</h3>
            <p className="text-muted-foreground mb-6">The final high-fidelity designs bring together all research insights into a new Merry Heath platform</p>

            <a href="https://www.figma.com/proto/yH9NNuzOQov4XIgkz5D2jo/Project-Merry-Health?node-id=15-36521&t=31Fmb4tJRbqNkLny-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A5438&starting-point-node-id=15%3A36521" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors mb-12">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 38 57" fill="currentColor">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
              </svg>
              <div>
                <span className="text-sm font-medium text-primary">View Hi-Fi Prototype in Figma</span>
                <p className="text-xs text-muted-foreground">Interactive prototype with all screens and flows</p>
              </div>
            </a>

            {/* Changes in New Design */}
            {study.designSolutions && <>
              <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">What Changed in the New Design</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {study.designSolutions.map((solution, i) => <div key={i} className="p-4 rounded-lg border border-border bg-background">
                    <h4 className="text-sm font-medium mb-2">{solution.title.replace(/^Solution \d+: /, '')}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{solution.content}</p>
                  </div>)}
              </div>
            </>}
          </div>
        </section>}

      {/* Merry Health WhatsApp Integration */}
      {slug === 'merry-health' && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-5xl">
            <h3 className="font-serif text-2xl mb-4">WhatsApp Integration Design</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">Given that 95% of hospital admins currently use WhatsApp for intake, we designed a structured WhatsApp experience that respects existing mental models while enabling automated workflows.</p>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">The system parses incoming messages to extract required data points (as identified in our data audit), requests missing information, and pushes automated status updates to all stakeholders.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Hospital Admin WhatsApp */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-semibold">HA</div>
                    <div>
                      <h3 className="font-serif text-lg">Hospital Admin</h3>
                      <p className="text-sm text-muted-foreground">WhatsApp intake</p>
                    </div>
                  </div>
                  <div className="cursor-pointer group" onClick={() => setLightboxImage(merryWhatsappAdmin)}>
                    <div className="w-14 h-20 overflow-hidden rounded-lg border border-border/50 bg-muted/20">
                      <img src={merryWhatsappAdmin} alt="Hospital Admin WhatsApp" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <h4 className="text-sm font-semibold mb-3">How It Works</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li><span className="text-primary font-medium">1.</span> Admin sends request to WhatsApp</li>
                      <li><span className="text-primary font-medium">2.</span> System parses for data points</li>
                      <li><span className="text-primary font-medium">3.</span> Missing data requested automatically</li>
                      <li><span className="text-primary font-medium">4.</span> User confirms by reply</li>
                      <li><span className="text-primary font-medium">5.</span> Status updates sent automatically</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>• Standardized updates for every ride</li>
                      <li>• Automatic status messages</li>
                      <li>• Live location links pushed instantly</li>
                      <li>• End-to-end visibility in WhatsApp</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium font-serif">Announcement Group</h4>
                      <div className="cursor-pointer group" onClick={() => setLightboxImage(merryWhatsappHospital)}>
                        <div className="w-10 h-12 overflow-hidden rounded-lg border border-border/50 bg-muted/20">
                          <img src={merryWhatsappHospital} alt="Hospital Announcement" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>• Read-only channel for managers</li>
                      <li>• Single source of truth</li>
                      <li>• Real-time trip updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Driver WhatsApp */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-sm font-semibold">DR</div>
                    <div>
                      <h3 className="font-serif text-lg">Driver</h3>
                      <p className="text-sm text-muted-foreground">SMS fallback support</p>
                    </div>
                  </div>
                  <div className="cursor-pointer group" onClick={() => setLightboxImage(merryWhatsappDriver)}>
                    <div className="w-14 h-20 overflow-hidden rounded-lg border border-border/50 bg-muted/20">
                      <img src={merryWhatsappDriver} alt="Driver WhatsApp" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <h4 className="text-sm font-semibold mb-3">How It Works</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li><span className="text-amber-600 font-medium">1.</span> Driver receives ride request</li>
                      <li><span className="text-amber-600 font-medium">2.</span> SMS fallback for feature phones</li>
                      <li><span className="text-amber-600 font-medium">3.</span> Accept/decline response</li>
                      <li><span className="text-amber-600 font-medium">4.</span> Patient party gets updates</li>
                      <li><span className="text-amber-600 font-medium">5.</span> Actions sync to database</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <h4 className="text-sm uppercase tracking-wider text-amber-600 font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>• Clear, standardized requests</li>
                      <li>• One-tap Accept/Decline</li>
                      <li>• Live pickup location links</li>
                      <li>• Automated status prompts</li>
                      <li>• Simplified workflow</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Patient Party WhatsApp */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">PP</div>
                    <div>
                      <h3 className="font-serif text-lg">Patient Party</h3>
                      <p className="text-sm text-muted-foreground">WhatsApp, IVR, SMS</p>
                    </div>
                  </div>
                  <div className="cursor-pointer group" onClick={() => setLightboxImage(merryWhatsappPatient)}>
                    <div className="w-14 h-20 overflow-hidden rounded-lg border border-border/50 bg-muted/20">
                      <img src={merryWhatsappPatient} alt="Patient Party WhatsApp" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <h4 className="text-sm font-semibold mb-3">Channels</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li><span className="text-blue-600 font-medium">•</span> <strong>WhatsApp:</strong> Real-time updates</li>
                      <li><span className="text-blue-600 font-medium">•</span> <strong>IVR:</strong> Regional language info</li>
                      <li><span className="text-blue-600 font-medium">•</span> <strong>SMS:</strong> Feature phone fallback</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <h4 className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>• Instant confirmation</li>
                      <li>• Driver details shared automatically</li>
                      <li>• Live tracking link</li>
                      <li>• Clear milestone updates</li>
                      <li>• Reduced anxiety</li>
                      <li>• No back-and-forth calls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}

      {/* Current Scenario (for food waste project) */}
      {study.currentScenario && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
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
      {study.researchInsights && <section id={slug === 'food-waste-ngo' ? 'foodwaste-research' : undefined} className={`px-6 lg:px-12 py-16 ${slug === 'food-waste-ngo' ? 'scroll-mt-20' : ''}`}>
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Research & Insights</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Understanding the NGO Ecosystem</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">Through interviews with NGO representatives, we uncovered the following key insights:</p>
            
            {/* Insight Cards */}
            <div className="space-y-6 mb-16">
              {/* Insight 1 - NGO Role */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">01</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">The Role of NGOs</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  {study.researchInsights.ngoRole && study.researchInsights.ngoRole.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part)}
                </p>
              </div>

              {/* Insight 2 - Notification Delays */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">02</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Irregular & Late Notifications</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  NGOs receive food availability notifications at unpredictable times, often too late to arrange collection. This leads to missed opportunities and wasted surplus food.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"There have been a lot of instances when we couldn't collect food from parties because they were informed at odd timings."</p>
              </div>

              {/* Insight 3 - Logistics Challenges */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">03</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Logistics & Transportation Burden</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  High transportation costs, lack of manpower, and difficulty coordinating pickups from multiple locations create a fragile logistics network that breaks under pressure.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"The logistics in transporting the food on time to reach the hunger hotspots was very difficult to arrange and manage."</p>
              </div>

              {/* Insight 4 - Coordination Struggles */}
              <div className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">04</span>
                <h3 className="font-serif text-2xl mb-4 relative z-10">Coordination & Communication Gaps</h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  Without a centralized system, NGOs struggle to connect with food sources and coordinate simultaneous pickups, leading to spoilage and missed donations.
                </p>
                <p className="text-lg italic text-foreground/80 relative z-10">"Leftover food at marriage functions or company events is going down the sewer when there are a lot of hungry stomachs on the street. Logistics and reaching out to them simultaneously has been a huge struggle."</p>
              </div>
            </div>
            
            {/* Opportunity */}
            {study.researchInsights.opportunity && <div className="relative p-8 rounded-2xl bg-primary/5 border-l-4 border-primary overflow-hidden">
                <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">→</span>
                <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-4 relative z-10">The Opportunity</h3>
                <p className="font-serif text-xl leading-relaxed relative z-10">
                  {study.researchInsights.opportunity}
                </p>
              </div>}
          </div>
        </section>}

      {/* Process Flow (for food waste project) */}
      {study.processFlow && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
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

      {/* Suggested Solution System Flow (for food waste project) */}
      {slug === 'food-waste-ngo' && <section id="foodwaste-solution" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Suggested Solution</h2>
            <h3 className="font-serif text-3xl mb-8">System Flow</h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                The flow begins when an NGO logs into the system and checks whether the required food is already available according to their current needs. This initial decision determines whether the NGO can proceed immediately or needs to source food externally. If the required food is present, through previously listed surplus or ongoing restaurant partnerships, the NGO adds it to their cart and proceeds to delivery method selection. If the food is unavailable, the NGO creates a requirement request that is sent to restaurants and caterers, enabling on-demand sourcing rather than passive availability.
              </p>
              
              <p>
                Restaurants and caterers receive notifications about NGO food requirements, reviewing the quantity and type needed. When they can fulfill a request, they upload surplus food details to the platform, specify pickup availability and time windows, and notify delivery partners about pickup timing, creating a synchronized handoff between supply and logistics.
              </p>
              
              <p>
                After food is added to the cart, the NGO chooses between pickup or delivery. With pickup, the NGO collects food directly from the restaurant at the prescribed time and delivers it to designated hotspots, reducing dependency on delivery partners. With delivery, the system checks whether the restaurant has already covered the delivery payment. If not, the NGO pays a nominal delivery fee before checkout, ensuring costs are accounted for regardless of who pays.
              </p>
              
              <p>Upon checkout completion, existing delivery partners are notified and the nearest available partner is assigned with pickup and delivery instructions, optimizing for speed, location efficiency, and resource usage. Delivery partners(Existing apps like Uber/Ola etc) log in separately to check for notifications , if an order is assigned, they proceed; otherwise, they continue with their normal routine, avoiding idle time.</p>
              
              <p>The system monitors delivery execution as a critical accountability checkpoint. Successful deliveries result in food reaching the NGO, who then distributes it to hotspots. Failed deliveries trigger a donation equivalent to the food cost from the delivery partner, with the NGO notified about the compensation ensuring accountability and transparency in failure handling. Regardless of the path taken, the system records fulfillment method, delivery completion or failure, and all payments or donations, creating a closed-loop system with full traceability.</p>
              
              <p className="text-sm italic border-l-2 border-primary/30 pl-4 mt-8">This flow demonstrates clear separation of roles and responsibilities, strong validation at every critical step, multiple fallback paths instead of dead ends, and built-in accountability mechanisms, representing a robust, real-world orchestration flow rather than a simplified happy path.</p>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-4">
              <img src={foodWasteSystemFlow} alt="Food Waste Solution System Flow Diagram" className="w-full h-auto cursor-pointer" onClick={() => setLightboxImage(foodWasteSystemFlow)} />
            </div>
          </div>
        </section>}

      {/* Problem Space - handles both STREE object format and Curateus array format */}
      {study.problemSpace && <section className="px-6 lg:px-12 py-12 bg-card">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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

      {/* Design Goals (for Curateus App - skip for Merry Health) */}
      {study.designGoals && slug !== 'merry-health' && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Information Architecture</h2>
            
            <div className="space-y-12">
              {study.informationArchitecture.map((item, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  
                  {/* Show restaurant sitemap for first IA item in food waste project */}
                  {slug === 'food-waste-ngo' && i === 0 && <div className="bg-background border border-border rounded-lg p-4 mt-6">
                      <img src={foodWasteRestaurantSitemap} alt="Restaurant App Sitemap" className="w-full h-auto cursor-pointer" onClick={() => setLightboxImage(foodWasteRestaurantSitemap)} />
                    </div>}
                  {/* Show NGO sitemap for second IA item in food waste project */}
                  {slug === 'food-waste-ngo' && i === 1 && <div className="bg-background border border-border rounded-lg p-4 mt-6">
                      <img src={foodWasteNgoSitemap} alt="NGO App Sitemap" className="w-full h-auto cursor-pointer" onClick={() => setLightboxImage(foodWasteNgoSitemap)} />
                    </div>}
                </div>)}
            </div>
          </div>
        </section>}

      {/* UI Design Principles (for Curateus App) */}
      {study.uiDesign && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
      {study.wireframing && !('approach' in study.wireframing) && <section id={slug === 'food-waste-ngo' ? 'foodwaste-design' : undefined} className={`px-6 lg:px-12 py-16 border-t border-border ${slug === 'food-waste-ngo' ? 'scroll-mt-20' : ''}`}>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Wireframing</h2>
            <div className="space-y-12">
              {study.wireframing.map((step, i) => <div key={i}>
                  <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </div>)}
            </div>
            {/* NGO App Wireframes for food waste project */}
            {slug === 'food-waste-ngo' && <div className="mt-12">
                <h3 className="font-serif text-2xl mb-8">NGO App Wireframes</h3>
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin">
                  {[{
              src: foodWasteWireframeHome,
              label: 'Home Screen'
            }, {
              src: foodWasteWireframeCart,
              label: 'Cart'
            }, {
              src: foodWasteWireframeConfirm,
              label: 'Order Confirm'
            }, {
              src: foodWasteWireframeTrack,
              label: 'Track Order'
            }, {
              src: foodWasteWireframeAccount,
              label: 'Account'
            }, {
              src: foodWasteWireframeOrders,
              label: 'All Orders'
            }].map((wireframe, i) => <div key={i} className="flex-shrink-0 flex flex-col items-center w-48">
                      <div className="bg-background border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors" onClick={() => setLightboxImage(wireframe.src)}>
                        <img src={wireframe.src} alt={wireframe.label} className="w-full h-auto" />
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground text-center">{wireframe.label}</p>
                    </div>)}
                </div>
              </div>}
            {/* Restaurant App Wireframes for food waste project */}
            {slug === 'food-waste-ngo' && <div className="mt-12">
                <h3 className="font-serif text-2xl mb-8">Restaurant App Wireframes</h3>
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin">
                  {[{
              src: foodWasteRestWireframeMyorders,
              label: 'My Orders'
            }, {
              src: foodWasteRestWireframeOrderdetail,
              label: 'Order Details'
            }, {
              src: foodWasteRestWireframeHandoff,
              label: 'Order Handoff'
            }, {
              src: foodWasteRestWireframeListings,
              label: 'My Listings'
            }, {
              src: foodWasteRestWireframeAddlisting,
              label: 'Add Listing'
            }, {
              src: foodWasteRestWireframeAccount,
              label: 'Account'
            }, {
              src: foodWasteRestWireframeInsights,
              label: 'Insights'
            }].map((wireframe, i) => <div key={i} className="flex-shrink-0 flex flex-col items-center w-48">
                      <div className="bg-background border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors" onClick={() => setLightboxImage(wireframe.src)}>
                        <img src={wireframe.src} alt={wireframe.label} className="w-full h-auto" />
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground text-center">{wireframe.label}</p>
                    </div>)}
                </div>
              </div>}
          </div>
        </section>}

      {/* STREE: Brief Section */}
      {study.brief && <section id="stree-brief" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Brief</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Project Intent & Goals</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{study.brief.intro}</p>
            <div className="p-6 rounded-xl border border-border bg-card mb-8">
              <p className="font-serif text-xl italic text-foreground/80">{study.brief.coreIntent}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {study.brief.goals.map((goal, i) => <div key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-card/50">
                  <span className="text-primary font-semibold">{i + 1}.</span>
                  <span className="text-muted-foreground">{goal}</span>
                </div>)}
            </div>
          </div>
        </section>}

      {/* STREE: Research Phase */}
      {study.research && <section id="stree-research" className="px-6 lg:px-12 py-16 bg-card scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Research</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Understanding the Problem Space</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{study.research.method}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="p-5 rounded-xl bg-background border border-border">
                <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Participants</h4>
                <p className="text-3xl font-serif mb-1">{study.research.participants.count}</p>
                <p className="text-sm text-muted-foreground">{study.research.participants.demographics}</p>
              </div>
              <div className="p-5 rounded-xl bg-background border border-border md:col-span-2">
                <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Ethics</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.research.participants.ethics}</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-background">
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Interview Goals</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {study.research.interviewGoals.map((goal, i) => <div key={i} className="flex gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span className="text-muted-foreground">{goal}</span>
                  </div>)}
              </div>
            </div>

            {/* Interview Documentation for STREE */}
            {slug === 'stree-safety-app' && <div className="mt-8">
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
                
                {/* Collapsible Interview Preview */}
                <div className="group bg-card border border-border rounded-lg p-4 cursor-pointer hover:border-primary/40 transition-all" onClick={() => setShowInterviewGallery(!showInterviewGallery)}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">View Interview Analysis</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showInterviewGallery ? 'rotate-180' : ''}`} />
                  </div>
                  {!showInterviewGallery && <div className="flex gap-2 overflow-hidden">
                      {[streeInterview1, streeInterview2, streeInterview3].map((img, i) => <div key={i} className="w-20 h-14 rounded overflow-hidden border border-border flex-shrink-0">
                          <img src={img} alt={`Interview preview ${i + 1}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>)}
                      <div className="w-20 h-14 rounded bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-muted-foreground">+2 more</span>
                      </div>
                    </div>}
                </div>
                
                {/* Expanded Gallery */}
                {showInterviewGallery && <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
                    {[streeInterview1, streeInterview2, streeInterview3, streeInterview4, streeInterview5].map((img, i) => <div key={i} className="bg-background rounded-lg border border-border p-3 hover:shadow-md hover:border-primary/40 transition-all cursor-pointer" onClick={e => {
              e.stopPropagation();
              openGallery([streeInterview1, streeInterview2, streeInterview3, streeInterview4, streeInterview5], i);
            }}>
                        <img src={img} alt={`Interview analysis ${i + 1}`} className="w-full rounded" />
                      </div>)}
                  </div>}
              </div>}

            {/* Placeholder for non-STREE projects */}
            {slug !== 'stree-safety-app' && study.research.imagePlaceholder && <div className="mt-8 aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Research Documentation / Interview Notes ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Cultural Model Section */}
      {slug === 'stree-safety-app' && study.research && <section className="px-6 lg:px-12 py-12 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Cultural Model</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Cultural models were created to visualize the relationships and influences surrounding women's safety experiences. These diagrams map the cultural, social, and environmental factors that impact users.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg border border-border p-3 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLightboxImage(streeCultural1)}>
                <img src={streeCultural1} alt="Cultural model: User relationships and breakdowns" className="w-full rounded" />
              </div>
              <div className="bg-background rounded-lg border border-border p-3 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLightboxImage(streeCultural2)}>
                <img src={streeCultural2} alt="Cultural model: Environmental factors" className="w-full rounded" />
              </div>
              <div className="bg-background rounded-lg border border-border p-3 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setLightboxImage(streeCultural3)}>
                <img src={streeCultural3} alt="Cultural work model: User influences" className="w-full rounded" />
              </div>
            </div>
          </div>
        </section>}

      {study.synthesis && <section id="stree-synthesis" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Synthesis</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Affinity Mapping & Pattern Recognition</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{study.synthesis.method}</p>
            
            {/* Affinity Mapping Images for STREE */}
            {slug === 'stree-safety-app' && <>
                {/* Collapsible Affinity Preview */}
                <div className="group bg-card border border-border rounded-lg p-4 cursor-pointer hover:border-primary/40 transition-all mb-6" onClick={() => setShowAffinityGallery(!showAffinityGallery)}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">View Affinity Mapping</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showAffinityGallery ? 'rotate-180' : ''}`} />
                  </div>
                  {!showAffinityGallery && <div className="flex gap-2 overflow-hidden">
                      {[streeAffinity1, streeAffinity2, streeAffinity3].map((img, i) => <div key={i} className="w-20 h-14 rounded overflow-hidden border border-border flex-shrink-0">
                          <img src={img} alt={`Affinity preview ${i + 1}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>)}
                      <div className="w-20 h-14 rounded bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-muted-foreground">+3 more</span>
                      </div>
                    </div>}
                </div>
                
                {/* Expanded Gallery */}
                {showAffinityGallery && <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 animate-fade-in">
                    {[streeAffinity1, streeAffinity2, streeAffinity3, streeAffinity4, streeAffinity5, streeAffinity6].map((img, i) => <div key={i} className="bg-background rounded-lg border border-border p-3 hover:shadow-md hover:border-primary/40 transition-all cursor-pointer" onClick={e => {
              e.stopPropagation();
              openGallery([streeAffinity1, streeAffinity2, streeAffinity3, streeAffinity4, streeAffinity5, streeAffinity6], i);
            }}>
                        <img src={img} alt={`Affinity mapping ${i + 1}`} className="w-full rounded" />
                      </div>)}
                  </div>}
                
                {showAffinityGallery && <div className="p-6 bg-card border border-border animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">
                      From the affinity mapping exercise, we identified recurring <span className="text-foreground font-medium">themes</span> across participant responses. These themes helped us understand the underlying patterns in women's safety experiences, which directly informed our <span className="text-foreground font-medium">user goals</span> and <span className="text-foreground font-medium">challenges</span> framework below.
                    </p>
                  </div>}
              </>}
            
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Key Insights</h2>
            <div className="space-y-6">
              {study.keyInsights.map((insight, i) => <div key={i} className="relative p-8 rounded-2xl bg-muted/30 border-l-4 border-primary/40 overflow-hidden">
                  <span className="absolute bottom-0 right-4 text-[120px] font-serif font-bold text-primary/[0.07] leading-none select-none pointer-events-none">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-2xl mb-4 relative z-10">{insight.title}</h3>
                  <p className="text-muted-foreground relative z-10">{insight.content}</p>
                </div>)}
            </div>
          </div>
        </section>}

      {/* User Goals (for STREE) */}
      {study.userGoals && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Persona</h2>
            {study.personaIntro && <p className="text-sm text-muted-foreground mb-6">{study.personaIntro}</p>}
            {study.personaImage && <img src={study.personaImage} alt="User Persona" className="w-full rounded-lg border border-border" />}
          </div>
        </section>}

      {/* Product Strategy - handles both formats */}
      {study.productStrategy && <section id="stree-solution" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Solution</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Product Strategy</h2>
            {'reframe' in study.productStrategy ?
        // STREE format
        <>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{study.productStrategy.reframe}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {study.productStrategy.phases.map((phase, i) => <div key={i} className="p-6 rounded-xl border border-border bg-card">
                      <h3 className="font-serif text-lg mb-3">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{phase.content}</p>
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
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">
          </span>
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">STORY BOARD</h2>
            </div>
            
            <div className="mb-8">
              
              <p className="text-sm text-muted-foreground">{study.solutionPhase.storyboard}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {study.solutionPhase.modes.map((mode, i) => <div key={i} className="p-5 bg-background border border-border">
                  <h4 className="font-serif text-base mb-2">{mode.title}</h4>
                  <p className="text-sm text-muted-foreground">{mode.content}</p>
                </div>)}
            </div>

            {/* Flow Diagrams for STREE */}
            {slug === 'stree-safety-app' && <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">SOS Mode Flow</h4>
                  </div>
                  <div className="p-4">
                    <img src={streeSosFlow} alt="SOS Mode user flow showing interactions between user, officials, and contacts" className="w-full rounded cursor-pointer" onClick={() => setLightboxImage(streeSosFlow)} />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">User Journey Flow</h4>
                  </div>
                  <div className="p-6 bg-white">
                    <img src={streeUserFlow} alt="User journey flow: Discovery, Onboarding, and App navigation" className="w-full cursor-pointer" onClick={() => setLightboxImage(streeUserFlow)} />
                  </div>
                </div>
              </div>}

            {/* Placeholder for non-STREE */}
            {slug !== 'stree-safety-app' && study.solutionPhase.imagePlaceholder && <div className="mt-8 aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Storyboard / User Flow ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Information Architecture - placed before usability testing */}
      {study.informationArchitecture && 'rationale' in study.informationArchitecture && <section className="px-6 lg:px-12 py-12">
          
        </section>}

      {/* STREE: Wireframing - placed before usability testing */}
      {study.wireframing && 'approach' in study.wireframing && <section className="px-6 lg:px-12 py-12 bg-card overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">WIREFRAMES</h2>
            <p className="text-muted-foreground text-sm mb-6">{study.wireframing.approach}</p>
            
            {/* Wireframe images for STREE - Collapsible card */}
            {slug === 'stree-safety-app' && <>
                {/* Collapsible Wireframe Preview Card */}
                <div className="group bg-background border border-border rounded-lg p-4 cursor-pointer hover:border-primary/40 transition-all mb-6" onClick={() => setShowWireframeGallery(!showWireframeGallery)}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">View Wireframe Explorations</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showWireframeGallery ? 'rotate-180' : ''}`} />
                  </div>
                  {!showWireframeGallery && <div className="flex gap-2 overflow-hidden">
                      {wireframeImages.slice(0, 5).map((img, i) => <div key={i} className="w-16 h-24 rounded overflow-hidden border border-border flex-shrink-0">
                          <img src={img} alt={`Wireframe preview ${i + 1}`} className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>)}
                      <div className="w-16 h-24 rounded overflow-hidden border border-border flex-shrink-0 bg-muted/50 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+{wireframeImages.length - 5}</span>
                      </div>
                    </div>}
                </div>
                
                {/* Expanded Gallery */}
                {showWireframeGallery && <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 animate-fade-in">
                    {wireframeImages.map((img, i) => <div key={i} className="bg-background rounded-lg border border-border p-2 hover:shadow-md hover:border-primary/40 transition-all cursor-pointer" onClick={e => {
              e.stopPropagation();
              openGallery(wireframeImages, i);
            }}>
                        <div className="aspect-[9/16] overflow-hidden rounded">
                          <img src={img} alt={`Wireframe ${i + 1}`} className="w-full h-full object-cover object-top" />
                        </div>
                      </div>)}
                  </div>}
              </>}

            {/* Placeholder for non-STREE */}
            {slug !== 'stree-safety-app' && study.wireframing.imagePlaceholder && <div className="aspect-video bg-muted/30 border-2 border-dashed border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">[ Wireframe Explorations ]</span>
              </div>}
          </div>
        </section>}

      {/* STREE: Usability Testing */}
      {study.usabilityTesting && <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Usability Testing</h2>
            <p className="text-sm text-muted-foreground mb-6">{study.usabilityTesting.intro}</p>
            
            {/* Method details */}
            {'method' in study.usabilityTesting && <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-card border border-border">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70">Method</span>
                  <p className="text-sm text-foreground mt-1">{study.usabilityTesting.method}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70">Participants</span>
                  <p className="text-sm text-foreground mt-1">{study.usabilityTesting.participants}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70">Mode</span>
                  <p className="text-sm text-foreground mt-1">{study.usabilityTesting.mode}</p>
                </div>
              </div>}

            <div className="grid md:grid-cols-2 gap-4">
              {study.usabilityTesting.findings.map((finding, i) => <div key={i} className="flex gap-3 p-4 bg-card border border-border">
                  <span className="text-primary/50 text-sm">{i + 1}.</span>
                  <span className="text-sm text-muted-foreground">{finding}</span>
                </div>)}
            </div>
          </div>
        </section>}

      {/* STREE: Final Design */}
      {study.finalDesign && <section id="stree-design" className="px-6 lg:px-12 py-16 bg-card overflow-hidden scroll-mt-20">
          <div className="container mx-auto max-w-5xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Design</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Final Design & Key Changes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.finalDesign.changes.map((change, i) => <div key={i} className="p-5 rounded-xl bg-background border border-border">
                  <h3 className="font-serif text-lg mb-2">{change.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{change.content}</p>
                </div>)}
            </div>
          </div>

          {/* HiFi Screens - horizontal scroll like wireframes */}
          {slug === 'stree-safety-app' && <div className="overflow-x-auto pb-4 xl:ml-32">
              <div className="flex gap-4 px-6 lg:px-12" style={{
          width: 'max-content'
        }}>
                {[streeHifi1, streeHifi2, streeHifi3, streeHifi4, streeHifi5, streeHifi6, streeHifi7, streeHifi8, streeHifi9, streeHifi10, streeHifi11, streeHifi12, streeHifi13, streeHifi14, streeHifi15, streeHifi16, streeHifi17, streeHifi18].map((img, i) => <div key={i} className="flex-shrink-0 bg-background border border-border p-2 cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setLightboxImage(img)}>
                    <img src={img} alt={`HiFi screen ${i + 1}`} className="h-[400px] w-auto object-contain" />
                  </div>)}
              </div>
            </div>}
        </section>}

      {/* STREE: Impact */}
      {study.impact && 'functional' in study.impact && <section id="stree-impact" className="px-6 lg:px-12 py-16 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Impact</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Projected Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {study.impact.functional.map((item, i) => <div key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-card/50">
                  <span className="text-primary font-semibold">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>)}
            </div>
            <p className="text-sm text-muted-foreground/70 italic">{study.impact.note}</p>
          </div>
        </section>}

      {/* Impact (for food waste project - array format) */}
      {study.impact && Array.isArray(study.impact) && <section id={slug === 'food-waste-ngo' ? 'foodwaste-impact' : undefined} className={`px-6 lg:px-12 py-16 bg-card ${slug === 'food-waste-ngo' ? 'scroll-mt-20' : ''}`}>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Impact</h2>
            <p className="font-serif text-xl text-foreground/80 mb-10">The designed system helps:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.impact.map((item, i) => <div key={i} className="group p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                      {i + 1}
                    </span>
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>}

      {/* Project Scope (for AlHub) */}
      {study.projectScope && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Key Screens Refined</h2>
            <div className="flex flex-wrap gap-3">
              {study.keyScreens.map((screen, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{screen}</span>)}
            </div>
          </div>
        </section>}

      {/* Before/After (for AlHub) */}
      {study.beforeAfter && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Vision for BrynQ</h2>
            <p className="text-lg text-muted-foreground mb-12">The goal was not just a facelift; it was a complete transformation. The product needed to evolve into a modern iPaaS that supported:</p>
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Workshops & Cross-Functional Alignment</h2>
            <p className="text-lg text-muted-foreground mb-8">Led multiple workshops to unify designers, developers, support, and product stakeholders:</p>
            <div className="flex flex-wrap gap-3">
              {study.workshopTypes.map((workshop, i) => <span key={i} className="px-4 py-2 border border-border text-sm">{workshop}</span>)}
            </div>
          </div>
        </section>}

      {/* Business Outcomes are rendered in the Merry Health Impact section below */}

      {/* Skills Strengthened (for BrynQ) */}
      {study.skillsStrengthened && <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-5xl">
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Closing Reflection</h2>
            <p className="font-serif text-xl leading-relaxed">{study.closingReflection}</p>
          </div>
        </section>}



      {/* Next Steps */}
      {study.nextSteps && <section className="px-6 lg:px-12 py-16 bg-card">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Next Steps</h2>
            <p className="text-lg leading-relaxed">{study.nextSteps}</p>
          </div>
        </section>}

      {/* Merry Health Impact Section */}
      {slug === 'merry-health' && study.businessOutcomes && <section id="merry-impact" className="px-6 lg:px-12 py-16 bg-card scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">Expected outcomes from the redesign:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {study.businessOutcomes.map((outcome, i) => {
            const [title, description] = outcome.split(': ');
            return <div key={i} className="p-4 rounded-lg border border-border bg-background">
                    <h4 className="text-sm font-medium mb-1">{title}</h4>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>;
          })}
            </div>
          </div>
        </section>}

      {/* Learnings / Reflection - exclude BrynQ which has its own */}
      {slug !== 'brynq' && <section id={slug === 'merry-health' ? 'merry-reflection' : undefined} className={`px-6 lg:px-12 py-16 ${slug === 'merry-health' ? 'scroll-mt-20' : ''}`}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">{slug === 'merry-health' ? 'Reflection' : 'Learnings'}</h2>
          <div className="space-y-4">
            {study.learnings.map((learning, i) => <p key={i} className="text-lg text-muted-foreground leading-relaxed">{learning}</p>)}
          </div>
        </div>
      </section>}

      {/* Footer Navigation */}
      <footer className="px-6 lg:px-12 py-16 border-t border-border">
        <div className="container mx-auto max-w-5xl flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <a href="/#work" onClick={e => {
            e.preventDefault();
            window.location.href = '/#work';
          }} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All projects
            </a>
          </div>
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <p className="text-muted-foreground mb-3">Interested in working together?</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanyameriamsunny@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors">
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>;
};
export default CaseStudy;