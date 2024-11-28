import { ModuleContent } from '../../../types';

export const rentBasicsModule: ModuleContent = {
  overview: "Learn everything you need to know about preparing for and securing your first apartment",
  components: [
    {
      type: 'text',
      title: 'Getting Started with Renting',
      data: "Your first apartment is a major milestone. Let's break down everything you need to know to make it happen.",
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'Understanding Co-Signers',
      isKey: true,
      data: {
        'What is a Co-Signer?': "A co-signer is someone who agrees to pay rent if you cannot. This reassures the landlord when your credit or income does not meet their requirements.",
        'Example Scenario': "You are renting a $2,000/month apartment but do not have enough credit history.",
        'How it Works': "Your mom agrees to co-sign. If you miss rent, the landlord can legally ask her to pay it.",
        'Important Note': "Make sure your co-signer understands they are legally responsible for your rent."
      }
    },
    {
      type: 'text',
      title: 'Move-In Cost Calculator',
      data: {
        'Monthly Rent Example': '$2,000',
        'First Month': '$2,000',
        'Security Deposit': '$2,000 (typically one month rent)',
        'Last Month': '$2,000 (if required)',
        'Additional Costs': '$500-$1,000 for utilities, furniture, etc.'
      }
    },
    {
      type: 'text',
      title: 'Key Terms Explained',
      isKey: true,
      data: {
        'Security Deposit': "Money you pay upfront to cover potential damages. If you do not damage the property, you will get it back.",
        'Renter Insurance': "A small monthly payment (~$15-$20) that protects your belongings in case of theft or disaster.",
        'Lease Agreement': "A contract between you and the landlord outlining the rules and terms of your rental."
      }
    },
    {
      type: 'list',
      title: 'Required Documents',
      data: [
        "Pay stubs or a job offer letter",
        "Driver license or state ID",
        "References (if needed)",
        "Bank statements (optional but helpful)"
      ]
    },
    {
      type: 'text',
      title: 'Budgeting Essentials',
      data: {
        'Move-in Costs': 'Total upfront costs (first month, deposit, etc.)',
        'Monthly Utilities': 'Electricity, internet, water',
        'Insurance': "Renter insurance for protection",
        'Emergency Fund': 'Save extra for unexpected expenses'
      }
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Calculate Your Costs',
      data: "Using the monthly rent of an apartment you are interested in, calculate your total move-in costs including first month, security deposit, and estimated additional expenses."
    },
    {
      type: 'interactive',
      title: 'Knowledge Check',
      question: "What is typically included in move-in costs?",
      options: [
        "Just first month rent",
        "First month rent and security deposit",
        "First month, security deposit, and last month",
        "Only security deposit"
      ],
      correct: 2
    }
  ]
};