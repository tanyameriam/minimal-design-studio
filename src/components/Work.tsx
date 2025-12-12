import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Curateus Plugin",
    category: "UX Research • Browser Extension",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "curateus-plugin"
  },
  {
    title: "Food Waste Solution",
    category: "UX Design • Social Impact",
    year: "2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    slug: "food-waste-ngo"
  },
  {
    title: "Health & Wellness",
    category: "Product Design • App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    slug: null
  },
  {
    title: "Creative Studio",
    category: "Brand Identity • Web",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    slug: null
  }
];

const Work = () => {
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
            2023 — Present
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              category={project.category}
              year={project.year}
              image={project.image}
              slug={project.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
