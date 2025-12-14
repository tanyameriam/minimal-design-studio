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
  const [sidebarLeft, setSidebarLeft] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateSidebarPosition = () => {
      // Calculate position to stay close to a max-w-5xl (64rem = 1024px) centered container
      const maxContentWidth = 1024; // 64rem
      const viewportWidth = window.innerWidth;
      
      // Different offsets for different screen sizes
      if (viewportWidth >= 1536) {
        // 2xl screens - more space, sidebar further from content
        const contentStart = (viewportWidth - maxContentWidth) / 2;
        const sidebarOffset = 180;
        setSidebarLeft(Math.max(48, contentStart - sidebarOffset));
      } else if (viewportWidth >= 1280) {
        // xl screens - sidebar closer to content
        const contentStart = (viewportWidth - maxContentWidth) / 2;
        const sidebarOffset = 140;
        setSidebarLeft(Math.max(32, contentStart - sidebarOffset));
      } else {
        // Below xl - sidebar hidden via CSS
        setSidebarLeft(24);
      }
    };

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

    calculateSidebarPosition();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateSidebarPosition);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateSidebarPosition);
    };
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
            ? 'fixed top-32' 
            : 'absolute top-[400px]'
        }`}
        style={{ left: `${sidebarLeft}px` }}
      >
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-left text-sm uppercase tracking-[0.12em] transition-all duration-300 block py-1.5 pl-4 relative ${
                  activeSection === section.id
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground/60 hover:text-muted-foreground'
                }`}
              >
                {/* Vertical indicator line */}
                <span 
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-primary opacity-100' 
                      : 'bg-border/50 opacity-0 group-hover:opacity-50'
                  }`}
                />
                {/* Horizontal connecting line for active section */}
                {activeSection === section.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-8 bg-gradient-to-r from-primary/60 to-transparent -ml-8" />
                )}
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Subtle vertical track line */}
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-border/30 -z-10" />
      </nav>
    </>
  );
};

export default CaseStudySidebar;
