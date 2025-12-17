import ProjectCard from './ProjectCard';
import streeCover from '@/assets/stree-cover.png';
import merryHealthCover from '@/assets/merry-health-cover.png';
import brynqCover from '@/assets/brynq-cover.png';
import hungerProjectCover from '@/assets/hunger-project-cover.png';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  published?: boolean;
}

const projects: Project[] = [{
  title: "STREE Safety App",
  category: "UX Research • Mobile App",
  year: "2022",
  image: streeCover,
  slug: "stree-safety-app",
  published: true
}, {
  title: "Merry Health",
  category: "Systems Design • Healthcare",
  year: "2024",
  image: merryHealthCover,
  slug: "merry-health",
  published: true
}, {
  title: "BrynQ Platform",
  category: "Product Design • B2B iPaaS",
  year: "2021-2024",
  image: brynqCover,
  slug: "brynq",
  published: true
}, {
  title: "The Hunger Project",
  category: "UX Design • Social Impact",
  year: "2024",
  image: hungerProjectCover,
  slug: "food-waste-ngo",
  published: true
}];

const Work = () => {
  const publishedProjects = projects.filter(p => p.published !== false);

  return <section id="work" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">CURATED WORKS</p>
            <h2 className="font-serif text-4xl md:text-5xl">Projects</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {publishedProjects.map((project, index) => <ProjectCard key={project.title} title={project.title} category={project.category} year={project.year} image={project.image} slug={project.slug} index={index} />)}
        </div>
      </div>
    </section>;
};

export default Work;
