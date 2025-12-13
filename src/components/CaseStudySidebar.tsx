import { useState, useEffect } from 'react';

interface SidebarSection {
  id: string;
  label: string;
}

interface CaseStudySidebarProps {
  sections: SidebarSection[];
}

const CaseStudySidebar = ({ sections }: CaseStudySidebarProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for header

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      
      // Default to first section if nothing else matches
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`text-left text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === section.id
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground/60 hover:text-muted-foreground'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudySidebar;
