const Hero = () => {
  return (
    <section
      id="hero"
      className="px-6 md:px-10 lg:px-16 pt-32 md:pt-44 pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-3xl">
        <p className="label text-ink-400 mb-8 reveal" data-shown="true">
          Hello, I&rsquo;m Tanya
        </p>

        <h1
          className="reveal text-[2.5rem] leading-[1.05] md:text-[3.75rem] lg:text-[4.5rem]"
          data-shown="true"
          style={{ transitionDelay: '80ms' }}
        >
          I design complex,{' '}
          <span className="em-serif">system-driven</span> products.
        </h1>

        <p
          className="reveal mt-8 max-w-xl text-lg md:text-xl leading-[1.45] text-ink-600"
          data-shown="true"
          style={{ transitionDelay: '160ms' }}
        >
          Product designer based in the Netherlands. Currently designing HR and
          payroll integration flows at BrynQ, a B2B iPaaS platform, and leading
          design on Layrrrd, a live content curation product.
        </p>
      </div>
    </section>
  );
};

export default Hero;
