import { Course } from '../../types';
import { creditBasicsModule } from './modules/creditBasics';

export const creditBasicsCourse: Course = {
  id: 'credit-101',
  title: 'Credit Basics: Building Trust with Your Financial Reputation',
  description: 'Learn how credit works and why it matters in simple, practical terms',
  category: 'free',
  duration: '45 minutes',
  creditCost: 0,
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
  icon: 'CreditCard',
  learningPath: '/learn/credit-101',
  participants: 1234,
  avgScore: 85,
  content: creditBasicsModule
};