'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X, Shield, Users, Trophy, Clock, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export default function MMATrainingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header - same as other pages */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="http://renzograciepearland.com/wp-content/uploads/2024/01/RGPLOGO1.jpg"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer hover-scale"
                />
              </Link>
            </div>

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
            <Link href="/brazilian-jiu-jitsu" className="whitespace-nowrap hover:text-blue-300 transition-colors">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Youth Program</Link>
            <Link href="/mma-training" className="whitespace-nowrap text-blue-300 font-semibold">MMA Training</Link>
            <Link href="/adult-program" className="whitespace-nowrap hover:text-blue-300 transition-colors">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap hover:text-blue-300 transition-colors">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap hover:text-blue-300 transition-colors">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">MMA Training</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Complete mixed martial arts training led by UFC veterans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Training
            </Link>
            <Link href="#mma-details" className="border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About MMA Section */}
      <section id="mma-details" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Elite MMA Training</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our MMA program combines Brazilian Jiu-Jitsu, Muay Thai, wrestling, and boxing to create complete mixed martial artists. Led by UFC veterans Professor Joe Murphy and Professor Lauren Murphy, you'll train with world-class techniques and proven methods.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're looking to compete or simply want the most comprehensive martial arts training available, our MMA program will challenge you physically and mentally while building incredible conditioning and fight skills.
              </p>
            </div>
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg"
                alt="MMA Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete MMA Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brazilian Jiu-Jitsu</h3>
              <p className="text-gray-600">Ground fighting, submissions, and grappling techniques</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Muay Thai</h3>
              <p className="text-gray-600">Striking with fists, elbows, knees, and shins</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wrestling</h3>
              <p className="text-gray-600">Takedowns, takedown defense, and ground control</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boxing</h3>
              <p className="text-gray-600">Punching technique, footwork, and head movement</p>
            </div>
          </div>
        </div>
      </section>

      {/* UFC Veterans Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn from UFC Veterans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg"
                alt="Professor Joe Murphy"
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Professor Joe Murphy</h3>
              <p className="text-red-200 mb-4">UFC Veteran & Head Instructor</p>
              <p className="text-gray-300">
                Extensive UFC experience with proven techniques tested at the highest levels of competition.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg"
                alt="Professor Lauren Murphy"
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Professor Lauren Murphy</h3>
              <p className="text-red-200 mb-4">UFC Veteran & Women's Program Director</p>
              <p className="text-gray-300">
                Former UFC fighter bringing elite-level striking and grappling expertise to every class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">MMA Training Schedule</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">MMA Fundamentals</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Tuesday & Thursday</span>
                    <span className="text-red-600">7:30 PM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-red-600">2:00 PM - 3:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced MMA</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Monday & Wednesday</span>
                    <span className="text-red-600">8:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Friday</span>
                    <span className="text-red-600">6:00 PM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Your Trial Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Train Like a Pro?</h2>
          <p className="text-xl mb-8">
            Join our elite MMA program and train with UFC veterans. Experience world-class instruction and proven techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </a>
              <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer">
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
