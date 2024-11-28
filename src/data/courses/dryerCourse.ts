import { Course } from '../../types';
import { dryerBasicsModule } from './modules/dryerBasics';
import { dryerSetupModule } from './modules/dryerSetup';
import { dryerEfficiencyModule } from './modules/dryerEfficiency';
import { dryerMaintenanceModule } from './modules/dryerMaintenance';
import { dryerTroubleshootingModule } from './modules/dryerTroubleshooting';
import { dryerLongTermModule } from './modules/dryerLongTerm';

export const dryerCourse: Course = {
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
    components: {
      'Module 1: How Does a Dryer Work?': dryerBasicsModule,
      'Module 2: First-Time Setup': dryerSetupModule,
      'Module 3: Tips for Using a Dryer Efficiently': dryerEfficiencyModule,
      'Module 4: Commonly Overlooked Maintenance': dryerMaintenanceModule,
      'Module 5: Frequently Asked Questions': dryerTroubleshootingModule,
      'Module 6: Long-Term Maintenance Tips': dryerLongTermModule
    }
  }
};