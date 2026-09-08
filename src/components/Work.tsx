import FeaturedProjects from '@/components/FeaturedProjects';
import SelectedIndex from '@/components/SelectedIndex';

/**
 * The work section: three projects at full weight, then everything else as
 * an index.
 *
 * There used to be a grid of large project cards here, and briefly an
 * expanding ledger. Both were wrong in the same direction: the cards made a
 * recruiter scroll five screens to compare three projects, and the ledger
 * made them hover to see one at a time. Three fixed rows let all three be
 * compared without moving anything. The cards were not deleted, they moved:
 * /work still renders every project at full weight.
 */
const Work = () => (
  <section id="work" className="scroll-mt-24 overflow-x-clip px-5 pb-20 md:px-8 md:pb-24 lg:px-12">
    <h2 className="label-strong">Selected work</h2>
    <FeaturedProjects />
    <SelectedIndex />
  </section>
);

export default Work;
