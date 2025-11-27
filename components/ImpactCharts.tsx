import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ThreeDCard } from './ThreeDCard';

const dataRadar = [
  { subject: 'Education', A: 120, fullMark: 150 },
  { subject: 'Health', A: 98, fullMark: 150 },
  { subject: 'Food', A: 86, fullMark: 150 },
  { subject: 'Shelter', A: 99, fullMark: 150 },
  { subject: 'Awareness', A: 85, fullMark: 150 },
  { subject: 'Tech', A: 65, fullMark: 150 },
];

const dataBar = [
  { name: '2021', beneficiaries: 4000 },
  { name: '2022', beneficiaries: 3000 },
  { name: '2023', beneficiaries: 2000 },
  { name: '2024', beneficiaries: 2780 },
  { name: '2025', beneficiaries: 6890 },
];

export const ImpactCharts: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-care-dark/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-16">
          Quantifiable <span className="text-indigo-500">Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <ThreeDCard className="h-96" depth={5}>
            <div className="glass-panel p-4 rounded-xl h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-4">Sectors Covered</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="CARE"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </ThreeDCard>

          <ThreeDCard className="h-96" depth={5}>
             <div className="glass-panel p-4 rounded-xl h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-4">Beneficiaries Growth</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataBar}>
                  <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
                  <YAxis tick={{ fill: '#9ca3af' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="beneficiaries" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ThreeDCard>

        </div>
      </div>
    </section>
  );
};