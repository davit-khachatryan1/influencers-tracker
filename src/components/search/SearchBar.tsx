'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form 
        onSubmit={handleSearch}
        className={`relative flex items-center w-full ${
          isFocused ? 'ring-2 ring-primary-500' : ''
        }`}
      >
        <motion.div
          className="absolute left-4 text-gray-400"
          animate={{ 
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? '#0ea5e9' : '#9ca3af' 
          }}
          transition={{ duration: 0.2 }}
        >
          <FaSearch />
        </motion.div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search influencers by name, platform or niche..."
          className="w-full px-12 py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none"
        />
        
        {searchQuery && (
          <motion.button
            type="button"
            onClick={clearSearch}
            className="absolute right-14 text-gray-400 hover:text-gray-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes />
          </motion.button>
        )}
        
        <motion.button
          type="submit"
          className="absolute right-4 px-2 py-1 bg-primary-600 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SearchBar; 