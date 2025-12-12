import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type ProjectTag = 'UI' | 'UX' | 'Research';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  tags: ProjectTag[];
}

const projects: Project[] = [
  {
    title: "Merry Health",
    category: "Systems Design • Healthcare",
    year: "2024",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
    slug: "merry-health",
    tags: ['UX', 'Research', 'UI']
  },
  {
    title: "Curateus Plugin",
    category: "UX Research • Browser Extension",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "curateus-plugin",
    tags: ['UX', 'Research', 'UI']
  },
  {
    title: "Curateus App",
    category: "UI Design • Content Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    slug: "curateus-app",
    tags: ['UI', 'UX']
  },
  {
    title: "Food Waste Solution",
    category: "UX Design • Social Impact",
    year: "2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    slug: "food-waste-ngo",
    tags: ['UX', 'Research', 'UI']
  },
  {
    title: "STREE Safety App",
    category: "UX Research • Mobile App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    slug: "stree-safety-app",
    tags: ['UX', 'Research']
  },
  {
    title: "AlHub App",
    category: "UI Redesign • Lifestyle Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    slug: "alhub-app",
    tags: ['UI']
  },
  {
    title: "BrynQ Platform",
    category: "Product Design • B2B iPaaS",
    year: "2021-2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    slug: "brynq",
    tags: ['UX', 'Research', 'UI']
  }
];

const allTags: ProjectTag[] = ['UI', 'UX', 'Research'];

const Work = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<ProjectTag | 'All'>('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = activeTag === 'All' || project.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Recent projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm hidden md:block">
            2021 — Present
          </p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-12">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTag('All')}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeTag === 'All'
                  ? 'bg-foreground text-background'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeTag === tag
                    ? 'bg-foreground text-background'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              category={project.category}
              year={project.year}
              image={project.image}
              slug={project.slug}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
