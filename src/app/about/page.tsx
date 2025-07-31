'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link href="/about" className="text-blue-600 font-medium">ABOUT US</Link>
              <Link href="/team" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
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
              <Link href="/about" className="block text-blue-600 font-medium">ABOUT US</Link>
              <Link href="/team" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">CLASS SCHEDULE</Link>
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

      {/* Hero Section */>
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://ext.same-assets.com/2040022501/2089230064.jpeg)'
      }}>
        <div className="absolute inset-0 overlay-gradient"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            <span className="text-blue-400">ABOUT</span>
            <br />
            <span className="text-white">RENZO GRACIE PEARLAND</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              Renzo Gracie Pearland is a proud affiliate of the renowned Renzo Gracie Academy, established in 1996,
              continuing the legacy as one of the world's leading schools in martial arts. Located in Pearland, Texas,
              we provide world-class Brazilian Jiu-Jitsu training with authentic techniques passed down through the Gracie lineage.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Our academy is built on the foundation of respect, discipline, and family values that Master Renzo Gracie embodies.
              We believe in building champions both on and off the mats. Whether you're a complete beginner or an experienced practitioner,
              our doors are open to anyone ready to transform their life through Brazilian Jiu-Jitsu.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-12">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Renzo Gracie Pearland, we practice and teach with humility, respect, and dedication to the Gracie tradition.
                  Our ego-free environment allows students to learn and grow without fear of judgment. We emphasize technique over strength,
                  strategy over aggression, and personal growth through the art of Brazilian Jiu-Jitsu.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  More than just a gym, Renzo Gracie Pearland is a family. Our members support each other both on and off the mats.
                  We celebrate victories together, learn from challenges, and create lasting friendships. Our community extends beyond
                  the academy walls, making positive impacts throughout the Houston area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission & Values</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">EXCELLENCE</h3>
              <p className="text-gray-900">
                We strive for excellence in everything we do, following the Renzo Gracie tradition of world-class training.
                We never settle for "good enough."
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">RESPECT</h3>
              <p className="text-gray-900">
                Respect for our instructors, training partners, and the art of Brazilian Jiu-Jitsu forms the foundation of everything
                we do at Renzo Gracie Pearland.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">GROWTH</h3>
              <p className="text-gray-900">
                We believe in continuous growth – not just in martial arts skills, but in character, confidence,
                and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Meet Our Instructors</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our world-class instructors bring decades of combined experience and a passion for teaching that creates
              an unparalleled learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg"
                alt="Professor Joe Murphy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Professor Joe Murphy</h3>
                <p className="text-blue-600 mb-3">Head Instructor & UFC Veteran</p>
                <p className="text-gray-600 text-sm">
                  With extensive UFC experience and decades of Brazilian Jiu-Jitsu expertise, Professor Joe brings world-class instruction and technical mastery to every class.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg"
                alt="Professor Lauren Murphy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Professor Lauren Murphy</h3>
                <p className="text-blue-600 mb-3">UFC Veteran & Women's Program Director</p>
                <p className="text-gray-600 text-sm">
                  Former UFC fighter and accomplished Brazilian Jiu-Jitsu practitioner, Professor Lauren leads our women's self-defense and empowerment programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg"
                alt="Professor Ben Poppelaars"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Professor Ben Poppelaars</h3>
                <p className="text-blue-600 mb-3">Youth Program Director & Muay Thai Specialist</p>
                <p className="text-gray-600 text-sm">
                  Specializing in youth development and Muay Thai, Professor Ben creates engaging classes that build confidence, discipline, and technical skills in students of all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 section-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Affiliations</h2>

          <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/Renzopearland-white-logo.png"
                alt="Renzo Gracie Academy"
                className="h-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-blue-400 mb-4">Renzo Gracie Academy</h3>
              <p className="text-gray-300">
                Renzo Gracie Pearland is a proud affiliate of the renowned Renzo Gracie Academy, established in 1996, continuing the legacy as one of the world's leading schools in martial arts. We provide authentic Brazilian Jiu-Jitsu instruction under the legendary Renzo Gracie lineage, ensuring our students receive world-class training and techniques.
              </p>
            </div>
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
