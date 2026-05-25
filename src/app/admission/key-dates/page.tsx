import {
  Callout,
  PageSection,
  PageShell,
  Timeline,
} from '@/components/page-shell';

const bbaTimeline = [
  { label: 'June 1, 2024', title: 'Application Portal Opens' },
  { label: 'August 15, 2024', title: 'Last Date for Application Submission' },
  { label: 'August 20, 2024', title: 'Merit List Declaration' },
  { label: 'August 25-27, 2024', title: 'Counselling Session' },
  { label: 'September 1, 2024', title: 'Classes Begin' },
];

const mbaTimeline = [
  { label: 'April 1, 2024', title: 'Application Portal Opens' },
  { label: 'May 31, 2024', title: 'Last Date for Application Submission' },
  { label: 'June 10, 2024', title: 'Entrance Exam / Valid Score Window' },
  { label: 'June 20, 2024', title: 'Shortlist for Interview' },
  { label: 'June 25 - July 5, 2024', title: 'Personal Interview & GD Rounds' },
  { label: 'July 10, 2024', title: 'Final Merit List' },
  { label: 'July 15, 2024', title: 'Classes Begin' },
];

const bcaTimeline = [
  { label: 'July 1, 2024', title: 'Application Portal Opens' },
  { label: 'September 10, 2024', title: 'Last Date for Application Submission' },
  { label: 'September 15, 2024', title: 'Entrance Test (if applicable)' },
  { label: 'September 20, 2024', title: 'Merit List Declaration' },
  { label: 'September 22-24, 2024', title: 'Counselling' },
  { label: 'October 1, 2024', title: 'Classes Begin' },
];

export default function KeyDatesPage() {
  return (
    <PageShell
      section="Admissions"
      title="Admission Key Dates"
      description="Important milestones for the admission cycle across BBA, MBA, and BCA programs, organized so applicants can track each stage clearly."
      chips={[
        { label: 'Programs', value: 'BBA, MBA, BCA' },
        { label: 'Includes', value: 'Deadlines + Lists' },
        { label: 'Format', value: 'Program-wise timelines' },
        { label: 'Next Step', value: 'Apply on time' },
      ]}
      primaryAction={{ href: '/admission/prospectus', label: 'Download Prospectus' }}
      secondaryAction={{ href: '/contact', label: 'Speak to Admissions' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Admission planning
          </p>
          <p className="text-xl font-semibold leading-relaxed text-white">
            Stay ahead of forms, merit lists, counselling windows, and class commencement dates.
          </p>
          <p className="text-sm leading-7 text-blue-100">
            Applicants should review their program timeline early and keep documents ready to avoid
            missing key deadlines.
          </p>
        </div>
      }
    >
      <div className="grid gap-8 xl:grid-cols-3">
        <PageSection eyebrow="Timeline" title="BBA Program">
          <Timeline items={bbaTimeline} />
        </PageSection>
        <PageSection eyebrow="Timeline" title="MBA Program">
          <Timeline items={mbaTimeline} />
        </PageSection>
        <PageSection eyebrow="Timeline" title="BCA Program">
          <Timeline items={bcaTimeline} />
        </PageSection>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="How to apply" tone="blue">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Visit the admission portal.</li>
            <li>Fill in the application form with complete information.</li>
            <li>Upload required documents and photograph.</li>
            <li>Pay the application fee.</li>
            <li>Submit the application and retain login credentials.</li>
            <li>Track confirmation and updates from the college.</li>
          </ol>
        </Callout>
        <Callout title="Important note" tone="amber">
          Please review the website regularly for updates to dates, schedules, or counselling
          instructions. Applicants will also be informed about major changes through official
          communication channels.
        </Callout>
      </div>
    </PageShell>
  );
}
