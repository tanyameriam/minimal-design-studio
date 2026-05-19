export interface PitchSlide {
  label: string;
  value: string;
}

export interface PitchDeck {
  tagline: string;
  oneLiner: string;
  role: string;
  duration: string;
  team?: string;
  context: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  decisions?: { title: string; detail: string }[];
  stats?: PitchSlide[];
  reflection?: string;
}

export const pitchDecks: Record<string, PitchDeck> = {
  'merry-health': {
    tagline: 'Hospital dispatch · Healthcare ops',
    oneLiner:
      "Turned India's ambulance dispatch — run on phone calls and WhatsApp threads — into a structured system hospitals could actually trust.",
    role: 'Lead Product Designer · Research, Strategy, Systems Design',
    duration: '2024 · ~4 months',
    team: 'Founders, ops lead, engineering, on-ground drivers',
    context:
      'Tier 2/3 Indian hospitals coordinate ambulances over phone and WhatsApp. Information lives in dozens of chat threads. Critical data — location, ambulance type, patient condition — gets lost between caller, admin, driver, and Merry HQ.',
    problem:
      'No single source of truth across four actors (patient party, hospital admin, driver, Merry admin). Each handoff dropped data, increased response time, and made post-incident analysis impossible.',
    approach: [
      'Mapped every data point across 7 dispatch steps × 4 actors to find where information breaks.',
      'Distinguished essential vs nice-to-have data per handoff — the operational minimum.',
      'Designed a WhatsApp-first interface so adoption stayed near-zero-friction for low-digital teams.',
      'Layered a dashboard for ops visibility without forcing hospitals off WhatsApp.',
    ],
    outcomes: [
      'Defined the minimum essential data set for each of the 4 actors — now the dispatch protocol.',
      'Reduced cognitive load on hospital admins by replacing free-text WhatsApp with structured prompts.',
      'Created an audit trail for every trip — enabling post-incident review for the first time.',
      'Shipped a system that operates inside existing tools rather than replacing them.',
    ],
    decisions: [
      {
        title: 'WhatsApp-first, not app-first',
        detail:
          "Forcing adoption of a new app would have killed the rollout. We embedded structured flows inside WhatsApp where staff already work.",
      },
      {
        title: 'Min essential data per handoff',
        detail:
          "Defined the smallest dataset that unblocks each next actor — not the most complete one.",
      },
    ],
    stats: [
      { label: 'Actors mapped', value: '4' },
      { label: 'Dispatch steps', value: '7' },
      { label: 'Data audits', value: '40+' },
    ],
    reflection:
      "Designing for adoption in low-digital environments meant choosing constraint over completeness — the smallest reliable system beats the most thorough one nobody uses.",
  },

  'stree-safety-app': {
    tagline: "Women's safety · India · Mobile",
    oneLiner:
      "A safety companion for independent women in Indian cities — built on 15 qualitative interviews, not assumptions about what 'safe' means.",
    role: 'Sole UX Designer & Researcher · Master\'s thesis',
    duration: '2022 · ~6 months',
    team: 'Solo, with mentor reviews & 15 interview participants',
    context:
      "Most safety apps in India are reactive panic buttons. Independent women navigate a layered cultural, physical, and digital terrain daily — and the existing toolset treats them as victims-in-waiting rather than confident commuters.",
    problem:
      "Existing apps optimise for the worst-case event. They ignore the everyday reality: judging which auto to take, when to share location, who to tell, and how to feel autonomous rather than monitored.",
    approach: [
      "15 qualitative interviews across age, geography and lifestyle — coded into affinity maps.",
      'Cultural & contextual research framing: safety as social, not just technical.',
      'Reframed the brief from "panic SOS" to "everyday confidence companion".',
      'Iterative wireframes → hi-fi, validated against persona goals at each step.',
    ],
    outcomes: [
      'Reframed the product around autonomy and routine, not emergency reaction.',
      'Designed an SOS flow that respects the user — discreet activation, contextual escalation.',
      'Defined a persona system grounded in real interview data, not demographic stereotypes.',
      'Delivered a full hi-fi prototype + storyboard for the proposed companion experience.',
    ],
    decisions: [
      {
        title: 'Confidence > panic',
        detail:
          "Building only for emergencies makes the app a reminder of fear. We designed for the 99% of moments where confidence and routine matter.",
      },
      {
        title: 'Discreet by default',
        detail:
          "SOS activation could not require obvious gestures. We tested lockscreen-level triggers that don't telegraph intent.",
      },
    ],
    stats: [
      { label: 'Interviews', value: '15' },
      { label: 'Affinity clusters', value: '6+' },
      { label: 'Hi-fi screens', value: '18' },
    ],
    reflection:
      'Research-led product framing changes the product more than any UI decision. The biggest leverage came from rewriting the brief.',
  },

  'brynq': {
    tagline: 'B2B iPaaS · HR & Payroll integrations',
    oneLiner:
      "Took BrynQ from a legacy integration tool to a scalable iPaaS by redesigning the setup flow that gatekept every customer onboarding.",
    role: 'Product Designer · UX audit, workflow design, UI systems',
    duration: '2021–2024',
    team: 'Cross-functional with PM, engineering, customer success',
    context:
      "BrynQ connects HR systems to payroll providers across the EU. Every integration was a bespoke configuration — slow to set up, hard to support, impossible to scale as the customer base grew.",
    problem:
      "Onboarding required deep product knowledge for every scenario. A consultant-shaped product blocked self-serve growth and burned support hours on configurations users couldn't reason about.",
    approach: [
      'UX audited the existing setup flows end-to-end to surface decision bottlenecks.',
      'Designed a wizard-based scenario builder so non-technical users could configure flows.',
      'Built a template system that turned repeatable customer configs into reusable starting points.',
      'Worked alongside engineering to align design surface with the integration data model.',
    ],
    outcomes: [
      'Customers can now configure integrations without consultant hand-holding.',
      'Templates compress new-customer setup from days to hours for common scenarios.',
      'A clearer mental model for "what BrynQ does" — sales & support speak the same language.',
      'Foundation laid for self-serve growth: the product can now scale past 1:1 onboarding.',
    ],
    decisions: [
      {
        title: 'Wizard over freeform builder',
        detail:
          "Power-user freeform tools assume product knowledge users don't have on day one. The wizard trades flexibility for confidence.",
      },
      {
        title: 'Templates as the product surface',
        detail:
          "Repeating customer configs were the real product. Surfacing them as templates made BrynQ feel finished, not bespoke.",
      },
    ],
    stats: [
      { label: 'Years on product', value: '3+' },
      { label: 'Flows redesigned', value: '12+' },
      { label: 'Integration types', value: '20+' },
    ],
    reflection:
      "The biggest unlock wasn't a UI improvement — it was finding the abstraction (templates) that turned 1:1 service into a 1:N product.",
  },

  'food-waste-ngo': {
    tagline: 'Social impact · Food redistribution',
    oneLiner:
      "Connected restaurant surplus to NGO hunger relief through a coordinated redistribution flow that respects both sides' operational realities.",
    role: 'UX Designer · Research, Systems Design, UI',
    duration: '2024 · ~3 months',
    team: 'Cross-functional with NGO partners & restaurant pilots',
    context:
      "Restaurants throw away usable surplus daily. NGOs serve high-need communities but can't predict supply. The two operate in parallel, with no shared coordination layer.",
    problem:
      "Existing donation tools optimise for restaurants OR NGOs — never the handoff between them. Without a shared flow, donations are ad-hoc, unreliable, and operationally invisible to both sides.",
    approach: [
      'Stakeholder research with restaurants and NGO field staff to map the actual handoff.',
      'Designed two complementary product surfaces — restaurant listing flow & NGO ordering flow.',
      'Built a system flow showing how listings, claims, pickup, and tracking interlock.',
      'Wireframed both apps in parallel, validating each step against the opposite role.',
    ],
    outcomes: [
      'A single coordination layer where both sides see the same handoff in real time.',
      'Restaurants can list surplus in under a minute with predictable pickup expectations.',
      'NGOs gain forecastability — they see what is available before allocating volunteers.',
      'Designed for operational fit, not heroic donation theatre.',
    ],
    decisions: [
      {
        title: 'Two-sided product, one system',
        detail:
          "Treating restaurant & NGO as separate apps would have re-created the silo. The product is the handoff.",
      },
      {
        title: 'Forecastability over generosity',
        detail:
          "NGOs don't need bigger occasional donations — they need reliable smaller ones. We designed for rhythm.",
      },
    ],
    stats: [
      { label: 'Stakeholder groups', value: '2' },
      { label: 'Wireframe sets', value: '2' },
      { label: 'System flows', value: '1' },
    ],
    reflection:
      'Two-sided social products fail when one side is an afterthought. Designing both flows in lockstep was the entire job.',
  },
};
