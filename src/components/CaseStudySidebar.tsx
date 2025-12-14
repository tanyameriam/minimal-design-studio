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
      const sidebarOffset = 160; // Distance from content edge
      const viewportWidth = window.innerWidth;
      
      if (viewportWidth > 1280) {
        // Center the content area, sidebar sits to the left of it
        const contentStart = (viewportWidth - maxContentWidth) / 2;
        setSidebarLeft(Math.max(24, contentStart - sidebarOffset));
      } else {
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
        className={`hidden xl:block z-40 transition-all duration-300 w-32 ${
          isSticky 
            ? 'fixed top-32' 
            : 'absolute top-[400px]'
        }`}
        style={{ left: `${sidebarLeft}px` }}
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
