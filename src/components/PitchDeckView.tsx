import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import type { PitchDeck } from '@/data/pitchDecks';

interface PitchDeckViewProps {
  deck: PitchDeck;
  projectTitle: string;
  heroImage?: string;
  onSwitchToDeep: () => void;
}

const PitchDeckView = ({ deck, projectTitle, heroImage, onSwitchToDeep }: PitchDeckViewProps) => {
  return (
    <article className="px-6 lg:px-12 pt-28 pb-16">
      <div className="container mx-auto max-w-6xl">
        {/* Title block */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="brutal-tag bg-primary text-primary-foreground border-foreground">
              <Sparkles className="w-3 h-3" /> Quick Pitch
            </span>
            <span className="brutal-tag">{deck.tagline}</span>
            <span className="brutal-tag font-mono">{deck.duration}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            {projectTitle}
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-4xl leading-snug">
            {deck.oneLiner}
          </p>
        </div>

        {/* Hero image */}
        {heroImage && (
          <div className="brutal-border-thick brutal-shadow-lg mb-10 overflow-hidden">
            <img src={heroImage} alt={projectTitle} className="w-full aspect-[16/9] object-cover" />
          </div>
        )}

        {/* Meta grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="brutal-card bg-secondary p-5">
            <p className="font-mono text-xs uppercase tracking-wider mb-2 opacity-70">Role</p>
            <p className="font-medium leading-snug">{deck.role}</p>
          </div>
          <div className="brutal-card bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wider mb-2 text-muted-foreground">
              Duration
            </p>
            <p className="font-medium leading-snug">{deck.duration}</p>
          </div>
          <div className="brutal-card bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wider mb-2 text-muted-foreground">
              Team
            </p>
            <p className="font-medium leading-snug">{deck.team ?? 'Solo'}</p>
          </div>
        </div>

        {/* Stats row */}
        {deck.stats && deck.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-16">
            {deck.stats.map((stat) => (
              <div
                key={stat.label}
                className="brutal-border-thick bg-foreground text-background p-5 md:p-6"
              >
                <p className="font-display text-4xl md:text-6xl leading-none mb-2">{stat.value}</p>
                <p className="font-mono text-xs uppercase tracking-wider opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Context + Problem */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="brutal-card bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Context
            </p>
            <p className="text-base md:text-lg leading-relaxed">{deck.context}</p>
          </div>
          <div className="brutal-card bg-primary text-primary-foreground p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider opacity-80 mb-3">
              The Problem
            </p>
            <p className="text-base md:text-lg leading-relaxed">{deck.problem}</p>
          </div>
        </div>

        {/* Approach */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Approach
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-8">How I worked it.</h2>
          <ol className="grid md:grid-cols-2 gap-4">
            {deck.approach.map((item, i) => (
              <li key={i} className="brutal-card bg-card p-5 md:p-6 flex gap-4">
                <span className="font-display text-3xl md:text-4xl text-primary leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-relaxed flex-1">{item}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Key decisions */}
        {deck.decisions && deck.decisions.length > 0 && (
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Key Decisions
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-8">Choices that shaped it.</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {deck.decisions.map((d, i) => (
                <div
                  key={i}
                  className="brutal-card bg-accent text-accent-foreground p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-wider opacity-80 mb-2">
                    Decision {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-xl uppercase mb-3 leading-tight">{d.title}</h3>
                  <p className="text-sm leading-relaxed">{d.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Outcomes */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-8">
            What shipped<span className="text-primary">.</span>
          </h2>
          <ul className="space-y-3">
            {deck.outcomes.map((item, i) => (
              <li
                key={i}
                className="brutal-card bg-card p-5 md:p-6 flex gap-4 items-start"
              >
                <span className="font-mono text-sm text-primary mt-1">→</span>
                <p className="text-base md:text-lg leading-relaxed flex-1">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Reflection */}
        {deck.reflection && (
          <div className="mb-12">
            <div className="brutal-card bg-foreground text-background p-8 md:p-12">
              <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
                Reflection
              </p>
              <p className="font-display text-2xl md:text-4xl leading-tight">
                "{deck.reflection}"
              </p>
            </div>
          </div>
        )}

        {/* CTA to deep dive */}
        <div className="brutal-card bg-secondary text-foreground p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider mb-2">Want the long version?</p>
              <h3 className="font-display text-2xl md:text-4xl leading-tight">
                Read the full case study<span className="text-primary">.</span>
              </h3>
              <p className="text-sm mt-2 opacity-80">
                Research, synthesis, system flows, wireframes — everything.
              </p>
            </div>
            <button
              onClick={onSwitchToDeep}
              className="brutal-button brutal-button-primary whitespace-nowrap"
            >
              Deep dive
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

interface ViewToggleProps {
  view: 'pitch' | 'deep';
  onChange: (v: 'pitch' | 'deep') => void;
}

export const ViewToggle = ({ view, onChange }: ViewToggleProps) => {
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
      <div className="brutal-border-thick bg-background flex items-stretch brutal-shadow-sm">
        <button
          onClick={() => onChange('pitch')}
          className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 ${
            view === 'pitch' ? 'bg-foreground text-background' : 'hover:bg-secondary'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          Quick Pitch
        </button>
        <div className="w-[2px] bg-foreground" />
        <button
          onClick={() => onChange('deep')}
          className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 ${
            view === 'deep' ? 'bg-foreground text-background' : 'hover:bg-secondary'
          }`}
        >
          Deep Dive
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default PitchDeckView;
