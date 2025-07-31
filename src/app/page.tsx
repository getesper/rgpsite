'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X, Shield, Users, Trophy, Clock, MapPin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      params.append('name', formState.name);
      params.append('email', formState.email);
      params.append('message', formState.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });

      if (response.ok) {
        setFormStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.section-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Youth Jiu-Jitsu Program",
      description: "Brazilian Jiu-Jitsu Kids Program is not just about physical education and self-defense techniques, it's about building a strong foundation for our young athletes through conditioning and skill-building games.",
      image: "https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg",
      levels: "Ages 4-12",
      id: "youth-program",
      fullDescription: "Our Youth Jiu-Jitsu Program is specifically designed for children ages 4-12, focusing on building confidence, discipline, and physical fitness through age-appropriate Brazilian Jiu-Jitsu techniques. Students learn fundamental movements, basic self-defense, and develop social skills in a fun, supportive environment. Classes include games, drills, and structured learning that helps children understand respect, perseverance, and teamwork while building a strong foundation in martial arts."
    },
    {
      title: "Adult & Junior Program",
      description: "The Fundamental Program is the ultimate foundation for mastering the art of Brazilian Jiu-Jitsu. It confidently delivers essential principles and core techniques, honing the skills needed for effective fighting.",
      image: "https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg",
      levels: "Ages 13+",
      id: "adult-program",
      fullDescription: "Our Adult & Junior Program welcomes students ages 13 and up, providing comprehensive Brazilian Jiu-Jitsu training from beginner to advanced levels. Students learn fundamental positions, submissions, escapes, and transitions through systematic curriculum progression. The program emphasizes practical self-defense, physical conditioning, and mental resilience while building a strong community of practitioners who support each other's growth and development."
    },
    {
      title: "MMA Training",
      description: "A very special program led by world class professional MMA trainers with a wealth of experience",
      image: "https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg",
      levels: "All Levels",
      id: "mma-program",
      fullDescription: "Our MMA Training program is led by Professor Joe Murphy, who has trained UFC champions and professional fighters at the highest levels. This comprehensive program combines Brazilian Jiu-Jitsu, striking, wrestling, and conditioning to develop complete mixed martial artists. Students learn all aspects of MMA including stand-up striking, takedowns, ground control, and submissions while building the cardio and mental toughness required for competition."
    },
    {
      title: "Brazilian Jiu-Jitsu",
      description: "Learn the gentle art with our expert instructors in a family-oriented environment",
      image: "https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg",
      levels: "All Ages",
      id: "bjj-program",
      fullDescription: "Our Brazilian Jiu-Jitsu program offers traditional gi training focusing on leverage, technique, and strategy over strength and aggression. Students learn the fundamental positions, guard work, passing, submissions, and escapes that make BJJ such an effective martial art. Our curriculum follows the Renzo Gracie methodology, emphasizing practical application, self-defense, and continuous improvement in a respectful, ego-free environment."
    },
    {
      title: "Fundamentals Program",
      description: "Essential principles and core techniques, honing the skills needed for effective fighting",
      image: "https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg",
      levels: "All Levels",
      id: "fundamentals-program",
      fullDescription: "The Fundamentals Program is designed for new students and those looking to solidify their basic technique foundation. This structured curriculum covers the essential positions, basic submissions, fundamental escapes, and core principles that every Brazilian Jiu-Jitsu practitioner needs to master. Classes focus on proper mechanics, safety, and building confidence through repetition and understanding of fundamental concepts."
    },
    {
      title: "Competition Training",
      description: "Advanced training for competitors and those looking to take their skills to the next level",
      image: "https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg",
      levels: "Advanced Students",
      id: "competition-program",
      fullDescription: "Our Competition Training program is designed for students who want to test their skills in tournaments and take their Brazilian Jiu-Jitsu to the highest level. Led by our experienced competition team, students learn advanced techniques, competition strategy, mental preparation, and intensive drilling. The program includes specific training for IBJJF rules, tournament preparation, and developing the competitive mindset needed for success."
    }
  ];

  const handleLearnMore = (programId: string) => {
    setSelectedProgram(selectedProgram === programId ? null : programId);
  };

  const handleBookProgram = (programId: string) => {
    // In a real app, this would pass the program info to the booking page
    window.location.href = `/book?program=${programId}`;
  };

  const testimonials = [
    {
      name: "Harold W.",
      text: "Awesome! The team behind Renzo Gracie Pearland is just awesome!! Professor Joe, coach Ben and team manager Andrea are very dedicated to all their students, from the little ones and the older kids to all the adults! We as a family really enjoy the environment and what we are learning. Professor Joe's background speaks for itself with the high caliber trainings of UFC fighters and military and Coach Ben with his grappling submissions and Muay Thai background makes this a destination academy that has students from all over the Houston area traveling just to Pearland to train under this team!",
      rating: 5
    },
    {
      name: "Stephanie P.",
      text: "If you're looking for a fun family oriented Jiu Jitsu Academy that teaches self defense, respect, discipline, hard work and ethics - Renzo Gracie Pearland is the place to call your home. As soon as you walk in, you'll immediately feel the amazing vibes with a warm welcome from the General manager Coach Andrea. Our black belt, Professor Joe & brown belt, Coach Ben along with their team of knowledgeable coaches are very humble & their love for the art of jiu jitsu shines through all their heartwork they provide to kids as young as 4 years old - to adults from beginner to intermediate levels!",
      rating: 5
    },
    {
      name: "Adam M.",
      text: "If your considering a martial art for your children this is the place! The instructors are absolutely amazing and really connect with the kids. Sensei Joe, Ben and Andrea are always so welcoming and encouraging. The instructors are all active competitors and the classes are well sized so that the kids get plenty of one on one instruction during every class. Would recommend 100%!!!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What should I bring to my first class?",
      answer: "Just wear comfortable athletic clothing. We provide all necessary equipment for beginners including gi and protective gear. Our team will take care of everything for your first visit."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer a free trial class for new students. This allows you to experience our training and meet our world-class instructors including Professor Joe Murphy and the team."
    },
    {
      question: "What age groups do you teach?",
      answer: "We have programs for all ages starting from 4 years old through adult. Our Youth Jiu-Jitsu Program (Ages 4-12) and Adult & Junior Program (13+) are specifically designed for different age groups and skill levels."
    },
    {
      question: "How often should I train?",
      answer: "We recommend training 2-3 times per week for optimal progress. However, you can train as often as your schedule allows with our flexible class options throughout the week."
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
                  src="http://renzograciepearland.com/wp-content/uploads/2024/01/RGPLOGO1.jpg"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer hover-scale"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link text-blue-600 font-medium">HOME</Link>
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
          <div className="lg:hidden bg-white border-t animate-slide-down">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-blue-600 font-medium">HOME</Link>
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

      {/* Secondary Navigation - Programs */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-6 py-3 text-sm">
            <Link href="/brazilian-jiu-jitsu" className="hover:text-blue-400 transition-colors">Brazilian Jiu-Jitsu</Link>
            <Link href="/youth-program" className="hover:text-blue-400 transition-colors">Youth Program</Link>
            <Link href="/mma-training" className="hover:text-blue-400 transition-colors">MMA Training</Link>
            <Link href="/adult-program" className="hover:text-blue-400 transition-colors">Adult Program</Link>
            <Link href="/fundamentals" className="hover:text-blue-400 transition-colors">Fundamentals</Link>
            <Link href="/competition-team" className="hover:text-blue-400 transition-colors">Competition Team</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 27, 105, 0.7), rgba(12, 27, 105, 0.7)), url('https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="hero-text text-blue-400 text-2xl md:text-3xl font-semibold mb-4 tracking-wider">MASTER THE ART AND TRANSFORM YOUR LIFE</h2>
            <h1 className="hero-text-delay text-5xl md:text-7xl font-bold mb-8 leading-tight">THE BETTER WAY</h1>
            <div className="hero-buttons space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link href="/book" className="block md:inline-block bg-blue-600 text-white px-8 py-4 rounded font-semibold hover:bg-blue-700 transition-colors hover-lift hover-glow btn-pulse">
                🥽 SCHEDULE YOUR FREE TRIAL CLASS
              </Link>
              <Link href="/book" className="block md:inline-block border-2 border-blue-400 bg-blue-400 text-white px-8 py-4 rounded font-semibold hover:bg-blue-500 transition-colors hover-lift">
                FREE TRIAL + T-SHIRT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-blue-900 text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Welcome to<br />Renzo Gracie Pearland</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Renzo Gracie Pearland is a proud affiliate of the renowned Renzo Gracie Academy, established in 1996,
              continuing the legacy as one of the world's leading schools in martial arts. We provide a family-oriented
              learning environment for all ages and abilities. From our Youth Jiu-Jitsu Program for ages 4-12 to our
              professional MMA training led by world-class instructors with UFC experience, we have something for everyone.
              Some of the greatest fighters in the world have honed their skills using our methods. Our academy builds champions on and off the mats.
            </p>
          </div>

          {/* Affiliate Badges */}
          <div className="flex justify-center items-center space-x-8 opacity-70 animate-fade-in-up animate-delay-400">
            <div className="text-gray-400 text-sm font-medium">AN AFFILIATE OF:</div>
            <div className="flex space-x-6">
              <div className="bg-slate-800 p-3 rounded shadow hover-lift">
                <div className="text-xs font-bold text-blue-400">RENZO GRACIE</div>
                <div className="text-xs text-gray-300">JIU-JITSU</div>
              </div>
              <div className="bg-slate-800 p-3 rounded shadow hover-lift">
                <div className="text-xs font-bold text-blue-400">PEARLAND, TX</div>
                <div className="text-xs text-gray-300">EST. 2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose A Program Section */}
      <section id="programs" className="py-16 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fade-in-up">CHOOSE A PROGRAM</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`program-card bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="h-48 bg-cover bg-center program-image overflow-hidden" style={{ backgroundImage: `url(${program.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  {/* Expanded content */}
                  {selectedProgram === program.id && (
                    <div className="mb-4 p-4 bg-blue-50 rounded-lg animate-fade-in-up">
                      <p className="text-gray-700 text-sm leading-relaxed">{program.fullDescription}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium">{program.levels}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleLearnMore(program.id)}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors hover-scale"
                      >
                        {selectedProgram === program.id ? 'Show Less' : 'Learn More'}
                      </button>
                      <button
                        onClick={() => handleBookProgram(program.id)}
                        className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors hover-scale hover-glow"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empower, Transform, and Conquer */}
      <section className="py-16 bg-blue-900 text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">EMPOWER, TRANSFORM, AND CONQUER</h2>
              <p className="text-lg opacity-90 mb-6 animate-fade-in-up animate-delay-200">
                Unleash your inner warrior at Renzo Gracie Pearland with our unbeatable offer: free trial class!
                Transform your life today – limited spots available!
              </p>
              <Link href="/book" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift hover-glow animate-fade-in-up animate-delay-400">
                SCHEDULE YOUR FREE TRIAL
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg"
                alt="Renzo Gracie Pearland Training"
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The RGP Advantage */}
      <section className="py-16 bg-blue-900 text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">THE RGP ADVANTAGE</h2>
            <p className="text-lg opacity-90 animate-fade-in-up animate-delay-200">RGP provides a family learning environment to practitioners of all ages.</p>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-xl italic opacity-95 mb-4 animate-fade-in-up animate-delay-300">
                "We are not in the business of martial arts. We are in the business of building confidence.
                Confidence not only to defend yourself—we help build the confidence required to face life."
              </p>
              <p className="text-blue-400 font-semibold animate-fade-in-up animate-delay-400">- Master Renzo Gracie</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up animate-delay-200 hover-lift">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-400 hover-scale" />
              <h3 className="text-xl font-bold mb-2">World-Class Instruction</h3>
              <p className="opacity-90">Learn from UFC veterans and world champion instructors with extensive competition experience.</p>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-400 hover-lift">
              <Users className="h-12 w-12 mx-auto mb-4 text-yellow-400 hover-scale" />
              <h3 className="text-xl font-bold mb-2">Family Environment</h3>
              <p className="opacity-90">Join a welcoming, family-oriented academy where everyone supports each other's growth and success.</p>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-600 hover-lift">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-400 hover-scale" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="opacity-90">Our students regularly compete and succeed at local, national, and international levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fade-in-up">OUR TESTIMONIALS</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg text-center hover-lift">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-fade-in-up animate-delay-100" />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
              <p className="font-bold text-gray-900">- {testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-gray-500">Google Review</p>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discover the Power */}
      <section className="py-16 bg-blue-900 text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">DISCOVER THE POWER OF JIU-JITSU AT RENZO GRACIE PEARLAND</h2>
              <p className="text-lg opacity-90 mb-4 animate-fade-in-up animate-delay-200">
                Newcomer's Special - Join the Renzo Gracie Pearland family today and experience world-class Brazilian Jiu-Jitsu training.
                Seize this opportunity and start your transformative journey now!
              </p>
              <p className="text-blue-400 italic text-lg mb-6 animate-fade-in-up animate-delay-300">
                "It doesn't matter where you start, as long as you do."
              </p>
            </div>
            <div className="lg:w-1/3 lg:pl-12 animate-fade-in-up animate-delay-400">
              <Link href="/book" className="block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-700 transition-colors hover-lift hover-glow">
                SCHEDULE YOUR FREE TRIAL!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fade-in-up">F.A.Q.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">BRAZILIAN JIU-JITSU</h3>
              <div className="space-y-4">
                {faqs.slice(0, 2).map((faq, index) => (
                  <div key={index} className={`faq-item bg-white p-6 rounded-lg shadow-lg animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">+ {faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">RENZO GRACIE PEARLAND SPECIFIC</h3>
              <div className="space-y-4">
                {faqs.slice(2, 4).map((faq, index) => (
                  <div key={index} className={`faq-item bg-white p-6 rounded-lg shadow-lg animate-fade-in-up animate-delay-${(index + 3) * 100}`}>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">+ {faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renzo Gracie Pearland In Action */}
      <section className="py-16 bg-gray-50 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 animate-fade-in-up">RENZO GRACIE PEARLAND IN ACTION</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg" alt="BJJ Training" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg" alt="Youth Program" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg" alt="MMA Training" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg" alt="Adult Training" className="rounded-lg hover-scale" />
            <img src="https://static.where-e.com/United_States/Renzo-Gracie-Pearland_5feae6da2f8749766285941ac6342b46.jpg" alt="Fundamentals" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg" alt="Competition" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg" alt="Training Session" className="rounded-lg hover-scale" />
            <img src="https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg" alt="Academy" className="rounded-lg hover-scale" />
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-lift">
              VISIT OUR GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Get Started Today</h2>
            <p className="text-lg opacity-90 animate-fade-in-up animate-delay-200">Ready to begin your martial arts journey?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center hover-lift">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <a
                    href="https://www.google.com/maps/place/2000+Reflection+Bay+Dr+Suite+164,+Pearland,+TX+77584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    2000 Reflection Bay Dr Suite 164, Pearland, TX 77584
                  </a>
                </div>
                <div className="flex items-center hover-lift">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <a href="tel:+18324589839" className="hover:text-blue-400 transition-colors cursor-pointer">(832) 458-9839</a>
                </div>
                <div className="flex items-center hover-lift">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <a href="mailto:renzograciepearland@gmail.com" className="hover:text-blue-400 transition-colors cursor-pointer">renzograciepearland@gmail.com</a>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Find Us</h4>
                <div className="relative rounded-lg overflow-hidden hover-lift">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.234!2d-95.286!3d29.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0c0c0c0c0c0%3A0x0!2s2000%20Reflection%20Bay%20Dr%20Suite%20164%2C%20Pearland%2C%20TX%2077584!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>

                  {/* Map overlay */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
                    <p className="font-bold text-sm">Renzo Gracie Pearland</p>
                    <p className="text-xs">World-Class Training</p>
                  </div>
                </div>

                {/* Directions button */}
                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps/dir//2000+Reflection+Bay+Dr+Suite+164,+Pearland,+TX+77584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover-lift text-sm"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg animate-fade-in-up">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600 text-white rounded-lg animate-fade-in-up">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or call us directly.</p>
                </div>
              )}

              <form
                className="space-y-4"
                onSubmit={handleFormSubmit}
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 border border-blue-600 focus:border-blue-400"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="form-input w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 border border-blue-600 focus:border-blue-400"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    className="form-input w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 border border-blue-600 focus:border-blue-400"
                    disabled={formStatus === 'submitting'}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <img
                src="https://renzograciepearland.com/wp-content/uploads/2023/07/Renzopearland-white-logo.png"
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
                <div className="text-gray-300">Brazilian Jiu-Jitsu</div>
                <div className="text-gray-300">Youth Program</div>
                <div className="text-gray-300">MMA Training</div>
                <div className="text-gray-300">Adult Program</div>
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
