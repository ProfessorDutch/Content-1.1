import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ContentProps {
  content: {
    type: string;
    data: any;
    question?: string;
    options?: string[];
    correct?: number;
  };
  onComplete?: () => void;
}

export default function LearningContent({ content, onComplete }: ContentProps) {
  switch (content.type) {
    case "text":
      return <p className="text-neutral-dark leading-relaxed">{content.data}</p>;
    case "list":
      return (
        <ul className="space-y-2 mt-4">
          {content.data.map((item: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-neutral-dark">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "interactive":
      return (
        <div className="bg-secondary/50 p-6 rounded-lg mt-4">
          <h4 className="font-medium text-primary mb-4">{content.question}</h4>
          <div className="space-y-2">
            {content.options?.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => index === content.correct && onComplete?.()}
                className="w-full text-left p-3 rounded bg-white hover:bg-primary hover:text-secondary transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}