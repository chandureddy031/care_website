import React from 'react';
import { Mail, Phone, User, MapPin } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">Contact Direct</h3>
            <p className="text-gray-400">Reach out to the administration directly for high-priority inquiries.</p>
          </div>
          
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="bg-indigo-600/20 p-3 rounded-full text-indigo-400">
                <User size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Founder / Lead</p>
                <p className="font-medium text-white">K Madan Mohan Reddy</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="bg-indigo-600/20 p-3 rounded-full text-indigo-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                <p className="font-medium text-white break-all">mdnmohanreddy@gmil.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="bg-indigo-600/20 p-3 rounded-full text-indigo-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Mobile</p>
                <p className="font-medium text-white">9440986843</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="bg-indigo-600/20 p-3 rounded-full text-indigo-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">HQ</p>
                <p className="font-medium text-white">Digital Space / Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CARE NGO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};