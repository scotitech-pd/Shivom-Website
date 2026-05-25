import {
  AccentList,
  Callout,
  Checklist,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const competencies = [
  'Programming foundations across Java, Python, C++, and modern web technologies',
  'Database management, SQL workflows, and application data handling',
  'Web development with practical frontend and backend implementation',
  'Software engineering methods, project structure, and delivery discipline',
  'Data structures, algorithms, and analytical problem solving',
  'Exposure to emerging areas such as AI, cloud computing, and cybersecurity',
];

const tracks = [
  { title: 'Web Development', description: 'Build responsive interfaces, applications, and web-based products.' },
  { title: 'Mobile App Development', description: 'Understand app workflows, product interaction, and platform-focused delivery.' },
  { title: 'Data Analytics', description: 'Use data tools and reporting logic to support insight and decision-making.' },
  { title: 'Cloud Computing', description: 'Learn scalable infrastructure concepts and deployment workflows.' },
  { title: 'Cybersecurity', description: 'Study security fundamentals, network protection, and secure systems thinking.' },
  { title: 'AI & Machine Learning', description: 'Explore intelligent systems, automation, and data-driven computation.' },
];

export default function BCAPage() {
  return (
    <PageShell
      section="Programs"
      title="Bachelor of Computer Applications (BCA)"
      description="A technology-oriented undergraduate program for students who want a practical foundation in software, systems, web technologies, and emerging digital tools."
      chips={[
        { label: 'Duration', value: '3 Years' },
        { label: 'Mode', value: 'Full-time' },
        { label: 'Orientation', value: 'Practical + Technical' },
        { label: 'Pathway', value: 'IT Careers' },
      ]}
      heroImage={{ src: '/media/bca-hero.jpg', alt: 'BCA program at Shivom' }}
      primaryAction={{ href: '/admission/key-dates', label: 'Apply for BCA' }}
      secondaryAction={{ href: '/facilities/computer-lab', label: 'See Lab Infrastructure' }}
    >
      <PageSection
        eyebrow="Program Overview"
        title="A solid launchpad for software and IT careers."
      >
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            The Bachelor of Computer Applications at Shivom is designed for students aiming to
            build strong careers in information technology and computer applications.
          </p>
          <p>
            The curriculum covers programming, database management, web development, computer
            networks, software engineering, and fast-moving areas such as cloud computing,
            artificial intelligence, and cybersecurity.
          </p>
          <p>
            The program combines classroom learning with project work, internships, coding
            workshops, and industry interaction so students graduate technically prepared and
            professionally aware.
          </p>
        </div>
      </PageSection>

      <PageSection eyebrow="Core Competencies" title="What students are expected to build well.">
        <Checklist items={competencies} columns={2} />
      </PageSection>

      <PageSection eyebrow="Tracks" title="Specialization directions within the program.">
        <AccentList items={tracks} columns={2} />
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <Callout title="Laboratory ecosystem" tone="blue">
          Students work with development environments, database systems, cloud platforms, and
          cybersecurity tools in modern computer lab settings that support regular practice and
          project work.
        </Callout>
        <Callout title="Career outcomes" tone="green">
          BCA graduates can move into software development, web development, database
          administration, systems support, IT consulting, and broader digital technology roles.
        </Callout>
      </div>
    </PageShell>
  );
}
