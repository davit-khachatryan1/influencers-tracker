'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'influencer-marketing', name: 'Influencer Marketing' },
    { id: 'analytics', name: 'Analytics & Data' },
    { id: 'social-media', name: 'Social Media Trends' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'platform-updates', name: 'Platform Updates' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Identify the Right Influencers for Your Brand',
      excerpt: 'Finding the perfect influencers for your brand can be challenging. This guide walks you through the key metrics and factors to consider when evaluating potential influencer partnerships.',
      author: 'Sarah Johnson',
      date: 'June 15, 2024',
      category: 'influencer-marketing',
      image: '/blog/influencer-selection.jpg',
      imageAlt: 'Person analyzing influencer profiles on a computer',
    },
    {
      id: 2,
      title: 'The Impact of Micro-Influencers on Conversion Rates',
      excerpt: 'Our recent study shows that micro-influencers often drive higher conversion rates than celebrities. Learn why smaller audiences can lead to bigger results for your marketing campaigns.',
      author: 'Michael Chen',
      date: 'June 8, 2024',
      category: 'analytics',
      image: '/blog/micro-influencers.jpg',
      imageAlt: 'Graph showing conversion rates of different influencer tiers',
    },
    {
      id: 3,
      title: 'Instagram vs. TikTok: Where Should Your Brand Invest in 2024?',
      excerpt: 'Instagram and TikTok continue to dominate the social media landscape, but which platform is right for your brand? We analyze the pros and cons of each platform for different industries.',
      author: 'Jessica Patel',
      date: 'May 30, 2024',
      category: 'social-media',
      image: '/blog/instagram-tiktok.jpg',
      imageAlt: 'Instagram and TikTok logos side by side',
    },
    {
      id: 4,
      title: 'How Fashion Brand XYZ Increased Engagement by 320% with Influencers',
      excerpt: 'Learn how Fashion Brand XYZ leveraged our platform to identify the perfect mix of influencers and achieved record-breaking engagement rates for their summer collection launch.',
      author: 'David Kim',
      date: 'May 22, 2024',
      category: 'case-studies',
      image: '/blog/fashion-case-study.jpg',
      imageAlt: 'Fashion influencer showcasing products on social media',
    },
    {
      id: 5,
      title: 'Introducing Advanced Audience Overlap Analysis',
      excerpt: 'We\'re excited to announce our new Audience Overlap Analysis feature, which helps brands identify influencers who reach unique audiences and avoid redundancy in campaigns.',
      author: 'Sarah Johnson',
      date: 'May 15, 2024',
      category: 'platform-updates',
      image: '/blog/audience-overlap.jpg',
      imageAlt: 'Screenshot of the new audience overlap feature',
    },
    {
      id: 6,
      title: 'The Rise of AI in Influencer Marketing: Opportunities and Challenges',
      excerpt: 'Artificial intelligence is transforming how brands identify, evaluate, and work with influencers. Explore the latest AI applications in influencer marketing and what they mean for your strategy.',
      author: 'Michael Chen',
      date: 'May 7, 2024',
      category: 'analytics',
      image: '/blog/ai-influencer.jpg',
      imageAlt: 'AI concept with digital connections and influencer marketing icons',
    },
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Get featured post (first post in filtered results or first overall)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : blogPosts[0];

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
            InfluTrack Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and updates on influencer marketing, social media trends, and making the most of the InfluTrack platform.
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
                placeholder="Search articles..."
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

        {/* Featured Post */}
        {!searchTerm && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                  {/* Replace with actual image */}
                  {/* <Image
                    src={featuredPost.image}
                    width={600}
                    height={400}
                    alt={featuredPost.imageAlt}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="lg:w-1/2 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <FaUser className="mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <FaCalendarAlt className="mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <motion.button
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchTerm ? 'Search Results' : activeCategory !== 'all' ? `${categories.find(c => c.id === activeCategory)?.name}` : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria. Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) + 0.4 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Image placeholder</p>
                    {/* Replace with actual image */}
                    {/* <Image
                      src={post.image}
                      width={400}
                      height={250}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <FaCalendarAlt className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <FaTag className="mr-1" />
                      <span>{categories.find(c => c.id === post.category)?.name}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUser className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <motion.span
                          className="text-primary-600 hover:underline text-sm font-medium"
                          whileHover={{ x: 5 }}
                        >
                          Read More
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary-50 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get the latest influencer marketing trends, tips, and platform updates delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-l-lg sm:rounded-r-none border border-gray-300 w-full mb-3 sm:mb-0"
            />
            <motion.button
              className="px-6 py-3 bg-primary-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage; 