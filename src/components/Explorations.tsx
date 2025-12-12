import { useState } from 'react';

interface ExplorationItem {
  id: number;
  title: string;
  type: 'image' | 'spline' | 'animation';
  category: string;
  thumbnail: string;
  splineUrl?: string;
}

const explorations: ExplorationItem[] = [
  {
    id: 1,
    title: "Glass Morphism Cards",
    type: "image",
    category: "UI Experiment",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
  },
  {
    id: 2,
    title: "3D Abstract Shapes",
    type: "spline",
    category: "Spline 3D",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&q=80",
    splineUrl: "https://prod.spline.design/example"
  },
  {
    id: 3,
    title: "Dark Mode Dashboard",
    type: "image",
    category: "Concept Screen",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
  },
  {
    id: 4,
    title: "Gradient Explorations",
    type: "image",
    category: "Color Study",
    thumbnail: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80"
  },
  {
    id: 5,
    title: "Floating UI Elements",
    type: "spline",
    category: "Spline 3D",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
  },
  {
    id: 6,
    title: "Minimal App Concept",
    type: "image",
    category: "Quick Sketch",
    thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80"
  },
  {
    id: 7,
    title: "Neumorphic Controls",
    type: "image",
    category: "UI Experiment",
    thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80"
  },
  {
    id: 8,
    title: "Motion Principles",
    type: "animation",
    category: "Animation Study",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
  }
];

const categories = ['All', 'UI Experiment', 'Spline 3D', 'Concept Screen', 'Color Study', 'Quick Sketch', 'Animation Study'];

const Explorations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredExplorations = activeCategory === 'All' 
    ? explorations 
    : explorations.filter(item => item.category === activeCategory);

  return (
    <section id="explorations" className="py-32 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Creative Playground
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Explorations
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            This is where I experiment freely — playing with colors, layouts, animations, 
            and 3D elements outside of client work. A space dedicated to growth, where I 
            build visual muscles, try new styles, and explore imaginative UI concepts. 
            No briefs, no constraints — just curiosity and craft.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredExplorations.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div 
                className={`absolute inset-0 bg-foreground/80 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-xs uppercase tracking-wider text-background/70 mb-1">
                  {item.category}
                </span>
                <h3 className="text-background font-medium text-sm md:text-base">
                  {item.title}
                </h3>
                {item.type === 'spline' && (
                  <span className="mt-2 text-xs text-background/60 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    3D Interactive
                  </span>
                )}
              </div>

              {/* Type Badge */}
              {item.type === 'spline' && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-background/90 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-foreground">3D</span>
                </div>
              )}
              {item.type === 'animation' && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-background/90 flex items-center justify-center">
                  <svg className="w-3 h-3 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm mt-16">
          Always learning, always experimenting ✦
        </p>
      </div>
    </section>
  );
};

export default Explorations;
