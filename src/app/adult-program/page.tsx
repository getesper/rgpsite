'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Menu, X, Shield, Users, Trophy, Clock, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export default function AdultProgramPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header - abbreviated for brevity */}
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
            {/* Navigation and other header elements omitted for brevity */}
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
            <Link href="/adult-program" className="whitespace-nowrap text-blue-300 font-semibold">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap hover:text-blue-300 transition-colors">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap hover:text-blue-300 transition-colors">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Adult Program</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive Brazilian Jiu-Jitsu training for adults ages 16+
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Start Training
            </Link>
            <Link href="#program-details" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program-details" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transform Your Life</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Adult Program provides comprehensive Brazilian Jiu-Jitsu training for practitioners ages 16 and up. Whether you're a complete beginner or have previous martial arts experience, our structured curriculum will help you develop technical skills, physical fitness, and mental resilience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Train in a supportive, family-oriented environment where you'll build lasting friendships while mastering one of the world's most effective martial arts.
              </p>
            </div>
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg"
                alt="Adult BJJ Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Adults Love BJJ</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Defense</h3>
              <p className="text-gray-600">Learn practical skills for real-world situations</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Body Fitness</h3>
              <p className="text-gray-600">Burn calories, build strength, and improve flexibility</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Clarity</h3>
              <p className="text-gray-600">Stress relief and improved focus through training</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">Join a supportive family of training partners</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-600">Build confidence and overcome challenges</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Multiple class times to fit your busy lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Adult Class Schedule</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gi Classes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Monday, Wednesday, Friday</span>
                    <span className="text-blue-600">6:30 PM - 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Tuesday, Thursday</span>
                    <span className="text-blue-600">12:00 PM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600">12:00 PM - 1:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No-Gi Classes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Tuesday, Thursday</span>
                    <span className="text-blue-600">6:30 PM - 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600">1:00 PM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Sunday (Open Mat)</span>
                    <span className="text-blue-600">11:00 AM - 12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Book Your Trial Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join hundreds of adults who have transformed their lives through Brazilian Jiu-Jitsu. Try your first class free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Schedule Free Trial
            </Link>
            <a href="tel:+18324589839" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
              Call (832) 458-9839
            </a>
          </div>
        </div>
      </section>

      {/* Footer - abbreviated */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
