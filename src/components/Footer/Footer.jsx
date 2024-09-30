import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#444444] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img src="https://www.nku.edu/content/dam/www/images/footer-logo.png" alt="NKU Logo" className="h-12" />
          </div>
          
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm">
              Northern Kentucky University<br />
              Nunn Drive | Highland Heights, Kentucky 41099<br />
              Phone: (859) 572-5100
            </p>
          </div>
          
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm mb-2">Connect with us on social media:</p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-yellow-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Youtube size={20} /></a>
              <a href="#" className="hover:text-yellow-400"><Twitch size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 flex flex-wrap justify-between">
          
          <div className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <li><a href="#" className="hover:text-yellow-400">Careers at NKU</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">Accreditation</a></li>
              <li><a href="#" className="hover:text-yellow-400">Map + Directions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Accessibility</a></li>
              <li><a href="#" className="hover:text-yellow-400">A-Z Listing</a></li>
            </ul>
            <div className="w-full md:w-auto mb-4 md:mb-0 mt-4">
            <p className="text-sm">&copy; 2024 Northern Kentucky University. All rights reserved.</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;