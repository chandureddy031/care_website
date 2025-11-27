import React, { useState, useEffect } from 'react';
import { generateSuccessStory } from '../services/geminiService';
import { RefreshCw } from 'lucide-react';

export const DynamicStory: React.FC = () => {
  const [story, setStory] = useState("Loading a story from our global network...");
  const [topic, setTopic] = useState("Education");
  const [loading, setLoading] = useState(false);

  const fetchStory = async () => {
    setLoading(true);
    const newStory = await generateSuccessStory(topic);
    setStory(newStory);
    setLoading(false);
  };

  useEffect(() => {
    fetchStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold mb-8">Voices of <span className="text-purple-400">Change</span></h2>
        
        <div className="glass-panel p-8 rounded-2xl relative min-h-[200px] flex flex-col justify-center items-center">
          <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed">
            "{loading ? "Establishing satellite link for story retrieval..." : story}"
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
             <select 
               value={topic} 
               onChange={(e) => setTopic(e.target.value)}
               className="bg-black/50 border border-gray-600 text-white px-3 py-2 rounded-lg text-sm outline-none focus:border-indigo-500"
             >
               <option value="Education">Education</option>
               <option value="Medical Aid">Medical Aid</option>
               <option value="Food Security">Food Security</option>
               <option value="Disaster Relief">Disaster Relief</option>
             </select>
             
             <button 
               onClick={fetchStory} 
               disabled={loading}
               className="flex items-center gap-2 text-sm text-indigo-400 hover:text-white transition-colors disabled:opacity-50"
             >
               <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
               Generate New Story (AI)
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};