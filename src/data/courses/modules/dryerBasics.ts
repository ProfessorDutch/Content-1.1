import { ModuleContent } from '../../../types';

export const dryerBasicsModule: ModuleContent = {
  overview: "A dryer might seem like magic—clothes go in wet, and they come out dry—but it's all science and engineering. By understanding how your dryer works, you can save time, money, and frustration while making sure it stays in great shape for years.",
  components: [
    {
      type: 'text',
      title: 'Introduction: The Mystery of the Dryer',
      data: "A dryer might seem like magic—clothes go in wet, and they come out dry—but it's all science and engineering. By understanding how your dryer works, you can save time, money, and frustration while making sure it stays in great shape for years.",
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800'
    },
    {
      type: 'list',
      title: "What you'll learn in this course",
      data: [
        "The science behind how dryers work",
        "How to set up and use your dryer for the first time",
        "Maintenance tips to keep it running efficiently",
        "Common questions and overlooked tips for troubleshooting"
      ]
    },
    {
      type: 'text',
      title: 'Why This Matters',
      isKey: true,
      data: "Your dryer is an investment. With proper care and understanding, you'll avoid unnecessary costs, extend its lifespan, and reduce energy waste."
    },
    {
      type: 'text',
      title: 'The Three Key Systems',
      data: "Dryers work through three essential systems working in harmony: heat generation, airflow circulation, and ventilation. Understanding these systems is key to proper maintenance and troubleshooting."
    },
    {
      type: 'list',
      title: 'Core Components',
      data: [
        "Heat Generation: The dryer uses either an electric coil or a gas burner to heat air. This heat evaporates the moisture in your clothes.",
        "Airflow Circulation: A fan pushes the hot air through the drum, where your clothes tumble to ensure even drying.",
        "Ventilation: Moist air exits through the vent system, keeping the drum dry and reducing humidity inside the dryer."
      ]
    },
    {
      type: 'text',
      isKey: true,
      title: 'Fun Fact',
      data: "Dryer sheets reduce static electricity by balancing the charge that builds up during tumbling. That's why your clothes don't stick together!"
    },
    {
      type: 'text',
      isExercise: true,
      title: 'Quick Exercise',
      data: "Imagine the dryer as a hairdryer for your clothes—it uses heat, airflow, and movement to do the job. What part of this process seems the most important to you, and why?"
    },
    {
      type: 'interactive',
      title: 'Test Your Knowledge',
      question: "What are the three main systems that make a dryer work?",
      options: [
        "Timer, door, and drum",
        "Heat, airflow, and ventilation",
        "Power, water, and air",
        "Motor, belt, and fan"
      ],
      correct: 1
    }
  ]
};