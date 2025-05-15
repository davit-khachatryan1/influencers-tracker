'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import EngagementChart from '@/components/profile/EngagementChart';

interface TopPost {
  id: number;
  image: string;
  likes: string;
  comments: string;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
}

interface Influencer {
  id: number;
  name: string;
  username: string;
  platform: string;
  followers: string;
  engagement: string;
  niche: string;
  image: string;
  location: string;
  bio: string;
  topPosts: TopPost[];
  collaboratedBrands: Brand[];
}

// Mock data for an influencer
const mockInfluencers = [
  {
    id: 1,
    name: 'Alex Johnson',
    username: '@alexjohnson',
    platform: 'instagram',
    followers: '2.5M',
    engagement: '4.8%',
    niche: 'Fashion',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Fashion influencer and style enthusiast sharing daily outfit inspiration and fashion tips. Collaborated with major brands like Zara, H&M, and ASOS.',
    location: 'New York, USA',
    topPosts: [
      { id: 1, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', likes: '124K', comments: '3.2K' },
      { id: 2, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b', likes: '98K', comments: '2.8K' },
      { id: 3, image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc', likes: '115K', comments: '4.1K' },
    ],
    collaboratedBrands: [
      { id: 1, name: 'Zara', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' },
      { id: 2, name: 'H&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png' },
      { id: 3, name: 'ASOS', logo: 'https://logos-world.net/wp-content/uploads/2020/11/ASOS-Emblem.png' },
    ],
  },
  // Add more mock influencers here with different IDs if needed
];

export default function ProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const [influencer, setInfluencer] = useState<Influencer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call to get influencer data
    const timer = setTimeout(() => {
      const foundInfluencer = mockInfluencers.find(inf => inf.id.toString() === id);
      setInfluencer(foundInfluencer || mockInfluencers[0]); // Fallback to first one if not found
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <FaInstagram className="text-pink-500" size={24} />;
      case 'tiktok':
        return <FaTiktok size={24} />;
      case 'youtube':
        return <FaYoutube className="text-red-600" size={24} />;
      case 'twitter':
        return <FaTwitter className="text-blue-400" size={24} />;
      case 'facebook':
        return <FaFacebook className="text-blue-600" size={24} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!influencer) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Influencer not found</h1>
        <Link href="/search" className="text-primary-600 hover:underline flex items-center">
          <FaArrowLeft className="mr-2" /> Back to search
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <Link href="/search" className="inline-flex items-center text-primary-600 hover:underline mb-8">
          <FaArrowLeft className="mr-2" /> Back to search
        </Link>
        
        {/* Influencer Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:col-span-1">
            <div className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-md">
              <Image
                src={`${influencer.image}?auto=format&fit=crop&w=800&q=80`}
                alt={influencer.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center mb-2">
                  {getPlatformIcon(influencer.platform)}
                  <span className="ml-2 font-medium capitalize">{influencer.platform}</span>
                </div>
                <h1 className="text-3xl font-bold">{influencer.name}</h1>
                <p className="text-lg opacity-90">{influencer.username}</p>
                <p className="text-sm mt-2 opacity-80">{influencer.location}</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Bio</h2>
            <p className="text-gray-700 mb-6">{influencer.bio}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-1">Followers</h3>
                <p className="text-2xl font-bold text-gray-900">{influencer.followers}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-1">Engagement Rate</h3>
                <p className="text-2xl font-bold text-gray-900">{influencer.engagement}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-1">Niche</h3>
                <p className="text-2xl font-bold text-gray-900">{influencer.niche}</p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Link href={`https://instagram.com/${influencer.username.replace('@', '')}`} target="_blank" passHref>
                <motion.button
                  className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Profile <FaExternalLinkAlt className="ml-2" />
                </motion.button>
              </Link>
              <motion.button
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Engagement Stats */}
        <div className="mb-10">
          <EngagementChart influencerId={influencer.id} />
        </div>
        
        {/* Top Posts */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Top Performing Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {influencer.topPosts.map((post: TopPost, index: number) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm relative"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 + (index * 0.1) }
                }}
              >
                <div className="relative h-64">
                  <Image
                    src={`${post.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={`Top post ${post.id}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="text-sm">❤️ {post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">💬 {post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Collaborated Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Collaborated Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {influencer.collaboratedBrands.map((brand: Brand, index: number) => (
              <motion.div
                key={brand.id}
                className="bg-white p-4 rounded-xl flex items-center justify-center shadow-sm"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.5 + (index * 0.1) }
                }}
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 