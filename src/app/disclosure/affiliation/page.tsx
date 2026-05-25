import {
  AccentList,
  Callout,
  DocumentGrid,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const recognitionItems = [
  { title: 'ISO 9001:2015 Certified Institution' },
  { title: 'Recognized for Academic Excellence' },
  { title: 'Best College Award - Recent Year' },
  { title: 'Industry-Academia Collaboration Award' },
  { title: 'Best Placement Record Award' },
  { title: 'Social Responsibility Recognition' },
];

const governanceItems = [
  {
    title: 'Regulatory compliance',
    description: 'All statutory and regulatory requirements are maintained in accordance with applicable norms.',
  },
  {
    title: 'Academic standards',
    description: 'Programs are expected to follow quality assurance processes and institutional academic discipline.',
  },
  {
    title: 'Financial transparency',
    description: 'Audit and financial reporting structures are maintained as part of institutional governance.',
  },
];

const documents = [
  {
    title: 'Mandatory Disclosures Document',
    description: 'Central reference document covering institutional disclosures and approvals.',
    href: '/docs/SCMT-Mandatory-Disclosures.pdf',
  },
  {
    title: 'AICTE EOA Report 2025-26',
    description: 'Approval and extension-of-approval reference for the current cycle.',
    href: '/docs/EOA-Report-2025-26.pdf',
  },
  {
    title: 'AICTE EOA Report 2024-25',
    description: 'Previous cycle approval documentation for institutional reference.',
    href: '/docs/EOA-Report-2024-25-7.pdf',
  },
  {
    title: 'AICTE LOA 2023-2024',
    description: 'Letter of approval for the 2023-2024 cycle.',
    href: '/docs/LOA-2023-2024.pdf',
  },
];

export default function AffiliationPage() {
  return (
    <PageShell
      section="Disclosure"
      title="Affiliation & Recognition"
      description="An overview of institutional recognition, university affiliation, approval status, and the official documents that support compliance and transparency."
      chips={[
        { label: 'University', value: 'MDU Rohtak' },
        { label: 'Approval', value: 'AICTE' },
        { label: 'Status', value: 'Active' },
        { label: 'Access', value: 'Downloadable records' },
      ]}
      primaryAction={{ href: '/docs/SCMT-Mandatory-Disclosures.pdf', label: 'Open Mandatory Disclosures' }}
      secondaryAction={{ href: '/contact', label: 'Contact Administration' }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="University affiliation" tone="green">
          <p><strong>Affiliated to:</strong> Maharishi Dayanand University, Rohtak</p>
          <p><strong>Affiliation ID:</strong> Available on official affiliation letter</p>
          <p><strong>Status:</strong> Active and in good standing</p>
        </Callout>
        <Callout title="AICTE approval" tone="blue">
          <p><strong>Approval letter:</strong> Available</p>
          <p><strong>Validity period:</strong> Current approval cycle</p>
          <p className="mt-2">All programs offered by Shivom MBA College are duly approved by AICTE.</p>
        </Callout>
      </div>

      <PageSection eyebrow="Recognition" title="Selected recognition and institutional standing.">
        <AccentList items={recognitionItems} columns={2} />
      </PageSection>

      <PageSection eyebrow="Governance" title="How compliance and institutional discipline are maintained.">
        <AccentList items={governanceItems} columns={2} />
      </PageSection>

      <PageSection eyebrow="Documents" title="Key files for disclosure and reference.">
        <DocumentGrid items={documents} />
      </PageSection>

      <Callout title="Note" tone="slate">
        For detailed clarification regarding recognition, approval status, or official
        documentation, please contact the Administrative Office.
      </Callout>
    </PageShell>
  );
}
