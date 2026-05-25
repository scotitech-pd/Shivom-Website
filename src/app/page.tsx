import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Award, Zap, Star, ArrowRight, GraduationCap, Briefcase, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-blue-200">🎓 Excellence in Education</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Shape Your Future with Excellence
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Join Shivom Institute of Management and Technology
              </p>
              <p className="text-blue-200 mb-8">
                UGC Approved • NAAC A+ Accredited • Affiliated to Maharishi Dayanand University, Rohtak
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admission/key-dates"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about/principal"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800/50 transition duration-300"
                >
                  Explore Programs <BookOpen size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-2xl">
                <Image
                  src="/media/Banner2-1.webp"
                  alt="Shivom campus overview"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, label: 'Active Students', value: '1000+' },
              { icon: Users, label: 'Expert Faculty', value: '80+' },
              { icon: Award, label: 'NAAC Rating', value: 'A+' },
              { icon: Briefcase, label: 'Placement Rate', value: '90%+' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-600">Choose from world-class management and technology programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'BBA',
                duration: '3 Years',
                icon: BookOpen,
                description: 'Bachelor of Business Administration with specialized tracks in Finance, Marketing, and Operations',
                image: '/media/bba-hero.jpg',
                link: '/courses/bba'
              },
              {
                title: 'MBA',
                duration: '2 Years',
                icon: Briefcase,
                description: 'Master of Business Administration designed for working professionals and graduates',
                image: '/media/mba-hero.jpg',
                link: '/courses/mba'
              },
              {
                title: 'BCA',
                duration: '3 Years',
                icon: Globe,
                description: 'Bachelor of Computer Applications with cutting-edge technology and software development',
                image: '/media/bca-hero.jpg',
                link: '/courses/bca'
              }
            ].map((program, idx) => (
              <Link href={program.link} key={idx}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer h-full hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">{program.title}</h3>
                      <program.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-sm text-blue-600 font-semibold mb-4">Duration: {program.duration}</p>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Shivom?</h2>
            <p className="text-xl text-gray-600">Experience education excellence with purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Ready Curriculum',
                description: 'Our programs are designed in collaboration with industry experts to ensure students learn relevant, in-demand skills.',
                icon: Zap
              },
              {
                title: 'World-Class Faculty',
                description: 'Learn from experienced educators and industry professionals with proven track records.',
                icon: Users
              },
              {
                title: 'State-of-the-Art Facilities',
                description: 'Access modern labs, libraries, and learning spaces equipped with latest technology.',
                icon: Award
              },
              {
                title: 'Strong Placements',
                description: 'Over 90% placement rate with leading companies across sectors.',
                icon: Briefcase
              },
              {
                title: 'Research & Innovation',
                description: 'Engage in meaningful research projects and innovation initiatives.',
                icon: Globe
              },
              {
                title: 'Global Network',
                description: 'Connect with alumni and partners across the world for career opportunities.',
                icon: Star
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-xl text-gray-600">Explore our modern infrastructure designed for optimal learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Library', image: '/media/1.jpg', link: '/facilities/library' },
              { name: 'Hostel', image: '/media/2.jpg', link: '/facilities/hostel' },
              { name: 'Computer Lab', image: '/media/8.jpg', link: '/facilities/computer-lab' },
              { name: 'Communication Lab', image: '/media/3.jpg', link: '/facilities/communication-lab' }
            ].map((facility, idx) => (
              <Link href={facility.link} key={idx}>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer group">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">{facility.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Placement Partners</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="flex justify-center">
                <div className="relative w-40 h-20">
                  <Image
                    src={`/media/placement-${idx}.png`}
                    alt={`Partner ${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from our successful graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                program: 'MBA',
                company: 'Tech Corp',
                quote: 'Shivom provided me with the skills and network to land my dream job. The faculty guidance was exceptional.'
              },
              {
                name: 'Priya Singh',
                program: 'BBA',
                company: 'Finance Plus',
                quote: 'The practical approach to learning and industry exposure made all the difference in my career.'
              },
              {
                name: 'Amit Kumar',
                program: 'BCA',
                company: 'Software Solutions',
                quote: 'Great infrastructure, supportive faculty, and amazing peer learning community!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.program} | {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of successful graduates and shape your future with Shivom</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admission/prospectus"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition duration-300"
            >
              Download Prospectus
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
