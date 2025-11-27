export interface Booking {
  id: string;
  name: string;
  email: string;
  date: string;
  purpose: string;
  status: 'pending' | 'confirmed';
  timestamp: number;
}

export interface ImpactStat {
  name: string;
  value: number;
  fullMark: number;
}

export interface GeminiResponse {
  text: string;
  loading: boolean;
}