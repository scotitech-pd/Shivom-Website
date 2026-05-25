import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const facilities = [
  { title: 'Audio-visual equipment', description: 'Projectors, screens, and sound systems for guided practice and presentations.' },
  { title: 'Recording studio', description: 'Professional-grade tools for speech review, video projects, and communication exercises.' },
  { title: 'Seminar hall', description: 'A larger venue for group discussions, speaking sessions, and mock interviews.' },
  { title: 'Practice rooms', description: 'Individual and group spaces for rehearsal, coaching, and repeated improvement.' },
  { title: 'Reference resources', description: 'Communication books, journals, and learning materials that support self-development.' },
];

const programs = [
  { title: 'English communication workshops', description: 'Grammar, vocabulary, and practical communication confidence.' },
  { title: 'Presentation skills training', description: 'Structure, delivery, pacing, and audience engagement techniques.' },
  { title: 'Interview preparation', description: 'Mock interviews and readiness support for placements.' },
  { title: 'Business writing', description: 'Professional writing for reports, proposals, and workplace communication.' },
  { title: 'Group discussions', description: 'Team communication, listening, and discussion discipline.' },
  { title: 'Soft-skills development', description: 'Confidence, etiquette, personality, and professional conduct.' },
];

export default function CommunicationLabPage() {
  return (
    <PageShell
      section="Facilities"
      title="Communication Laboratory"
      description="A dedicated space for building verbal, written, and presentation skills that strengthen classroom participation, placement performance, and long-term professional growth."
      chips={[
        { label: 'Focus', value: 'Communication Skills' },
        { label: 'Format', value: 'Practice-led' },
        { label: 'Use Cases', value: 'Interviews + Presentations' },
        { label: 'Outcome', value: 'Professional confidence' },
      ]}
      heroImage={{ src: '/media/3.jpg', alt: 'Shivom Communication Laboratory' }}
      primaryAction={{ href: '/contact', label: 'Ask About Student Support' }}
      secondaryAction={{ href: '/research/lectures', label: 'See Academic Events' }}
    >
      <PageSection eyebrow="Overview" title="Communication as a core employability skill.">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Communication is critical to success in academics, interviews, internships, and
            professional life. Shivom&apos;s Communication Lab helps students build these skills in a
            structured and supportive setting.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Facilities" title="Spaces and tools used for communication training.">
        <AccentList items={facilities} columns={2} />
      </PageSection>

      <PageSection eyebrow="Programs" title="Regular activities that improve performance.">
        <AccentList items={programs} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Trained instructors" tone="blue">
          The lab is guided by communication experts with backgrounds in media, journalism,
          corporate training, and public relations.
        </Callout>
        <Callout title="Student benefits" tone="green">
          <Checklist
            items={[
              'Improved public speaking confidence',
              'Better interview performance',
              'Stronger written communication',
              'Enhanced group discussion ability',
            ]}
            columns={1}
          />
        </Callout>
        <Callout title="Lab hours" tone="slate">
          <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
          <p className="mt-2">Students can book slots in advance for guided practice.</p>
        </Callout>
      </div>
    </PageShell>
  );
}
