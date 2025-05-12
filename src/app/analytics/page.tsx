'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaChartPie, FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for analytics
const campaignPerformanceData = [
  { month: 'Jan', conversions: 340, reach: 45000, engagement: 5800 },
  { month: 'Feb', conversions: 420, reach: 52000, engagement: 6200 },
  { month: 'Mar', conversions: 510, reach: 61000, engagement: 7500 },
  { month: 'Apr', conversions: 580, reach: 65000, engagement: 8100 },
  { month: 'May', conversions: 620, reach: 70000, engagement: 8800 },
  { month: 'Jun', conversions: 670, reach: 76000, engagement: 9300 },
];

const platformData = [
  { name: 'Instagram', value: 45 },
  { name: 'TikTok', value: 30 },
  { name: 'YouTube', value: 15 },
  { name: 'Twitter', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

const niches = [
  { name: 'Fashion', roi: 3.8, campaigns: 12, influencers: 24 },
  { name: 'Fitness', roi: 4.2, campaigns: 8, influencers: 16 },
  { name: 'Tech', roi: 3.2, campaigns: 5, influencers: 10 },
  { name: 'Beauty', roi: 4.5, campaigns: 10, influencers: 18 },
  { name: 'Travel', roi: 3.6, campaigns: 6, influencers: 12 },
];

const overallStats = {
  totalInfluencers: 124,
  activeCampaigns: 28,
  totalReach: '4.5M',
  totalEngagement: '680K',
  averageROI: '3.9x',
  conversionRate: '2.8%',
};

const AnalyticsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('6m');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track the performance of your influencer marketing campaigns and measure ROI.
          </p>
        </motion.div>
        
        {/* Time Frame Selector */}
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-lg shadow-sm inline-flex">
            {['1m', '3m', '6m', '1y', 'All'].map((timeframe) => (
              <motion.button
                key={timeframe}
                className={`px-4 py-2 ${
                  selectedTimeFrame === timeframe ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTimeFrame(timeframe)}
              >
                {timeframe}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Metrics Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg mr-4">
                <FaUsers size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Influencers</p>
                <h3 className="text-2xl font-bold">{overallStats.totalInfluencers}</h3>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary-500" 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
                <FaChartLine size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Campaigns</p>
                <h3 className="text-2xl font-bold">{overallStats.activeCampaigns}</h3>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500" 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                <FaDollarSign size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average ROI</p>
                <h3 className="text-2xl font-bold">{overallStats.averageROI}</h3>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-purple-500" 
                initial={{ width: 0 }}
                animate={{ width: '78%' }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>
        </motion.div>
        
        {/* Campaign Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-10"
        >
          <h2 className="text-xl font-semibold mb-6">Campaign Performance Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={campaignPerformanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#82ca9d"
                  strokeWidth={2} 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="reach" 
                  stroke="#ffc658"
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* Platform Distribution and ROI by Niche */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Campaigns by Platform</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* ROI by Niche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold mb-6">ROI by Niche</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={niches}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="roi" name="ROI (x)" fill="#8884d8" />
                  <Bar dataKey="campaigns" name="Campaigns" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Additional Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Total Reach</p>
              <p className="text-2xl font-bold">{overallStats.totalReach}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+18%</span>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Total Engagement</p>
              <p className="text-2xl font-bold">{overallStats.totalEngagement}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+22%</span>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold">{overallStats.conversionRate}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+7%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 