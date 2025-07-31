'use client';

import { useState, useEffect } from 'react';
import { Search, Download, ExternalLink, Filter } from 'lucide-react';

interface GooglePhoto {
  id: string;
  filename: string;
  mimeType: string;
  baseUrl: string;
  description?: string;
  creationTime: string;
  width: number;
  height: number;
  category: string;
}

interface GooglePhotosGalleryProps {
  albumId?: string;
  categories?: string[];
  limit?: number;
  searchQuery?: string;
  className?: string;
  onPhotoSelect?: (photo: GooglePhoto) => void;
}

export default function GooglePhotosGallery({
  albumId,
  categories = ['all'],
  limit = 20,
  searchQuery = '',
  className = '',
  onPhotoSelect
}: GooglePhotosGalleryProps) {
  const [photos, setPhotos] = useState<GooglePhoto[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<GooglePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  // Mock Google Photos data - replace with actual Google Photos API
  const mockPhotos: GooglePhoto[] = [
    {
      id: '1',
      filename: 'bjj_training_session_1.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=1',
      description: 'Brazilian Jiu-Jitsu training session',
      creationTime: '2024-01-15T10:30:00Z',
      width: 800,
      height: 600,
      category: 'bjj'
    },
    {
      id: '2',
      filename: 'muay_thai_class.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=2',
      description: 'Muay Thai striking practice',
      creationTime: '2024-01-14T18:00:00Z',
      width: 800,
      height: 600,
      category: 'muay-thai'
    },
    {
      id: '3',
      filename: 'kids_martial_arts.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=3',
      description: 'Kids martial arts class',
      creationTime: '2024-01-13T16:30:00Z',
      width: 800,
      height: 600,
      category: 'kids'
    },
    {
      id: '4',
      filename: 'womens_self_defense.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=4',
      description: 'Women\'s self defense workshop',
      creationTime: '2024-01-12T18:00:00Z',
      width: 800,
      height: 600,
      category: 'events'
    },
    {
      id: '5',
      filename: 'facility_tour.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=5',
      description: 'Academy facility and equipment',
      creationTime: '2024-01-11T12:00:00Z',
      width: 800,
      height: 600,
      category: 'facility'
    },
    {
      id: '6',
      filename: 'belt_promotion.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=6',
      description: 'Belt promotion ceremony',
      creationTime: '2024-01-10T19:00:00Z',
      width: 800,
      height: 600,
      category: 'events'
    },
    {
      id: '7',
      filename: 'sparring_session.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=7',
      description: 'Advanced sparring session',
      creationTime: '2024-01-09T20:00:00Z',
      width: 800,
      height: 600,
      category: 'bjj'
    },
    {
      id: '8',
      filename: 'technique_demo.jpg',
      mimeType: 'image/jpeg',
      baseUrl: 'https://picsum.photos/800/600?random=8',
      description: 'Instructor demonstrating technique',
      creationTime: '2024-01-08T19:30:00Z',
      width: 800,
      height: 600,
      category: 'bjj'
    }
  ];

  // Simulate Google Photos API call
  useEffect(() => {
    const fetchGooglePhotos = async () => {
      setLoading(true);
      try {
        // In real implementation, use Google Photos API:
        // const response = await gapi.client.photoslibrary.mediaItems.list({
        //   albumId: albumId,
        //   pageSize: limit
        // });

        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
        setPhotos(mockPhotos.slice(0, limit));
      } catch (err) {
        setError('Failed to load photos from Google Photos');
      } finally {
        setLoading(false);
      }
    };

    fetchGooglePhotos();
  }, [albumId, limit]);

  // Filter photos based on category and search
  useEffect(() => {
    let filtered = photos;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(photo =>
        photo.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPhotos(filtered);
  }, [photos, selectedCategory, searchTerm]);

  const handlePhotoClick = (photo: GooglePhoto) => {
    if (onPhotoSelect) {
      onPhotoSelect(photo);
    }
  };

  const getPhotoUrl = (photo: GooglePhoto, size?: string) => {
    // Google Photos API allows size parameters like =w800-h600
    const sizeParam = size || '=w800-h600';
    return `${photo.baseUrl}${sizeParam}`;
  };

  const downloadPhoto = async (photo: GooglePhoto) => {
    try {
      const response = await fetch(getPhotoUrl(photo, '=d')); // =d for download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = photo.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-center py-8`}>
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  const categoryOptions = [
    { value: 'all', label: 'All Photos' },
    { value: 'bjj', label: 'Brazilian Jiu-Jitsu' },
    { value: 'muay-thai', label: 'Muay Thai' },
    { value: 'kids', label: 'Kids Classes' },
    { value: 'events', label: 'Events' },
    { value: 'facility', label: 'Facility' }
  ];

  return (
    <div className={`${className}`}>
      {/* Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-600" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-200"
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              src={getPhotoUrl(photo, '=w400-h400-c')}
              alt={photo.description || photo.filename}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadPhoto(photo);
                  }}
                  className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(photo.baseUrl, '_blank');
                  }}
                  className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30"
                  title="View in Google Photos"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium truncate">
                {photo.description || photo.filename}
              </p>
              <p className="text-gray-300 text-xs">
                {new Date(photo.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredPhotos.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No photos found matching your criteria.</p>
        </div>
      )}

      {/* Integration Info */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Google Photos Integration</h4>
        <p className="text-blue-700 text-sm">
          This gallery connects to your Google Photos albums. Photos are automatically synced and categorized.
          To set up: Go to{' '}
          <a
            href="https://console.developers.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-900"
          >
            Google Cloud Console
          </a>
          {' '}and enable the Photos Library API.
        </p>
      </div>
    </div>
  );
}
