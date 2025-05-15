'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `
        This Privacy Policy describes how InfluTrack ("we," "our," or "us") collects, uses, and shares your information when you use our website, services, and applications (collectively, the "Services").
        
        By using our Services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
        
        We use your Personal Information for providing and improving the Services. We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
      `
    },
    {
      title: 'Information Collection and Use',
      content: `
        We collect several different types of information for various purposes to provide and improve our Services to you.

        **Personal Information**

        While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Information"). This may include, but is not limited to:

        * Email address
        * First name and last name
        * Phone number
        * Company name
        * Cookies and Usage Data

        **Usage Data**

        We may also collect information on how the Services are accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Services that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
      `
    },
    {
      title: 'Tracking & Cookies Data',
      content: `
        We use cookies and similar tracking technologies to track activity on our Services and hold certain information.

        Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.

        Examples of Cookies we use:

        * **Session Cookies:** We use Session Cookies to operate our Services.
        * **Preference Cookies:** We use Preference Cookies to remember your preferences and various settings.
        * **Security Cookies:** We use Security Cookies for security purposes.
        * **Advertising Cookies:** Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.
      `
    },
    {
      title: 'Use of Data',
      content: `
        InfluTrack uses the collected data for various purposes:

        * To provide and maintain our Services
        * To notify you about changes to our Services
        * To allow you to participate in interactive features of our Services when you choose to do so
        * To provide customer support
        * To gather analysis or valuable information so that we can improve our Services
        * To monitor the usage of our Services
        * To detect, prevent and address technical issues
        * To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information
      `
    },
    {
      title: 'Transfer of Data',
      content: `
        Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.

        If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Information, to the United States and process it there.

        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

        InfluTrack will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Information will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
      `
    },
    {
      title: 'Disclosure of Data',
      content: `
        We may disclose your Personal Information in the good faith belief that such action is necessary to:

        * Comply with a legal obligation
        * Protect and defend the rights or property of InfluTrack
        * Prevent or investigate possible wrongdoing in connection with the Services
        * Protect the personal safety of users of the Services or the public
        * Protect against legal liability
      `
    },
    {
      title: 'Security of Data',
      content: `
        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      `
    },
    {
      title: 'Your Data Protection Rights',
      content: `
        If you are a resident of the European Economic Area (EEA), you have certain data protection rights. InfluTrack aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.

        If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.

        In certain circumstances, you have the following data protection rights:

        * The right to access, update or to delete the information we have on you
        * The right of rectification — the right to have your information corrected if it is inaccurate or incomplete
        * The right to object to our processing of your Personal Information
        * The right of restriction — the right to request that we restrict the processing of your personal information
        * The right to data portability — the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format
        * The right to withdraw consent — the right to withdraw your consent at any time where InfluTrack relied on your consent to process your personal information
      `
    },
    {
      title: 'Service Providers',
      content: `
        We may employ third party companies and individuals to facilitate our Services ("Service Providers"), to provide the Services on our behalf, to perform Service-related services, or to assist us in analyzing how our Services are used.

        These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      `
    },
    {
      title: 'Analytics',
      content: `
        We may use third-party Service Providers to monitor and analyze the use of our Services.

        **Google Analytics**

        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Services. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.

        For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy
      `
    },
    {
      title: 'Children\'s Privacy',
      content: `
        Our Services are not intended for use by children under the age of 13 ("Children").

        We do not knowingly collect personally identifiable information from Children. If you are a parent or guardian and you are aware that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from Children without verification of parental consent, we take steps to remove that information from our servers.
      `
    },
    {
      title: 'Changes to This Privacy Policy',
      content: `
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.

        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      `
    },
    {
      title: 'Contact Us',
      content: `
        If you have any questions about this Privacy Policy, please contact us:

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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last Updated: June 1, 2024
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-16">
          <div className="mb-8">
            <nav className="hidden lg:block sticky top-24">
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

          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={`section-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            If you have any questions about our Privacy Policy, please <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-primary-600 hover:underline">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 