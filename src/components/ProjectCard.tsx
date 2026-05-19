import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string | null;
  index: number;
}

const accentClasses = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-foreground'];

const ProjectCard = ({ title, category, year, image, slug, index }: ProjectCardProps) => {
  const accent = accentClasses[index % accentClasses.length];

  const content = (
    <article
      className="group brutal-card relative overflow-hidden"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted border-b-2 border-foreground">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute top-4 left-4 ${accent} text-foreground border-2 border-foreground px-3 py-1 font-mono text-xs uppercase tracking-wider`}
        >
          {String(index + 1).padStart(2, '0')} / Case Study
        </div>
        <div className="absolute top-4 right-4 bg-background border-2 border-foreground w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-3 bg-card">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl leading-none">{title}</h3>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap">
            {year}
          </span>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {category}
        </p>
      </div>
    </article>
  );

  if (slug) return <Link to={`/case-study/${slug}`}>{content}</Link>;
  return content;
};

export default ProjectCard;
