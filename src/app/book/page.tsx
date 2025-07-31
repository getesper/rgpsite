'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Facebook, Twitter, Instagram, Menu, X, Calendar, Clock, Users, CheckCircle, CreditCard } from 'lucide-react';

interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  type: string;
}

interface TimeSlot {
  id: number;
  date: string;
  time: string;
  instructor: string;
  available: number;
}

export default function BookingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select Program, 2: Choose Time, 3: Personal Info, 4: Payment, 5: Confirmation
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingForm, setBookingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const programs = [
    {
      id: 'bjj-trial',
      name: 'Brazilian Jiu-Jitsu Trial',
      description: 'Experience the gentle art with our expert instructors',
      duration: '60 minutes',
      price: 'FREE',
      image: 'https://ext.same-assets.com/2040022501/3274982977.jpeg',
      type: 'trial'
    },
    {
      id: 'muay-thai-trial',
      name: 'Muay Thai Trial',
      description: 'Learn the art of eight limbs in a beginner-friendly environment',
      duration: '60 minutes',
      price: 'FREE',
      image: 'https://ext.same-assets.com/2040022501/543519739.jpeg',
      type: 'trial'
    },
    {
      id: 'kids-trial',
      name: 'Kids Martial Arts Trial',
      description: 'Fun and engaging martial arts for children ages 4-12',
      duration: '45 minutes',
      price: 'FREE',
      image: 'https://ext.same-assets.com/2040022501/1538562499.jpeg',
      type: 'trial'
    },
    {
      id: 'unlimited-monthly',
      name: 'Unlimited Monthly Membership',
      description: 'Access to all classes, all month long',
      duration: 'Unlimited',
      price: '$149/month',
      image: 'https://ext.same-assets.com/2040022501/2753247139.jpeg',
      type: 'membership'
    }
  ];

  const timeSlots: Record<string, TimeSlot[]> = {
    'bjj-trial': [
      { id: 1, date: 'Today', time: '6:30 PM', instructor: 'Professor Joe Murphy', available: 8 },
      { id: 2, date: 'Tomorrow', time: '12:00 PM', instructor: 'Professor Ki Martin', available: 5 },
      { id: 3, date: 'Wed', time: '6:30 PM', instructor: 'Professor Joe Murphy', available: 12 },
      { id: 4, date: 'Thu', time: '7:00 AM', instructor: 'Professor Ben Poppelaars', available: 15 },
    ],
    'muay-thai-trial': [
      { id: 5, date: 'Today', time: '7:30 PM', instructor: 'Professor Ben Poppelaars', available: 6 },
      { id: 6, date: 'Tomorrow', time: '12:00 PM', instructor: 'Professor Lauren Murphy', available: 10 },
      { id: 7, date: 'Fri', time: '6:00 PM', instructor: 'Professor Ben Poppelaars', available: 8 },
    ],
    'kids-trial': [
      { id: 8, date: 'Tomorrow', time: '4:30 PM', instructor: 'Professor Ben Poppelaars', available: 4 },
      { id: 9, date: 'Sat', time: '10:00 AM', instructor: 'Professor Ben Poppelaars', available: 8 },
      { id: 10, date: 'Sat', time: '11:00 AM', instructor: 'Professor Ki Martin', available: 6 },
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setBookingStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setBookingStep(prev => Math.max(prev - 1, 1));
  };

  const handleCompleteBooking = () => {
    // In a real app, this would process the booking
    setBookingStep(5);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50 animate-slide-down">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">HOME</Link>
              <Link href="/about" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/schedule" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/book" className="nav-link text-blue-600 font-medium">BOOK NOW</Link>
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
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: 'Select Program' },
              { step: 2, label: 'Choose Time' },
              { step: 3, label: 'Your Information' },
              { step: 4, label: 'Payment' },
              { step: 5, label: 'Confirmation' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  bookingStep >= item.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {bookingStep > item.step ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    item.step
                  )}
                </div>
                <span className={`ml-2 text-sm ${
                  bookingStep >= item.step ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
                {index < 4 && (
                  <div className={`mx-4 h-1 w-12 ${
                    bookingStep > item.step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Step 1: Select Program */}
        {bookingStep === 1 && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Program</h1>
            <p className="text-gray-600 mb-8">Choose a trial class or membership option</p>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <div
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className={`program-card cursor-pointer rounded-lg overflow-hidden shadow-lg hover-lift ${
                    selectedProgram?.id === program.id ? 'ring-4 ring-blue-500' : ''
                  }`}
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                      <span className="text-lg font-bold text-blue-600">{program.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNextStep}
                disabled={!selectedProgram}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Time */}
        {bookingStep === 2 && selectedProgram && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Time</h1>
            <p className="text-gray-600 mb-8">Select a convenient time slot for {selectedProgram.name}</p>

            <div className="space-y-4">
              {(timeSlots[selectedProgram.id] || []).map((slot) => (
                <div
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot)}
                  className={`cursor-pointer p-4 border rounded-lg hover-lift transition-all ${
                    selectedSlot?.id === slot.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{slot.date} at {slot.time}</h3>
                      <p className="text-sm text-gray-600">with {slot.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{slot.available} spots available</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!selectedSlot}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Information */}
        {bookingStep === 3 && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Information</h1>
            <p className="text-gray-600 mb-8">Please provide your details for the booking</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={bookingForm.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={bookingForm.lastName}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  name="experience"
                  value={bookingForm.experience}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Objectives</label>
                <textarea
                  name="goals"
                  value={bookingForm.goals}
                  onChange={handleInputChange}
                  rows={3}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="What do you hope to achieve through martial arts training?"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={bookingForm.emergencyContact}
                    onChange={handleInputChange}
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Phone</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={bookingForm.emergencyPhone}
                    onChange={handleInputChange}
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </form>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!bookingForm.firstName || !bookingForm.lastName || !bookingForm.email || !bookingForm.phone}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {bookingStep === 4 && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
            <p className="text-gray-600 mb-8">Complete your booking</p>

            {/* Booking Summary */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Program:</span>
                  <span className="font-medium">{selectedProgram?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium">{selectedSlot?.date} at {selectedSlot?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{selectedSlot?.instructor}</span>
                </div>
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-blue-600">{selectedProgram?.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {selectedProgram?.type === 'trial' ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Free Trial Class</h3>
                    <p className="text-green-600">No payment required for your first trial class!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCompleteBooking}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors hover-lift"
              >
                {selectedProgram?.type === 'trial' ? 'Complete Booking' : 'Complete Payment'}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {bookingStep === 5 && (
          <div className="animate-fade-in-up text-center">
            <div className="max-w-md mx-auto">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
              <p className="text-gray-600 mb-8">
                Your {selectedProgram?.name} is booked for {selectedSlot?.date} at {selectedSlot?.time}.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Check your email for confirmation details</li>
                  <li>• Arrive 15 minutes early for your first class</li>
                  <li>• Wear comfortable athletic clothing</li>
                  <li>• Bring water and a positive attitude!</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Link
                  href="/members"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Create Member Account
                </Link>
                <Link
                  href="/"
                  className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
