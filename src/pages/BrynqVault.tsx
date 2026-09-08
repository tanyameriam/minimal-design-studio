import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import NdaGate from '@/components/NdaGate';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * The NDA side of BrynQ: one file-tab per project. Each tab currently
 * holds the project's summary; the detailed walkthroughs with screens
 * slot in here as they clear NDA review. New projects append to
 * `projects` and get a tab for free.
 *
 * Password: see NdaGate for how the hash works and how to rotate it.
 */
const NDA_HASH = '1581e27de87bffae0bd4d745cd7964e68528d7a83e2e4c259a782d275df6f558';

interface VaultProject {
  tab: string;
  title: string;
  summary: string;
  facts: { label: string; body: string }[];
}

const projects: VaultProject[] = [
  {
    tab: '01 Redesign',
    title: 'Platform redesign, from Salure Connect to BrynQ',
    summary:
      'The founding project: understanding why a platform with paying customers had no users, mapping and regrouping the whole product against interview expectations, and rebuilding the structure under the new BrynQ brand.',
    facts: [
      {
        label: 'The starting point',
        body: 'Admins used it internally; customers had accounts and never opened them. Everything was done for them by developers.',
      },
      {
        label: 'The work',
        body: 'User interviews, stakeholder interviews, full platform mapping, regrouping by expectation rather than org structure, new information architecture under the rebrand.',
      },
    ],
  },
  {
    tab: '02 Templates',
    title: 'Interface creation, templatised',
    summary:
      'The six-months-to-two-weeks project. The interface team already had an encyclopedia of well-documented, repetitive connection steps; templates turned that knowledge into pre-built interfaces customers finish by filling in what only they know.',
    facts: [
      {
        label: 'The insight',
        body: 'Repetitive steps were already well defined and documented. What was missing was the product form for them.',
      },
      {
        label: 'The outcome',
        body: 'Interfaces that took around six months, half of it back and forth before code, are estimated at about two weeks from a template. The figure comes from the delivery model, not from a production measurement.',
      },
    ],
  },
  {
    tab: '03 AI chat',
    title: 'The conversational builder, and what it settled',
    summary:
      'A chat flow that visualised fields and mappings so any user could connect two systems by conversation. It shipped ahead of templates and was tested with customers; the follow-up research showed they wanted a human within reach rather than full self-service, which is what set the level the product went on to build.',
    facts: [
      {
        label: 'What it settled',
        body: 'Capability was never the barrier. Customers did not want to be alone with their payroll data, however good the guidance, so the right model was assisted self-service rather than autonomy.',
      },
      {
        label: 'What it changed',
        body: 'Templates rolled out with an assigned human point of contact, and the AI was recalled from the customer surface.',
      },
    ],
  },
  {
    tab: '04 AI backstage',
    title: 'AI where it earns its keep',
    summary:
      'The correction after the chat: AI now assists developers in building template code faster, growing the template library so every next customer starts further ahead.',
    facts: [
      {
        label: 'The shift',
        body: 'From AI in front of customers to AI behind the developers. Same technology, opposite side of the counter.',
      },
      {
        label: 'The compounding effect',
        body: 'Faster template creation means broader coverage of HRM and payroll pairings, which shortens the path for every customer after.',
      },
    ],
  },
];

const BrynqVault = () => {
  usePageMeta('BrynQ · Detailed case studies', 'The NDA side of the BrynQ work, per project.');
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <>
      <Navigation />
      <main id="main" className="shell min-h-screen bg-background px-5 pt-32 md:px-8 md:pt-40 lg:px-12">
        <div className="mx-auto max-w-6xl pb-24">
          <NdaGate
            storageKey="nda-brynq"
            hash={NDA_HASH}
            label="BrynQ · Detailed case studies"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h1 className="text-3xl md:text-4xl">
                BrynQ, <span className="em">project by project.</span>
              </h1>
              <Link to="/case-study/brynq/story" className="rule-link label text-ink-500">
                Back to the public deck
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
              The public deck tells the transition; these tabs hold each project on its own.
              Detailed walkthroughs with screens land here as they clear NDA review.
            </p>

            {/* File tabs. The active tab fuses with its panel below. */}
            <div role="tablist" aria-label="BrynQ projects" className="mt-12 flex flex-wrap">
              {projects.map((p, i) => (
                <button
                  key={p.tab}
                  role="tab"
                  id={`vault-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="vault-panel"
                  onClick={() => setActive(i)}
                  className={`-mb-px border px-5 py-3 text-sm transition-colors md:text-base ${
                    i === active
                      ? 'border-border border-b-background bg-background text-foreground'
                      : 'border-transparent border-b-border text-ink-500 hover:text-foreground'
                  }`}
                >
                  {p.tab}
                </button>
              ))}
              <span aria-hidden="true" className="-mb-px flex-1 border-b border-border" />
            </div>

            <div
              id="vault-panel"
              role="tabpanel"
              aria-labelledby={`vault-tab-${active}`}
              className="border border-t-0 border-border p-6 md:p-10"
            >
              <h2 className="max-w-3xl text-2xl leading-[1.2] md:text-3xl">{project.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-[1.55] text-ink-600 md:text-lg">
                {project.summary}
              </p>

              <dl className="mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-border pt-4">
                    <dt className="label mb-2 text-ink-500">{fact.label}</dt>
                    <dd className="text-sm leading-relaxed text-ink-600 md:text-base">
                      {fact.body}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 border border-border bg-card p-5 md:p-6">
                <p className="label text-ink-500">Status</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">
                  The detailed walkthrough for this project, with screens and flows, is being
                  prepared. This tab is its home once it clears NDA review.
                </p>
              </div>
            </div>
          </NdaGate>
        </div>
      </main>
    </>
  );
};

export default BrynqVault;
