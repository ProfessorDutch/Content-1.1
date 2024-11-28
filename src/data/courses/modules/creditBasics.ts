import { ModuleContent } from '../../../types';

export const creditBasicsModule: ModuleContent = {
  overview: 'Credit is your financial reputation—a way for lenders and others to decide how trustworthy you are when it comes to borrowing money or fulfilling obligations.',
  components: [
    {
      type: 'text',
      title: 'Understanding Credit',
      data: 'Credit is your financial reputation—a way for lenders and others to decide how trustworthy you are when it comes to borrowing money or fulfilling obligations.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'Real-World Example',
      isKey: true,
      data: "Imagine you're borrowing your neighbor's lawnmower. If you return it on time, in great condition, they'll trust you to borrow it again. But if you damage it or don't return it, they'll think twice before lending it again. Credit works the same way—on a much bigger scale."
    },
    {
      type: 'text',
      title: 'Credit Score Components',
      data: {
        'Payment History (35%)': 'Do you pay your bills on time?',
        'Amounts Owed (30%)': 'Are you borrowing more than you can handle?',
        'Credit History Length (15%)': 'How long have you been building trust?',
        'Credit Mix (10%)': 'Have you handled different types of borrowing responsibly?',
        'New Credit (10%)': 'Do you borrow responsibly or ask for too much too quickly?'
      }
    },
    {
      type: 'list',
      title: 'Credit Opportunities',
      data: [
        'Getting approved for loans (like a car or home)',
        'Lower interest rates (saving money)',
        'Easier approval for apartments, utilities, or even some jobs'
      ]
    },
    {
      type: 'list',
      title: 'Credit Challenges',
      data: [
        'Higher costs to borrow money',
        'Difficulty getting approved for essentials'
      ]
    },
    {
      type: 'text',
      title: 'Building Credit',
      data: {
        'Pay on Time': 'Always pay bills by their due dates',
        'Use Credit Sparingly': 'Borrow what you can pay back',
        'Start Small': 'A starter credit card or loan can help you build trust',
        'Check Your Report': 'Make sure your financial reputation is accurate'
      }
    },
    {
      type: 'text',
      isKey: true,
      title: 'Key Takeaway',
      data: 'Credit is all about trust—showing the financial world you can be relied upon to keep your word. Build it carefully, manage it wisely, and it will open opportunities for you throughout your life.'
    },
    {
      type: 'interactive',
      title: 'Test Your Knowledge',
      question: 'What percentage of your credit score is determined by payment history?',
      options: ['15%', '25%', '35%', '45%'],
      correct: 2
    }
  ]
};