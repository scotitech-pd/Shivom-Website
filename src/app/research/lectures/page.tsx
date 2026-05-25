import Link from 'next/link';
import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const categories = [
  {
    title: 'Industry leadership lectures',
    description: 'Business leaders share perspective on strategy, management, and execution.',
  },
  {
    title: 'Research and innovation talks',
    description: 'Researchers discuss findings, methods, and fast-moving areas of change.',
  },
  {
    title: 'Career development sessions',
    description: 'Students receive guidance on roles, pathways, and professional growth choices.',
  },
  {
    title: 'Specialist technical lectures',
    description: 'Deep-dive sessions on focused domain expertise and technical themes.',
  },
  {
    title: 'Soft-skills and personality development',
    description: 'Sessions on leadership, communication, professional conduct, and confidence.',
  },
];

const guestLecturers = [
  {
    title: 'Dr. Vikram Singh',
    description: 'CEO, Tech Innovations Inc. — Topic: Digital Transformation in Business',
  },
  {
    title: 'Prof. Anjali Desai',
    description: 'Research Scholar, Global University — Topic: Emerging Trends in Data Science',
  },
  {
    title: 'Mr. Rohan Mehta',
    description: 'Founder, StartupHub — Topic: Building Successful Ventures',
  },
  {
    title: 'Dr. Sanjana Patel',
    description: 'HR Director, Fortune 500 Company — Topic: Human Resource Management Excellence',
  },
];

export default function LecturesPage() {
  return (
    <PageShell
      section="Research"
      title="Invited Lectures"
      description="Distinguished guest lectures that expose students to specialized ideas, industry context, and real-world perspectives from accomplished professionals and academics."
      chips={[
        { label: 'Format', value: 'Invited lectures' },
        { label: 'Speakers', value: 'Academics + Industry' },
        { label: 'Value', value: 'Perspective + Access' },
        { label: 'Audience', value: 'Campus-wide' },
      ]}
      primaryAction={{ href: '/contact', label: 'Subscribe for Lecture Updates' }}
      secondaryAction={{ href: '/research/conferences', label: 'See Research Events' }}
    >
      <PageSection eyebrow="Overview" title="Focused sessions from accomplished guests.">
        <p className="text-base leading-8 text-slate-700">
          Shivom MBA College invites academics, industry leaders, researchers, and specialists to
          deliver lectures on contemporary and high-value topics. These sessions enrich the learning
          environment and widen the student perspective beyond textbooks.
        </p>
      </PageSection>

      <PageSection eyebrow="Categories" title="Different kinds of invited lecture experiences.">
        <AccentList items={categories} columns={2} />
      </PageSection>

      <PageSection eyebrow="Past Sessions" title="Examples of guest lecturers and themes.">
        <AccentList items={guestLecturers} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Benefits for students" tone="blue">
          <Checklist
            items={[
              'Learn from accomplished professionals and researchers',
              'See real-world applications and case examples',
              'Gain broader perspective on career options',
              'Build awareness of current industry trends',
            ]}
            columns={1}
          />
        </Callout>
        <Callout title="Typical session format" tone="green">
          Formal lecture, interactive Q&A, informal networking opportunities, and participation
          recognition where applicable.
        </Callout>
        <Callout title="Invite a speaker" tone="slate">
          Student groups and departments can suggest speaker profiles, preferred topics, and
          proposed dates through Academic Affairs for review and coordination.
        </Callout>
      </div>

      <Callout title="Upcoming lectures" tone="amber">
        Updated schedules for invited lectures will be published as sessions are finalized. Students
        can use the <Link href="/contact" className="font-semibold text-amber-900">contact page</Link> to stay informed.
      </Callout>
    </PageShell>
  );
}
