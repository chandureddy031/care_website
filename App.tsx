import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingSection } from './components/BookingSection';
import { ImpactCharts } from './components/ImpactCharts';
import { ContactFooter } from './components/ContactFooter';
import { AiHelper } from './components/AiHelper';
import { DynamicStory } from './components/DynamicStory';

const App: React.FC = () => {
  return (
    <div className="bg-care-black text-white selection:bg-indigo-500 selection:text-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <DynamicStory />
        <ImpactCharts />
        <BookingSection />
      </main>

      <ContactFooter />
      <AiHelper />
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
         <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default App;