import { useState, useEffect, useRef } from 'react';

interface SidebarSection {
  id: string;
  label: string;
}

interface CaseStudySidebarProps {
  sections: SidebarSection[];
}

const CaseStudySidebar = ({ sections }: CaseStudySidebarProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Handle sticky behavior
      if (navRef.current && placeholderRef.current) {
        const placeholderTop = placeholderRef.current.getBoundingClientRect().top + window.scrollY;
        setIsSticky(window.scrollY >= placeholderTop - 120);
      }

      // Handle active section
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
      
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Placeholder to track original position */}
      <div ref={placeholderRef} className="hidden xl:block absolute left-0 top-[400px]" />
      
      <nav 
        ref={navRef}
        className={`hidden xl:block z-40 transition-all duration-300 ${
          isSticky 
            ? 'fixed left-12 top-32' 
            : 'absolute left-12 top-[400px]'
        }`}
      >
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-left text-sm uppercase tracking-[0.12em] transition-all duration-300 block py-1 ${
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
    </>
  );
};

export default CaseStudySidebar;
