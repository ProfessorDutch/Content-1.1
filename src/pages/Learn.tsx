import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, BookOpen } from 'lucide-react';
import ModuleSection from '../components/ModuleSection';
import { modules } from '../data/courseModules';

export default function Learn() {
  const { moduleId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const currentModule = modules.find(m => m.id === moduleId);

  if (!currentModule?.content?.components) {
    return <Navigate to="/tests" />;
  }

  const contentSections = currentModule.content.components;
  const progress = (completedSections.length / contentSections.length) * 100;

  const handleComplete = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    if (currentSection < contentSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Module Header */}
          <div className="bg-white border-b border-neutral/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">{currentModule.title}</h1>
                  <p className="text-neutral mt-1">{currentModule.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-neutral">
                <PlayCircle className="h-5 w-5 text-primary" />
                <span>{currentModule.duration}</span>
              </div>
            </div>
          
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-neutral mb-1.5">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 bg-gradient-to-b from-white to-secondary/5">
            <ModuleSection 
              content={contentSections[currentSection]}
              onComplete={handleComplete}
            />
          </div>

          {/* Navigation */}
          <div className="border-t border-neutral/10 p-4 bg-white">
            <div className="flex justify-between items-center">
              <div className="text-sm text-neutral">
                {currentSection + 1} of {contentSections.length} sections
              </div>
              <div className="flex space-x-4">
                {currentSection === contentSections.length - 1 && completedSections.length === contentSections.length ? (
                  <button
                    onClick={() => window.location.href = `/test/${moduleId}`}
                    className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all duration-300 shadow-sm"
                  >
                    <span>Take Assessment</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleComplete}
                    className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all duration-300 shadow-sm"
                  >
                    <span>Continue</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}