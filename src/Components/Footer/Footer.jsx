import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="bg-[#0d1220] text-slate-400 py-16 px-4 border-t border-slate-800">
      <div className="max-w-300 mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-12">
   
          {/* Brand Column  */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Features</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Templates</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Integrations</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition-colors cursor-pointer text-sm">About</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Press</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Community</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Contact</li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                <FaFacebookF size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                <FaTwitter size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-8 border-t-2 border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide">
          <p>© 2026 Digitools. All rights reserved.</p>
          
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;