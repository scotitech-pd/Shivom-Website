'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    dropdown: [
      { label: "Chairman's Message", href: '/about/chairman' },
      { label: "Director's Message", href: '/about/director' },
      { label: "Principal's Message", href: '/about/principal' },
    ],
  },
  {
    label: 'Courses',
    dropdown: [
      { label: 'BBA', href: '/courses/bba' },
      { label: 'MBA', href: '/courses/mba' },
      { label: 'BCA', href: '/courses/bca' },
    ],
  },
  {
    label: 'Admission',
    dropdown: [
      { label: 'Key Dates', href: '/admission/key-dates' },
      { label: 'Prospectus', href: '/admission/prospectus' },
    ],
  },
  {
    label: 'Facilities',
    dropdown: [
      { label: 'Library', href: '/facilities/library' },
      { label: 'Hostel', href: '/facilities/hostel' },
      { label: 'Computer Lab', href: '/facilities/computer-lab' },
      { label: 'Communication Lab', href: '/facilities/communication-lab' },
    ],
  },
  {
    label: 'Mandatory Disclosure',
    dropdown: [
      { label: 'Affiliation Letter', href: '/disclosure/affiliation' },
      { label: 'AICTE Approval Letter', href: '/disclosure/aicte' },
      { label: 'University Letter', href: '/disclosure/university' },
    ],
  },
  {
    label: 'Research',
    dropdown: [
      { label: 'Conferences', href: '/research/conferences' },
      { label: 'Seminars', href: '/research/seminars' },
          { label: 'Invited Lectures', href: '/research/lectures' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logos/WhatsApp-Image-2025-04-05-at-1.57.23-PM.jpeg"
              alt="Shivom MBA College logo"
              width={192}
              height={192}
              className="h-20 w-20 object-contain md:h-28 md:w-28"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-200 flex items-center gap-1">
                  <Link href={item.href || '#'}>{item.label}</Link>
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 py-2">
                    {item.dropdown.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition duration-150"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none transition duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-200 flex justify-between items-center"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="bg-blue-700">
                        {item.dropdown.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block text-white px-6 py-2 text-sm hover:bg-blue-600 transition duration-150"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
