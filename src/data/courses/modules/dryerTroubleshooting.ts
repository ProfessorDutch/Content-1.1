import { ModuleContent } from '../../../types';

export const dryerTroubleshootingModule: ModuleContent = {
  overview: "Learn how to identify and solve common dryer problems to keep your appliance running efficiently.",
  components: [
    {
      type: 'text',
      title: 'Common Issues Overview',
      data: 'Most dryer problems have simple solutions. Learning to troubleshoot can save you time and money.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'Slow Drying Times',
      isKey: true,
      data: {
        'Possible Causes': `• Clogged vent or lint trap
• Overloaded drum
• Dirty moisture sensors
• Incorrect heat settings`,
        'Solutions': `1. Clean all vents and filters
2. Reduce load size
3. Wipe sensors with vinegar
4. Verify correct temperature`
      }
    },
    {
      type: 'text',
      title: 'Fabric Care Guide',
      data: {
        'Check Labels': 'Always verify care instructions',
        'Avoid Drying': 'Wool, silk, rubber-backed items',
        'Special Care': 'Use appropriate heat settings for delicates',
        'Warning': 'Some items can shrink or become damaged'
      }
    },
    {
      type: 'text',
      title: 'No Heat Issues',
      isKey: true,
      data: {
        'Check Power': 'Verify proper electrical connection',
        'Inspect Vents': 'Clean all venting systems',
        'Professional Help': 'Call technician for heating element',
        'Gas Dryers': 'Ensure gas supply is on and working'
      }
    },
    {
      type: 'text',
      title: 'Odor Problems',
      data: {
        'Common Causes': 'Residue buildup or mold in vent',
        'Solutions': 'Clean drum and vent thoroughly',
        'Prevention': 'Regular cleaning and maintenance',
        'Warning Signs': 'Musty smell or longer drying times'
      }
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Problem-Solving Practice',
      data: "Think about your last dryer issue. What steps did you take to resolve it? How might these troubleshooting tips have helped?"
    },
    {
      type: 'interactive',
      title: 'Quick Quiz',
      question: 'What should you check first if clothes are taking too long to dry?',
      options: [
        'Power connection',
        'Lint trap and vents',
        'Dryer settings',
        'Room temperature'
      ],
      correct: 1
    }
  ]
};