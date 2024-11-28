import { ModuleContent } from '../../../types';

export const moveInCostsModule: ModuleContent = {
  overview: "Let's calculate how much you'll need upfront.",
  components: {
    'Example Scenario': `Monthly Rent: $2,000
Upfront Costs:
First Month: $2,000
Security Deposit (1 month): $2,000
Last Month (sometimes required): + $2,000
Total Upfront Costs: $4,000-$6,000`,
    'Activity': 'Use this formula: (First Month + Security Deposit) + (Last Month, if required) = Total Cost'
  },
  keyTakeaway: "Save an extra $500-$1,000 for moving expenses like utilities, furniture, or renter's insurance."
};