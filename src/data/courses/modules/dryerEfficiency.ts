import { ModuleContent } from '../../../types';

export const dryerEfficiencyModule: ModuleContent = {
  overview: "Learn how to maximize your dryer's efficiency while protecting your clothes and saving energy.",
  components: [
    {
      type: 'text',
      title: 'Smart Drying Starts with Sorting',
      data: "Proper sorting isn't just about colors—it's about fabric weight, drying temperature, and time.",
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'list',
      title: 'Sorting Guidelines',
      data: [
        "Heavy Items: Towels, jeans, and sweatshirts go together",
        "Medium Weight: T-shirts, sheets, and casual clothes",
        "Lightweight: Dress shirts, blouses, and delicates",
        "Special Care: Check labels for 'air dry' or 'dry flat' instructions"
      ]
    },
    {
      type: 'text',
      title: 'Understanding Dryer Settings',
      isKey: true,
      data: {
        'Regular/High Heat': 'For cotton, towels, and durable items',
        'Medium Heat': 'For permanent press and synthetic fabrics',
        'Low Heat': 'For delicates and items that may shrink',
        'Air Fluff': 'No heat, just tumbling to remove dust or freshen clothes'
      }
    },
    {
      type: 'text',
      title: 'Loading Best Practices',
      data: {
        'Optimal Load Size': 'Fill drum 2/3 full—clothes need room to tumble',
        'Shake Before Loading': 'Untwist and shake out items to prevent wrinkles',
        'Check Pockets': 'Remove items that could damage clothes or the dryer',
        'Zip and Button': 'Close zippers and fasten buttons to prevent snags'
      }
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Efficiency Challenge',
      data: "You have a load of mixed items: 2 pairs of jeans, 3 t-shirts, 2 dress shirts, and a sweater. How would you sort and dry these items for maximum efficiency?"
    },
    {
      type: 'interactive',
      title: 'Quick Check',
      question: "What's the optimal way to load a dryer?",
      options: [
        "Fill it completely full",
        "Fill it 2/3 full",
        "Fill it halfway",
        "Fill it as much as possible"
      ],
      correct: 1
    }
  ]
};