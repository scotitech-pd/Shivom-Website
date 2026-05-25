import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const highlights = [
  'Industry-relevant curriculum covering core business functions and management practice',
  'Experienced faculty with strong academic grounding and industry exposure',
  'Practical projects, case analysis, presentations, and experiential assignments',
  'Internship opportunities with companies across business, retail, and services',
  'Soft-skills development focused on communication, teamwork, and leadership',
];

const specializations = [
  { title: 'Finance', description: 'Understand investment, banking, corporate finance, and business decision-making.' },
  { title: 'Marketing', description: 'Build skills in brand strategy, consumer behavior, and market communication.' },
  { title: 'Human Resources', description: 'Learn talent management, organizational behavior, and people leadership.' },
  { title: 'Operations', description: 'Study process efficiency, logistics, service design, and execution planning.' },
];

export default function BBAPage() {
  return (
    <PageShell
      section="Programs"
      title="Bachelor of Business Administration (BBA)"
      description="A future-focused undergraduate management program that blends business fundamentals, leadership development, and practical exposure for students preparing to enter industry or continue into advanced study."
      chips={[
        { label: 'Duration', value: '3 Years' },
        { label: 'Mode', value: 'Full-time' },
        { label: 'Pathways', value: 'BBA / Honours / Research' },
        { label: 'Best For', value: 'Future managers' },
      ]}
      heroImage={{ src: '/media/bba-hero.jpg', alt: 'BBA program at Shivom' }}
      primaryAction={{ href: '/admission/key-dates', label: 'Apply for BBA' }}
      secondaryAction={{ href: '/contact', label: 'Ask About Eligibility' }}
    >
      <PageSection
        eyebrow="Program Overview"
        title="A broad business foundation with room to specialize."
      >
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Shivom Institute of Management and Technology offers a dynamic Bachelor of Business
            Administration program available in three pathways: 3-year BBA, 4-year BBA Honours,
            and 4-year BBA with Research.
          </p>
          <p>
            The program gives students a strong grounding in business principles, practical
            management skills, and industry exposure so they can understand business operations and
            make informed strategic decisions.
          </p>
          <p>
            Students build analytical thinking, leadership capability, interpersonal confidence, and
            problem-solving discipline that supports careers across sectors.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Why It Works" title="What students gain during the program.">
        <Checklist items={highlights} columns={2} />
      </PageSection>

      <PageSection eyebrow="Specializations" title="Choose a track aligned with your interests.">
        <AccentList items={specializations} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="Career opportunities" tone="blue">
          BBA graduates from Shivom move into roles across banking, finance, consulting, retail,
          IT, e-commerce, and administrative business functions.
        </Callout>
        <Callout title="Why students choose BBA" tone="green">
          It is a strong early-career option for students who want management exposure,
          communication skills, and a flexible base for jobs, entrepreneurship, or postgraduate
          study.
        </Callout>
      </div>
    </PageShell>
  );
}
