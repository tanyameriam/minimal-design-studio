import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Let's create
            <br />
            something <span className="italic">together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl">
            Currently available for freelance projects and full-time opportunities. Feel free to reach out.
          </p>
          
          <a 
            href="mailto:hello@portfolio.com"
            className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-serif hover:italic transition-all duration-300"
          >
            hello@portfolio.com
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        
        <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-8">
            {[
              { name: 'LinkedIn', url: '#' },
              { name: 'Dribbble', url: '#' },
              { name: 'Behance', url: '#' },
              { name: 'Twitter', url: '#' }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="text-sm text-muted-foreground hover:text-foreground link-underline transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
