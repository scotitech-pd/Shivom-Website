import {
  AccentList,
  Callout,
  PageSection,
  PageShell,
} from '@/components/page-shell';

const departmentContacts = [
  {
    title: 'Admission Office',
    description: 'For inquiries about programs, eligibility, and application guidance.',
  },
  {
    title: 'Academic Affairs',
    description: 'For curriculum structure, academic process, and student academic matters.',
  },
  {
    title: 'Placement Cell',
    description: 'For recruiter engagement, career support, and placement-related queries.',
  },
  {
    title: 'Administration',
    description: 'For institutional correspondence and general operational matters.',
  },
  {
    title: 'Student Affairs',
    description: 'For hostel, campus life, clubs, and broader student support issues.',
  },
];

export default function ContactPage() {
  return (
    <PageShell
      section="Contact"
      title="Get in touch with Shivom College of Management and Technology."
      description="Whether you are exploring admission, academics, campus facilities, or placement support, the college team can help route your query quickly."
      chips={[
        { label: 'Location', value: 'Nigana, Rohtak' },
        { label: 'Phone', value: '+91 8901459200' },
        { label: 'Email', value: 'info@shivommbacollege.in' },
        { label: 'Hours', value: 'Mon-Sat' },
      ]}
      primaryAction={{ href: 'tel:+918901459200', label: 'Call Admission Desk' }}
      secondaryAction={{ href: 'mailto:info@shivommbacollege.in', label: 'Email the Team' }}
      heroAside={
        <div className="space-y-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-blue-100 uppercase">
            Visit or inquire
          </p>
          <p className="text-xl font-semibold leading-relaxed text-white">
            Students, parents, recruiters, and collaborators can use this page as the primary point
            of contact.
          </p>
          <p className="text-sm leading-7 text-blue-100">
            For the fastest response, choose the right contact stream below or use the form for a
            general inquiry.
          </p>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <PageSection eyebrow="Direct Contact" title="Core contact information.">
          <div className="space-y-6 text-sm leading-7 text-slate-700">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">Address</p>
              <p className="mt-2">
                Shivom College of Management and Technology
                <br />
                V.P.O. Nigana, Rohtak
                <br />
                Haryana, India
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">Phone</p>
              <p className="mt-2"><a href="tel:+918901459200" className="font-semibold text-slate-950 hover:text-blue-800">+91 8901459200</a></p>
              <p><a href="tel:+919255443333" className="font-semibold text-slate-950 hover:text-blue-800">+91 9255443333</a></p>
              <p><a href="https://wa.me/918901459200" className="font-semibold text-slate-950 hover:text-blue-800">WhatsApp: +91 8901459200</a></p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">Email</p>
              <p className="mt-2"><a href="mailto:info@shivommbacollege.in" className="font-semibold text-slate-950 hover:text-blue-800">info@shivommbacollege.in</a></p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">Office Hours</p>
              <p className="mt-2">Monday to Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday & Holidays: Closed</p>
            </div>
          </div>
        </PageSection>

        <PageSection eyebrow="Department Routing" title="Choose the right channel for your query.">
          <AccentList items={departmentContacts} columns={1} />
        </PageSection>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <PageSection eyebrow="Message" title="Send us an inquiry.">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white">
                  <option>Select Subject</option>
                  <option>Admission Inquiry</option>
                  <option>Academic Questions</option>
                  <option>Placement Inquiry</option>
                  <option>General Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                rows={6}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                placeholder="Please enter your message here..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </PageSection>

        <div className="grid gap-6">
          <Callout title="Visit the campus" tone="blue">
            Campus visits are useful for understanding the learning environment, facilities, and
            day-to-day student experience before admission.
          </Callout>
          <Callout title="Quick guidance" tone="green">
            Use the phone line for urgent admission questions, the email address for detailed
            documentation requests, and WhatsApp for quick communication.
          </Callout>
          <Callout title="Response note" tone="slate">
            General queries submitted through the form should include the relevant program or
            department so the team can route them efficiently.
          </Callout>
        </div>
      </div>

      <PageSection eyebrow="Location" title="Find the campus.">
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
          <iframe
            title="Shivom College Location"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sShiv+Om+College+of+Management+and+Technology!5e0!6i10"
            className="h-96 w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </PageSection>
    </PageShell>
  );
}
