import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const hardware = [
  { title: 'High-performance systems', description: 'Modern desktop systems configured for programming, development, and computing-heavy coursework.' },
  { title: 'Servers', description: 'Dedicated database and application servers used for practice, deployment, and learning.' },
  { title: 'Networking equipment', description: 'Switches, routers, and lab networking hardware for systems and security training.' },
  { title: 'Peripherals', description: 'Printers and supporting devices required for project and lab work.' },
];

const software = [
  { title: 'Programming', description: 'Java, Python, C++, C#, JavaScript' },
  { title: 'Databases', description: 'MySQL, Oracle, SQL Server, MongoDB' },
  { title: 'Web technologies', description: 'HTML, CSS, React, Angular, Node.js' },
  { title: 'Development tools', description: 'VS Code, Eclipse, Visual Studio, Git' },
  { title: 'Cloud platforms', description: 'AWS, Microsoft Azure' },
  { title: 'Security tools', description: 'Wireshark, Metasploit, Burp Suite' },
];

const labFacilities = [
  'Air-conditioned environment for comfortable learning',
  'High-speed internet connectivity',
  'UPS and power backup for uninterrupted operation',
  'Extended access for practice and project work',
  'Trained lab technicians for technical support',
  'Regular maintenance and software updates',
];

export default function ComputerLabPage() {
  return (
    <PageShell
      section="Facilities"
      title="Computer Laboratory"
      description="A practical computing environment where students work with modern systems, development tools, and technical infrastructure that supports programming, software, and digital systems education."
      chips={[
        { label: 'Use Case', value: 'Hands-on learning' },
        { label: 'Systems', value: '100+ workstations' },
        { label: 'Coverage', value: 'Software to Security' },
        { label: 'Access', value: 'Project-friendly' },
      ]}
      heroImage={{ src: '/media/8.jpg', alt: 'Shivom Computer Laboratory' }}
      primaryAction={{ href: '/courses/bca', label: 'See BCA Program' }}
      secondaryAction={{ href: '/contact', label: 'Ask About Lab Access' }}
    >
      <PageSection eyebrow="Infrastructure" title="Built to support practical technical education.">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            Shivom&apos;s computer laboratories are equipped with modern systems and software that
            support hands-on learning in programming, software development, databases, networking,
            and digital tools.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Hardware" title="Core technical infrastructure.">
        <AccentList items={hardware} columns={2} />
      </PageSection>

      <PageSection eyebrow="Software Stack" title="Technologies students work with in the lab.">
        <AccentList items={software} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <PageSection eyebrow="Learning Environment" title="Facilities that make practice easier.">
          <Checklist items={labFacilities} columns={1} />
        </PageSection>
        <PageSection eyebrow="Practical Work" title="What students typically do in the lab.">
          <Checklist
            items={[
              'Programming and data structures',
              'Database design and management',
              'Web application development',
              'Software testing and quality assurance',
              'Network administration and security',
              'Cloud computing and deployment',
            ]}
            columns={1}
          />
        </PageSection>
      </div>

      <Callout title="Lab access policy" tone="green">
        All students receive individual access credentials and can use the labs during scheduled
        hours as well as designated self-study and project periods. Detailed schedules are managed
        by the department.
      </Callout>
    </PageShell>
  );
}
