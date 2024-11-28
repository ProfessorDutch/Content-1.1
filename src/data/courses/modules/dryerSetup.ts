import { ModuleContent } from '../../../types';

export const dryerSetupModule: ModuleContent = {
  overview: "Setting up your dryer properly ensures safety and efficiency. Here's how to do it right from the start.",
  components: [
    {
      type: 'text',
      title: 'Proper Setup: The Foundation of Safety',
      data: "A correctly installed dryer isn't just about getting it to work—it's about ensuring your safety and the appliance's longevity.",
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'text',
      title: 'Location Requirements',
      data: {
        'Level Surface': 'The dryer must be placed on a completely level surface to prevent excessive vibration and wear.',
        'Proper Clearance': 'Maintain at least 6 inches of clearance around the dryer for adequate airflow.',
        'Accessibility': 'Position near power source and ventilation while ensuring easy access for maintenance.'
      }
    },
    {
      type: 'text',
      title: 'Power Connection',
      isKey: true,
      data: {
        'Electric Dryers': 'Requires a dedicated 240-volt outlet. Never use an extension cord or adapter.',
        'Gas Dryers': 'Must be connected by a licensed professional. Always test for gas leaks using soapy water.',
        'Safety Note': 'If you smell gas or are unsure about connections, contact a professional immediately.'
      }
    },
    {
      type: 'list',
      title: 'Ventilation Setup Steps',
      data: [
        "Remove old vent hose and clean the wall duct thoroughly",
        "Install new metal vent hose, avoiding plastic or foil",
        "Keep vent hose as straight as possible—each bend reduces efficiency",
        "Secure all connections with metal tape or clamps",
        "Verify exterior vent flap opens and closes freely"
      ]
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Installation Checklist',
      data: "Before first use, verify:\n- Dryer is level (use a bubble level)\n- All connections are secure\n- Vent hose is properly attached\n- Exterior vent is clear\n- No unusual sounds during operation"
    },
    {
      type: 'text',
      isKey: true,
      title: 'Pro Tips',
      data: "Always follow manufacturer instructions—improper installation can void your warranty and create safety hazards. Keep the manual in a safe place for future reference."
    },
    {
      type: 'interactive',
      title: 'Test Your Knowledge',
      question: "What's the most important factor in choosing a dryer location?",
      options: [
        "Near a window",
        "Level surface with proper clearance",
        "Close to washing machine",
        "Away from bedrooms"
      ],
      correct: 1
    }
  ]
};