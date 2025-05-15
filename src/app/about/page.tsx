'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: '/team/sarah.jpg', // Placeholder - would need actual images
      bio: 'Former marketing executive with over 15 years of experience in influencer marketing and social media strategy.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: '/team/michael.jpg',
      bio: 'Software engineer with expertise in AI and data science, previously led engineering teams at major tech companies.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Jessica Patel',
      role: 'Head of Product',
      image: '/team/jessica.jpg',
      bio: 'Product leader with a passion for building user-centric tools that solve real business problems.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      image: '/team/david.jpg',
      bio: 'PhD in Computer Science with focus on machine learning and natural language processing.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'InfluTrack was founded with a mission to bring transparency and data-driven insights to influencer marketing.',
    },
    {
      year: '2020',
      title: 'Seed Funding',
      description: 'Secured $2.5M in seed funding to build our core platform and analytics capabilities.',
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our first version of the platform with basic influencer discovery and analytics features.',
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $10M in Series A funding to expand our platform and grow our team.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our platform to support international influencers and brands across multiple markets.',
    },
    {
      year: '2024',
      title: 'Advanced Analytics',
      description: 'Introduced AI-powered predictive analytics and advanced ROI measurement tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:underline mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About InfluTrack
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform influencer marketing with data-driven insights and powerful analytics.
            Our platform helps brands find the right influencers, track performance, and maximize ROI.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  InfluTrack was born out of a simple observation: influencer marketing was becoming increasingly important, 
                  but brands lacked the tools to make data-driven decisions in this space.
                </p>
                <p>
                  Founded in 2019 by Sarah Johnson and Michael Chen, our company set out to build a comprehensive platform that 
                  would bring transparency, analytics, and efficiency to influencer marketing.
                </p>
                <p>
                  What started as a small team of passionate marketers and engineers has grown into a global company serving 
                  thousands of brands and agencies around the world. Throughout our journey, we've remained committed to our 
                  core values of transparency, innovation, and customer success.
                </p>
                <p>
                  Today, InfluTrack is recognized as a leader in the influencer marketing space, providing powerful tools that 
                  help brands discover influencers, analyze performance, and optimize their marketing strategies.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-gray-500">Company image placeholder</p>
                {/* Replace with actual image */}
                {/* <Image
                  src="/about/company.jpg"
                  width={500}
                  height={350}
                  alt="InfluTrack team"
                  className="rounded-lg"
                /> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what's possible in influencer marketing technology, 
                using AI and data science to provide unique insights and capabilities.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in data-driven decision making and providing our customers with clear, 
                actionable insights they can trust to guide their marketing strategies.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Success</h3>
              <p className="text-gray-600">
                Our customers' success is our success. We're dedicated to providing exceptional support 
                and continuously improving our platform based on customer feedback.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="w-5/12"></div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full">
                    <span className="text-white font-bold">{item.year.substring(2)}</span>
                  </div>
                  <div className={`w-5/12 p-4 bg-white rounded-xl shadow-sm ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                    <div className="mb-1 text-primary-600 font-bold">{item.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500">Photo placeholder</p>
                    {/* Replace with actual image */}
                    {/* <Image
                      src={member.image}
                      width={200}
                      height={200}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
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
            Join our growing team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about marketing technology and data analytics.
          </p>
          <Link href="/careers">
            <motion.button
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 