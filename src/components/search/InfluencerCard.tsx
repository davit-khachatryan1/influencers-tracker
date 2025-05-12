'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

interface InfluencerCardProps {
  influencer: {
    id: number;
    name: string;
    username: string;
    platform: string;
    followers: string;
    engagement: string;
    niche: string;
    image: string;
  };
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({ influencer }) => {
  // Platform icon mapping
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <FaInstagram className="text-pink-500" />;
      case 'tiktok':
        return <FaTiktok className="text-black" />;
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

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md"
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="relative h-52">
        <Image
          src={`${influencer.image}?auto=format&fit=crop&w=500&q=80`}
          alt={influencer.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center mb-1">
            {getPlatformIcon(influencer.platform)}
            <span className="ml-2 font-medium capitalize">{influencer.platform}</span>
          </div>
          <h3 className="text-xl font-bold truncate">{influencer.name}</h3>
          <p className="text-sm opacity-80 truncate">{influencer.username}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Followers</p>
            <p className="font-semibold">{influencer.followers}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Engagement</p>
            <p className="font-semibold">{influencer.engagement}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Niche</p>
            <p className="font-semibold">{influencer.niche}</p>
          </div>
        </div>
        <Link href={`/profile/${influencer.id}`} passHref>
          <motion.button
            className="w-full py-2 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Profile
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default InfluencerCard; 