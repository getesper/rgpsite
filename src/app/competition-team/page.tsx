'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Menu, X, Trophy, Target, Medal, Zap, Star, Award } from 'lucide-react';
import { useState } from 'react';

export default function CompetitionTeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header - simplified */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <img
                src="http://renzograciepearland.com/wp-content/uploads/2024/01/RGPLOGO1.jpg"
                alt="Renzo Gracie Pearland"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Subheader Navigation */}
      <nav className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <Link href="/brazilian-jiu-jitsu" className="whitespace-nowrap hover:text-blue-300">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="whitespace-nowrap hover:text-blue-300">Youth Program</Link>
            <Link href="/mma-training" className="whitespace-nowrap hover:text-blue-300">MMA Training</Link>
            <Link href="/adult-program" className="whitespace-nowrap hover:text-blue-300">Adult Program</Link>
            <Link href="/fundamentals" className="whitespace-nowrap hover:text-blue-300">Fundamentals</Link>
            <Link href="/competition-team" className="whitespace-nowrap text-blue-300 font-semibold">Competition Team</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Competition Team</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Elite training for competitors ready to test their skills
          </p>
          <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold">
            Join the Team
          </Link>
        </div>
      </section>

      {/* About Competition Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Train Like a Champion</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Competition Team is designed for dedicated practitioners who want to take their Brazilian Jiu-Jitsu to the next level. Train with elite athletes, learn advanced techniques, and prepare for local, national, and international competitions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Led by UFC veterans and accomplished competitors, our team provides the highest level of instruction and training environment to help you achieve your competition goals.
              </p>
            </div>
            <div>
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg"
                alt="Competition Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Elite Training Focus</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Techniques</h3>
              <p className="text-gray-600">Cutting-edge strategies and high-level positions</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competition Preparation</h3>
              <p className="text-gray-600">Tournament strategy and mental preparation</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elite Sparring</h3>
              <p className="text-gray-600">High-intensity training with skilled partners</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Medal className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Game Planning</h3>
              <p className="text-gray-600">Develop your personal competition style</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Training</h3>
              <p className="text-gray-600">Psychology and mindset for competition</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Support</h3>
              <p className="text-gray-600">Corner coaching and team unity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Team Requirements</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Trophy className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Minimum Experience</h4>
                    <p className="text-gray-600">Blue belt or equivalent experience in BJJ</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Training Commitment</h4>
                    <p className="text-gray-600">Minimum 4 training sessions per week</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Medal className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Competition Participation</h4>
                    <p className="text-gray-600">Commit to competing at least 2-3 times per year</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Mentality</h4>
                    <p className="text-gray-600">Support teammates and represent RGP with honor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Competition Team Schedule</h2>
          </div>

          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Monday & Wednesday</span>
                <span className="text-yellow-600 font-semibold">8:00 PM - 9:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Friday</span>
                <span className="text-yellow-600 font-semibold">7:00 PM - 8:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium">Saturday</span>
                <span className="text-yellow-600 font-semibold">3:00 PM - 4:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium">Sunday (Competition Prep)</span>
                <span className="text-yellow-600 font-semibold">2:00 PM - 4:00 PM</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/book" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold">
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-xl mb-8">
            Take your Brazilian Jiu-Jitsu to the next level and join our elite competition team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Apply Now
            </Link>
            <a href="tel:+18324589839" className="border-2 border-white hover:bg-white hover:text-yellow-600 text-white px-8 py-3 rounded-lg font-semibold">
              Call (832) 458-9839
            </a>
          </div>
        </div>
      </section>

      {/* Footer - simplified */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
