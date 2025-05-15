'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaChartLine, FaUsers, FaHandshake, FaArrowLeft } from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch className="text-primary-500 text-4xl" />,
    title: 'Find Influencers',
    description: 'Advanced search and filtering options to find the perfect influencers by platform, niche, engagement rate, follower count, and location.',
  },
  {
    icon: <FaChartLine className="text-primary-500 text-4xl" />,
    title: 'Analyze Performance',
    description: 'Comprehensive analytics to track engagement rates, follower growth, content performance, and audience demographics over time.',
  },
  {
    icon: <FaUsers className="text-primary-500 text-4xl" />,
    title: 'Compare Influencers',
    description: 'Side-by-side comparison of multiple influencers to identify the best fit for your brand based on key metrics and audience overlap.',
  },
  {
    icon: <FaHandshake className="text-primary-500 text-4xl" />,
    title: 'Make Better Partnerships',
    description: 'Data-driven insights to help you choose the right influencers for your campaigns and maximize your return on investment.',
  },
];

const additionalFeatures = [
  {
    title: 'Campaign Tracking',
    description: 'Monitor the performance of your influencer marketing campaigns in real-time with customizable dashboards and reporting tools.',
  },
  {
    title: 'Audience Insights',
    description: 'Gain deep understanding of influencers\' audience demographics, interests, and engagement patterns to ensure brand alignment.',
  },
  {
    title: 'Content Library',
    description: 'Browse through influencers\' past content and collaborations to assess their creative style and brand partnerships.',
  },
  {
    title: 'ROI Calculator',
    description: 'Calculate the potential return on investment for your influencer partnerships based on historical performance data.',
  },
  {
    title: 'Automated Reporting',
    description: 'Schedule and receive automated reports on influencer performance and campaign metrics delivered to your inbox.',
  },
  {
    title: 'Export Capabilities',
    description: 'Export data and reports in various formats for sharing with team members or integrating with your existing marketing tools.',
  },
];

const FeaturesPage = () => {
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
            Platform Features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful tools and features that make InfluTrack the ultimate platform for influencer marketing management.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-primary-50 rounded-xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of brands and marketers who are using InfluTrack to optimize their influencer marketing strategies.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage; 