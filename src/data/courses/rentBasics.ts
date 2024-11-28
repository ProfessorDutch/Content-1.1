import { Course } from '../../types';
import { cosignerModule } from './modules/cosigner';
import { moveInCostsModule } from './modules/moveInCosts';
import { rentalTermsModule } from './modules/rentalTerms';
import { moveInChecklistModule } from './modules/moveInChecklist';

export const rentBasicsCourse: Course = {
  id: 'rent-101',
  title: 'Rent Ready: What You Need to Get Your First Apartment',
  description: 'Learn everything you need to know about preparing for and securing your first apartment',
  category: 'free',
  duration: '45 minutes',
  creditCost: 0,
  image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
  icon: 'Home',
  learningPath: '/learn/rent-101',
  participants: 0,
  avgScore: 0,
  content: {
    overview: "Learn everything you need to know about preparing for and securing your first apartment",
    components: {
      'Module 1: What\'s a Co-Signer?': cosignerModule,
      'Module 2: Move-In Cost Calculator': moveInCostsModule,
      'Module 3: Simple Explanations for Key Terms': rentalTermsModule,
      'Module 4: Your Move-In Checklist': moveInChecklistModule
    }
  }
};