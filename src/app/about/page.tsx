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

      {/* Hero Section */}
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

      {/* ...the rest of your page continues unchanged... */}
    </div>
  );
}
