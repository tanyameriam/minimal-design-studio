import { useState } from 'react';
import { ExternalLink, Sparkles, Pencil, Box, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
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
  { id: 1, title: "Liberate", thumbnail: charcoal1 },
  { id: 2, title: "Joker", thumbnail: charcoal2 },
  { id: 3, title: "Primate", thumbnail: charcoal3 },
  { id: 4, title: "Mask", thumbnail: charcoal4 },
  { id: 5, title: "Beast", thumbnail: charcoal5 },
  { id: 6, title: "Fire", thumbnail: charcoal6 }
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

type Tab = 'all' | '3d' | 'character' | 'charcoal';

interface LightboxImage {
  src: string;
  title: string;
}

const ImageCard = ({ 
  src, 
  title, 
  aspectRatio = 'aspect-square',
  onClick 
}: { 
  src: string; 
  title: string; 
  aspectRatio?: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group relative ${aspectRatio} overflow-hidden rounded-lg bg-muted cursor-pointer w-full`}
  >
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
      <span className="text-background text-xs font-medium">{title}</span>
    </div>
  </button>
);

const Explorations = () => {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const totalCount = splineProjects.length + characterSketches.length + charcoalSketches.length;

  const tabs = [
    { id: 'all' as Tab, label: 'All', icon: Sparkles, count: totalCount },
    { id: '3d' as Tab, label: '3D', icon: Box, count: splineProjects.length },
    { id: 'character' as Tab, label: 'Characters', icon: Sparkles, count: characterSketches.length },
    { id: 'charcoal' as Tab, label: 'Charcoal', icon: Pencil, count: charcoalSketches.length },
  ];

  const openLightbox = (src: string, title: string) => {
    setLightboxImage({ src, title });
  };

  return (
    <section id="explorations" className="py-24 md:py-32 px-6 lg:px-12 bg-muted border-t-2 border-foreground">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            [ ✱ ] — Creative Playground
          </p>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            Explorations<span className="text-accent">.</span>
          </h2>
          <p className="text-base md:text-lg max-w-lg">
            Experiments with colour, layouts, animation and 3D — a space for curiosity and craft.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-foreground font-mono text-xs uppercase tracking-wider transition-all duration-150 ${
                activeTab === tab.id
                  ? 'bg-foreground text-background'
                  : 'bg-background text-foreground hover:bg-secondary'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span className={`text-xs ${activeTab === tab.id ? 'text-background/60' : 'text-muted-foreground/60'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[200px] space-y-6">
          {/* All Tab */}
          {activeTab === 'all' && (
            <div className="space-y-6 animate-fade-in">
              {/* 3D Section */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">3D Explorations</p>
                <div className="grid grid-cols-2 gap-4">
                  {splineProjects.map((project) => (
                    <a
                      key={project.id}
                      href={project.splineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-xl aspect-video bg-neutral-900"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-white font-medium">{project.title}</span>
                          <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Characters Section */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Character Sketches</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {characterSketches.map((sketch) => (
                    <ImageCard
                      key={sketch.id}
                      src={sketch.thumbnail}
                      title={sketch.title}
                      aspectRatio="aspect-[4/3]"
                      onClick={() => openLightbox(sketch.thumbnail, sketch.title)}
                    />
                  ))}
                </div>
              </div>

              {/* Charcoal Section */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Charcoal Sketches</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {charcoalSketches.map((sketch) => (
                    <ImageCard
                      key={sketch.id}
                      src={sketch.thumbnail}
                      title={sketch.title}
                      aspectRatio="aspect-[3/4]"
                      onClick={() => openLightbox(sketch.thumbnail, sketch.title)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3D Tab */}
          {activeTab === '3d' && (
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {splineProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.splineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-video bg-neutral-900"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-white font-medium">{project.title}</span>
                      <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Character Tab */}
          {activeTab === 'character' && (
            <div className="grid grid-cols-3 gap-4 animate-fade-in">
              {characterSketches.map((sketch) => (
                <ImageCard
                  key={sketch.id}
                  src={sketch.thumbnail}
                  title={sketch.title}
                  aspectRatio="aspect-square"
                  onClick={() => openLightbox(sketch.thumbnail, sketch.title)}
                />
              ))}
            </div>
          )}

          {/* Charcoal Tab */}
          {activeTab === 'charcoal' && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 animate-fade-in">
              {charcoalSketches.map((sketch) => (
                <ImageCard
                  key={sketch.id}
                  src={sketch.thumbnail}
                  title={sketch.title}
                  aspectRatio="aspect-[3/4]"
                  onClick={() => openLightbox(sketch.thumbnail, sketch.title)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-xs mt-10 opacity-50">
          Always learning, always experimenting
        </p>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {lightboxImage && (
            <div className="relative">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{lightboxImage.title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Explorations;
