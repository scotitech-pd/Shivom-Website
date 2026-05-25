import {
  AccentList,
  Callout,
  DocumentGrid,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const documents = [
  {
    title: 'General Prospectus',
    description: 'Program overview, admission guidance, campus information, and institutional details.',
    href: '/docs/application-form.pdf',
    hrefLabel: 'Download General Prospectus',
  },
  {
    title: 'MBA Admission Form',
    description: 'Dedicated application material for postgraduate management admissions.',
    href: '/docs/application-form-mba.pdf',
    hrefLabel: 'Download MBA Application Form',
  },
];

const prospectusContents = [
  { title: 'Institution overview', description: 'Vision, mission, history, and academic positioning of Shivom.' },
  { title: 'Program details', description: 'Course structure, curriculum direction, and specialization information.' },
  { title: 'Eligibility and admissions', description: 'Requirements, process, and important milestones for applicants.' },
  { title: 'Fees and support', description: 'Fee structure, scholarship information, and financing guidance.' },
  { title: 'Faculty and facilities', description: 'Teaching profile, infrastructure, and student support resources.' },
  { title: 'Placements and campus life', description: 'Career outcomes, hostel information, and student experience.' },
];

export default function ProspectusPage() {
  return (
    <PageShell
      section="Admissions"
      title="Prospectus"
      description="A central place to review downloadable admission documents, eligibility snapshots, and the information applicants typically need before applying."
      chips={[
        { label: 'Includes', value: 'Prospectus + Forms' },
        { label: 'Useful For', value: 'New Applicants' },
        { label: 'Programs', value: 'BBA, MBA, BCA' },
        { label: 'Support', value: 'Scholarships + Fees' },
      ]}
      primaryAction={{ href: '/docs/application-form.pdf', label: 'Open General Prospectus' }}
      secondaryAction={{ href: '/contact', label: 'Contact Admissions' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Admission toolkit
          </p>
          <p className="text-xl font-semibold leading-relaxed text-white">
            Review the right document first so application, eligibility, and fee details are easy
            to track.
          </p>
          <p className="text-sm leading-7 text-blue-100">
            The prospectus gives applicants a compact view of the institution, programs, facilities,
            and admission requirements.
          </p>
        </div>
      }
    >
      <PageSection eyebrow="Downloads" title="Core documents for applicants.">
        <DocumentGrid items={documents} />
      </PageSection>

      <PageSection eyebrow="Inside the Prospectus" title="What the document helps you review.">
        <AccentList items={prospectusContents} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Eligibility at a glance" tone="blue">
          <p><strong>BBA:</strong> 12th pass with minimum 45% aggregate (40% for SC/ST)</p>
          <p><strong>MBA:</strong> Bachelor&apos;s degree with minimum 50% aggregate (45% for SC/ST)</p>
          <p><strong>BCA:</strong> 12th pass with Mathematics and minimum 45% aggregate</p>
        </Callout>
        <Callout title="Fee structure and scholarships" tone="green">
          Detailed tuition, examination, hostel, and miscellaneous fee information is provided in
          the prospectus, along with merit-based and need-based support options.
        </Callout>
        <Callout title="Need help?" tone="slate">
          <p><strong>Email:</strong> admissions@shivomcollege.in</p>
          <p><strong>Phone:</strong> +91 8901459200</p>
          <p><strong>Office Hours:</strong> Monday to Saturday, 9 AM to 5 PM</p>
        </Callout>
      </div>
    </PageShell>
  );
}
