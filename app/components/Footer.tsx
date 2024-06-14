import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram, FaPinterest, FaTiktok, FaYoutube, FaTwitter, FaWhatsapp, FaApple, FaGoogle } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaFacebook size={24} />, url: '/' },
  { icon: <FaLinkedin size={24} />, url: '/' },
  { icon: <FaInstagram size={24} />, url: '/' },
  { icon: <FaPinterest size={24} />, url: '/' },
  { icon: <FaTiktok size={24} />, url: '/' },
  { icon: <FaYoutube size={24} />, url: '/' },
  { icon: <FaTwitter size={24} />, url: '/' },
  { icon: <FaWhatsapp size={24} />, url: '/' },
];

const appLinks = [
  { title: 'Jobstore Malaysia', url: '/' },
  { title: 'Jobstore Singapore', url: '/' },
  { title: 'Jobstore Hong Kong', url: '/' },
  { title: 'Jobstore Philippines', url: '/' },
  { title: 'Jobstore Indonesia', url: '/' },
  { title: 'Jobstore Australia', url: '/' },
  { title: 'Jobstore United States', url: '/' },
];

const jobseekerLinks = [
  { title: 'Create Account', url: '/' },
  { title: 'Sign In', url: '/' },
  { title: 'Search Jobs', url: '/' },
  { title: 'Search Employers', url: '/' },
  { title: 'Featured Companies', url: '/' },
  { title: 'Government Jobs', url: '/' },
  { title: 'Working in Singapore', url: '/' },
  { title: 'My Career Fair', url: '/' },
  { title: 'Industry News', url: '/' },
];

const corporateLinks = [
  { title: 'Create Account', url: '/' },
  { title: 'Product & Services', url: '/' },
  { title: 'Pricing & Plan', url: '/' },
  { title: 'Advertise Jobs', url: '/' },
  { title: 'Industry News', url: '/' },
  { title: 'Customer Support', url: '/' },
  { title: 'Contact Sales', url: '/' },
];

const aboutLinks = [
  { title: 'About Us', url: '/' },
  { title: 'Mobile App', url: '/' },
  { title: 'FAQS', url: '/' },
  { title: 'Contact Support', url: '/' },
  { title: 'Careers @ Jobstore', url: '/' },
  { title: 'Blog', url: '/' },
  { title: 'Fulfillment Policy', url: '/' },
];

const resourcesLinks = [
  { title: 'Career Guide', url: '/' },
  { title: 'Job Templates', url: '/' },
  { title: 'Employer Resources', url: '/' },
  { title: 'Terms of Service', url: '/' },
  { title: 'Privacy Policy', url: '/' },
  { title: 'Partnership Inquiries', url: '/' },
];

const Footer = () => {
  const renderLinks = (links: any[]) => (
    <ul className="list-none p-0">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <Link href={link.url}>
            <p className="text-gray-600 hover:text-gray-800 text-sm">{link.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-4">
            <h5 className="text-gray-800 font-bold uppercase mb-2">Jobstore Locations</h5>
            {renderLinks(appLinks)}
          </div>

          <div className="mb-4">
            <h5 className="text-gray-800 font-bold uppercase mb-2">Jobseekers</h5>
            {renderLinks(jobseekerLinks)}
          </div>

          <div className="mb-4">
            <h5 className="text-gray-800 font-bold uppercase mb-2">Corporate</h5>
            {renderLinks(corporateLinks)}
          </div>

          <div className="mb-4">
            <h5 className="text-gray-800 font-bold uppercase mb-2">About</h5>
            {renderLinks(aboutLinks)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map((icon, index) => (
              <Link href={icon.url} key={index}>
                <p className="text-gray-600 hover:text-gray-800">{icon.icon}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center mt-4">
          <div className="px-2 md:px-4 mb-4 md:mb-0">
            <Link href="/">
              <p className="px-6 py-3 flex bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm">
                <FaApple size={24} />
                <span className="ml-2">Download on App Store</span>
              </p>
            </Link>
          </div>
          <div className="px-2 md:px-4">
            <Link href="/">
              <p className="px-6 py-3 flex bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm">
                <FaGoogle size={24} />
                <span className="ml-2">Download on Google Play</span>
              </p>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
