import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const accommodation = [
  {
    title: 'Single room',
    description: 'Private rooms with attached bathroom for students who prefer focused, independent study space.',
  },
  {
    title: 'Double occupancy',
    description: 'Shared rooms for two students that balance comfort, affordability, and peer interaction.',
  },
  {
    title: 'Triple occupancy',
    description: 'A cost-conscious residential option that still supports community living and routine discipline.',
  },
];

const roomAmenities = [
  'Furnished beds and study tables',
  'Attached bathroom with hot water',
  '24/7 power backup support',
  'High-speed WiFi connectivity',
  'Air conditioning in designated rooms',
  'Cupboards and personal storage space',
];

export default function HostelPage() {
  return (
    <PageShell
      section="Facilities"
      title="Hostel"
      description="On-campus accommodation designed to give students a safe, comfortable, and community-oriented living environment that supports academic focus."
      chips={[
        { label: 'Living Style', value: 'On-campus' },
        { label: 'Options', value: 'Single to Triple' },
        { label: 'Support', value: 'Meals + Security' },
        { label: 'Best For', value: 'Outstation students' },
      ]}
      heroImage={{ src: '/media/2.jpg', alt: 'Shivom College Hostel' }}
      primaryAction={{ href: '/contact', label: 'Ask About Hostel Availability' }}
      secondaryAction={{ href: '/admission/prospectus', label: 'Review Admission Details' }}
    >
      <PageSection eyebrow="Overview" title="Residential life that balances comfort and discipline.">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Shivom College provides well-maintained hostel facilities for outstation students
            looking for comfortable accommodation close to campus.
          </p>
          <p>
            The hostels are designed to create a home-like environment that encourages routine,
            community living, and academic concentration.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Accommodation" title="Room options that fit different student needs.">
        <AccentList items={accommodation} />
      </PageSection>

      <PageSection eyebrow="Amenities" title="What students can expect in the residence experience.">
        <Checklist items={roomAmenities} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <Callout title="Common facilities" tone="blue">
          Dining hall, recreation area, indoor sports support, in-house laundry, first-aid access,
          and 24/7 security with CCTV monitoring.
        </Callout>
        <Callout title="Rules and regulations" tone="amber">
          Hostels operate under clear discipline guidelines so students can maintain a peaceful,
          secure, and productive living environment.
        </Callout>
        <Callout title="Fee structure" tone="slate">
          Hostel fees vary by room type and facility level. Detailed information is available
          through the prospectus and admission office.
        </Callout>
      </div>
    </PageShell>
  );
}
