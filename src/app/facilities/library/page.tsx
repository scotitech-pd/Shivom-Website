import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const collections = [
  { title: 'Books', description: 'Over 15,000 books covering academic and professional subject areas.' },
  { title: 'Journals', description: 'National and international journals that support research and coursework.' },
  { title: 'E-resources', description: 'Access to online databases, digital journals, and academic references.' },
  { title: 'Reference materials', description: 'Encyclopedias, dictionaries, handbooks, and supporting academic texts.' },
  { title: 'Research archive', description: 'Theses, dissertations, and previous academic work for reference use.' },
];

const facilities = [
  'Quiet study areas for focused reading',
  'Group discussion zones for collaborative work',
  'Computer terminals with internet connectivity',
  'Photocopying and printing support',
  'Individual reading carrels and workstations',
  'Drinking water and essential student amenities',
  'WiFi connectivity within the library zone',
  'Digital archive and reference access',
];

export default function LibraryPage() {
  return (
    <PageShell
      section="Facilities"
      title="Library"
      description="A well-organized academic resource center designed to support reading, research, coursework, and independent study in a calm, focused environment."
      chips={[
        { label: 'Role', value: 'Academic Hub' },
        { label: 'Collection', value: '15,000+ books' },
        { label: 'Access', value: 'Students + Faculty' },
        { label: 'Support', value: 'Digital + Print' },
      ]}
      heroImage={{ src: '/media/1.jpg', alt: 'Shivom College Library' }}
      primaryAction={{ href: '/contact', label: 'Ask About Access' }}
      secondaryAction={{ href: '/admission/prospectus', label: 'View Prospectus' }}
    >
      <PageSection eyebrow="Overview" title="A space designed for quiet work and serious study.">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Shivom&apos;s central library is a modern, air-conditioned facility created to support
            academic excellence through reliable access to learning resources.
          </p>
          <p>
            It functions as an intellectual hub for reading, research, revision, and project work
            across management, technology, and interdisciplinary subject areas.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Resources" title="What students can access in the library.">
        <AccentList items={collections} columns={2} />
      </PageSection>

      <PageSection eyebrow="Environment" title="Facilities that support day-to-day academic work.">
        <Checklist items={facilities} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Library hours" tone="blue">
          <p><strong>Monday to Friday:</strong> 8:00 AM - 8:00 PM</p>
          <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Sunday & Holidays:</strong> Closed</p>
          <p className="mt-2">Extended hours may apply during examination periods.</p>
        </Callout>
        <Callout title="Membership" tone="green">
          All enrolled students, faculty members, and staff are library members by default.
          Alumni may apply for limited access where permitted.
        </Callout>
        <Callout title="Borrowing policy" tone="slate">
          Students may borrow up to 5 books for 14 days. Faculty may borrow up to 10 books for 30
          days. Reference materials remain for in-library use.
        </Callout>
      </div>
    </PageShell>
  );
}
