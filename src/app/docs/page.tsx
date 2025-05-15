'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaSearch, FaBook, FaCode, FaLaptop, FaChartBar, FaDatabase } from 'react-icons/fa';

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: <FaBook className="text-primary-500 mr-2" />,
      articles: [
        { id: 'account-setup', title: 'Creating an Account' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'first-search', title: 'Your First Influencer Search' },
        { id: 'dashboard-intro', title: 'Understanding Your Dashboard' },
      ]
    },
    {
      id: 'features',
      name: 'Features & Tools',
      icon: <FaLaptop className="text-primary-500 mr-2" />,
      articles: [
        { id: 'advanced-search', title: 'Advanced Search Filters' },
        { id: 'influencer-profiles', title: 'Influencer Profile Analysis' },
        { id: 'comparison-tool', title: 'Comparing Multiple Influencers' },
        { id: 'audience-overlap', title: 'Audience Overlap Analysis' },
        { id: 'campaign-tracking', title: 'Campaign Tracking Tools' },
      ]
    },
    {
      id: 'api',
      name: 'API Documentation',
      icon: <FaCode className="text-primary-500 mr-2" />,
      articles: [
        { id: 'api-overview', title: 'API Overview' },
        { id: 'authentication', title: 'Authentication' },
        { id: 'endpoints', title: 'Endpoints Reference' },
        { id: 'rate-limits', title: 'Rate Limits & Usage' },
        { id: 'code-examples', title: 'Code Examples' },
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & Reporting',
      icon: <FaChartBar className="text-primary-500 mr-2" />,
      articles: [
        { id: 'metrics-explained', title: 'Core Metrics Explained' },
        { id: 'custom-reports', title: 'Creating Custom Reports' },
        { id: 'data-export', title: 'Exporting Your Data' },
        { id: 'performance-tracking', title: 'Tracking Performance Over Time' },
      ]
    },
    {
      id: 'data',
      name: 'Data & Privacy',
      icon: <FaDatabase className="text-primary-500 mr-2" />,
      articles: [
        { id: 'data-sources', title: 'Our Data Sources' },
        { id: 'data-accuracy', title: 'Data Accuracy & Freshness' },
        { id: 'privacy-compliance', title: 'Privacy & Compliance' },
        { id: 'data-retention', title: 'Data Retention Policies' },
      ]
    }
  ];

  // Filter categories and articles based on search term
  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  // Get total article count for all categories after filtering
  const totalArticles = filteredCategories.reduce(
    (count, category) => count + category.articles.length, 0
  );

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
            Documentation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to use InfluTrack effectively with our comprehensive documentation.
            Find detailed guides, tutorials, and reference materials.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 shadow-sm"
            />
            <FaSearch className="absolute left-4 top-4 text-gray-400" />
          </div>
        </motion.div>

        {/* Documentation Categories */}
        <div className="mb-16">
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                {totalArticles} {totalArticles === 1 ? 'article' : 'articles'} found for &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
          
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your search. Try another term or browse our categories below.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * categoryIndex + 0.3 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <motion.li
                        key={article.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * articleIndex + 0.1 * categoryIndex + 0.4 }}
                      >
                        <Link 
                          href={`/docs/${category.id}/${article.id}`} 
                          className="text-gray-700 hover:text-primary-600 hover:underline transition-colors flex items-start"
                        >
                          <span className="text-primary-600 mr-2">•</span>
                          <span>{article.title}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <Link href={`/docs/${category.id}`}>
                    <motion.button
                      className="mt-6 text-primary-600 hover:underline text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      View all {category.articles.length} articles →
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Getting Started with InfluTrack', category: 'Getting Started' },
              { title: 'How to Compare Multiple Influencers', category: 'Features & Tools' },
              { title: 'Understanding Engagement Metrics', category: 'Analytics & Reporting' },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.6 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <span className="text-sm text-primary-600 mb-2 block">{article.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <Link href={`/docs/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.span
                    className="text-primary-600 hover:underline text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Read Article →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-primary-50 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our support team is ready to help with any questions you may have about using InfluTrack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
            </Link>
            <Link href="/guides">
              <motion.button
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Guides
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentationPage; 