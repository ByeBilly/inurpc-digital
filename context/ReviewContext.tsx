
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Review } from '../types';

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getAverageRating: (slug: string) => { average: number; count: number };
  getProductReviews: (slug: string) => Review[];
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

const REVIEWS_DB_KEY = 'inurpc_reviews_db';

// Initial Mock Reviews
const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    productSlug: 'clinic-growth-snapshot',
    userId: 'mock-1',
    userName: 'Dr. James H.',
    rating: 5,
    comment: 'Transformed our patient intake. Worth every cent.',
    date: '2023-11-15'
  },
  {
    id: '2',
    productSlug: 'clinic-growth-snapshot',
    userId: 'mock-2',
    userName: 'Sarah M.',
    rating: 4,
    comment: 'Great flows, saved us a lot of time on follow-ups.',
    date: '2023-12-01'
  },
  {
    id: '3',
    productSlug: 'lofi-beats-creators',
    userId: 'mock-3',
    userName: 'LoFiGamer',
    rating: 5,
    comment: 'Perfect vibe for my coding streams. Quality is top notch.',
    date: '2024-01-10'
  }
];

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(REVIEWS_DB_KEY);
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      setReviews(INITIAL_REVIEWS);
      localStorage.setItem(REVIEWS_DB_KEY, JSON.stringify(INITIAL_REVIEWS));
    }
  }, []);

  const addReview = (reviewData: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0]
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(REVIEWS_DB_KEY, JSON.stringify(updated));
  };

  const getAverageRating = (slug: string) => {
    const productReviews = reviews.filter(r => r.productSlug === slug);
    if (productReviews.length === 0) return { average: 0, count: 0 };
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return {
      average: parseFloat((sum / productReviews.length).toFixed(1)),
      count: productReviews.length
    };
  };

  const getProductReviews = (slug: string) => {
    return reviews.filter(r => r.productSlug === slug).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, getAverageRating, getProductReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) throw new Error('useReviews must be used within a ReviewProvider');
  return context;
};
