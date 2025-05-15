'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaCode, FaChartLine, FaUsers, FaUserTie, FaBriefcase } from 'react-icons/fa';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote Option)',
      type: 'Full-time',
      description: 'We\'re looking for an experienced Full Stack Developer to join our engineering team and help build the next generation of our influencer marketing platform.',
      responsibilities: [
        'Design, develop, and maintain web applications using React, Next.js, and Node.js',
        'Work with our data scientists to implement machine learning models into the platform',
        'Collaborate with product managers and designers to deliver high-quality user experiences',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and mentor junior developers',
      ],
      requirements: [
        '5+ years of experience in full stack development',
        'Strong proficiency in JavaScript/TypeScript, React, and Node.js',
        'Experience with Next.js and modern frontend frameworks',
        'Understanding of database design and optimization',
        'Strong problem-solving skills and attention to detail',
      ],
    },
    {
      id: 2,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our data science team to develop algorithms and models that power our influencer analytics and prediction capabilities.',
      responsibilities: [
        'Build and improve machine learning models for influencer performance prediction',
        'Analyze large datasets of social media and engagement metrics',
        'Develop recommendation algorithms for influencer discovery',
        'Work closely with engineering to implement models into production',
        'Stay current with the latest advancements in machine learning and data science',
      ],
      requirements: [
        'MS or PhD in Computer Science, Statistics, or related field',
        'Experience with Python and data science libraries (NumPy, Pandas, Scikit-learn)',
        'Knowledge of machine learning algorithms and statistical modeling',
        'Experience with NLP and recommendation systems is a plus',
        'Strong analytical and problem-solving skills',
      ],
    },
    {
      id: 3,
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We\'re seeking a Product Marketing Manager to help position and promote our platform to potential customers in the influencer marketing space.',
      responsibilities: [
        'Develop and execute product marketing strategies and campaigns',
        'Create compelling messaging and positioning for our platform',
        'Produce marketing materials, including case studies, blog posts, and presentations',
        'Work with sales to understand customer needs and objections',
        'Keep up with industry trends and competitor activities',
      ],
      requirements: [
        '3+ years of experience in product marketing, preferably in SaaS or MarTech',
        'Excellent writing and communication skills',
        'Understanding of influencer marketing and social media landscape',
        'Experience with marketing analytics and campaign measurement',
        'Strategic thinker with strong project management skills',
      ],
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers achieve their goals and maximize their ROI with our platform as a dedicated Customer Success Manager.',
      responsibilities: [
        'Serve as the primary point of contact for a portfolio of customers',
        'Ensure successful onboarding and adoption of our platform',
        'Identify upsell opportunities and work with sales to expand accounts',
        'Monitor customer health metrics and address potential churn risks',
        'Gather feedback for product improvement and feature requests',
      ],
      requirements: [
        '2+ years of experience in customer success or account management',
        'Strong communication and relationship-building skills',
        'Experience with CRM software and customer success tools',
        'Problem-solving mindset and ability to work cross-functionally',
        'Knowledge of digital marketing or influencer marketing is a plus',
      ],
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We\'re looking for a talented UI/UX Designer to create beautiful, intuitive interfaces for our platform and help enhance the overall user experience.',
      responsibilities: [
        'Design user interfaces for web applications and dashboards',
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Collaborate with product managers and engineers to implement designs',
        'Conduct user research and usability testing',
        'Develop and maintain our design system',
      ],
      requirements: [
        '3+ years of experience in UI/UX design for web applications',
        'Proficiency with design tools like Figma, Sketch, or Adobe XD',
        'Knowledge of design principles, typography, and color theory',
        'Experience with user research and usability testing',
        'Portfolio showcasing your design process and solutions',
      ],
    },
  ];

  const departments = ['All', 'Engineering', 'Data', 'Marketing', 'Customer Success', 'Design'];

  const filteredJobs = activeTab === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department.toLowerCase() === activeTab.toLowerCase());

  const perks = [
    {
      icon: <FaUserTie className="text-primary-500 text-4xl" />,
      title: 'Competitive Compensation',
      description: 'Competitive salary, equity options, and performance bonuses to reward your contributions.',
    },
    {
      icon: <FaUsers className="text-primary-500 text-4xl" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance, plus wellness programs to keep you at your best.',
    },
    {
      icon: <FaChartLine className="text-primary-500 text-4xl" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning with education stipends, conference budgets, and clear career advancement paths.',
    },
    {
      icon: <FaCode className="text-primary-500 text-4xl" />,
      title: 'Flexible Work',
      description: 'Remote-friendly culture with flexible hours and generous PTO to maintain work-life balance.',
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
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re building the future of influencer marketing and we&apos;re looking for talented individuals to join us 
            on this exciting journey. Explore our open positions and find where you fit in.
          </p>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join InfluTrack?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Openings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          
          {/* Department Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {departments.map((department, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(department.toLowerCase())}
                className={`m-2 px-4 py-2 rounded-md font-medium ${
                  activeTab === department.toLowerCase()
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {department}
              </motion.button>
            ))}
          </div>
          
          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap items-center mt-2">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                          {job.department}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                          {job.location}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      className="mt-4 md:mt-0 px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaBriefcase className="mr-2" />
                      Apply Now
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No open positions in this department at the moment. Please check back later!</p>
            </div>
          )}
        </motion.div>

        {/* Not Finding a Match Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-primary-50 rounded-xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t see a role that matches your skills?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;re always on the lookout for talented individuals. Send us your resume, and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link href="/contact">
            <motion.button
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage; 