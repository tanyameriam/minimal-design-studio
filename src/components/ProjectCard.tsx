interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, year, image, index }: ProjectCardProps) => {
  return (
    <article 
      className="group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden bg-card mb-6">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
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
        <span className="text-sm text-muted-foreground">
          {year}
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
