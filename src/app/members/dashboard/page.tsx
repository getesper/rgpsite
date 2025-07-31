'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Facebook, Twitter, Instagram, Menu, X, User, Calendar, BookOpen, Trophy, Clock, Users, LogOut, Download, Play, CheckCircle } from 'lucide-react';

export default function MemberDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');

  const memberData = {
    name: 'John Smith',
    belt: 'Blue Belt',
    joinDate: 'January 2023',
    totalClasses: 156,
    nextClass: 'Brazilian Jiu-Jitsu - Advanced',
    nextClassTime: 'Today at 6:30 PM'
  };

  const upcomingClasses = [
    { id: 1, program: 'Brazilian Jiu-Jitsu', level: 'Advanced', date: 'Today', time: '6:30 PM', instructor: 'Master Carlos', enrolled: true },
    { id: 2, program: 'Muay Thai', level: 'All Levels', date: 'Tomorrow', time: '12:00 PM', instructor: 'Coach Mike', enrolled: false },
    { id: 3, program: 'Brazilian Jiu-Jitsu', level: 'Advanced', date: 'Wed', time: '6:30 PM', instructor: 'Master Carlos', enrolled: true },
    { id: 4, program: 'Open Mat', level: 'All Levels', date: 'Sat', time: '10:00 AM', instructor: 'Open Training', enrolled: true },
  ];

  const trainingMaterials = [
    { id: 1, title: 'Fundamental Guard Passes', type: 'video', duration: '45 min', completed: true },
    { id: 2, title: 'Submission Defense Guide', type: 'pdf', pages: 12, completed: true },
    { id: 3, title: 'Advanced Escapes', type: 'video', duration: '32 min', completed: false },
    { id: 4, title: 'Competition Rules 2024', type: 'pdf', pages: 8, completed: false },
    { id: 5, title: 'Muay Thai Combinations', type: 'video', duration: '28 min', completed: false },
  ];

  const achievements = [
    { id: 1, title: 'Perfect Attendance', description: '30 days straight', icon: Calendar, earned: true },
    { id: 2, title: 'Knowledge Seeker', description: 'Completed 10 training videos', icon: BookOpen, earned: true },
    { id: 3, title: 'Tournament Ready', description: 'Completed competition prep', icon: Trophy, earned: false },
    { id: 4, title: 'Team Player', description: 'Helped 5 training partners', icon: Users, earned: false },
  ];

  const handleLogout = () => {
    // In a real app, this would clear authentication state
    // Add confirmation dialog for better UX
    if (window.confirm('Are you sure you want to logout?')) {
      // Clear any stored auth tokens/session data
      localStorage.removeItem('memberAuth');
      sessionStorage.clear();

      // Redirect to login page
      window.location.href = '/members';
    }
  };

  const enrollInClass = (classId: number) => {
    // In a real app, this would make an API call
    const className = upcomingClasses.find(c => c.id === classId)?.program;
    alert(`Successfully enrolled in ${className}! You'll receive a confirmation email shortly.`);
    console.log(`Enrolling in class ${classId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                  className="h-12 w-auto cursor-pointer hover-scale"
                />
              </Link>
            </div>

            {/* Member Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{memberData.name}</p>
                  <p className="text-xs text-gray-500">{memberData.belt}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
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
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {memberData.name}!</h1>
              <p className="text-gray-600 mt-1">Ready for your next training session?</p>
            </div>
            <div className="mt-4 lg:mt-0 grid grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{memberData.totalClasses}</div>
                <div className="text-xs text-gray-500">Total Classes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{memberData.belt}</div>
                <div className="text-xs text-gray-500">Current Rank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-xs text-gray-500">This Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Class Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 animate-fade-in-up animate-delay-200">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-blue-800">Next Class: {memberData.nextClass}</p>
              <p className="text-sm text-blue-600">{memberData.nextClassTime}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'schedule', label: 'Class Schedule', icon: Calendar },
                { id: 'materials', label: 'Training Materials', icon: BookOpen },
                { id: 'achievements', label: 'Achievements', icon: Trophy },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Class Schedule Tab */}
            {activeTab === 'schedule' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Classes</h3>
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover-lift">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{classItem.program}</h4>
                      <p className="text-sm text-gray-500">{classItem.level} • {classItem.instructor}</p>
                      <p className="text-sm text-gray-500">{classItem.date} at {classItem.time}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      {classItem.enrolled ? (
                        <span className="flex items-center space-x-1 text-green-600 text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>Enrolled</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => enrollInClass(classItem.id)}
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors hover-scale"
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Training Materials Tab */}
            {activeTab === 'materials' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Training Materials</h3>
                {trainingMaterials.map((material) => (
                  <div key={material.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover-lift">
                    <div className="flex items-center space-x-3">
                      {material.type === 'video' ? (
                        <Play className="h-5 w-5 text-red-600" />
                      ) : (
                        <Download className="h-5 w-5 text-blue-600" />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900">{material.title}</h4>
                        <p className="text-sm text-gray-500">
                          {material.type === 'video' ? `${material.duration}` : `${material.pages} pages`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {material.completed && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors hover-scale">
                        {material.type === 'video' ? 'Watch' : 'Download'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Achievements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-4 border-2 rounded-lg hover-lift ${
                      achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <achievement.icon className={`h-8 w-8 ${
                          achievement.earned ? 'text-green-600' : 'text-gray-400'
                        }`} />
                        <div>
                          <h4 className={`font-medium ${
                            achievement.earned ? 'text-green-900' : 'text-gray-700'
                          }`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-sm ${
                            achievement.earned ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      {achievement.earned && (
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✓ Earned
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
