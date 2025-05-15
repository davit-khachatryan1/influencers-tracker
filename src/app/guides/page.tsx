'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaSearch, FaLightbulb, FaRocket, FaChartLine, FaBullseye, FaUsers } from 'react-icons/fa';

const GuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'analytics', name: 'Analytics' },
  ];

  const guides = [
    {
      id: 1,
      title: 'The Ultimate Guide to Influencer Marketing in 2024',
      excerpt: 'Learn everything you need to know about influencer marketing, from the basics to advanced strategies for 2024 and beyond.',
      category: 'beginner',
      level: 'Beginner',
      readTime: '15 min read',
      author: 'Sarah Johnson',
      image: '/guides/influencer-marketing-guide.jpg',
      icon: <FaLightbulb className="text-primary-500 text-xl" />,
    },
    {
      id: 2,
      title: 'How to Create a Winning Influencer Marketing Strategy',
      excerpt: 'Develop a comprehensive influencer marketing strategy that aligns with your business goals and resonates with your target audience.',
      category: 'strategy',
      level: 'Intermediate',
      readTime: '12 min read',
      author: 'Michael Chen',
      image: '/guides/strategy-guide.jpg',
      icon: <FaRocket className="text-primary-500 text-xl" />,
    },
    {
      id: 3,
      title: 'Measuring ROI in Influencer Marketing Campaigns',
      excerpt: 'Learn how to effectively track and measure the return on investment for your influencer marketing campaigns with these proven methods.',
      category: 'analytics',
      level: 'Advanced',
      readTime: '10 min read',
      author: 'Jessica Patel',
      image: '/guides/roi-guide.jpg',
      icon: <FaChartLine className="text-primary-500 text-xl" />,
    },
    {
      id: 4,
      title: 'Finding the Perfect Influencers for Your Brand',
      excerpt: 'Discover how to identify and vet influencers who align with your brand values and can effectively reach your target audience.',
      category: 'beginner',
      level: 'Beginner',
      readTime: '8 min read',
      author: 'David Kim',
      image: '/guides/finding-influencers.jpg',
      icon: <FaBullseye className="text-primary-500 text-xl" />,
    },
    {
      id: 5,
      title: 'Advanced Audience Analysis for Influencer Campaigns',
      excerpt: 'Dive deep into audience demographics, psychographics, and engagement patterns to optimize your influencer marketing efforts.',
      category: 'analytics',
      level: 'Advanced',
      readTime: '14 min read',
      author: 'Sarah Johnson',
      image: '/guides/audience-analysis.jpg',
      icon: <FaUsers className="text-primary-500 text-xl" />,
    },
    {
      id: 6,
      title: 'Crafting Effective Briefs for Influencer Collaborations',
      excerpt: 'Learn how to create comprehensive briefs that communicate your brand message clearly and set your influencer partnerships up for success.',
      category: 'intermediate',
      level: 'Intermediate',
      readTime: '9 min read',
      author: 'Michael Chen',
      image: '/guides/briefs-guide.jpg',
      icon: <FaRocket className="text-primary-500 text-xl" />,
    },
  ];

  const filteredGuides = guides.filter(guide => 
    (activeCategory === 'all' || guide.category === activeCategory) &&
    (guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get featured guide (first guide in filtered results or first overall)
  const featuredGuide = filteredGuides.length > 0 ? filteredGuides[0] : guides[0];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:underline mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            InfluTrack Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guides to help you master influencer marketing and make the most of our platform.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Guide */}
        {!searchTerm && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Guide</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                  {/* Replace with actual image */}
                  {/* <Image
                    src={featuredGuide.image}
                    width={600}
                    height={400}
                    alt={featuredGuide.title}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mr-3">
                        {featuredGuide.level}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredGuide.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {featuredGuide.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {featuredGuide.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {featuredGuide.author}
                    </div>
                    <Link href={`/guides/${featuredGuide.id}`}>
                      <motion.button
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read Guide
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Guides Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchTerm ? 'Search Results' : activeCategory !== 'all' ? `${categories.find(c => c.id === activeCategory)?.name} Guides` : 'All Guides'}
          </h2>
          
          {filteredGuides.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No guides found matching your criteria. Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) + 0.4 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Image placeholder</p>
                    {/* Replace with actual image */}
                    {/* <Image
                      src={guide.image}
                      width={400}
                      height={250}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium mr-2">
                        {guide.level}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {guide.readTime}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      {guide.icon}
                      <h3 className="text-xl font-semibold text-gray-900 ml-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        By {guide.author}
                      </div>
                      <Link href={`/guides/${guide.id}`}>
                        <motion.span
                          className="text-primary-600 hover:underline text-sm font-medium"
                          whileHover={{ x: 5 }}
                        >
                          Read Guide
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Guide Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary-50 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let us know what topics you&apos;d like us to cover in future guides. We&apos;re constantly expanding our library based on user feedback.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Guide
              </motion.button>
            </Link>
            <Link href="/docs">
              <motion.button
                className="px-8 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GuidesPage; 