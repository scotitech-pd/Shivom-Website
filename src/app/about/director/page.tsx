import {
  BorderList,
  Callout,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const focusAreas = [
  {
    title: 'Academic excellence',
    description: 'Programs balance theory, professional application, and relevance to current industry expectations.',
  },
  {
    title: 'Mentored student development',
    description: 'Faculty serve as educators and guides, helping students build confidence, discipline, and direction.',
  },
  {
    title: 'Placement readiness',
    description: 'Career preparation is treated as part of the learning journey, not an afterthought at graduation.',
  },
  {
    title: 'Well-rounded growth',
    description: 'Co-curricular activity, research exposure, and community participation shape stronger professionals.',
  },
];

export default function DirectorPage() {
  return (
    <PageShell
      section="Leadership"
      title="Director’s perspective on academic quality and real-world readiness."
      description="Every program at Shivom is expected to do more than deliver coursework. It should prepare students to think clearly, perform professionally, and adapt confidently in industry."
      chips={[
        { label: 'Role', value: 'Academic Direction' },
        { label: 'Priority', value: 'Learning Quality' },
        { label: 'Student Lens', value: 'Career Readiness' },
        { label: 'Culture', value: 'Mentorship-led' },
      ]}
      primaryAction={{ href: '/courses/mba', label: 'Explore Programs' }}
      secondaryAction={{ href: '/research/seminars', label: 'See Academic Exposure' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Director’s note
          </p>
          <p className="text-xl font-semibold leading-relaxed text-white">
            Strong academics matter most when they help students operate effectively in the real
            world.
          </p>
          <p className="text-sm leading-7 text-blue-100">
            That is why our programs emphasize teaching quality, practical engagement, and
            continuous student support from classroom to placement.
          </p>
        </div>
      }
    >
      <PageSection
        eyebrow="Message"
        title="Where excellence in education meets practical application."
      >
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            It is with great pride that I welcome you to Shivom MBA College, where excellence in
            education meets real-world application.
          </p>
          <p>
            As Director, I oversee our institution&apos;s academic programs, ensuring that we maintain
            the highest standards of teaching and learning. Our faculty members are not just
            educators but mentors who guide students through their journey of intellectual and
            personal growth.
          </p>
          <p>
            We believe in a curriculum that balances theoretical knowledge with practical skills.
            Our programs are designed in consultation with industry experts to ensure that our
            graduates are job-ready and capable of addressing real-world challenges.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Core Focus"
        title="How academic direction is translated into student outcomes."
      >
        <BorderList items={focusAreas} columns={2} />
      </PageSection>

      <PageSection
        eyebrow="Student Growth"
        title="A broader view of development beyond the classroom."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Callout title="Holistic development" tone="blue">
            Beyond academics, students are encouraged to participate in co-curricular activities,
            research projects, and community service initiatives that help shape them into
            well-rounded individuals.
          </Callout>
          <Callout title="Placement and alumni network" tone="green">
            Our placement cell works tirelessly to connect graduates with leading organizations, and
            our alumni continue to contribute meaningfully across industries.
          </Callout>
        </div>
      </PageSection>

      <Callout title="Best wishes" tone="slate">
        <p className="font-semibold text-slate-950">Mr. Vikas Rathee</p>
        <p className="text-slate-700">Director, Shivom College of Management and Technology</p>
      </Callout>
    </PageShell>
  );
}
