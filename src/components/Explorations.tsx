import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import splineFrogs from '@/assets/spline-frogs.png';
import spline3dRoom from '@/assets/spline-3d-room.png';
import sketchDino1 from '@/assets/sketch-dino-1.png';
import sketchDino2 from '@/assets/sketch-dino-2.png';
import sketchDino3 from '@/assets/sketch-dino-3.png';
import charcoal1 from '@/assets/charcoal-1.png';
import charcoal2 from '@/assets/charcoal-2.png';
import charcoal3 from '@/assets/charcoal-3.png';
import charcoal4 from '@/assets/charcoal-4.png';
import charcoal5 from '@/assets/charcoal-5.png';
import charcoal6 from '@/assets/charcoal-6.png';

const characterSketches = [
  { id: 1, title: "Dino High Five", thumbnail: sketchDino1 },
  { id: 2, title: "Dino Roar", thumbnail: sketchDino2 },
  { id: 3, title: "Dino Cookie Monster", thumbnail: sketchDino3 }
];

const charcoalSketches = [
  { id: 1, title: "Surrender", thumbnail: charcoal1 },
  { id: 2, title: "Joker", thumbnail: charcoal2 },
  { id: 3, title: "Skull", thumbnail: charcoal3 },
  { id: 4, title: "Masks", thumbnail: charcoal4 },
  { id: 5, title: "Lion", thumbnail: charcoal5 },
  { id: 6, title: "Meditation", thumbnail: charcoal6 }
];

const splineProjects = [
  {
    id: 1,
    title: "Frogs in the Pond",
    thumbnail: splineFrogs,
    splineUrl: "https://my.spline.design/untitled-e67be5ddaa2a9e554df22e7b93f787ff/"
  },
  {
    id: 2,
    title: "3D Room",
    thumbnail: spline3dRoom,
    splineUrl: "https://youtu.be/zCLplo7GXgw?list=TLGGc1r6-W2s0TYxMzEyMjAyNQ"
  }
];

interface CollapsibleSectionProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, badge, children, defaultOpen = false }: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group"
      >
        <div className="flex items-center gap-3">
          <span className="font-medium text-foreground">{title}</span>
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {badge}
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] pb-6' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

const Explorations = () => {
  return (
    <section id="explorations" className="py-24 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Creative Playground
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Explorations
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            Experiments with colors, layouts, animations, and 3D — a space for curiosity and craft.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div className="bg-background rounded-xl border border-border overflow-hidden">
          
          {/* 3D / Spline */}
          <CollapsibleSection title="3D Explorations" badge={`${splineProjects.length}`} defaultOpen>
            <div className="grid grid-cols-2 gap-3 px-4">
              {splineProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.splineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg aspect-video bg-neutral-900"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-white text-sm font-medium">{project.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </CollapsibleSection>

          {/* Character Sketches */}
          <CollapsibleSection title="Character Sketches" badge={`${characterSketches.length}`}>
            <div className="grid grid-cols-3 gap-2 px-4">
              {characterSketches.map((sketch) => (
                <div
                  key={sketch.id}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                >
                  <img
                    src={sketch.thumbnail}
                    alt={sketch.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Charcoal Sketches */}
          <CollapsibleSection title="Charcoal Sketches" badge={`${charcoalSketches.length}`}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 px-4">
              {charcoalSketches.map((sketch) => (
                <div
                  key={sketch.id}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900"
                >
                  <img
                    src={sketch.thumbnail}
                    alt={sketch.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CollapsibleSection>

        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-xs mt-8 opacity-60">
          Always learning, always experimenting
        </p>
      </div>
    </section>
  );
};

export default Explorations;
