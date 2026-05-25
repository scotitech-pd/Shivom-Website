import Link from 'next/link';
import {
  Callout,
  Checklist,
  PageSection,
  PageShell,
  Timeline,
} from '@/components/page-shell';

const conferences = [
  {
    label: 'March 15-17, 2024',
    title: 'International Conference on Business Innovation & Digital Transformation 2024',
    description: 'Venue: Shivom MBA College Campus',
  },
  {
    label: 'February 10-11, 2024',
    title: 'National Conference on Sustainable Business Practices',
    description: 'Venue: Virtual + On-Campus Hybrid',
  },
  {
    label: 'January 20-22, 2024',
    title: 'Conference on Technology & Management Excellence',
    description: 'Venue: Shivom MBA College Campus',
  },
];

export default function ConferencesPage() {
  return (
    <PageShell
      section="Research"
      title="Academic Conferences"
      description="A platform for presenting research, exchanging ideas, and exposing students and faculty to contemporary academic and industry conversations."
      chips={[
        { label: 'Format', value: 'Conferences' },
        { label: 'Audience', value: 'Faculty + Students' },
        { label: 'Value', value: 'Presentation + Networking' },
        { label: 'Output', value: 'Publications' },
      ]}
      primaryAction={{ href: '/contact', label: 'Subscribe to Research Updates' }}
      secondaryAction={{ href: '/research/seminars', label: 'Explore Seminars' }}
    >
      <PageSection eyebrow="Overview" title="Research exchange beyond the classroom.">
        <p className="text-base leading-8 text-slate-700">
          Shivom MBA College regularly organizes and participates in academic conferences that give
          faculty and students the opportunity to present research, engage in scholarly
          conversations, and connect with academics and practitioners from other institutions.
        </p>
      </PageSection>

      <PageSection eyebrow="Recent Conferences" title="Selected conference activity.">
        <Timeline items={conferences} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <PageSection eyebrow="Why It Matters" title="Conference participation benefits.">
          <Checklist
            items={[
              'Opportunity to present original research findings',
              'Networking with scholars and practitioners globally',
              'Exposure to research trends and emerging methodologies',
              'Published proceedings and citation opportunities',
              'Professional development and academic visibility',
            ]}
            columns={1}
          />
        </PageSection>
        <PageSection eyebrow="Publication Pathways" title="Where presented work can go next.">
          <Checklist
            items={[
              'Conference proceedings with ISBN',
              'Indexed journals with ISSN recognition',
              'Institutional research repositories',
              'Online research publication platforms',
            ]}
            columns={1}
          />
        </PageSection>
      </div>

      <Callout title="Upcoming conferences" tone="blue">
        Information about future conferences will be updated as schedules and call-for-paper
        details are finalized. Use the <Link href="/contact" className="font-semibold text-blue-800">contact page</Link> to stay informed.
      </Callout>
    </PageShell>
  );
}
