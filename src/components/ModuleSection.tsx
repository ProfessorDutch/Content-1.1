import React from 'react';
import { CheckCircle, AlertCircle, BookOpen, Star, ArrowRight } from 'lucide-react';
import { ModuleSection as ModuleSectionType } from '../types';

interface ModuleSectionProps {
  content: ModuleSectionType;
  onComplete?: () => void;
}

export default function ModuleSection({ content, onComplete }: ModuleSectionProps) {
  if (!content) return null;

  const renderText = (text: string) => {
    const parts = text.split('\n\n');
    return parts.map((part, idx) => (
      <p key={idx} className="mb-2 last:mb-0 text-neutral-700 leading-relaxed">
        {part}
      </p>
    ));
  };

  const renderList = (items: string[]) => (
    <div className="space-y-1.5">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className="flex items-start space-x-3 bg-gradient-to-r from-white to-secondary/5 p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-neutral-700">{item}</p>
        </div>
      ))}
    </div>
  );

  const renderInteractive = (question: string, options: string[] = [], correct: number) => (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <h4 className="text-xl font-semibold text-primary">{question}</h4>
      </div>
      <div className="grid gap-1.5">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => idx === correct && onComplete?.()}
            className="group relative flex items-center w-full text-left p-3 rounded-lg bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
          >
            <span className="flex-grow">{option}</span>
            <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </button>
        ))}
      </div>
    </div>
  );

  const renderKeyPoint = (data: string | Record<string, string>) => (
    <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-3 rounded-lg shadow-sm">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Star className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-primary mb-1.5">Key Point</h4>
          {typeof data === 'string' ? (
            <p className="text-neutral-700">{data}</p>
          ) : (
            <div className="space-y-1.5">
              {Object.entries(data).map(([key, value], idx) => (
                <div key={idx} className="bg-white/50 p-2.5 rounded-lg">
                  <h5 className="font-medium text-primary mb-1">{key}</h5>
                  <p className="text-neutral-700 whitespace-pre-line">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderExercise = (data: string | Record<string, string>) => (
    <div className="bg-gradient-to-br from-primary/10 to-transparent p-3 rounded-lg shadow-sm">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <AlertCircle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-primary mb-1.5">Quick Exercise</h4>
          {typeof data === 'string' ? (
            <p className="text-neutral-700">{data}</p>
          ) : (
            <div className="space-y-1.5">
              {Object.entries(data).map(([key, value], idx) => (
                <div key={idx} className="bg-white/50 p-2.5 rounded-lg">
                  <h5 className="font-medium text-primary mb-1">{key}</h5>
                  <p className="text-neutral-700 whitespace-pre-line">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (content.isKey) {
    return renderKeyPoint(content.data);
  }

  if (content.isExercise) {
    return renderExercise(content.data);
  }

  switch (content.type) {
    case 'text':
      return (
        <div className="prose prose-lg max-w-none">
          {content.title && (
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">{content.title}</h3>
            </div>
          )}
          {content.image && (
            <img
              src={content.image}
              alt={content.title || 'Module illustration'}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
          )}
          {typeof content.data === 'string' ? (
            renderText(content.data)
          ) : (
            <div className="space-y-1.5">
              {Object.entries(content.data as Record<string, string>).map(([key, value], idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h4 className="font-medium text-primary mb-1">{key}</h4>
                  <p className="text-neutral-700 whitespace-pre-line">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    case 'list':
      return renderList(content.data as string[]);
    case 'interactive':
      return renderInteractive(content.question!, content.options, content.correct!);
    default:
      return null;
  }
}