'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const CookiePolicyPage = () => {
  const sections = [
    {
      title: 'What Are Cookies',
      content: `
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.

        Cookies help website owners understand how users interact with their website, remember your preferences, and offer you a more personalized experience. They can also help make the advertisements you see online more relevant to you and your interests.
      `
    },
    {
      title: 'How We Use Cookies',
      content: `
        InfluTrack uses cookies for various purposes, including:

        * **Essential Cookies**: These are necessary for the operation of our website. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.

        * **Functionality Cookies**: These allow us to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts, and other customizable parts of web pages.

        * **Analytics Cookies**: We use analytics cookies to collect information about how visitors use our website, including which pages visitors go to most often and if they receive error messages from certain pages. These cookies don't collect information that identifies you; all the information they collect is aggregated and anonymous.

        * **Advertising Cookies**: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.

        * **Social Media Cookies**: Our site may include features from social media platforms, such as "like" buttons. These features may collect your IP address and which page you are visiting on our site, and may set a cookie to enable the feature to function properly.
      `
    },
    {
      title: 'Types of Cookies We Use',
      content: `
        Our website uses both first-party and third-party cookies:

        * **First-party cookies** are cookies that are set by our website. They are only read by our website.

        * **Third-party cookies** are cookies that are set by parties other than InfluTrack. These may include analytics services, advertising networks, or social media platforms.

        **Session and Persistent Cookies**

        We also categorize cookies as "session" or "persistent":

        * **Session cookies** are temporary and are deleted from your device when you close your web browser.

        * **Persistent cookies** remain on your device for a set period of time specified in the cookie or until you delete them manually.
      `
    },
    {
      title: 'Specific Cookies We Use',
      content: `
        Below is a detailed list of the cookies we use on our website:

        **Essential Cookies**
        | Name | Provider | Purpose | Expiry |
        |------|----------|---------|--------|
        | session_id | InfluTrack | Maintains user session | Session |
        | XSRF-TOKEN | InfluTrack | Helps prevent cross-site request forgery attacks | Session |
        | cookie_consent | InfluTrack | Stores your cookie consent preferences | 1 year |

        **Functionality Cookies**
        | Name | Provider | Purpose | Expiry |
        |------|----------|---------|--------|
        | language | InfluTrack | Remembers your preferred language | 30 days |
        | ui_theme | InfluTrack | Stores your UI theme preference (light/dark) | 90 days |

        **Analytics Cookies**
        | Name | Provider | Purpose | Expiry |
        |------|----------|---------|--------|
        | _ga | Google Analytics | Distinguishes users | 2 years |
        | _ga_* | Google Analytics | Persistent cookie for Google Analytics | 2 years |
        | _gid | Google Analytics | Distinguishes users | 24 hours |
        | _gat | Google Analytics | Throttles request rate | 1 minute |

        **Advertising Cookies**
        | Name | Provider | Purpose | Expiry |
        |------|----------|---------|--------|
        | _fbp | Facebook | Used by Facebook to deliver advertisements | 3 months |
        | ads_prefs | InfluTrack | Stores advertisement preferences | 90 days |

        This list may be updated periodically as our website evolves and we engage different service providers.
      `
    },
    {
      title: 'Your Choices Regarding Cookies',
      content: `
        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impair your overall user experience, as it will no longer be personalized to you.

        You can adjust your cookie preferences in most browsers by doing the following:

        **Chrome**
        1. Click the menu icon (three dots) in the top right corner
        2. Select "Settings"
        3. Click "Privacy and security"
        4. Click "Cookies and other site data"
        5. Adjust your preferences

        **Firefox**
        1. Click the menu icon (three lines) in the top right corner
        2. Select "Options" (Windows) or "Preferences" (Mac)
        3. Select "Privacy & Security"
        4. Adjust your preferences in the "Cookies and Site Data" section

        **Safari**
        1. Go to "Preferences"
        2. Click on the "Privacy" tab
        3. Adjust your preferences in the "Cookies and website data" section

        **Microsoft Edge**
        1. Click the menu icon (three dots) in the top right corner
        2. Select "Settings"
        3. Click "Site permissions"
        4. Click "Cookies and site data"
        5. Adjust your preferences

        You can also visit [www.allaboutcookies.org](http://www.allaboutcookies.org) for more information about cookies and how to manage them.
      `
    },
    {
      title: 'Cookie Consent',
      content: `
        When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies.

        You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.

        If you choose to decline non-essential cookies, some features of our website may not function as intended.
      `
    },
    {
      title: 'Do Not Track Signals',
      content: `
        Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Our website does not currently respond to "Do Not Track" signals.
      `
    },
    {
      title: 'Changes to Our Cookie Policy',
      content: `
        We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website. We encourage you to periodically review this page for the latest information on our cookie practices.
      `
    },
    {
      title: 'Contact Us',
      content: `
        If you have any questions about our Cookie Policy, please contact us:

        * By email: privacy@influtrack.com
        * By phone: +1 (555) 123-4567
        * By mail: 123 Market Street, Suite 456, San Francisco, CA 94105
      `
    }
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

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last Updated: June 1, 2024
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-16">
          <div className="lg:flex">
            {/* Table of Contents - Visible on large screens */}
            <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <nav className="hidden lg:block">
                  <ul className="space-y-2">
                    {sections.map((section, index) => (
                      <li key={index}>
                        <a 
                          href={`#section-${index}`}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="prose prose-lg max-w-none">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    id={`section-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div className="text-gray-600 space-y-4">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            This Cookie Policy is part of our <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicyPage; 