import React from 'react';
import { ThreeDCard } from './ThreeDCard';
import { ArrowRight, Globe, Heart, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Empathy in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 neon-text">
                Dimensions
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              CARE is an advanced NGO reimagining humanitarian aid through technology and compassion. We connect resources to needs with precision.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center gap-2 hover:gap-4"
              >
                Join the Mission <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="h-[500px] w-full flex items-center justify-center relative">
             <ThreeDCard className="w-full max-w-md h-96 cursor-pointer">
                <div className="relative w-full h-full rounded-2xl glass-panel p-8 border border-white/10 flex flex-col justify-between overflow-hidden group">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex justify-between items-start translate-z-10" style={{ transform: 'translateZ(30px)' }}>
                    <Heart className="text-red-500" size={40} />
                    <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">ID: 9440-CARE</span>
                  </div>

                  <div className="space-y-2 translate-z-20" style={{ transform: 'translateZ(50px)' }}>
                    <h3 className="text-2xl font-bold text-white">Project: LUNA</h3>
                    <p className="text-sm text-gray-300">
                      Deploying aid to remote sectors using advanced logistics.
                    </p>
                  </div>

                  {/* Floating elements inside card */}
                  <div className="absolute top-1/2 right-[-20px] bg-care-dark p-3 rounded-lg border border-gray-700 shadow-xl" style={{ transform: 'translateZ(80px) rotate(-10deg)' }}>
                    <Shield className="text-blue-400" size={24} />
                  </div>
                   <div className="absolute bottom-20 left-[-10px] bg-care-dark p-3 rounded-lg border border-gray-700 shadow-xl" style={{ transform: 'translateZ(60px) rotate(5deg)' }}>
                    <Globe className="text-green-400" size={24} />
                  </div>

                </div>
             </ThreeDCard>
          </div>

        </div>
      </div>
    </section>
  );
};