import {
  BorderList,
  Callout,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const pillars = [
  {
    title: 'Quality education',
    description: 'Teaching is built around academic rigor, practical relevance, and global-quality standards.',
  },
  {
    title: 'Infrastructure and facilities',
    description: 'Students learn in an environment designed with modern labs, library access, and supportive campus services.',
  },
  {
    title: 'Inclusive student development',
    description: 'We aim to help every student recognize their strengths and build a meaningful professional path.',
  },
  {
    title: 'Responsible citizenship',
    description: 'Professional growth is paired with values, discipline, and a sense of social contribution.',
  },
];

export default function PrincipalPage() {
  return (
    <PageShell
      section="Leadership"
      title="Principal’s message on learning, infrastructure, and student potential."
      description="The principal’s role is to safeguard academic standards while creating an environment where students can grow confidently, discover their strengths, and prepare for meaningful careers."
      chips={[
        { label: 'Academic Lens', value: 'Rigor + Relevance' },
        { label: 'Facilities', value: 'Modern Campus' },
        { label: 'Student Promise', value: 'Personal Growth' },
        { label: 'Community', value: 'Inclusive Learning' },
      ]}
      primaryAction={{ href: '/facilities/library', label: 'Explore Campus Facilities' }}
      secondaryAction={{ href: '/contact', label: 'Connect with Us' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Principal’s promise
          </p>
          <p className="text-xl font-semibold leading-relaxed text-white">
            Students should leave with more than a degree. They should leave with clarity,
            competence, and confidence.
          </p>
          <p className="text-sm leading-7 text-blue-100">
            That requires strong teaching, supportive infrastructure, and a campus culture that
            takes student development seriously.
          </p>
        </div>
      }
    >
      <PageSection
        eyebrow="Message"
        title="Education as the foundation of personal and professional success."
      >
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Welcome to Shivom MBA College, where we believe education is the cornerstone of
            personal and professional success.
          </p>
          <p>
            As Principal, I am committed to maintaining an environment that fosters learning,
            creativity, and personal development. Our institution stands as a beacon of academic
            rigor combined with practical training, preparing students to excel in their chosen
            fields.
          </p>
          <p>
            We are dedicated to providing quality education that meets international standards. Our
            faculty members bring both academic expertise and industry experience to the classroom,
            ensuring that students receive education that is both theoretically sound and
            practically relevant.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What Students Can Expect"
        title="The pillars behind the student experience at Shivom."
      >
        <BorderList items={pillars} columns={2} />
      </PageSection>

      <PageSection
        eyebrow="Our Promise"
        title="A campus designed to help students discover their strengths."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Callout title="Infrastructure that supports growth" tone="blue">
            Shivom provides modern computer labs, a well-stocked library, comfortable hostels, and
            dedicated spaces for communication and research.
          </Callout>
          <Callout title="Inclusive education" tone="green">
            We promise to nurture every student&apos;s potential and guide them toward becoming
            accomplished professionals and responsible citizens from all backgrounds.
          </Callout>
        </div>
      </PageSection>

      <Callout title="With warm regards" tone="slate">
        <p className="font-semibold text-slate-950">Dr. Bharat Bhushan</p>
        <p className="text-slate-700">Principal, Shivom College of Management and Technology</p>
        <p className="mt-2">
          We invite you to become part of the Shivom family and embark on a transformative
          educational journey together.
        </p>
      </Callout>
    </PageShell>
  );
}
