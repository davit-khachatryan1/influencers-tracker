'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch className="text-primary-500 text-4xl" />,
    title: 'Find Influencers',
    description: 'Search and filter influencers by platform, niche, engagement rate, and more.',
  },
  {
    icon: <FaChartLine className="text-primary-500 text-4xl" />,
    title: 'Analyze Performance',
    description: 'Track engagement rates, follower growth, and other key metrics over time.',
  },
  {
    icon: <FaUsers className="text-primary-500 text-4xl" />,
    title: 'Compare Influencers',
    description: 'Side-by-side comparison of multiple influencers to identify the best fit for your brand.',
  },
  {
    icon: <FaHandshake className="text-primary-500 text-4xl" />,
    title: 'Make Better Partnerships',
    description: 'Choose the right influencers for your campaigns based on data-driven insights.',
  },
];

const HowItWorksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How InfluTrack Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform simplifies the process of finding, analyzing, and partnering with the right influencers for your brand.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 