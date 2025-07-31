'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X, Clock, Users, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Schedule() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scheduleData = [
    {
      day: 'Monday',
      classes: [
        { time: '6:00 AM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '12:00 PM', program: 'Muay Thai', level: 'Beginner', instructor: 'Professor Ben Poppelaars' },
        { time: '5:30 PM', program: 'Youth BJJ', level: 'Ages 4-12', instructor: 'Professor Ben Poppelaars' },
        { time: '6:30 PM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '7:30 PM', program: 'Muay Thai', level: 'Advanced', instructor: 'Professor Ben Poppelaars' },
        { time: '8:00 PM', program: 'MMA Training', level: 'Advanced', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '12:00 PM', program: 'Brazilian Jiu-Jitsu', level: 'No-Gi', instructor: 'Professor Ki Martin' },
        { time: '5:30 PM', program: 'Kids Martial Arts', level: 'Ages 8-12', instructor: 'Professor Ben Poppelaars' },
        { time: '6:30 PM', program: 'Brazilian Jiu-Jitsu', level: 'Fundamentals', instructor: 'Professor Ki Martin' },
        { time: '7:30 PM', program: 'Muay Thai', level: 'All Levels', instructor: 'Professor Ben Poppelaars' },
        { time: '7:30 PM', program: 'MMA Training', level: 'Fundamentals', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '6:00 AM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '12:00 PM', program: 'Muay Thai', level: 'Technique', instructor: 'Professor Ben Poppelaars' },
        { time: '5:30 PM', program: 'Youth BJJ', level: 'Ages 4-12', instructor: 'Professor Ben Poppelaars' },
        { time: '6:30 PM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '7:30 PM', program: 'Teen Program', level: 'Ages 13-16', instructor: 'Professor Ki Martin' },
        { time: '8:00 PM', program: 'Competition Team', level: 'Advanced', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '12:00 PM', program: 'Brazilian Jiu-Jitsu', level: 'No-Gi', instructor: 'Professor Ki Martin' },
        { time: '5:30 PM', program: 'Kids Martial Arts', level: 'Ages 8-12', instructor: 'Professor Ben Poppelaars' },
        { time: '6:30 PM', program: 'Brazilian Jiu-Jitsu', level: 'Competition', instructor: 'Professor Joe Murphy' },
        { time: '7:30 PM', program: 'MMA Training', level: 'Advanced', instructor: 'Professor Joe Murphy' },
        { time: '7:30 PM', program: 'MMA Training', level: 'Fundamentals', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '6:00 AM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '12:00 PM', program: 'Open Mat', level: 'All Levels', instructor: 'Supervised Training' },
        { time: '6:00 PM', program: "Women's Self Defense", level: 'FREE CLASS', instructor: 'Professor Lauren Murphy' },
        { time: '7:00 PM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Lauren Murphy' },
        { time: '7:00 PM', program: 'Competition Team', level: 'Advanced', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Saturday',
      classes: [
        { time: '10:00 AM', program: 'Kids Martial Arts', level: 'Ages 4-8', instructor: 'Professor Ben Poppelaars' },
        { time: '11:00 AM', program: 'Teen Program', level: 'Ages 9-12', instructor: 'Professor Ki Martin' },
        { time: '12:00 PM', program: 'Brazilian Jiu-Jitsu', level: 'All Levels', instructor: 'Professor Joe Murphy' },
        { time: '1:00 PM', program: 'Open Mat', level: 'All Levels', instructor: 'Supervised Training' },
        { time: '2:00 PM', program: 'MMA Training', level: 'Fundamentals', instructor: 'Professor Joe Murphy' },
        { time: '3:00 PM', program: 'Competition Team', level: 'Advanced', instructor: 'Professor Joe Murphy' },
      ]
    },
    {
      day: 'Sunday',
      classes: [
        { time: '11:00 AM', program: 'Open Mat', level: 'All Levels', instructor: 'Supervised Training' },
        { time: '12:00 PM', program: 'Brazilian Jiu-Jitsu', level: 'Fundamentals', instructor: 'Professor Ki Martin' },
        { time: '2:00 PM', program: 'Competition Team', level: 'Competition Prep', instructor: 'Professor Joe Murphy' },
      ]
    }
  ];

  const getProgramColor = (program: string) => {
    switch (program.toLowerCase()) {
      case 'brazilian jiu-jitsu':
        return 'bg-blue-600 text-white';
      case 'muay thai':
        return 'bg-red-600 text-white';
      case 'youth bjj':
        return 'bg-green-600 text-white';
      case 'kids martial arts':
        return 'bg-purple-600 text-white';
      case 'teen program':
        return 'bg-orange-600 text-white';
      case "women's self defense":
        return 'bg-pink-600 text-white';
      case 'open mat':
        return 'bg-gray-600 text-white';
      case 'competition team':
        return 'bg-yellow-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="https://518stores.com/cdn/shop/collections/renzo_pnatherlogo_blank_1600x.png?v=1596651391"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">HOME</Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/team" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="text-blue-600 font-medium">SCHEDULE</Link>
              <Link href="/gallery" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/book" className="text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">MEMBER LOGIN</Link>
            </nav>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="tel:+18324589839" aria-label="Phone" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <nav className="py-4 space-y-4 border-t border-gray-200">
              <Link href="/" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">HOME</Link>
              <Link href="/about" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/team" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="block text-blue-600 font-medium">CLASS SCHEDULE</Link>
              <Link href="/gallery" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/#contact" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">CONTACT</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Subheader Navigation */}
      <nav className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <Link href="/brazilian-jiu-jitsu" className="whitespace-nowrap hover:text-blue-300 transition-colors">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Youth Program</Link>
            <Link href="/mma-training" className="whitespace-nowrap hover:text-blue-300 transition-colors">MMA Training</Link>
            <Link href="/adult-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap hover:text-blue-300 transition-colors">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap hover:text-blue-300 transition-colors">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://ext.same-assets.com/2040022501/2089230064.jpeg)'
      }}>
        <div className="absolute inset-0 overlay-gradient"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            <span className="text-blue-400">CLASS</span>
            <br />
            <span className="text-white">SCHEDULE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Find the perfect class for your schedule and skill level
          </p>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Weekly Schedule</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer classes throughout the week to accommodate busy schedules. All skill levels are welcome,
              from complete beginners to advanced practitioners.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="space-y-8">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                  {day.day}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.classes.map((classItem, classIndex) => (
                    <div key={classIndex} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {classItem.time}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getProgramColor(classItem.program)}`}>
                          {classItem.program}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {classItem.level}
                        </div>
                        <div className="text-sm text-gray-800 font-medium">
                          Instructor: {classItem.instructor}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Important Information</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">What to Bring</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Water bottle</li>
                <li>• Comfortable athletic wear</li>
                <li>• Gi (for Brazilian Jiu-Jitsu) - available for purchase</li>
                <li>• Gloves (for Muay Thai) - available for rental</li>
                <li>• Positive attitude and willingness to learn</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Class Guidelines</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Arrive 10 minutes early for warm-up</li>
                <li>• All experience levels welcome</li>
                <li>• Private lessons available by appointment</li>
                <li>• Trial classes available for new students</li>
                <li>• Women's Self Defense is FREE every Friday</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/#contact">
              <button className="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                BOOK YOUR TRIAL CLASS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to schedule your trial class or ask any questions about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18324589839" className="bg-white text-blue-600 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors">
              Call (832) 458-9839
            </a>
            <Link href="/#contact">
              <button className="btn-outline text-white border-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Contact Form
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Brazilian Jiu-Jitsu</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Muay Thai</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Kids Programs</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Women's Self Defense</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">Class Schedule</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>2000 Reflection Bay Dr Suite 164</p>
                <p>Pearland, TX 77584</p>
                <p>Phone: <a href="tel:+18324589839" className="hover:text-white transition-colors cursor-pointer">(832) 458-9839</a></p>
                <p>Email: <a href="mailto:renzograciepearland@gmail.com" className="hover:text-white transition-colors cursor-pointer">renzograciepearland@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
              <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
              <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              Copyright 2025. Renzo Gracie Academy Pearland. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
