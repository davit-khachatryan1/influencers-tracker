'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `
        These Terms of Service ("Terms") govern your access to and use of the InfluTrack website, services, and applications (collectively, the "Services"), provided by InfluTrack, Inc. ("InfluTrack," "we," "us," or "our").

        Please read these Terms carefully before using our Services. By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.

        We may update these Terms from time to time. If we make changes, we will notify you by revising the date at the top of the Terms and, in some cases, we may provide you with additional notice. Your continued use of the Services after the updated Terms have been posted constitutes your acceptance of the revised Terms.
      `
    },
    {
      title: 'Eligibility',
      content: `
        You must be at least 18 years of age to access or use our Services. By accessing or using the Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement.

        If you are accessing or using the Services on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In such case, "you" and "your" will refer to both you individually and that entity.
      `
    },
    {
      title: 'Account Registration',
      content: `
        To access certain features of the Services, you may be required to register for an account. When you register, you will be asked to provide certain personal information, such as your name, email address, and a password. You agree to provide accurate, current, and complete information and to update this information to maintain its accuracy.

        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.

        We reserve the right to suspend or terminate your account if any information you provide is inaccurate, misleading, or incomplete, or if you violate these Terms or any applicable law.
      `
    },
    {
      title: 'User Content',
      content: `
        The Services may allow you to create, upload, post, send, receive, store, or share content, including text, images, and other materials (collectively, "User Content"). You retain ownership of any intellectual property rights that you hold in your User Content.

        By creating, uploading, posting, sending, receiving, storing, or sharing User Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free, fully paid, transferable, sublicensable license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit your User Content in all formats and distribution channels now known or hereafter devised (including in connection with the Services and our business and on third-party sites and services).

        You represent and warrant that: (a) you own or control all rights in and to your User Content and have the right to grant the license granted above; and (b) your User Content does not violate these Terms.
      `
    },
    {
      title: 'Prohibited Conduct',
      content: `
        You agree not to engage in any of the following prohibited activities:

        * Use the Services for any illegal purpose or in violation of any local, state, national, or international law;
        * Violate or infringe the rights of others, including their intellectual property, privacy, or publicity rights;
        * Create, upload, post, or transmit any User Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable;
        * Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;
        * Interfere with or disrupt the Services or servers or networks connected to the Services;
        * Attempt to gain unauthorized access to the Services, other accounts, computer systems, or networks connected to the Services;
        * Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful;
        * Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services;
        * Attempt to probe, scan, or test the vulnerability of the Services or any related system or network or breach any security or authentication measures;
        * Avoid, bypass, remove, deactivate, impair, descramble, or otherwise circumvent any technological measure implemented to protect the Services;
        * Harvest or collect email addresses or other contact information of other users from the Services;
        * Create user accounts by automated means or under false pretenses.
      `
    },
    {
      title: 'Intellectual Property',
      content: `
        The Services and all content, features, and functionality thereof, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof (collectively, "InfluTrack Content"), are owned by InfluTrack, its licensors, or other providers and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

        These Terms permit you to use the Services for your personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the InfluTrack Content, except as follows:

        * Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials;
        * You may store files that are automatically cached by your Web browser for display enhancement purposes;
        * You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use and not for further reproduction, publication, or distribution;
        * If we provide social media features with certain content, you may take such actions as are enabled by such features.
      `
    },
    {
      title: 'Subscription and Payment Terms',
      content: `
        Some aspects of the Services may be provided for a fee. If you elect to use paid aspects of the Services, you agree to the pricing and payment terms, as we may update them from time to time. We may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in our sole discretion.

        All payments will be processed through our third-party payment processors. By providing a payment method, you authorize us to charge your payment method for all fees associated with your subscription.

        Subscriptions automatically renew until terminated. You authorize us to charge your payment method on a recurring basis until you terminate or pause your subscription, or the agreement is otherwise terminated. If your payment cannot be completed, we may suspend or terminate your subscription.

        You may cancel your subscription at any time through your account settings or by contacting us. If you cancel, your subscription will remain active until the end of your current billing period, and you will not receive a refund for any previously charged fees.
      `
    },
    {
      title: 'Disclaimers',
      content: `
        THE SERVICES AND ALL CONTENT PROVIDED THROUGH THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

        INFLUTRACK DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

        INFLUTRACK MAKES NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE SERVICES, SOFTWARE, TEXT, GRAPHICS, LINKS, OR COMMUNICATIONS PROVIDED ON OR THROUGH THE USE OF THE SERVICES.

        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
      `
    },
    {
      title: 'Limitation of Liability',
      content: `
        IN NO EVENT WILL INFLUTRACK, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.

        THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
      `
    },
    {
      title: 'Indemnification',
      content: `
        You agree to defend, indemnify, and hold harmless InfluTrack, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Content, any use of the InfluTrack Content, services, and products other than as expressly authorized in these Terms.
      `
    },
    {
      title: 'Termination',
      content: `
        We may terminate or suspend your access to all or part of the Services, including terminating or suspending your account, at any time, with or without cause, with or without notice, and without any liability to you.

        Upon termination, all licenses and other rights granted to you in these Terms will immediately cease, and you must cease all use of the Services.

        Any provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
      `
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: `
        These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule.

        Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in the City of San Francisco. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
      `
    },
    {
      title: 'Miscellaneous',
      content: `
        These Terms, together with our Privacy Policy, constitute the entire agreement between you and InfluTrack regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.

        No waiver by InfluTrack of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of InfluTrack to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.

        If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
      `
    },
    {
      title: 'Contact Information',
      content: `
        If you have any questions about these Terms, please contact us at:

        * By email: legal@influtrack.com
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
            Terms of Service
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
            If you have any questions about our Terms of Service, please <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
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

export default TermsOfServicePage; 