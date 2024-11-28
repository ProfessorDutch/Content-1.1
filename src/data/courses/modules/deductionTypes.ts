import { ModuleContent } from '../../../types';

export const deductionTypesModule: ModuleContent = {
  overview: 'Let\'s look at where your money goes and why.',
  components: [
    {
      title: 'Federal Income Tax',
      description: 'Money you owe the federal government for services like national defense, healthcare, and education.',
      importance: 25
    },
    {
      title: 'State Income Tax',
      description: 'Your state\'s share, used for things like public schools, local roads, and safety.',
      importance: 15
    },
    {
      title: 'Social Security (FICA)',
      description: 'A small percentage of your paycheck funds a retirement and disability program.',
      importance: 20
    },
    {
      title: 'Medicare (FICA)',
      description: 'A separate deduction for healthcare for seniors.',
      importance: 15
    },
    {
      title: 'Health Insurance Premiums',
      description: 'If your employer offers health insurance, this is your share of the cost.',
      importance: 15
    },
    {
      title: 'Retirement Contributions',
      description: 'Money you choose to save for your future. Some employers match your contribution.',
      importance: 10
    }
  ]
};