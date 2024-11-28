import React from 'react';

interface ModuleProgressProps {
  currentModule: number;
  totalModules: number;
}

export default function ModuleProgress({ currentModule, totalModules }: ModuleProgressProps) {
  const progress = (currentModule / totalModules) * 100;

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-neutral-600 mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-secondary/20 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-neutral-600 mt-2">
        Module {currentModule} of {totalModules}
      </div>
    </div>
  );
}