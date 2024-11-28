interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface TestModule {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  questions: Question[];
}

export const testModules: TestModule[] = [
  {
    id: 'rent-101-test',
    moduleId: 'rent-101',
    title: 'First Apartment Readiness Assessment',
    description: 'Test your understanding of rental requirements and preparation',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'What is a co-signer\'s responsibility?',
        options: [
          'To help you move in',
          'To pay rent if you can\'t',
          'To find you an apartment',
          'To be your reference'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'For a $2,000/month apartment, what would be your total upfront costs including first month, security deposit, and last month\'s rent?',
        options: [
          '$2,000',
          '$4,000',
          '$6,000',
          '$8,000'
        ],
        correct: 2
      },
      {
        id: 3,
        question: 'What is the purpose of a security deposit?',
        options: [
          'To pay for utilities',
          'To cover potential damages',
          'To pay the last month\'s rent',
          'To hold the apartment'
        ],
        correct: 1
      },
      {
        id: 4,
        question: 'How much does renter\'s insurance typically cost per month?',
        options: [
          '$5-$10',
          '$15-$20',
          '$25-$30',
          '$35-$40'
        ],
        correct: 1
      },
      {
        id: 5,
        question: 'Which document is NOT listed in the move-in checklist?',
        options: [
          'Pay stubs',
          'Driver\'s license',
          'Credit card statements',
          'Bank statements'
        ],
        correct: 2
      },
      {
        id: 6,
        question: 'How much extra should you save for moving expenses beyond rent and deposits?',
        options: [
          '$100-$300',
          '$500-$1,000',
          '$1,500-$2,000',
          '$2,500-$3,000'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 'credit-101-test',
    moduleId: 'credit-101',
    title: 'Credit Fundamentals Assessment',
    description: 'Test your understanding of credit scores and their impact',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'What percentage of your credit score is determined by payment history?',
        options: ['15%', '25%', '35%', '45%'],
        correct: 2
      },
      {
        id: 2,
        question: 'What is a good credit utilization ratio?',
        options: ['Under 30%', 'Under 50%', 'Under 70%', '100%'],
        correct: 0
      },
      {
        id: 3,
        question: 'Which factor has the highest impact on your credit score?',
        options: ['Payment history', 'Credit mix', 'Length of credit', 'New credit'],
        correct: 0
      },
      {
        id: 4,
        question: 'How often can you get a free credit report annually?',
        options: ['Once', 'Twice', 'Three times', 'Four times'],
        correct: 2
      },
      {
        id: 5,
        question: 'What is the typical range for credit scores?',
        options: ['100-500', '200-700', '300-850', '400-900'],
        correct: 2
      }
    ]
  },
  {
    id: 'paycheck-101-test',
    moduleId: 'paycheck-101',
    title: 'Paycheck Deductions Assessment',
    description: 'Test your understanding of paycheck deductions and their purposes',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'Using the pizza analogy from the course, what represents the pizza before any slices are taken?',
        options: [
          'Net pay',
          'Gross pay',
          'Deductions',
          'Benefits'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'Which of these services is funded by Federal Income Tax?',
        options: [
          'Local roads',
          'State schools',
          'National defense',
          'City parks'
        ],
        correct: 2
      },
      {
        id: 3,
        question: 'What is the main purpose of Social Security deductions?',
        options: [
          'Current healthcare costs',
          'Retirement and disability programs',
          'Local government funding',
          'Emergency savings'
        ],
        correct: 1
      },
      {
        id: 4,
        question: 'Which type of deduction might include employer matching?',
        options: [
          'Federal taxes',
          'Medicare',
          'State taxes',
          'Retirement contributions'
        ],
        correct: 3
      },
      {
        id: 5,
        question: 'According to the course, what should you base your budget on?',
        options: [
          'Gross pay',
          'Net pay',
          'Base salary',
          'Hourly rate'
        ],
        correct: 1
      },
      {
        id: 6,
        question: 'What is the first step in understanding your paycheck deductions?',
        options: [
          'Calculate taxes',
          'Review your pay stub',
          'Contact HR',
          'Check bank account'
        ],
        correct: 1
      },
      {
        id: 7,
        question: 'Which of these is described as an optional deduction in the course?',
        options: [
          'Federal Income Tax',
          'Medicare',
          'Retirement contributions',
          'Social Security'
        ],
        correct: 2
      },
      {
        id: 8,
        question: 'What is one of the challenges mentioned in the course regarding deductions?',
        options: [
          'Too many investment options',
          'Complex paperwork',
          'Less take-home pay than expected',
          'Changing tax rates'
        ],
        correct: 2
      }
    ]
  },
  {
    id: 'dryer-101-test',
    moduleId: 'dryer-101',
    title: 'Dryer Maintenance Assessment',
    description: 'Test your knowledge of proper dryer maintenance and safety',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'How often should you clean the lint filter?',
        options: [
          'Once a month',
          'After every load',
          'Once a week',
          'When visible lint appears'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'What is the main cause of dryer fires?',
        options: [
          'Electrical issues',
          'Lint buildup',
          'Overheating clothes',
          'Using wrong settings'
        ],
        correct: 1
      },
      {
        id: 3,
        question: 'How often should the dryer vent be professionally cleaned?',
        options: [
          'Every 6 months',
          'Every year',
          'Every 2 years',
          'Only when problems occur'
        ],
        correct: 1
      },
      {
        id: 4,
        question: 'Which item should never be put in a dryer?',
        options: [
          'Wool sweaters',
          'Rubber-backed mats',
          'Cotton shirts',
          'Bath towels'
        ],
        correct: 1
      },
      {
        id: 5,
        question: 'What is a sign that your dryer vent might be clogged?',
        options: [
          'Clothes are too dry',
          'Dryer is too quiet',
          'Clothes take longer to dry',
          'Dryer is too cold'
        ],
        correct: 2
      },
      {
        id: 6,
        question: 'What material is best for dryer vent ducts?',
        options: [
          'Plastic',
          'Vinyl',
          'Rigid metal',
          'Flexible foil'
        ],
        correct: 2
      },
      {
        id: 7,
        question: 'How far should a dryer be from the wall?',
        options: [
          '1-2 inches',
          '4-6 inches',
          'As close as possible',
          'At least 12 inches'
        ],
        correct: 1
      },
      {
        id: 8,
        question: 'What is the proper way to clean a lint filter?',
        options: [
          'Vacuum only',
          'Wash with soap and water occasionally',
          'Brush off lint only',
          'Replace monthly'
        ],
        correct: 1
      }
    ]
  }
];