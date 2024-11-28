import { ModuleContent } from '../../../types';

export const paycheckBasicsModule: ModuleContent = {
  overview: 'The first thing most people notice about their paycheck is how much money disappears before they even see it. These deductions can feel confusing and frustrating, but understanding them is key to planning your finances.',
  components: [
    {
      type: 'text',
      title: 'Understanding Your Paycheck',
      data: 'Your paycheck tells a story about your earnings and contributions to various systems that keep society running.',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'The Pizza Analogy',
      isKey: true,
      data: "Think of deductions like a team splitting up a pizza. You baked it (earned the money), but everyone—taxes, insurance, retirement—takes a slice before you can eat. Understanding where each slice goes helps you plan your financial meals better."
    },
    {
      type: 'text',
      title: 'Types of Deductions',
      data: {
        'Federal Income Tax (25%)': 'Funds national defense, healthcare, and education',
        'State Income Tax (15%)': 'Supports local schools, roads, and safety',
        'Social Security (20%)': 'Funds retirement and disability programs',
        'Medicare (15%)': 'Provides healthcare for seniors',
        'Health Insurance (15%)': 'Your share of employer-provided health coverage',
        'Retirement (10%)': 'Optional contributions to your future, often matched by employers'
      }
    },
    {
      type: 'list',
      title: 'Benefits of Understanding Deductions',
      data: [
        'Better financial planning with accurate take-home pay knowledge',
        'Understanding benefits you\'re entitled to',
        'Making informed decisions about retirement savings',
        'Optimizing tax withholdings'
      ]
    },
    {
      type: 'text',
      title: 'Common Challenges',
      data: {
        'Less Take-Home Pay': 'Understanding why your actual pay is less than expected',
        'Complex Calculations': 'Making sense of various tax rates and formulas',
        'Future Benefits': 'Balancing current needs with future security',
        'Changing Rates': 'Adapting to updates in tax rates and benefit costs'
      }
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Calculate Your Take-Home Pay',
      data: "Using your gross pay (or a sample amount of $1,000), subtract each deduction percentage to see your actual take-home pay. How does this match your expectations?"
    },
    {
      type: 'text',
      isKey: true,
      title: 'Key Takeaway',
      data: 'While deductions reduce your paycheck, they serve important purposes—both for you and society. Understanding them helps you make better financial decisions and plan for your future.'
    },
    {
      type: 'interactive',
      title: 'Test Your Knowledge',
      question: 'Which deduction typically takes the largest percentage of your paycheck?',
      options: [
        'State Income Tax',
        'Federal Income Tax',
        'Social Security',
        'Medicare'
      ],
      correct: 1
    }
  ]
};