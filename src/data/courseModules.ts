import { Course } from '../types';
import { rentBasicsModule } from './courses/modules/rentBasics';
import { creditBasicsModule } from './courses/modules/creditBasics';
import { paycheckBasicsModule } from './courses/modules/paycheckBasics';
import { dryerBasicsModule } from './courses/modules/dryerBasics';
import { dryerSetupModule } from './courses/modules/dryerSetup';
import { dryerEfficiencyModule } from './courses/modules/dryerEfficiency';
import { dryerMaintenanceModule } from './courses/modules/dryerMaintenance';
import { dryerTroubleshootingModule } from './courses/modules/dryerTroubleshooting';

export const modules: Course[] = [
  {
    id: 'rent-101',
    title: 'Rent Ready: What You Need to Get Your First Apartment',
    description: 'Learn everything you need to know about preparing for and securing your first apartment',
    category: 'free',
    duration: '45 minutes',
    creditCost: 0,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    icon: 'Home',
    learningPath: '/learn/rent-101',
    participants: 1234,
    avgScore: 85,
    content: rentBasicsModule
  },
  {
    id: 'credit-101',
    title: 'Credit Basics: Building Trust with Your Financial Reputation',
    description: 'Learn how credit works and why it matters in simple, practical terms',
    category: 'free',
    duration: '30 minutes',
    creditCost: 0,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    icon: 'CreditCard',
    learningPath: '/learn/credit-101',
    participants: 956,
    avgScore: 88,
    content: creditBasicsModule
  },
  {
    id: 'paycheck-101',
    title: 'Where Did My Money Go? Understanding Paycheck Deductions',
    description: 'Learn about the various deductions from your paycheck and why they matter',
    category: 'free',
    duration: '45 minutes',
    creditCost: 0,
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
    icon: 'DollarSign',
    learningPath: '/learn/paycheck-101',
    participants: 789,
    avgScore: 92,
    content: paycheckBasicsModule
  },
  {
    id: 'dryer-101',
    title: 'Understanding Your Dryer – How It Works, How to Use It, and How to Maintain It',
    description: 'Master the science of dryers, proper usage techniques, and essential maintenance for optimal performance and safety.',
    category: 'free',
    duration: '60 minutes',
    creditCost: 0,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800',
    icon: 'Power',
    learningPath: '/learn/dryer-101',
    participants: 756,
    avgScore: 88,
    content: {
      overview: "A dryer might seem like magic—clothes go in wet, and they come out dry—but it's all science and engineering. By understanding how your dryer works, you can save time, money, and frustration while making sure it stays in great shape for years.",
      components: [
        ...dryerBasicsModule.components,
        ...dryerSetupModule.components,
        ...dryerEfficiencyModule.components,
        ...dryerMaintenanceModule.components,
        ...dryerTroubleshootingModule.components
      ]
    }
  }
];