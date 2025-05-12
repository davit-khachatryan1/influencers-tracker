'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Mock data
const mockEngagementData = [
  { month: 'Jan', engagement: 3.2 },
  { month: 'Feb', engagement: 3.8 },
  { month: 'Mar', engagement: 4.1 },
  { month: 'Apr', engagement: 3.9 },
  { month: 'May', engagement: 4.5 },
  { month: 'Jun', engagement: 5.2 },
  { month: 'Jul', engagement: 4.8 },
  { month: 'Aug', engagement: 5.5 },
  { month: 'Sep', engagement: 5.1 },
  { month: 'Oct', engagement: 4.9 },
  { month: 'Nov', engagement: 5.3 },
  { month: 'Dec', engagement: 5.8 },
];

interface EngagementChartProps {
  influencerId: number | string;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ influencerId }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      // In a real app, you'd fetch data based on the influencerId
      setChartData(mockEngagementData);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [influencerId]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-primary-600">{`Engagement: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-6">Engagement Rate Over Time</h3>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `${value}%`}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
                domain={[0, 'dataMax + 1']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="engagement" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                fill="url(#colorEngagement)" 
                activeDot={{ r: 6, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Avg. Engagement</p>
          <p className="font-semibold text-lg">4.7%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Highest</p>
          <p className="font-semibold text-lg">5.8%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Lowest</p>
          <p className="font-semibold text-lg">3.2%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Growth</p>
          <p className="font-semibold text-lg text-green-600">+2.6%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EngagementChart; 