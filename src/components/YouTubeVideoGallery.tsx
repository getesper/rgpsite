'use client';

import { useState, useEffect } from 'react';
import { Play, Eye, ThumbsUp, Clock, ExternalLink } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  duration: string;
  viewCount: number;
  likeCount: number;
  channelTitle: string;
  videoUrl: string;
  embedUrl: string;
}

interface YouTubeVideoGalleryProps {
  channelId?: string;
  playlistId?: string;
  maxResults?: number;
  showPlayer?: boolean;
  className?: string;
}

export default function YouTubeVideoGallery({
  channelId = 'UCLegacyJiuJitsuAcademy', // Replace with actual channel ID
  playlistId,
  maxResults = 12,
  showPlayer = true,
  className = ''
}: YouTubeVideoGalleryProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock YouTube data - replace with actual YouTube Data API v3
  const mockVideos: YouTubeVideo[] = [
    {
      id: 'dQw4w9WgXcQ1',
      title: 'Brazilian Jiu-Jitsu Fundamentals: Basic Guard Position',
      description: 'Learn the fundamental guard position in Brazilian Jiu-Jitsu. Perfect for beginners starting their BJJ journey.',
      thumbnailUrl: 'https://picsum.photos/480/360?random=1',
      publishedAt: '2024-01-15T10:00:00Z',
      duration: '8:45',
      viewCount: 1250,
      likeCount: 98,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ1',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ1'
    },
    {
      id: 'dQw4w9WgXcQ2',
      title: 'Muay Thai Basics: Proper Stance and Footwork',
      description: 'Master the fundamental stance and footwork techniques in Muay Thai. Essential for all striking arts.',
      thumbnailUrl: 'https://picsum.photos/480/360?random=2',
      publishedAt: '2024-01-12T14:30:00Z',
      duration: '12:20',
      viewCount: 890,
      likeCount: 76,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ2',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ2'
    },
    {
      id: 'dQw4w9WgXcQ3',
      title: 'Kids Martial Arts: Building Confidence Through Training',
      description: 'See how our kids martial arts program helps children build confidence, discipline, and respect.',
      thumbnailUrl: 'https://picsum.photos/480/360?random=3',
      publishedAt: '2024-01-10T16:00:00Z',
      duration: '6:15',
      viewCount: 2100,
      likeCount: 145,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ3',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ3'
    },
    {
      id: 'dQw4w9WgXcQ4',
      title: 'Women\'s Self Defense: Essential Techniques Every Woman Should Know',
      description: 'Learn practical self-defense techniques specifically designed for women. Join our free Friday classes!',
      thumbnailUrl: 'https://picsum.photos/480/360?random=4',
      publishedAt: '2024-01-08T18:00:00Z',
      duration: '15:30',
      viewCount: 3200,
      likeCount: 298,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ4',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ4'
    },
    {
      id: 'dQw4w9WgXcQ5',
      title: 'Academy Tour: Inside Legacy Jiu-Jitsu Academy',
      description: 'Take a virtual tour of our 4,000+ sqft facility. See our training areas, equipment, and amenities.',
      thumbnailUrl: 'https://picsum.photos/480/360?random=5',
      publishedAt: '2024-01-05T12:00:00Z',
      duration: '5:45',
      viewCount: 1680,
      likeCount: 132,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ5',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ5'
    },
    {
      id: 'dQw4w9WgXcQ6',
      title: 'BJJ Competition Highlights: Local Tournament Results',
      description: 'Watch highlights from our students competing at the local BJJ tournament. Great performances all around!',
      thumbnailUrl: 'https://picsum.photos/480/360?random=6',
      publishedAt: '2024-01-03T20:00:00Z',
      duration: '10:12',
      viewCount: 967,
      likeCount: 89,
      channelTitle: 'Legacy Jiu-Jitsu Academy',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ6',
      embedUrl: 'https://youtube.com/embed/dQw4w9WgXcQ6'
    }
  ];

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      setLoading(true);
      try {
        // In real implementation, use YouTube Data API v3:
        // const response = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?` +
        //   `key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&` +
        //   `channelId=${channelId}&` +
        //   `part=snippet,id&` +
        //   `order=date&` +
        //   `maxResults=${maxResults}`
        // );

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        setVideos(mockVideos.slice(0, maxResults));
        if (mockVideos.length > 0) {
          setSelectedVideo(mockVideos[0]);
        }
      } catch (err) {
        setError('Failed to load YouTube videos');
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, [channelId, playlistId, maxResults]);

  const formatViewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const formatDuration = (duration: string): string => {
    // YouTube API returns duration in ISO 8601 format (PT4M13S)
    // For mock data, we're using simple format (4:13)
    return duration;
  };

  const getTimeAgo = (publishedAt: string): string => {
    const now = new Date();
    const published = new Date(publishedAt);
    const diffInSeconds = Math.floor((now.getTime() - published.getTime()) / 1000);

    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 }
    ];

    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }

    return 'Just now';
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        {showPlayer && (
          <div className="mb-8">
            <div className="aspect-video bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
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
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Featured Video Player */}
      {showPlayer && selectedVideo && (
        <div className="mb-8">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              src={`${selectedVideo.embedUrl}?autoplay=0&rel=0&modestbranding=1`}
              title={selectedVideo.title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-600 mb-3 line-clamp-2">{selectedVideo.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatViewCount(selectedVideo.viewCount)} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{selectedVideo.likeCount}</span>
                </div>
                <span>{getTimeAgo(selectedVideo.publishedAt)}</span>
              </div>
            </div>
            <a
              href={selectedVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center space-x-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`cursor-pointer group ${
              selectedVideo?.id === video.id ? 'ring-2 ring-red-500 rounded-lg' : ''
            }`}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-3">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                {formatDuration(video.duration)}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-red-600 transition-colors">
                {video.title}
              </h4>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{video.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{formatViewCount(video.viewCount)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{video.likeCount}</span>
                  </div>
                </div>
                <span>{getTimeAgo(video.publishedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Channel Link */}
      <div className="mt-8 text-center">
        <a
          href={`https://youtube.com/channel/${channelId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Visit Our YouTube Channel</span>
        </a>
      </div>

      {/* Integration Info */}
      <div className="mt-8 p-4 bg-red-50 rounded-lg">
        <h4 className="font-semibold text-red-900 mb-2">YouTube Integration</h4>
        <p className="text-red-700 text-sm">
          Videos are automatically pulled from your YouTube channel. To set up: Get a{' '}
          <a
            href="https://console.developers.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-900"
          >
            YouTube Data API key
          </a>
          {' '}and configure your channel ID.
        </p>
      </div>
    </div>
  );
}
