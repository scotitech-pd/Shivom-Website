import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
  Timeline,
} from '@/components/page-shell';

const seminarTypes = [
  { title: 'Industry expert seminars', description: 'Business leaders and practitioners sharing field insight and applied knowledge.' },
  { title: 'Faculty seminars', description: 'Research presentations and academic exchange led by internal faculty members.' },
  { title: 'Student research seminars', description: 'A platform for students to present project and research work in public.' },
  { title: 'Guest lecture series', description: 'Focused talks from visiting scholars and external experts.' },
  { title: 'Technical workshops', description: 'Hands-on sessions centered on tools, systems, and emerging topics.' },
];

const recentSeminars = [
  {
    label: 'March 10, 2024',
    title: 'Digital Marketing in the Age of AI',
    description: 'Speaker: Dr. Rajesh Kumar, Tech Marketing Expert',
  },
  {
    label: 'February 28, 2024',
    title: 'Entrepreneurship & Startup Ecosystem',
    description: 'Speaker: Ms. Priya Sharma, Startup Founder & Mentor',
  },
  {
    label: 'February 15, 2024',
    title: 'Supply Chain Management 4.0',
    description: 'Speaker: Mr. Arun Patel, Supply Chain Director',
  },
];

export default function SeminarsPage() {
  return (
    <PageShell
      section="Research"
      title="Academic Seminars"
      description="Interactive sessions that connect classroom learning with current business, technology, and research conversations through expert-led discussions."
      chips={[
        { label: 'Format', value: 'Seminars' },
        { label: 'Cadence', value: 'Regular sessions' },
        { label: 'Audience', value: 'Students + Faculty' },
        { label: 'Goal', value: 'Applied learning' },
      ]}
      primaryAction={{ href: '/contact', label: 'Ask About Participation' }}
      secondaryAction={{ href: '/research/conferences', label: 'Explore Conferences' }}
    >
      <PageSection eyebrow="Program" title="A recurring space for current ideas and expert interaction.">
        <p className="text-base leading-8 text-slate-700">
          Shivom MBA College organizes regular seminars featuring industry experts, academicians,
          and thought leaders. These sessions help students and faculty engage with contemporary
          topics in business, management, and technology.
        </p>
      </PageSection>

      <PageSection eyebrow="Seminar Types" title="Different formats within the seminar program.">
        <AccentList items={seminarTypes} columns={2} />
      </PageSection>

      <PageSection eyebrow="Recent Sessions" title="Examples of recent seminar topics.">
        <Timeline items={recentSeminars} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Learning outcomes" tone="blue">
          <Checklist
            items={[
              'Exposure to industry trends and expert thinking',
              'Direct interaction with practitioners and specialists',
              'Networking opportunities with professionals',
              'Career guidance and domain-specific skill growth',
            ]}
            columns={1}
          />
        </Callout>
        <Callout title="Frequency" tone="green">
          Weekly expert sessions are complemented by monthly specialized workshops and technical
          programs, depending on the academic calendar.
        </Callout>
        <Callout title="Interested in presenting?" tone="slate">
          Faculty and students who want to contribute to the seminar series can contact Academic
          Affairs with a proposed topic and short outline.
        </Callout>
      </div>
    </PageShell>
  );
}
