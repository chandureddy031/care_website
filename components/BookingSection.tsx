import React, { useState } from 'react';
import { saveBooking } from '../services/storageService';
import { ThreeDCard } from './ThreeDCard';
import { Send, CheckCircle, Database, Server } from 'lucide-react';

const TEST_API_KEY = "147b3379-c462-43eb-a571-0eea6c5afabe";

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    purpose: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => setLogs(prev => [...prev, `> ${msg}`]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setLogs([]);

    addLog("Connecting to the server...");
    try {
      const response = await fetch('http://localhost:3001/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addLog("Booking successful!");
        setStatus('success');
      } else {
        addLog("Booking failed. Please try again later.");
        setStatus('idle');
      }
    } catch (error) {
      addLog("Error connecting to the server. Please try again later.");
      setStatus('idle');
    }
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Secure Appointment</h2>
          <p className="text-gray-400">Book a slot with K Madan Mohan Reddy using our encrypted channel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <ThreeDCard className="h-full" depth={10}>
            <div className="glass-panel p-8 rounded-2xl h-full relative overflow-hidden">
               {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-700">
                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                     <CheckCircle className="text-green-500 w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                   <p className="text-gray-300">An email has been dispatched to both parties.</p>
                   <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-indigo-400 hover:text-white underline"
                   >
                     Book Another
                   </button>
                 </div>
               ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white [color-scheme:dark]"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Purpose</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white"
                      placeholder="Collaboration, Donation, Visit..."
                      value={formData.purpose}
                      onChange={e => setFormData({...formData, purpose: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        Confirm Booking <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
               )}
            </div>
          </ThreeDCard>

          {/* Terminal / Logs */}
          <div className="bg-[#0f0f15] border border-gray-800 rounded-xl p-6 font-mono text-xs md:text-sm overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500">System Monitor</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2 text-green-400 min-h-[300px]">
              <div className="opacity-50">System ready...</div>
              <div className="flex items-center gap-2 text-blue-400">
                <Database size={14} /> 
                <span>MongoDB Compass Local: Connected (Port 27017)</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Server size={14} /> 
                <span>Email Service: Standby</span>
              </div>
              
              {logs.map((log, i) => (
                <div key={i} className="animate-in slide-in-from-left-2 duration-300">
                  {log}
                </div>
              ))}
              
              {status === 'sending' && (
                <div className="animate-pulse">_</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};