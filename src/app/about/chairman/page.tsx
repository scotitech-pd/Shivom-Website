import {
  BorderList,
  Callout,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const commitments = [
  {
    title: 'Industry-relevant education',
    description: 'Programs are designed to align academic rigor with what employers and entrepreneurs need now.',
  },
  {
    title: 'Leadership and critical thinking',
    description: 'Students are encouraged to question, analyze, communicate clearly, and lead with confidence.',
  },
  {
    title: 'Innovation and research culture',
    description: 'Faculty and students are supported in building curiosity, experimentation, and scholarly discipline.',
  },
  {
    title: 'Ethical and responsible citizenship',
    description: 'Professional success is paired with integrity, empathy, and social accountability.',
  },
];

export default function ChairmanPage() {
  return (
    <PageShell
      section="Leadership"
      title="A chairman’s vision rooted in excellence, growth, and responsibility."
      description="Shivom Institute of Management and Technology is built around a simple idea: academic quality must translate into confident graduates, capable professionals, and responsible citizens."
      chips={[
        { label: 'Institution', value: 'Shivom Institute' },
        { label: 'Focus', value: 'Academic Excellence' },
        { label: 'Approach', value: 'Holistic Learning' },
        { label: 'Outcome', value: 'Future-ready Leaders' },
      ]}
      primaryAction={{ href: '/admission/key-dates', label: 'Start Admission Journey' }}
      secondaryAction={{ href: '/contact', label: 'Talk to the Admission Team' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Guiding Principle
          </p>
          <p className="text-2xl font-semibold leading-relaxed text-white">
            “Education must shape intellect, character, and the courage to lead.”
          </p>
          <p className="text-sm leading-7 text-blue-100">
            Our institutional direction is centered on meaningful learning, professional discipline,
            and a campus culture that encourages ambition with integrity.
          </p>
        </div>
      }
    >
      <PageSection
        eyebrow="Welcome"
        title="Building an institution that creates momentum for every student."
        description="The chairman’s message is not just ceremonial. It sets the expectation that education at Shivom should be practical, principled, and transformative."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Welcome to Shivom MBA College, an institution dedicated to fostering academic
              excellence and professional development.
            </p>
            <p>
              At Shivom, we believe in transforming young minds into visionary leaders and
              accomplished professionals. Our commitment extends beyond classroom teaching to
              creating a holistic learning environment that nurtures critical thinking, innovation,
              and ethical values.
            </p>
            <p>
              We invite students to grow in a culture that values discipline, curiosity, teamwork,
              and long-term impact. The goal is not only to help them earn degrees, but to prepare
              them to contribute with confidence wherever they go next.
            </p>
          </div>

          <Callout title="Our vision" tone="blue">
            To be a globally recognized institution providing quality education that empowers
            students to become responsible citizens and industry leaders.
          </Callout>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Institutional Promise"
        title="What the institution is committed to delivering."
      >
        <BorderList items={commitments} columns={2} />
      </PageSection>

      <Callout title="Warm regards" tone="slate">
        <p className="font-semibold text-slate-950">Chairman, Shivom MBA College</p>
        <p className="mt-2">
          We invite you to join us on this journey of transformation and excellence. Together, we
          can create a brighter future built on knowledge, character, and opportunity.
        </p>
      </Callout>
    </PageShell>
  );
}
