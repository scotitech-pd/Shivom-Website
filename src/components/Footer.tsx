'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.9)] md:grid-cols-[1.25fr_0.8fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-blue-200 uppercase">
              Shivom College of Management and Technology
            </p>
            <h3 className="max-w-md text-2xl font-bold leading-tight text-white">
              Academic ambition, professional preparation, and a campus built for growth.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Approved by UGC, affiliated to Maharishi Dayanand University, Rohtak, and accredited
              with NAAC Grade A+.
            </p>
            <Link
              href="/admission/key-dates"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              View Admission Details
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about/principal', label: 'About Us' },
                { href: '/courses/bba', label: 'Courses' },
                { href: '/facilities/library', label: 'Facilities' },
                { href: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-blue-300" />
                <p>
                  Shivom College of Management and Technology
                  <br />
                  V.P.O. Nigana, Rohtak
                  <br />
                  Haryana, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-blue-300" />
                <a href="tel:+918901459200" className="transition hover:text-white">
                  +91 8901459200
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-blue-300" />
                <a href="mailto:info@shivommbacollege.in" className="transition hover:text-white">
                  info@shivommbacollege.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-slate-400">
              © {currentYear} Shivom MBA College. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/disclosure/affiliation" className="text-slate-400 transition hover:text-white">
                Affiliation
              </Link>
              <Link href="/disclosure/aicte" className="text-slate-400 transition hover:text-white">
                AICTE
              </Link>
              <Link href="/disclosure/university" className="text-slate-400 transition hover:text-white">
                University
              </Link>
              <Link href="#" className="text-slate-400 transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
