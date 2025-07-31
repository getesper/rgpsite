'use client';

import { useState, useEffect } from 'react';
import { Play, Heart, MessageCircle, Share, ExternalLink } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'youtube';
  content: string;
  image?: string;
  video?: string;
  likes: number;
  comments: number;
  timestamp: string;
  url: string;
}

interface SocialMediaFeedProps {
  platforms: ('facebook' | 'instagram' | 'youtube')[];
  limit?: number;
  showVideos?: boolean;
  className?: string;
}

export default function SocialMediaFeed({
  platforms,
  limit = 6,
  showVideos = true,
  className = ''
}: SocialMediaFeedProps) {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration - replace with actual API calls
  const mockPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'instagram',
      content: 'Great BJJ session today! Our students are showing amazing progress in their techniques. #LegacyJJA #BrazilianJiuJitsu #Richland',
      image: 'https://picsum.photos/400/400?random=1',
      likes: 45,
      comments: 12,
      timestamp: '2 hours ago',
      url: 'https://instagram.com/legacyjiujitsu'
    },
    {
      id: '2',
      platform: 'youtube',
      content: 'New Technique Tuesday: Basic Arm Bar from Guard - Step by step breakdown for beginners',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://picsum.photos/400/225?random=2',
      likes: 128,
      comments: 23,
      timestamp: '1 day ago',
      url: 'https://youtube.com/@legacyjiujitsu'
    },
    {
      id: '3',
      platform: 'facebook',
      content: 'Congratulations to our newest blue belt promotions! Hard work and dedication paying off. 🥋',
      image: 'https://picsum.photos/400/300?random=3',
      likes: 67,
      comments: 18,
      timestamp: '3 days ago',
      url: 'https://facebook.com/legacyjiujitsu'
    },
    {
      id: '4',
      platform: 'instagram',
      content: 'Women\'s Self Defense class every Friday at 6 PM - FREE for the community! 💪 #WomensSelfDefense',
      image: 'https://picsum.photos/400/400?random=4',
      likes: 78,
      comments: 9,
      timestamp: '4 days ago',
      url: 'https://instagram.com/legacyjiujitsu'
    },
    {
      id: '5',
      platform: 'youtube',
      content: 'Kids BJJ Highlight Reel - Watch our little warriors in action!',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://picsum.photos/400/225?random=5',
      likes: 156,
      comments: 31,
      timestamp: '1 week ago',
      url: 'https://youtube.com/@legacyjiujitsu'
    },
    {
      id: '6',
      platform: 'facebook',
      content: 'Join us for our annual Legacy JJA tournament next month! Registration now open.',
      image: 'https://picsum.photos/400/300?random=6',
      likes: 92,
      comments: 25,
      timestamp: '1 week ago',
      url: 'https://facebook.com/legacyjiujitsu'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchSocialMedia = async () => {
      setLoading(true);
      try {
        // In a real implementation, you would call actual APIs here:
        // - Facebook Graph API
        // - Instagram Basic Display API
        // - YouTube Data API v3

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

        const filteredPosts = mockPosts
          .filter(post => platforms.includes(post.platform))
          .filter(post => showVideos || !post.video)
          .slice(0, limit);

        setPosts(filteredPosts);
      } catch (err) {
        setError('Failed to load social media content');
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, [platforms, limit, showVideos]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">
            f
          </div>
        );
      case 'instagram':
        return (
          <div className="w-6 h-6 bg-gradient-to-tr from-yellow-400 to-pink-600 rounded text-white flex items-center justify-center text-xs font-bold">
            IG
          </div>
        );
      case 'youtube':
        return (
          <div className="w-6 h-6 bg-red-600 rounded text-white flex items-center justify-center text-xs font-bold">
            YT
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-center py-8`}>
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Media Content */}
            <div className="relative">
              {post.video ? (
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              ) : post.image ? (
                <img
                  src={post.image}
                  alt="Social media post"
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image</span>
                </div>
              )}
            </div>

            {/* Post Content */}
            <div className="p-4">
              {/* Platform and timestamp */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getPlatformIcon(post.platform)}
                  <span className="text-sm font-medium capitalize">{post.platform}</span>
                </div>
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </div>

              {/* Content */}
              <p className="text-gray-800 text-sm line-clamp-3 mb-3">{post.content}</p>

              {/* Engagement */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
