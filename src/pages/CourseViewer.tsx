import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import ModuleProgress from '../components/ModuleProgress';
import ModuleContent from '../components/ModuleContent';
import { modules } from '../data/courseModules';

export default function CourseViewer() {
  const { moduleId } = useParams();
  const [currentModule, setCurrentModule] = useState<any>(null);

  useEffect(() => {
    if (moduleId) {
      const foundModule = modules.find(m => m.id === moduleId);
      setCurrentModule(foundModule);
    }
  }, [moduleId]);

  // Handle loading and not found states
  if (!moduleId) {
    return <Navigate to="/" />;
  }

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Module Not Found</h2>
          <p className="text-neutral-600">The requested module could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{currentModule.title}</h1>
              <p className="text-neutral-600">{currentModule.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-600 mt-4">
            <span>Duration: {currentModule.duration}</span>
            {currentModule.creditCost > 0 && (
              <span className="text-accent">Cost: {currentModule.creditCost} Seeds</span>
            )}
          </div>
        </div>

        {/* Module Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ModuleContent module={currentModule} />

          {/* Navigation Controls */}
          <div className="border-t border-neutral-200 p-6 bg-neutral-50 flex justify-between items-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Modules</span>
            </button>

            {currentModule.creditCost === 0 && (
              <button
                onClick={() => window.location.href = `/test/${currentModule.id}`}
                className="flex items-center space-x-2 bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-600 transition"
              >
                <span>Take Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}