'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook, FaPlus } from 'react-icons/fa';

// Mock data for influencers
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
    postsPerWeek: 5,
    audienceGender: { female: 75, male: 25 },
    audienceAge: { '18-24': 45, '25-34': 32, '35-44': 15, '45+': 8 },
    avgLikes: '89K',
    avgComments: '2.3K',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    username: '@sarahwilliams',
    platform: 'tiktok',
    followers: '1.8M',
    engagement: '5.3%',
    niche: 'Dance',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    postsPerWeek: 12,
    audienceGender: { female: 68, male: 32 },
    audienceAge: { '18-24': 62, '25-34': 25, '35-44': 10, '45+': 3 },
    avgLikes: '102K',
    avgComments: '4.1K',
  },
  {
    id: 3,
    name: 'Mike Thompson',
    username: '@mikethompson',
    platform: 'youtube',
    followers: '3.2M',
    engagement: '3.9%',
    niche: 'Tech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    postsPerWeek: 2,
    audienceGender: { female: 35, male: 65 },
    audienceAge: { '18-24': 28, '25-34': 45, '35-44': 20, '45+': 7 },
    avgLikes: '128K',
    avgComments: '8.7K',
  },
  {
    id: 4,
    name: 'Emily Davis',
    username: '@emilydavis',
    platform: 'instagram',
    followers: '1.2M',
    engagement: '6.1%',
    niche: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    postsPerWeek: 8,
    audienceGender: { female: 82, male: 18 },
    audienceAge: { '18-24': 38, '25-34': 42, '35-44': 15, '45+': 5 },
    avgLikes: '72K',
    avgComments: '3.8K',
  },
];

const ComparisonPage = () => {
  const [selectedInfluencers, setSelectedInfluencers] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Preselect two influencers for demo purposes
    setSelectedInfluencers([mockInfluencers[0], mockInfluencers[1]]);
  }, []);

  // Get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <FaInstagram className="text-pink-500" />;
      case 'tiktok':
        return <FaTiktok />;
      case 'youtube':
        return <FaYoutube className="text-red-600" />;
      case 'twitter':
        return <FaTwitter className="text-blue-400" />;
      case 'facebook':
        return <FaFacebook className="text-blue-600" />;
      default:
        return null;
    }
  };

  const addInfluencer = (influencer: any) => {
    if (selectedInfluencers.some(inf => inf.id === influencer.id)) return;
    setSelectedInfluencers([...selectedInfluencers, influencer]);
    setShowDropdown(false);
  };

  const removeInfluencer = (influencerId: number) => {
    setSelectedInfluencers(selectedInfluencers.filter(inf => inf.id !== influencerId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary-600 hover:underline mb-8">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Influencers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare multiple influencers side-by-side to find the best match for your campaign.
          </p>
        </motion.div>
        
        {/* Influencer Selector */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="flex flex-wrap gap-4 items-center">
            {selectedInfluencers.map((influencer) => (
              <motion.div
                key={influencer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center bg-gray-100 rounded-lg p-2 pr-3"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden relative mr-2">
                  <Image
                    src={`${influencer.image}?auto=format&fit=crop&w=150&q=80`}
                    alt={influencer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{influencer.name}</span>
                <button
                  onClick={() => removeInfluencer(influencer.id)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </motion.div>
            ))}
            
            {selectedInfluencers.length < 4 && (
              <div className="relative">
                <motion.button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center bg-primary-50 text-primary-600 rounded-lg p-2 pr-3 hover:bg-primary-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlus className="mr-2" />
                  Add Influencer
                </motion.button>
                
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-10"
                  >
                    <div className="p-2 max-h-64 overflow-y-auto">
                      {mockInfluencers
                        .filter(inf => !selectedInfluencers.some(selected => selected.id === inf.id))
                        .map(influencer => (
                          <motion.div
                            key={influencer.id}
                            className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                            onClick={() => addInfluencer(influencer)}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden relative mr-2">
                              <Image
                                src={`${influencer.image}?auto=format&fit=crop&w=150&q=80`}
                                alt={influencer.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{influencer.name}</p>
                              <p className="text-sm text-gray-500 flex items-center">
                                {getPlatformIcon(influencer.platform)}
                                <span className="ml-1">{influencer.platform}</span>
                              </p>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Comparison Table */}
        {selectedInfluencers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Metric</th>
                  {selectedInfluencers.map((influencer) => (
                    <th key={influencer.id} className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                          <Image
                            src={`${influencer.image}?auto=format&fit=crop&w=150&q=80`}
                            alt={influencer.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {influencer.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Platform</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        {getPlatformIcon(influencer.platform)}
                        <span className="ml-2 capitalize">{influencer.platform}</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Followers</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      {influencer.followers}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Engagement Rate</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      <span className={influencer.engagement > '5.0%' ? 'text-green-600 font-semibold' : ''}>
                        {influencer.engagement}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Niche</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      {influencer.niche}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Posts per Week</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      {influencer.postsPerWeek}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Avg. Likes</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      {influencer.avgLikes}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Avg. Comments</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      {influencer.avgComments}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Audience Gender</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pink-400" 
                          style={{ width: `${influencer.audienceGender.female}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span>F: {influencer.audienceGender.female}%</span>
                        <span>M: {influencer.audienceGender.male}%</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Audience Age</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      <div className="space-y-1">
                        {Object.entries(influencer.audienceAge).map(([age, percentage]: [string, any]) => (
                          <div key={age} className="flex items-center">
                            <span className="w-12 text-xs">{age}:</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
                              <div 
                                className="h-full bg-primary-400" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-xs">{percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">Actions</td>
                  {selectedInfluencers.map((influencer) => (
                    <td key={influencer.id} className="py-4 px-6 text-sm text-gray-500">
                      <Link href={`/profile/${influencer.id}`} passHref>
                        <motion.button
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Profile
                        </motion.button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <p className="text-gray-600">
              Please select at least one influencer to compare.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonPage; 