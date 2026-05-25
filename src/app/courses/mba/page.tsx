import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const highlights = [
  'Advanced business management and strategic planning with real-world frameworks',
  'Global business perspective through contemporary cases and industry scenarios',
  'Leadership development programs and guided executive-style thinking',
  'Industry collaborations, guest lectures, and live exposure to management practice',
  'Consulting-oriented projects with practical business problem solving',
  'Career acceleration for students aiming at management and leadership roles',
];

const specializations = [
  { title: 'Finance & Investment', description: 'Develop capability in financial analysis, planning, and investment decision-making.' },
  { title: 'Marketing Management', description: 'Understand brand growth, market strategy, customer insight, and digital channels.' },
  { title: 'Business Analytics', description: 'Use data, reporting, and decision models to support modern business strategy.' },
  { title: 'Entrepreneurship', description: 'Build new-venture thinking, innovation skills, and business-model discipline.' },
  { title: 'International Business', description: 'Study cross-border trade, global markets, and international management practice.' },
  { title: 'Supply Chain Management', description: 'Focus on operations, procurement, logistics, and systems coordination.' },
];

export default function MBAPage() {
  return (
    <PageShell
      section="Programs"
      title="Master of Business Administration (MBA)"
      description="A management program built for students who want sharper strategic thinking, stronger leadership skills, and practical preparation for high-responsibility roles across business sectors."
      chips={[
        { label: 'Duration', value: '2 Years' },
        { label: 'Level', value: 'Postgraduate' },
        { label: 'Format', value: 'Full-time' },
        { label: 'Outcome', value: 'Leadership roles' },
      ]}
      heroImage={{ src: '/media/mba-hero.jpg', alt: 'MBA program at Shivom' }}
      primaryAction={{ href: '/admission/key-dates', label: 'Apply for MBA' }}
      secondaryAction={{ href: '/contact', label: 'Discuss Admission' }}
    >
      <PageSection
        eyebrow="Program Overview"
        title="A comprehensive management program with strong industry orientation."
      >
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            The MBA program at Shivom is designed to prepare future leaders and decision-makers for
            the demands of the business world.
          </p>
          <p>
            The curriculum spans Marketing, Finance, Human Resource Management, Operations,
            International Business, Business Analytics, and Entrepreneurship, with strong emphasis
            on case studies, projects, internships, and industry interaction.
          </p>
          <p>
            Students are encouraged to develop innovation, leadership, ethical business judgment,
            and effective communication for corporate, startup, and public-sector roles.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Highlights" title="Why the MBA is designed for serious progression.">
        <Checklist items={highlights} columns={2} />
      </PageSection>

      <PageSection eyebrow="Specializations" title="Focus areas for different career trajectories.">
        <AccentList items={specializations} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="Admission expectations" tone="blue">
          <ul className="space-y-2">
            <li>Bachelor&apos;s degree from a recognized university</li>
            <li>Entrance exam score such as CAT, MAT, GMAT, or equivalent</li>
            <li>Strong academic background and management aptitude</li>
            <li>Work experience may strengthen the profile where applicable</li>
          </ul>
        </Callout>
        <Callout title="Career progression" tone="green">
          MBA graduates are prepared for roles such as strategic manager, business analyst,
          management consultant, entrepreneur, and broader leadership-track positions in public and
          private organizations.
        </Callout>
      </div>
    </PageShell>
  );
}
