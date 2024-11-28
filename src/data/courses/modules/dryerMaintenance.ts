import { ModuleContent } from '../../../types';

export const dryerMaintenanceModule: ModuleContent = {
  overview: "Regular maintenance is essential to keep your dryer efficient and safe.",
  components: [
    {
      type: 'text',
      title: 'Essential Maintenance Overview',
      data: 'Regular maintenance not only keeps your dryer running efficiently but also prevents potential fire hazards.',
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'Lint Trap Maintenance',
      isKey: true,
      data: {
        'When to Clean': 'After every load',
        'How to Clean': 'Remove lint by hand or with a soft brush',
        'Deep Clean': 'Wash with soap and water monthly',
        'Safety Note': 'A clogged lint trap is the leading cause of dryer fires'
      }
    },
    {
      type: 'text',
      title: 'Vent Hose Care',
      data: {
        'Inspection Schedule': 'Check every 3–6 months',
        'Cleaning Steps': `1. Unplug the dryer
2. Disconnect the vent hose
3. Shake out lint or debris
4. Use a vacuum or cleaning brush
5. Reconnect securely`
      }
    },
    {
      type: 'text',
      title: 'Drum Maintenance',
      data: {
        'Cleaning Schedule': 'Monthly',
        'Method': 'Wipe with damp cloth and mild soap',
        'Purpose': 'Remove residue from dryer sheets and fabric softeners'
      }
    },
    {
      type: 'text',
      title: 'Exterior Vent Check',
      isKey: true,
      data: {
        'When to Check': 'Every 3–6 months or if drying takes longer',
        'What to Do': 'Clear lint and debris from cover',
        'Special Note': 'Check after storms or heavy snow'
      }
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Maintenance Planning',
      data: "Create your maintenance schedule by listing three tasks you'll commit to doing regularly. Which one do you think is most often overlooked?"
    },
    {
      type: 'interactive',
      title: 'Safety Check',
      question: 'How often should you clean the lint trap?',
      options: [
        'Once a week',
        'After every load',
        'Once a month',
        'When you see lint'
      ],
      correct: 1
    }
  ]
};