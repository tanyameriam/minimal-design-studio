import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string | null;
  index: number;
}

const ProjectCard = ({
  title,
  category,
  year,
  image,
  slug,
  index
}: ProjectCardProps) => {
  const content = <article className="group cursor-pointer" style={{
    animationDelay: `${index * 0.1}s`
  }}>
      <div className="relative overflow-hidden mb-6 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-500 bg-card">
        <div className="aspect-[16/9] overflow-hidden bg-muted/20">
          <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:italic transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide">
            {category}
          </p>
        </div>
      </div>
    </article>;

  if (slug) {
    return <Link to={`/case-study/${slug}`}>{content}</Link>;
  }
  return content;
};

export default ProjectCard;