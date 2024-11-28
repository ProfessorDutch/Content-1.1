import { Course } from '../../types';
import { paycheckBasicsModule } from './modules/paycheckBasics';
import { deductionPurposeModule } from './modules/deductionPurpose';
import { takeHomePayModule } from './modules/takeHomePay';

export const paycheckDeductionsCourse: Course = {
  id: 'paycheck-101',
  title: 'Where Did My Money Go? Understanding Paycheck Deductions',
  description: 'Learn about the various deductions from your paycheck and why they matter',
  category: 'free',
  duration: '30 minutes',
  creditCost: 0,
  image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
  icon: 'DollarSign',
  learningPath: '/learn/paycheck-101',
  participants: 956,
  avgScore: 88,
  content: {
    overview: paycheckBasicsModule.overview,
    analogy: paycheckBasicsModule.analogy,
    components: {
      'Module 1: Understanding Your Paycheck': paycheckBasicsModule,
      'Module 2: Why Deductions Matter': deductionPurposeModule,
      'Module 3: Planning Your Take-Home Pay': takeHomePayModule
    }
  }
};