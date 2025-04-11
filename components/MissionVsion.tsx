// components/MissionVision.tsx
import SectionTitle from './SectionTitle';

export default function MissionVision() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <SectionTitle title="Our Mission & Vision" description="We advance community well-being through innovative, inclusive, and sustainable health solutions." />
      <div className="grid md:grid-cols-2 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🌍 Vision</h3>
          <p>
            A healthier, empowered society where communities have the tools and opportunities to lead fulfilling lives.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">💡 Mission</h3>
          <p>
            To transform public health systems through equity, innovation, and environmental sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
