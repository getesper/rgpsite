'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Menu, X, Star, Award, Trophy, Users } from 'lucide-react';
import { useState } from 'react';

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Joe Murphy",
      title: "Head Instructor & Academy Owner",
      subtitle: "Brazilian Jiu-Jitsu Black Belt 2nd Degree | UFC Coach",
      image: "https://ext.same-assets.com/3441584716/3697835419.jpeg",
      bio: "Professor Joe Murphy is a 2nd degree black belt and Chief Master Sergeant in the United States Air Force Reserve. With over 15 years of experience in Brazilian Jiu-Jitsu and professional MMA competition, he brings unparalleled expertise to every class.",
      details: "Professor Joe's true passion is teaching and coaching the next generation of martial artists. He holds a Master Instructor certification through the Air Force, a bachelor's degree in K-12 Physical Education, and is currently pursuing a master's degree in Sports Psychology. He has over 20 years of coaching experience and has coached and cornered professional fighters at the highest level including multiple time IBJJF world champions and multiple fights for UFC world titles.",
      specialties: ["Competition Training", "Adult BJJ", "Professional Fighter Development"]
    },
    {
      name: "Ben Poppelaars",
      title: "Muay Thai Instructor & Youth Program Director",
      subtitle: "Brazilian Jiu-Jitsu Black Belt | Certified Muay Thai Coach",
      image: "https://ext.same-assets.com/3441584716/3800303029.jpeg",
      bio: "Professor Ben Poppelaars is a black belt under Professor Joe Murphy with over a decade of experience in Jiu Jitsu, submission grappling, and Muay Thai. He brings authentic techniques and training methods from both disciplines.",
      details: "Ben has an exceptional ability to connect with students of all ages, especially our youth programs. His technical knowledge allows for ease of understanding at all levels, making complex techniques accessible to beginners while challenging advanced students. Professor Ben is a father of three who all practice the art, embodying the family values that make RGP special.",
      specialties: ["Youth Programs", "Muay Thai", "Family Classes"]
    },
    {
      name: "Ki Martin",
      title: "Fundamentals Instructor",
      subtitle: "Brazilian Jiu-Jitsu Black Belt | Martial Arts Veteran",
      image: "https://ext.same-assets.com/3441584716/1617404302.jpeg",
      bio: "Professor Ki brings over 20 years of martial arts experience, having trained in Karate, Modern Arnis, and Tae Kwon Do before finding his passion in Brazilian Jiu-Jitsu in 2008. His diverse background creates a unique teaching approach.",
      details: "In September of 2022, Professor Ki received his black belt in Brazilian Jiu-Jitsu from Professor Brian Marvin. He has fallen in love with the Houston Jiu-Jitsu community and is passionate about sharing the art with new students. His patient teaching style and deep understanding of martial arts principles make him perfect for our fundamentals programs.",
      specialties: ["Fundamentals", "No-Gi", "Adult Beginners"]
    },
    {
      name: "Lauren Murphy",
      title: "Women's Program Director",
      subtitle: "UFC Veteran | World Champion | Brazilian Jiu-Jitsu Black Belt",
      image: "https://ext.same-assets.com/3441584716/1118490220.jpeg",
      bio: "Lauren Murphy is a former UFC title challenger and world champion who brings elite-level experience to our academy. She began training in martial arts in 2009 and quickly rose to the highest levels of competition.",
      details: "She is a no-gi world champion at blue belt and purple belt, and a two-time bronze medalist at brown belt. Lauren has won three professional MMA titles, earned fight of the night honors in the UFC, competed for the UFC World Title, and was ranked in the top ten world rankings for several years across multiple weight classes. She is passionate about empowering women and creating opportunities in the Jiu-Jitsu community.",
      specialties: ["Women's Self-Defense", "Competition Prep", "Elite Training"]
    }
  ];

  return (
    <div className="min-h-screen">
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
              <Link href="/team" className="nav-link text-blue-600 font-medium">OUR TEAM</Link>
              <Link href="/schedule" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/book" className="nav-link text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">MEMBER LOGIN</Link>
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
          <div className="lg:hidden bg-white border-t animate-slide-down">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-gray-900 hover:text-blue-600">HOME</Link>
              <Link href="/about" className="block py-2 text-gray-900 hover:text-blue-600">ABOUT US</Link>
              <Link href="/team" className="block py-2 text-blue-600 font-medium">OUR TEAM</Link>
              <Link href="/schedule" className="block py-2 text-gray-900 hover:text-blue-600">SCHEDULE</Link>
              <Link href="/gallery" className="block py-2 text-gray-900 hover:text-blue-600">GALLERY</Link>
              <Link href="/book" className="block py-2 text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="block py-2 text-gray-900 hover:text-blue-600">MEMBER LOGIN</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(12, 27, 105, 0.7), rgba(12, 27, 105, 0.7)), url('https://ext.same-assets.com/3441584716/2212963524.jpeg')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
              <span className="text-blue-400">OUR</span>
              <br />
              <span className="text-white">TEAM</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the world-class instructors at Renzo Gracie Pearland
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Meet Our Instructors</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our world-class instructors bring decades of combined experience and a passion for teaching that creates an unparalleled learning environment for students of all ages and skill levels.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fade-in-up`}>
                <div className="lg:w-1/2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-xl hover-scale"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{member.title}</p>
                    <p className="text-md text-gray-500 font-medium mb-4">{member.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed">{member.bio}</p>
                    <p className="text-gray-600 leading-relaxed">{member.details}</p>

                    {member.specialties && (
                      <div className="border-t pt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">SPECIALTIES:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {member.name === "Joe Murphy" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm text-gray-600">Head Instructor</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm text-gray-600">UFC Coach</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm text-gray-600">2nd Degree Black Belt</span>
                        </div>
                      </>
                    )}
                    {member.name === "Lauren Murphy" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm text-gray-600">UFC Veteran</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm text-gray-600">World Champion</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-pink-500" />
                          <span className="text-sm text-gray-600">Women's Program Director</span>
                        </div>
                      </>
                    )}
                    {member.name === "Ben Poppelaars" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-blue-500" />
                          <span className="text-sm text-gray-600">Youth Director</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-red-500" />
                          <span className="text-sm text-gray-600">Muay Thai Specialist</span>
                        </div>
                      </>
                    )}
                    {member.name === "Ki Martin" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-blue-500" />
                          <span className="text-sm text-gray-600">Fundamentals Expert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-600">20+ Years Experience</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Train with World-Class Instructors
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Experience the difference that world-class instruction makes. Our team is dedicated to helping you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift">
                BOOK YOUR TRIAL CLASS
              </button>
            </Link>
            <Link href="/schedule">
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-blue-900 transition-colors hover-lift">
                VIEW CLASS SCHEDULE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <img
                src="https://ext.same-assets.com/3441584716/1743275046.png"
                alt="Renzo Gracie Pearland"
                className="h-12 w-auto mb-4 hover-scale"
              />
              <p className="text-gray-300 text-sm">
                Building champions on and off the mats in Pearland, Texas.
              </p>
            </div>

            <div className="animate-fade-in-up animate-delay-200">
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link href="/team" className="block text-gray-300 hover:text-white transition-colors">Our Team</Link>
                <Link href="/schedule" className="block text-gray-300 hover:text-white transition-colors">Class Schedule</Link>
                <Link href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-400">
              <h4 className="font-bold mb-4">Programs</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">Youth Jiu-Jitsu (Ages 4-12)</div>
                <div className="text-gray-300">Adult & Junior Program (13+)</div>
                <div className="text-gray-300">MMA Training</div>
                <div className="text-gray-300">Fundamentals Program</div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-600">
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
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
              <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
              <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer hover-scale" />
              </a>
            </div>
            <p>&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
