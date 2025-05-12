'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaTimes, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

interface FiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

const FiltersSidebar: React.FC<FiltersProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [platform, setPlatform] = useState<string[]>([]);
  const [minFollowers, setMinFollowers] = useState<number>(0);
  const [minEngagement, setMinEngagement] = useState<number>(0);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  
  const platforms = [
    { name: 'Instagram', icon: <FaInstagram className="text-pink-500" /> },
    { name: 'TikTok', icon: <FaTiktok /> },
    { name: 'YouTube', icon: <FaYoutube className="text-red-600" /> },
    { name: 'Twitter', icon: <FaTwitter className="text-blue-400" /> },
    { name: 'Facebook', icon: <FaFacebook className="text-blue-600" /> },
  ];
  
  const niches = [
    'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Technology', 'Gaming', 
    'Lifestyle', 'Business', 'Education', 'Entertainment', 'Art', 'Music', 'Sports'
  ];
  
  const handlePlatformToggle = (platformName: string) => {
    if (platform.includes(platformName)) {
      setPlatform(platform.filter(p => p !== platformName));
    } else {
      setPlatform([...platform, platformName]);
    }
  };
  
  const handleNicheToggle = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter(n => n !== niche));
    } else {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };
  
  const handleReset = () => {
    setPlatform([]);
    setMinFollowers(0);
    setMinEngagement(0);
    setSelectedNiches([]);
  };
  
  const handleApplyFilters = () => {
    onApplyFilters({
      platform,
      minFollowers,
      minEngagement,
      niches: selectedNiches,
    });
  };
  
  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      } 
    },
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      } 
    }
  };
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-50 overflow-y-auto"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <FaFilter className="mr-2 text-primary-600" /> Filters
            </h2>
            <motion.button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={20} />
            </motion.button>
          </div>
          
          {/* Platform Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Platform</h3>
            <div className="space-y-2">
              {platforms.map((plat) => (
                <motion.div 
                  key={plat.name}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <input
                    type="checkbox"
                    id={plat.name}
                    checked={platform.includes(plat.name)}
                    onChange={() => handlePlatformToggle(plat.name)}
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={plat.name} className="flex items-center cursor-pointer">
                    <span className="mr-2">{plat.icon}</span>
                    {plat.name}
                  </label>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Followers Range */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Minimum Followers</h3>
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={minFollowers}
              onChange={(e) => setMinFollowers(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0</span>
              <span>{minFollowers.toLocaleString()} followers</span>
            </div>
          </div>
          
          {/* Engagement Rate */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Minimum Engagement Rate</h3>
            <input
              type="range"
              min="0"
              max="15"
              step="0.1"
              value={minEngagement}
              onChange={(e) => setMinEngagement(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0%</span>
              <span>{minEngagement}%</span>
            </div>
          </div>
          
          {/* Niches */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Niches</h3>
            <div className="flex flex-wrap gap-2">
              {niches.map((niche) => (
                <motion.button
                  key={niche}
                  onClick={() => handleNicheToggle(niche)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedNiches.includes(niche)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {niche}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.button
              onClick={handleReset}
              className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reset
            </motion.button>
            <motion.button
              onClick={handleApplyFilters}
              className="flex-1 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Filters
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FiltersSidebar; 