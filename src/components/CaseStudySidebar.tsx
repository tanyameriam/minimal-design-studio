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
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

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
            setActiveIndex(i);
            return;
          }
        }
      }
      
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
        setActiveIndex(0);
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

  // Calculate the sliding indicator position
  const indicatorStyle = {
    transform: `translateY(${activeIndex * 40}px)`,
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
  };

  return (
    <>
      {/* Placeholder to track original position */}
      <div ref={placeholderRef} className="hidden xl:block absolute left-0 top-[400px]" />
      
      <nav 
        ref={navRef}
        className={`hidden xl:block z-40 transition-all duration-500 ease-out ${
          isSticky 
            ? 'fixed top-32' 
            : 'absolute top-[400px]'
        }`}
        style={{ left: `${sidebarLeft}px` }}
      >
        <div className="relative">
          {/* Animated sliding indicator */}
          <div 
            className="absolute left-0 w-[2px] h-8 bg-primary rounded-full"
            style={indicatorStyle}
          />
          
          {/* Horizontal line extending from active indicator */}
          <div 
            className="absolute left-0 h-[1px] w-6 bg-gradient-to-r from-primary/50 to-transparent -ml-6"
            style={{
              ...indicatorStyle,
              transform: `translateY(${activeIndex * 40 + 12}px)`,
            }}
          />
          
          <ul ref={listRef} className="space-y-2 pl-4">
            {sections.map((section, index) => (
              <li key={section.id} className="relative">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-sm uppercase tracking-[0.12em] block py-2 pr-4 transition-all duration-300 ease-out ${
                    activeSection === section.id
                      ? 'text-foreground font-semibold translate-x-1'
                      : 'text-muted-foreground/60 hover:text-muted-foreground hover:translate-x-0.5'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Subtle vertical track line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/20" />
        </div>
      </nav>
    </>
  );
};

export default CaseStudySidebar;
