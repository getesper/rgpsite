'use client';

import Link from 'next/link';
import { Phone, Facebook, Twitter, Instagram, Star, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'bjj', name: 'Brazilian Jiu-Jitsu' },
    { id: 'muay-thai', name: 'Muay Thai' },
    { id: 'kids', name: 'Kids Classes' },
    { id: 'events', name: 'Events & Seminars' },
    { id: 'facility', name: 'Facility' }
  ];

  const photos = [
    { id: 1, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg', category: 'bjj', alt: 'BJJ Training Session' },
    { id: 2, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg', category: 'bjj', alt: 'Brazilian Jiu-Jitsu Practice' },
    { id: 3, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg', category: 'bjj', alt: 'Grappling Techniques' },
    { id: 4, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg', category: 'bjj', alt: 'BJJ Competition' },
    { id: 5, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg', category: 'muay-thai', alt: 'Muay Thai Training' },
    { id: 6, src: 'https://static.where-e.com/United_States/Renzo-Gracie-Pearland_5feae6da2f8749766285941ac6342b46.jpg', category: 'muay-thai', alt: 'Muay Thai Striking' },
    { id: 7, src: 'https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg', category: 'kids', alt: 'Kids BJJ Class' },
    { id: 8, src: 'https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg', category: 'kids', alt: 'Youth Training' },
    { id: 9, src: 'https://static.where-e.com/United_States/Renzo-Gracie-Pearland_5feae6da2f8749766285941ac6342b46.jpg', category: 'events', alt: 'Academy Event' },
    { id: 10, src: 'https://static.where-e.com/United_States/Renzo-Gracie-Pearland_5feae6da2f8749766285941ac6342b46.jpg', category: 'events', alt: 'Seminar Group' },
    { id: 11, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg', category: 'facility', alt: 'Training Area' },
    { id: 12, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_2926-rotated.jpg', category: 'bjj', alt: 'BJJ Instruction' },
    { id: 13, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3319.jpg', category: 'muay-thai', alt: 'Muay Thai Class' },
    { id: 14, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/Lauren-scaled.jpg', category: 'events', alt: 'Self Defense Workshop' },
    { id: 15, src: 'https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg', category: 'kids', alt: 'Little Dragons' },
    { id: 16, src: 'https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg', category: 'kids', alt: 'Kids Martial Arts' },
    { id: 17, src: 'https://static.where-e.com/United_States/Renzo-Gracie-Pearland_5feae6da2f8749766285941ac6342b46.jpg', category: 'kids', alt: 'Teen Training' },
    { id: 18, src: 'https://renzograciepearland.com/wp-content/uploads/2023/07/IMG_3508.jpg', category: 'facility', alt: 'Academy Interior' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  const openLightbox = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = filteredPhotos.findIndex(photo => photo.src === selectedImage);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(filteredPhotos[newIndex].src);
  }, [selectedImage, filteredPhotos]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, navigateImage, closeLightbox]);

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
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/team" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="text-blue-600 font-medium">GALLERY</Link>
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
              <Link href="/about" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/team" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">OUR TEAM</Link>
              <Link href="/schedule" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="block text-blue-600 font-medium">GALLERY</Link>
              <Link href="/book" className="block text-blue-600 font-medium hover:text-blue-700">BOOK NOW</Link>
              <Link href="/members" className="block text-gray-900 hover:text-blue-600 font-medium transition-colors">MEMBER LOGIN</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://renzograciepearland.com/wp-content/uploads/2024/01/BellaChloe-1024x768.jpeg)'
      }}>
        <div className="absolute inset-0 overlay-gradient"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            <span className="text-blue-400">PHOTO</span>
            <br />
            <span className="text-white">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            See Renzo Gracie Pearland in action through our photo collection
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Renzo Gracie Pearland in Action</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Come experience the Renzo Gracie Pearland difference for yourself. Book your trial class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                BOOK TRIAL CLASS
              </button>
            </Link>
            <Link href="/schedule">
              <button className="btn-outline text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                VIEW SCHEDULE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Brazilian Jiu-Jitsu</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Muay Thai</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Kids Programs</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-white transition-colors">Women's Self Defense</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">Class Schedule</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>2000 Reflection Bay Dr Suite 164</p>
                <p>Pearland, TX 77584</p>
                <p>Phone: <a href="tel:+18324589839" className="hover:text-white transition-colors cursor-pointer">(832) 458-9839</a></p>
                <p>Email: <a href="mailto:renzograciepearland@gmail.com" className="hover:text-white transition-colors cursor-pointer">renzograciepearland@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
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
            <p className="text-gray-500 text-xs">
              Copyright 2025. Renzo Gracie Academy Pearland. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
