import { ModuleContent } from '../../../types';

export const dryerLongTermModule: ModuleContent = {
  overview: "Dryers are built to last, but regular long-term maintenance is essential to keep them running efficiently and safely. Ignoring these tasks can lead to costly repairs or even the need for a new dryer.",
  components: {
    'Inspect the Vent Hose': `Look for cracks, kinks, or other signs of damage. A damaged vent hose reduces airflow and poses a fire risk.
Replace if necessary. Opt for a smooth metal hose, as it's safer and more durable than plastic or foil ones.`,
    'Vacuum Behind and Beneath': `Dust, lint, and small items can accumulate under your dryer, blocking airflow or causing overheating.
Use a vacuum with a narrow attachment to clean these hard-to-reach areas.`,
    'Inspect Drum Belt and Rollers': `If you hear squeaking or rattling during a cycle, the drum belt or rollers may need replacement.
Consult your user manual or call a technician for assistance.`,
    'Check Heating Element': `If your dryer isn't heating properly, the heating element might be worn out.
This is a common replacement part and can usually be swapped out by a technician.`
  },
  steps: [
    {
      title: "Run Full Loads",
      description: "Drying small loads wastes energy. Combine similar fabrics into one full load when possible."
    },
    {
      title: "Use Moisture Sensor",
      description: "Many dryers have a built-in sensor that stops the cycle when clothes are dry, saving energy."
    },
    {
      title: "Regular Cleaning",
      description: "Clean vents and lint traps regularly. Even small blockages can force your dryer to work harder."
    }
  ],
  keyTakeaway: "Schedule your yearly maintenance on the same day every year, like when you replace the batteries in your smoke detectors."
};