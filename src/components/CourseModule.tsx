import React from 'react';
import { Course } from '../types';
import { ArrowRight } from 'lucide-react';

interface CourseModuleProps {
  module: Course;
  onComplete?: () => void;
}

export default function CourseModule({ module, onComplete }: CourseModuleProps) {
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete?.();
  };

  if (!module.content) {
    return (
      <div className="p-6 text-center">
        <p className="text-neutral-600">This module is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* Module Header */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">{module.title}</h2>
        <p className="text-neutral-600">{module.content.overview}</p>
      </div>

      {/* Analogy Section */}
      {module.content.analogy && (
        <div className="bg-secondary/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Real-World Example</h3>
          {module.content.analogy.scenario && (
            <p className="text-neutral-600 mb-3">{module.content.analogy.scenario}</p>
          )}
          <p className="text-neutral-600">{module.content.analogy.explanation}</p>
        </div>
      )}

      {/* Components Section */}
      {module.content.components && Array.isArray(module.content.components) && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Key Components</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {module.content.components.map((component, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-medium text-primary mb-2">{component.title}</h4>
                <p className="text-neutral-600">{component.description}</p>
                {component.importance && (
                  <div className="mt-2 text-sm text-accent">
                    Weight: {component.importance}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Section */}
      <div className="flex justify-end pt-4">
        {!isCompleted ? (
          <button
            onClick={handleComplete}
            className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
          >
            <span>Complete Module</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => window.location.href = `/test/${module.id}`}
            className="flex items-center space-x-2 bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition"
          >
            <span>Take Assessment</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}