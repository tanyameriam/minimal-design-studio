import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
type ProjectTag = 'UI' | 'UX' | 'Research';
interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string | null;
  tags?: ProjectTag[];
  index: number;
}
const tagColors: Record<ProjectTag, string> = {
  UI: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  UX: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Research: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
};
const ProjectCard = ({
  title,
  category,
  year,
  image,
  slug,
  tags,
  index
}: ProjectCardProps) => {
  const content = <article className="group cursor-pointer" style={{
    animationDelay: `${index * 0.1}s`
  }}>
      <div className="relative overflow-hidden mb-6 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-500 bg-card">
        <div className="aspect-[16/9] overflow-hidden flex items-center justify-center">
          <img src={image} alt={title} className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:italic transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide mb-3">
            {category}
          </p>
          {tags && tags.length > 0 && <div className="flex gap-2 flex-wrap">
              {tags.map(tag => <Badge key={tag} variant="outline" className={`text-xs font-medium ${tagColors[tag]}`}>
                  {tag}
                </Badge>)}
            </div>}
        </div>
        
      </div>
    </article>;
  if (slug) {
    return <Link to={`/case-study/${slug}`}>{content}</Link>;
  }
  return content;
};
export default ProjectCard;