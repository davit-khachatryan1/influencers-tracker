# InfluTrack - Influencer Tracking Website

A modern, responsive web application for tracking and analyzing influencers across various social media platforms, showing detailed performance metrics and statistics.

## Overview

InfluTrack provides users with the tools to identify and analyze top influencers, compare them based on various criteria, and make data-driven decisions about influencer partnerships. This project uses Next.js and Tailwind CSS with a focus on high-performance animations and a visually appealing user interface.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices, from mobile to desktop
- **Smooth Animations**: GPU-accelerated animations for optimal performance using Framer Motion
- **Interactive Charts**: Data visualization with Recharts for engagement metrics and analytics
- **Search & Filter**: Advanced search functionality with multiple filtering options
- **Influencer Profiles**: Detailed influencer profiles with performance metrics
- **Comparison Tool**: Side-by-side comparison of multiple influencers
- **Analytics Dashboard**: Campaign performance tracking and ROI metrics

## Pages

- **Home**: Introduction to the platform with trending influencers
- **Search**: Search and filter functionality for finding influencers
- **Profile**: Detailed influencer profiles with engagement metrics and top posts
- **Comparison**: Side-by-side comparison of multiple influencers
- **Analytics**: Dashboard for tracking campaign performance

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Charts**: [Recharts](https://recharts.org/)

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/influencer-tracker.git
cd influencer-tracker

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
influencer-tracker/
├── src/                      # Application source code
│   ├── app/                  # App router pages
│   │   ├── page.tsx          # Home page
│   │   ├── search/           # Search page
│   │   ├── profile/          # Profile page
│   │   ├── comparison/       # Comparison page
│   │   └── analytics/        # Analytics page
│   ├── components/           # React components
│   │   ├── layout/           # Layout components (Header, Footer, etc.)
│   │   ├── home/             # Home page components
│   │   ├── search/           # Search page components
│   │   ├── profile/          # Profile page components
│   │   ├── comparison/       # Comparison page components
│   │   ├── analytics/        # Analytics page components
│   │   └── ui/               # Shared UI components
├── public/                   # Static assets
└── tailwind.config.js        # Tailwind CSS configuration
```

## Performance Optimization

- Lazy loading of images using Next.js Image component
- Code splitting and dynamic imports for better performance
- GPU-accelerated animations using transform and opacity
- Minimized layout shifts during page load

## Future Enhancements

- User authentication and profile management
- Real-time data updates and notifications
- Export functionality for analytics and reports
- API integration with social media platforms
- Mobile application version

## License

This project is licensed under the MIT License - see the LICENSE file for details.
