import { LearningModule } from '../types';

export const learningModules: LearningModule[] = [
  // Previous modules remain the same...
  {
    id: 4,
    title: "Understanding Your Dryer",
    category: "Home Maintenance",
    duration: "60 minutes",
    participants: 756,
    avgScore: 88,
    icon: "Power",
    description: "Master the science of dryers, proper usage techniques, and essential maintenance",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800",
    learningPath: "/learn/4",
    content: [
      {
        type: "text",
        title: "Introduction: The Mystery of the Dryer",
        data: "A dryer might seem like magic—clothes go in wet, and they come out dry—but it's all science and engineering. By understanding how your dryer works, you can save time, money, and frustration while making sure it stays in great shape for years."
      },
      {
        type: "list",
        data: [
          "The science behind how dryers work",
          "How to set up and use your dryer for the first time",
          "Maintenance tips to keep it running efficiently",
          "Common questions and overlooked tips for troubleshooting"
        ]
      },
      {
        type: "text",
        title: "Module 1: How Does a Dryer Work?",
        isKey: true,
        data: "Dryers operate through three essential systems working in harmony: heat generation, airflow circulation, and ventilation. Understanding these systems is key to proper maintenance and troubleshooting."
      },
      {
        type: "list",
        data: [
          "Heat Generation: Electric coil or gas burner heats the air",
          "Airflow Circulation: Fan system moves hot air through tumbling clothes",
          "Ventilation: Removes moisture and maintains proper airflow"
        ]
      },
      {
        type: "text",
        isExercise: true,
        data: "Think about your own dryer. Which of these three systems seems most important to you and why? Consider what might happen if any one of them failed."
      },
      {
        type: "interactive",
        question: "What are the three main systems in a dryer?",
        options: [
          "Timer, door, and drum",
          "Heat, airflow, and ventilation",
          "Power, water, and air",
          "Motor, belt, and fan"
        ],
        correct: 1
      },
      {
        type: "text",
        title: "Module 2: First-Time Setup",
        isKey: true,
        data: "Proper setup is crucial for safety and efficiency. Follow these steps carefully to ensure your dryer works correctly and safely."
      },
      {
        type: "list",
        data: [
          "Choose a level location with proper clearance",
          "Connect to appropriate power (240V for electric)",
          "Install vent hose without kinks or bends",
          "Test exterior vent airflow"
        ]
      },
      {
        type: "text",
        isExercise: true,
        data: "Create a checklist for your dryer setup. What are the three most important things you need to verify?"
      },
      {
        type: "interactive",
        question: "What's the most important factor in dryer placement?",
        options: [
          "Near a window",
          "Level surface with proper clearance",
          "Away from water sources",
          "Close to washing machine"
        ],
        correct: 1
      },
      // Continue with remaining modules...
      {
        type: "text",
        title: "Module 3: Efficient Usage",
        isKey: true,
        data: "Using your dryer efficiently not only saves energy but also extends the life of both the appliance and your clothes."
      },
      {
        type: "list",
        data: [
          "Sort clothes by weight and fabric type",
          "Use appropriate heat settings",
          "Avoid overloading the drum",
          "Clean lint trap after every load"
        ]
      },
      // Add remaining modules with proper formatting...
    ]
  }
];