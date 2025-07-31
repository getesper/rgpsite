'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X, Shield, Users, Trophy, Clock, MapPin, Mail, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';

export default function BrazilianJiuJitsuPage() {
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
                  src="http://renzograciepearland.com/wp-content/uploads/2024/01/RGPLOGO1.jpg"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer hover-scale"
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
                <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-700 hover-scale" />
                </a>
                <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-pink-600 cursor-pointer hover:text-pink-700 hover-scale" />
                </a>
                <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-500 hover-scale" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-900 hover-scale"
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
              <Link href="/book" className="block py-2 text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="block py-2 text-gray-900 hover:text-blue-600">MEMBER LOGIN</Link>
              <a href="#contact" className="block py-2 text-gray-900 hover:text-blue-600">CONTACT</a>
            </div>
          </div>
        )}
      </header>

      {/* Subheader Navigation */}
      <nav className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <Link href="/brazilian-jiu-jitsu" className="whitespace-nowrap text-blue-300 font-semibold">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Youth Program</Link>
            <Link href="/mma-training" className="whitespace-nowrap hover:text-blue-300 transition-colors">MMA Training</Link>
            <Link href="/adult-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap hover:text-blue-300 transition-colors">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap hover:text-blue-300 transition-colors">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Brazilian Jiu-Jitsu</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Learn the gentle art under the legendary Renzo Gracie lineage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </Link>
            <Link href="#about-bjj" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About BJJ Section */}
      <section id="about-bjj" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Gentle Art</h2>
              <p className="text-lg text-gray-600 mb-6">
                Brazilian Jiu-Jitsu is a martial art, self-defense system, and combat sport that teaches you to overcome bigger, stronger opponents through technique, leverage, and timing rather than strength and size.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Renzo Gracie Pearland, we teach authentic Brazilian Jiu-Jitsu under the legendary Renzo Gracie lineage, ensuring you receive world-class instruction and techniques that have been proven in both sport and self-defense scenarios.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Active Students</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg"
                alt="Brazilian Jiu-Jitsu Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Brazilian Jiu-Jitsu?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Self-Defense</h3>
              <p className="text-gray-600">Learn proven techniques for real-world self-defense situations</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Discipline</h3>
              <p className="text-gray-600">Develop focus, problem-solving skills, and mental resilience</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Fitness</h3>
              <p className="text-gray-600">Full-body workout improving strength, cardio, and flexibility</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">Join a supportive family of like-minded practitioners</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven System</h3>
              <p className="text-gray-600">Time-tested techniques from the legendary Gracie family</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competition Ready</h3>
              <p className="text-gray-600">Train for sport competition or personal achievement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Class Formats</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gi Classes</h3>
              <p className="text-gray-600 mb-4">
                Traditional Brazilian Jiu-Jitsu training in the kimono (gi). Focus on grips, collar chokes, and traditional techniques that made BJJ famous.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Monday, Wednesday, Friday: 6:00 AM, 6:30 PM</li>
                <li>• Tuesday, Thursday: 12:00 PM, 7:30 PM</li>
                <li>• Saturday: 12:00 PM</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">No-Gi Classes</h3>
              <p className="text-gray-600 mb-4">
                Modern grappling without the gi, focusing on wrestling-style takedowns, leg locks, and submission grappling techniques.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Tuesday, Thursday: 12:00 PM, 6:30 PM</li>
                <li>• Saturday: 1:00 PM</li>
                <li>• Open Mat: Sunday 11:00 AM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn from the Best</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg"
                alt="Professor Joe Murphy"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Professor Joe Murphy</h3>
              <p className="text-blue-200 mb-4">Head Instructor & UFC Veteran</p>
              <p className="text-gray-300 mb-6">
                With extensive UFC experience and decades of Brazilian Jiu-Jitsu expertise, Professor Joe brings world-class instruction and technical mastery to every class. Train under a proven competitor who has tested these techniques at the highest levels.
              </p>
              <Link href="/team" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Brazilian Jiu-Jitsu Journey</h2>
          <p className="text-xl mb-8">
            Join the Renzo Gracie Pearland family and experience the life-changing power of Brazilian Jiu-Jitsu. Free trial class available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Trial
            </Link>
            <a href="tel:+18324589839" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call (832) 458-9839
            </a>
          </div>
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
