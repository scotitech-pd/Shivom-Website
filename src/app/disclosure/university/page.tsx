import {
  AccentList,
  Callout,
  Checklist,
  DocumentGrid,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const affiliatedPrograms = [
  {
    title: 'Bachelor of Business Administration (BBA)',
    description: 'Type: Full-time degree program',
    meta: 'Duration: 3 Years',
  },
  {
    title: 'Master of Business Administration (MBA)',
    description: 'Type: Full-time degree program',
    meta: 'Duration: 2 Years',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'Type: Full-time degree program',
    meta: 'Duration: 3 Years',
  },
];

export default function UniversityPage() {
  return (
    <PageShell
      section="Disclosure"
      title="University Affiliation"
      description="Information about Shivom’s university affiliation, what that affiliation means for students, and the institutional documents connected to it."
      chips={[
        { label: 'Affiliating University', value: 'MDU Rohtak' },
        { label: 'Status', value: 'Active' },
        { label: 'Coverage', value: 'Degree programs' },
        { label: 'Benefit', value: 'Recognized credentials' },
      ]}
      primaryAction={{ href: '/docs/SCMT-Mandatory-Disclosures.pdf', label: 'Open Affiliation Documents' }}
      secondaryAction={{ href: '/contact', label: 'Contact Academic Affairs' }}
    >
      <Callout title="Affiliation information" tone="blue">
        <p><strong>Affiliated University:</strong> Maharishi Dayanand University, Rohtak</p>
        <p><strong>Affiliation Status:</strong> Active and recognized</p>
        <p><strong>Affiliation Since:</strong> Since establishment</p>
        <p><strong>Reference Details:</strong> Available on official affiliation records</p>
      </Callout>

      <div className="grid gap-6 lg:grid-cols-2">
        <PageSection eyebrow="What It Means" title="Why affiliation matters for students.">
          <Checklist
            items={[
              'Degrees awarded are recognized and valid',
              'Curriculum follows university-prescribed standards',
              'University conducts or supervises examinations',
              'Regular academic review and oversight are maintained',
              'Institution follows university regulations and guidelines',
            ]}
            columns={1}
          />
        </PageSection>
        <PageSection eyebrow="Examination & Assessment" title="How academic quality is controlled.">
          <Checklist
            items={[
              'Regular curriculum updates and improvements',
              'University-conducted or supervised examinations',
              'Answer script evaluation and moderation',
              'Degree certificate issuance by the university',
              'Transcript validation and academic verification',
              'Quality checks through academic inspections',
            ]}
            columns={1}
          />
        </PageSection>
      </div>

      <PageSection eyebrow="Affiliated Programs" title="Programs operating under university affiliation.">
        <AccentList items={affiliatedPrograms} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <PageSection eyebrow="Student Benefits" title="Direct value for learners and graduates.">
          <Checklist
            items={[
              'Recognized and valid degrees',
              'Degree evaluation for higher studies',
              'Job acceptance by employers',
              'Support for transcript verification',
              'Recognition for national and international opportunities',
              'Continued academic identity through the affiliating university structure',
            ]}
            columns={1}
          />
        </PageSection>
        <PageSection eyebrow="Documents" title="Reference files and related records.">
          <DocumentGrid
            items={[
              {
                title: 'University Affiliation Letter',
                description: 'Official reference within the mandatory disclosure set.',
                href: '/docs/SCMT-Mandatory-Disclosures.pdf',
              },
              {
                title: 'Approved Course Curriculum',
                description: 'Program information and related institutional records.',
                href: '/docs/SCMT-Mandatory-Disclosures.pdf',
              },
              {
                title: 'Academic Regulations',
                description: 'Reference documentation connected to the affiliated academic structure.',
                href: '/docs/SCMT-Mandatory-Disclosures.pdf',
              },
            ]}
          />
        </PageSection>
      </div>

      <Callout title="Need verification support?" tone="slate">
        For further details about university affiliation or official verification, please visit the
        Maharishi Dayanand University website or contact the Academic Affairs Office.
      </Callout>
    </PageShell>
  );
}
