'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import SearchBar from '@/components/search/SearchBar';
import FiltersSidebar from '@/components/search/FiltersSidebar';
import InfluencerCard from '@/components/search/InfluencerCard';

// Mock influencer data - in a real app this would come from an API
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
  },
  {
    id: 5,
    name: 'David Miller',
    username: '@davidmiller',
    platform: 'twitter',
    followers: '850K',
    engagement: '4.2%',
    niche: 'Finance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    username: '@lisaanderson',
    platform: 'tiktok',
    followers: '2.1M',
    engagement: '5.7%',
    niche: 'Comedy',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    id: 7,
    name: 'John Wilson',
    username: '@johnwilson',
    platform: 'youtube',
    followers: '4.5M',
    engagement: '3.2%',
    niche: 'Travel',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    id: 8,
    name: 'Megan Roberts',
    username: '@meganroberts',
    platform: 'instagram',
    followers: '980K',
    engagement: '5.9%',
    niche: 'Beauty',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
  },
];

interface Influencer {
  id: number;
  name: string;
  username: string;
  platform: string;
  followers: string;
  engagement: string;
  niche: string;
  image: string;
}

interface Filters {
  platform?: string[];
  minFollowers?: number;
  minEngagement?: number;
  niches?: string[];
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filters>({});
  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>(mockInfluencers);
  const [isLoading, setIsLoading] = useState(false);

  // Apply search and filters
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let results = [...mockInfluencers];
      
      // Apply search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        results = results.filter(
          (influencer) =>
            influencer.name.toLowerCase().includes(query) ||
            influencer.username.toLowerCase().includes(query) ||
            influencer.niche.toLowerCase().includes(query) ||
            influencer.platform.toLowerCase().includes(query)
        );
      }
      
      // Apply platform filter
      if (activeFilters.platform && activeFilters.platform.length > 0) {
        results = results.filter((influencer) => {
          const platforms = activeFilters.platform || [];
          return platforms.map(p => p.toLowerCase()).includes(influencer.platform.toLowerCase());
        });
      }
      
      // Apply followers filter
      if (activeFilters.minFollowers && activeFilters.minFollowers > 0) {
        results = results.filter((influencer) => {
          const followers = parseFloat(influencer.followers.replace(/[^0-9.]/g, '')) * 
                         (influencer.followers.includes('M') ? 1000000 : 
                          influencer.followers.includes('K') ? 1000 : 1);
          return followers >= (activeFilters.minFollowers || 0);
        });
      }
      
      // Apply engagement filter
      if (activeFilters.minEngagement && activeFilters.minEngagement > 0) {
        results = results.filter((influencer) => {
          const engagement = parseFloat(influencer.engagement);
          return engagement >= (activeFilters.minEngagement || 0);
        });
      }
      
      // Apply niches filter
      if (activeFilters.niches && activeFilters.niches.length > 0) {
        results = results.filter((influencer) => {
          const niches = activeFilters.niches || [];
          return niches.map(n => n.toLowerCase()).includes(influencer.niche.toLowerCase());
        });
      }
      
      setFilteredInfluencers(results);
      setIsLoading(false);
    }, 500); // 500ms delay to simulate loading
    
    return () => clearTimeout(timer);
  }, [searchQuery, activeFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleApplyFilters = (filters: Filters) => {
    setActiveFilters(filters);
    setIsFilterSidebarOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Influencers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect influencers for your brand across all platforms with our advanced search filters.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:flex-1">
            <SearchBar onSearch={handleSearch} />
          </div>
          <motion.button
            onClick={() => setIsFilterSidebarOpen(true)}
            className="flex items-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter className="text-primary-600" />
            <span>Filters</span>
          </motion.button>
        </div>

        {/* Active Filters Display */}
        {Object.keys(activeFilters).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {activeFilters.platform && activeFilters.platform.length > 0 && (
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                Platforms: {activeFilters.platform.join(', ')}
              </div>
            )}
            {activeFilters.minFollowers && activeFilters.minFollowers > 0 && (
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                Min Followers: {activeFilters.minFollowers.toLocaleString()}
              </div>
            )}
            {activeFilters.minEngagement && activeFilters.minEngagement > 0 && (
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                Min Engagement: {activeFilters.minEngagement}%
              </div>
            )}
            {activeFilters.niches && activeFilters.niches.length > 0 && (
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                Niches: {activeFilters.niches.join(', ')}
              </div>
            )}
            <motion.button
              onClick={() => setActiveFilters({})}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear All
            </motion.button>
          </motion.div>
        )}

        {/* Filtered Results */}
        {isLoading ? (
          <div className="flex justify-center my-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredInfluencers.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredInfluencers.map((influencer) => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No influencers found</h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters to find more influencers.
            </p>
          </motion.div>
        )}
      </div>

      {/* Filters Sidebar */}
      <FiltersSidebar
        isOpen={isFilterSidebarOpen}
        onClose={() => setIsFilterSidebarOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default SearchPage; 