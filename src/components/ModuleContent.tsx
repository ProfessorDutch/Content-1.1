import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Course } from '../types';

interface ModuleContentProps {
  module: Course;
}

const ModuleContentView: React.FC<ModuleContentProps> = ({ module }) => {
  if (!module.content) {
    return (
      <div className="p-6">
        <p className="text-neutral-600">No content available for this module.</p>
      </div>
    );
  }

  const { content } = module;
  const modules = content.components as Record<string, any>;

  return (
    <div className="p-6 space-y-8">
      {/* Overview Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary">Overview</h3>
        <p className="text-neutral-600 leading-relaxed">{content.overview}</p>
      </div>

      {/* Module Sections */}
      {modules && Object.entries(modules).map(([title, moduleContent], index) => (
        <div key={index} className="space-y-4 border-t border-neutral-200 pt-8">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          
          {/* Module Overview */}
          {moduleContent.overview && (
            <p className="text-neutral-600 leading-relaxed">{moduleContent.overview}</p>
          )}

          {/* Analogy Section */}
          {moduleContent.analogy && (
            <div className="bg-secondary/10 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-2">Example</h4>
                  {moduleContent.analogy.scenario && (
                    <p className="text-neutral-600 mb-2">{moduleContent.analogy.scenario}</p>
                  )}
                  <p className="text-neutral-600">{moduleContent.analogy.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Components Section */}
          {moduleContent.components && (
            <div className="space-y-4">
              {Array.isArray(moduleContent.components) ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {moduleContent.components.map((component: any, idx: number) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200">
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
              ) : (
                <div className="space-y-4">
                  {Object.entries(moduleContent.components).map(([key, value], idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200">
                      <h4 className="font-medium text-primary mb-2">{key}</h4>
                      <p className="text-neutral-600 whitespace-pre-line">{String(value)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Key Takeaway */}
          {moduleContent.keyTakeaway && (
            <div className="bg-primary/5 p-6 rounded-lg mt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-2">Key Takeaway</h4>
                  <p className="text-neutral-600">{moduleContent.keyTakeaway}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleContentView;