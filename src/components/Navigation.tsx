import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="font-serif text-xl tracking-tight"
        >
          Portfolio
        </button>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('work')}
            className="text-sm font-sans tracking-wide link-underline"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('explorations')}
            className="text-sm font-sans tracking-wide link-underline"
          >
            Explorations
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-sans tracking-wide link-underline"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-sans tracking-wide link-underline"
          >
            Contact
          </button>
          <button 
            onClick={() => navigate('/cv')}
            className="text-sm font-sans tracking-wide link-underline"
          >
            CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
