'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Mock data for trending influencers
const influencers = [
  {
    id: 1,
    name: 'Alex Johnson',
    username: '@alexjohnson',
    platform: 'instagram',
    platformIcon: <FaInstagram className="text-pink-500" />,
    followers: '2.5M',
    engagement: '4.8%',
    niche: 'Fashion',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    score: 'Top 5 by Engagement',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    username: '@sarahwilliams',
    platform: 'tiktok',
    platformIcon: <FaTiktok className="text-black" />,
    followers: '1.8M',
    engagement: '5.3%',
    niche: 'Dance',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    score: 'Fastest Growing',
  },
  {
    id: 3,
    name: 'Mike Thompson',
    username: '@mikethompson',
    platform: 'youtube',
    platformIcon: <FaYoutube className="text-red-600" />,
    followers: '3.2M',
    engagement: '3.9%',
    niche: 'Tech Reviews',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    score: 'Highest Conversion',
  },
  {
    id: 4,
    name: 'Emily Davis',
    username: '@emilydavis',
    platform: 'instagram',
    platformIcon: <FaInstagram className="text-pink-500" />,
    followers: '1.2M',
    engagement: '6.1%',
    niche: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    score: 'Top Engagement Rate',
  },
  {
    id: 5,
    name: 'David Miller',
    username: '@davidmiller',
    platform: 'twitter',
    platformIcon: <FaTwitter className="text-blue-400" />,
    followers: '850K',
    engagement: '4.2%',
    niche: 'Finance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    score: 'Top in Finance',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    username: '@lisaanderson',
    platform: 'tiktok',
    platformIcon: <FaTiktok className="text-black" />,
    followers: '2.1M',
    engagement: '5.7%',
    niche: 'Comedy',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    score: 'Most Viral Content',
  },
];

const TrendingInfluencersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(influencers.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPaginatedInfluencers = () => {
    const startIndex = activeIndex * itemsPerPage;
    return influencers.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Influencers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top performing influencers across various platforms and niches.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={18} />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>

          {/* Carousel Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={activeIndex}
          >
            {getPaginatedInfluencers().map((influencer) => (
              <motion.div
                key={influencer.id}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-72">
                  <Image
                    src={`${influencer.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={influencer.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center mb-1">
                      {influencer.platformIcon}
                      <span className="ml-2 font-medium">{influencer.platform}</span>
                    </div>
                    <h3 className="text-xl font-bold">{influencer.name}</h3>
                    <p className="text-sm opacity-80">{influencer.username}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Followers</p>
                      <p className="font-semibold">{influencer.followers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Engagement</p>
                      <p className="font-semibold">{influencer.engagement}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Niche</p>
                      <p className="font-semibold">{influencer.niche}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {influencer.score}
                    </span>
                    <Link href={`/profile/${influencer.id}`} passHref>
                      <motion.button
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Profile
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/search" passHref>
            <motion.button
              className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Influencers
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingInfluencersSection; 