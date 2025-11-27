import { Booking } from '../types';

const STORAGE_KEY = 'care_ngo_bookings_db';

export const saveBooking = (booking: Omit<Booking, 'id' | 'status' | 'timestamp'>): Booking => {
  const newBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    status: 'pending',
    timestamp: Date.now(),
  };

  const existingData = localStorage.getItem(STORAGE_KEY);
  const bookings: Booking[] = existingData ? JSON.parse(existingData) : [];
  
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  
  // Simulate MongoDB connection latency
  console.log(`[MongoDB Compass Local] Inserting document into collection 'bookings':`, newBooking);
  
  return newBooking;
};

export const getBookings = (): Booking[] => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  return existingData ? JSON.parse(existingData) : [];
};