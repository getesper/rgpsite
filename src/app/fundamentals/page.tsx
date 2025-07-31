'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Menu, X, Shield, Users, Trophy, Target, Book, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FundamentalsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="http://renzograciepearland.com/wp-content/uploads/2024/01/RGPLOGO1.jpg"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">HOME</Link>
              <Link href="/about" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/team" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/book" className="nav-link text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">MEMBER LOGIN</Link>
              <a href="#contact" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">CONTACT</a>
            </nav>

            {/* Contact Info & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+18324589839" className="text-sm hover:text-blue-600 transition-colors cursor-pointer">(832) 458-9839</a>
              </div>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-pink-600 cursor-pointer hover:text-pink-700" />
                </a>
                <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-500" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-gray-900 hover:text-blue-600">HOME</Link>
              <Link href="/about" className="block py-2 text-gray-900 hover:text-blue-600">ABOUT US</Link>
              <Link href="/team" className="block py-2 text-gray-900 hover:text-blue-600">OUR TEAM</Link>
              <Link href="/schedule" className="block py-2 text-gray-900 hover:text-blue-600">SCHEDULE</Link>
              <Link href="/gallery" className="block py-2 text-gray-900 hover:text-blue-600">GALLERY</Link>
              <Link href="/book" className="block py-2 text-blue-600 font-medium">BOOK NOW</Link>
              <Link href="/members" className="block py-2 text-gray-900 hover:text-blue-600">MEMBER LOGIN</Link>
            </div>
          </div>
        )}
      </header>

      {/* Subheader Navigation */}
      <nav className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <Link href="/brazilian-jiu-jitsu" className="whitespace-nowrap hover:text-blue-300">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="whitespace-nowrap hover:text-blue-300">Youth Program</Link>
            <Link href="/mma-training" className="whitespace-nowrap hover:text-blue-300">MMA Training</Link>
            <Link href="/adult-program" className="whitespace-nowrap hover:text-blue-300">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap text-blue-300 font-semibold">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap hover:text-blue-300">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fundamentals Program</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master the essential principles and core techniques of Brazilian Jiu-Jitsu
          </p>
          <Link href="/book" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
            Start Learning
          </Link>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Build Your Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Fundamentals Program is the ultimate foundation for mastering Brazilian Jiu-Jitsu. Learn essential principles and core techniques that form the backbone of effective grappling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Core Positions</h3>
              <p className="text-gray-600">Guard, mount, side control, and back control</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Submissions</h3>
              <p className="text-gray-600">Armbar, triangle, rear naked choke, and kimura</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Defense</h3>
              <p className="text-gray-600">Practical techniques for real-world situations</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proper Technique</h3>
              <p className="text-gray-600">Focus on precision over strength and speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Structured Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Basic Positions</h4>
                    <p className="text-gray-600">Guard, mount, side control, knee-on-belly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Escapes</h4>
                    <p className="text-gray-600">How to escape from disadvantageous positions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Submissions</h4>
                    <p className="text-gray-600">Joint locks and chokes from various positions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Takedowns</h4>
                    <p className="text-gray-600">Basic throws and trips to take the fight to the ground</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg"
                alt="Fundamentals Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fundamentals Schedule</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Monday & Wednesday</span>
                <span className="text-green-600 font-semibold">6:30 PM - 7:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Tuesday & Thursday</span>
                <span className="text-green-600 font-semibold">6:30 PM - 7:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Saturday</span>
                <span className="text-green-600 font-semibold">12:00 PM - 1:00 PM</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/book" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
                Book Your Trial Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Master the Fundamentals</h2>
          <p className="text-xl mb-8">
            Build a strong foundation in Brazilian Jiu-Jitsu with our comprehensive Fundamentals Program.
          </p>
          <Link href="/book" className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/Renzopearland-white-logo.png"
                alt="Renzo Gracie Pearland"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm">
                Building champions on and off the mats in Pearland, Texas.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link href="/team" className="block text-gray-300 hover:text-white transition-colors">Our Team</Link>
                <Link href="/schedule" className="block text-gray-300 hover:text-white transition-colors">Class Schedule</Link>
                <Link href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <div className="space-y-2 text-sm">
                <Link href="/brazilian-jiu-jitsu" className="block text-gray-300 hover:text-white transition-colors">Brazilian Jiu-Jitsu</Link>
                <Link href="/youth-program" className="block text-gray-300 hover:text-white transition-colors">Youth Program</Link>
                <Link href="/mma-training" className="block text-gray-300 hover:text-white transition-colors">MMA Training</Link>
                <Link href="/adult-program" className="block text-gray-300 hover:text-white transition-colors">Adult Program</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>2000 Reflection Bay Dr Suite 164</p>
                <p>Pearland, TX 77584</p>
                <p>Phone: <a href="tel:+18324589839" className="hover:text-white transition-colors cursor-pointer">(832) 458-9839</a></p>
                <p>Email: <a href="mailto:renzograciepearland@gmail.com" className="hover:text-white transition-colors cursor-pointer">renzograciepearland@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-gray-300 text-sm">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </a>
              <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </a>
            </div>
            <p>&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
