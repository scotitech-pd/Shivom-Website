import {
  AccentList,
  Callout,
  Checklist,
  DocumentGrid,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const approvedPrograms = [
  {
    title: 'BBA (Bachelor of Business Administration)',
    description: 'Approved intake: 60 students',
    meta: 'Duration: 3 Years',
  },
  {
    title: 'MBA (Master of Business Administration)',
    description: 'Approved intake: 60 students',
    meta: 'Duration: 2 Years',
  },
  {
    title: 'BCA (Bachelor of Computer Applications)',
    description: 'Approved intake: 60 students',
    meta: 'Duration: 3 Years',
  },
];

export default function AICtePage() {
  return (
    <PageShell
      section="Disclosure"
      title="AICTE Approval"
      description="A summary of the institution’s AICTE recognition, approved programs, and the documents that support compliance with national technical education standards."
      chips={[
        { label: 'Authority', value: 'AICTE' },
        { label: 'Status', value: 'Approved' },
        { label: 'Programs', value: 'BBA, MBA, BCA' },
        { label: 'Reference', value: 'Official PDFs' },
      ]}
      primaryAction={{ href: '/docs/LOA-2023-2024.pdf', label: 'Open AICTE Approval Letter' }}
      secondaryAction={{ href: '/contact', label: 'Contact Academic Affairs' }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="Current AICTE status" tone="green">
          <p><strong>Institution code:</strong> Available in AICTE documentation</p>
          <p><strong>Approval valid till:</strong> Current approval cycle</p>
          <p><strong>Status:</strong> Approved and active</p>
          <p><strong>Programs approved:</strong> BBA, MBA, BCA</p>
        </Callout>
        <Callout title="What the approval means" tone="blue">
          AICTE approval certifies that the institution meets prescribed standards around technical
          education quality, infrastructure, faculty, and regulatory compliance.
        </Callout>
      </div>

      <PageSection eyebrow="Programs" title="Programs currently covered under approval.">
        <AccentList items={approvedPrograms} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <PageSection eyebrow="Benefits" title="Why this approval matters for students.">
          <Checklist
            items={[
              'National recognition of approved programs',
              'Quality assurance against prescribed standards',
              'Recognized credentials for jobs and higher studies',
              'Compliance with national education policies',
              'Faculty and infrastructure benchmarks',
              'Structured institutional review cycles',
            ]}
            columns={1}
          />
        </PageSection>
        <PageSection eyebrow="Review Process" title="How standards are maintained over time.">
          <Checklist
            items={[
              'Academic quality audits',
              'Infrastructure and facility inspections',
              'Faculty qualification verification',
              'Student placement tracking',
              'Research and innovation assessment',
              'Compliance checks against statutory requirements',
            ]}
            columns={1}
          />
        </PageSection>
      </div>

      <PageSection eyebrow="Official Document" title="Download approval reference.">
        <DocumentGrid
          items={[
            {
              title: 'AICTE Approval Letter',
              description: 'Official approval reference file for institutional record and verification.',
              href: '/docs/LOA-2023-2024.pdf',
            },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
