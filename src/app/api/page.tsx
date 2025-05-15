'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaCode, FaDatabase, FaLock, FaRocket } from 'react-icons/fa';
import { useState } from 'react';

const ApiPage = () => {
  const [activeDocTab, setActiveDocTab] = useState('overview');
  const [activeCodeTab, setActiveCodeTab] = useState('javascript');

  const apiFeatures = [
    {
      icon: <FaDatabase className="text-primary-500 text-4xl" />,
      title: 'Comprehensive Data',
      description: 'Access detailed influencer metrics, audience demographics, and performance analytics across all major social platforms.',
    },
    {
      icon: <FaCode className="text-primary-500 text-4xl" />,
      title: 'Simple Integration',
      description: 'RESTful API with clear documentation, SDKs for popular languages, and straightforward authentication.',
    },
    {
      icon: <FaLock className="text-primary-500 text-4xl" />,
      title: 'Secure Access',
      description: 'Enterprise-grade security with OAuth 2.0 authentication, rate limiting, and detailed access logs.',
    },
    {
      icon: <FaRocket className="text-primary-500 text-4xl" />,
      title: 'High Performance',
      description: 'Fast response times with 99.9% uptime SLA and global CDN distribution for reliable access.',
    },
  ];

  const codeSnippets = {
    javascript: `// Using fetch API
const API_KEY = 'your_api_key';

fetch('https://api.influtrack.com/v1/influencers?platform=instagram&niche=fashion', {
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,

    python: `# Using requests library
import requests

API_KEY = 'your_api_key'
headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.influtrack.com/v1/influencers',
    params={'platform': 'instagram', 'niche': 'fashion'},
    headers=headers
)

if response.status_code == 200:
    influencers = response.json()
    print(influencers)
else:
    print(f"Error: {response.status_code}")`,

    curl: `# Using curl
curl -X GET "https://api.influtrack.com/v1/influencers?platform=instagram&niche=fashion" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json"`,
  };

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
            API Documentation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Integrate InfluTrack's powerful influencer data and analytics directly into your applications.
          </p>
        </motion.div>

        {/* API Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {apiFeatures.map((feature, index) => (
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

        {/* API Documentation */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-16">
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['overview', 'endpoints', 'authentication', 'rate-limits'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveDocTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeDocTab === tab
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="py-4">
            {activeDocTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Overview</h2>
                <p className="text-gray-600 mb-6">
                  The InfluTrack API provides programmatic access to our database of influencers, metrics, and analytics. 
                  Use our API to search for influencers, retrieve detailed profiles, track metrics over time, and more.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Base URL</h3>
                <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                  <code>https://api.influtrack.com/v1</code>
                </pre>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Format</h3>
                <p className="text-gray-600 mb-3">
                  All API responses are returned in JSON format. Each response includes a <code>status</code> field 
                  indicating success or failure, and a <code>data</code> field containing the requested information.
                </p>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`{
  "status": "success",
  "data": {
    // Response data here
  }
}`}</code>
                </pre>
              </div>
            )}

            {activeDocTab === 'endpoints' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Endpoints</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GET /influencers</h3>
                  <p className="text-gray-600 mb-3">
                    Search and filter influencers based on various criteria.
                  </p>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Parameters</h4>
                  <ul className="list-disc pl-6 mb-4 text-gray-600">
                    <li><code>platform</code> - Filter by social media platform (instagram, tiktok, youtube, etc.)</li>
                    <li><code>niche</code> - Filter by content category (fashion, fitness, tech, etc.)</li>
                    <li><code>followers_min</code> - Minimum follower count</li>
                    <li><code>followers_max</code> - Maximum follower count</li>
                    <li><code>engagement_rate_min</code> - Minimum engagement rate percentage</li>
                    <li><code>location</code> - Filter by geographic location</li>
                    <li><code>limit</code> - Number of results to return (default: 20, max: 100)</li>
                    <li><code>offset</code> - Pagination offset (default: 0)</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GET /influencers/{'{id}'}</h3>
                  <p className="text-gray-600 mb-3">
                    Retrieve detailed information about a specific influencer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GET /analytics/influencer/{'{id}'}</h3>
                  <p className="text-gray-600 mb-3">
                    Get analytics and performance metrics for a specific influencer.
                  </p>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Parameters</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li><code>period</code> - Time period for analytics (30d, 90d, 6m, 1y)</li>
                    <li><code>metrics</code> - Comma-separated list of metrics to include</li>
                  </ul>
                </div>
              </div>
            )}

            {activeDocTab === 'authentication' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
                <p className="text-gray-600 mb-6">
                  All API requests require authentication using an API key. You can obtain an API key from your account dashboard.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API Key Authentication</h3>
                <p className="text-gray-600 mb-3">
                  Include your API key in the Authorization header of your requests:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                  <code>Authorization: Bearer your_api_key</code>
                </pre>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API Key Security</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Keep your API key secure and do not share it publicly.</li>
                  <li>If you believe your API key has been compromised, you can regenerate it from your account dashboard.</li>
                  <li>Use environment variables or secure vaults to store your API key in your applications.</li>
                </ul>
              </div>
            )}

            {activeDocTab === 'rate-limits' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Limits</h2>
                <p className="text-gray-600 mb-6">
                  To ensure fair usage and system stability, the API enforces rate limits based on your subscription plan.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests per Minute</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests per Day</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Starter</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">30</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">5,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Professional</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">60</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">20,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Enterprise</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">120</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">50,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-600 mt-6">
                  Rate limit information is included in the headers of each API response:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md mt-3 overflow-x-auto">
                  <code>{`X-RateLimit-Limit: 60
X-RateLimit-Remaining: 58
X-RateLimit-Reset: 1620000000`}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Code Examples
          </h2>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="flex border-b border-gray-700">
              {Object.keys(codeSnippets).map((lang) => (
                <button
                  key={lang}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeCodeTab === lang
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCodeTab(lang)}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>
            <pre className="p-4 text-white overflow-x-auto">
              <code>{codeSnippets[activeCodeTab as keyof typeof codeSnippets]}</code>
            </pre>
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
            Ready to get started with our API?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Sign up for a developer account to receive your API key and start integrating with InfluTrack today.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get API Access
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ApiPage; 