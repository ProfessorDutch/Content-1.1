import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Trophy, Share2, Award, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { testModules } from '../data/testModules';
import { modules } from '../data/courseModules';

export default function Results() {
  const { moduleId } = useParams();
  const location = useLocation();
  const currentTest = testModules.find(t => t.moduleId === moduleId);
  const currentModule = modules.find(m => m.id === moduleId);
  
  if (!location.state || !currentTest || !currentModule) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600">No results available.</p>
        <Link to="/" className="text-primary hover:text-primary-dark">Return Home</Link>
      </div>
    );
  }

  const results = location.state;
  const passed = results.score >= currentTest.passingScore;

  const categories = [
    {
      name: "Knowledge",
      score: results.score
    },
    {
      name: "Application",
      score: Math.round(results.score * 0.9)
    }
  ];

  const getScoreStatus = (score: number) => {
    if (score >= 90) return { text: "Excellent", color: "text-green-600" };
    if (score >= 80) return { text: "Good", color: "text-blue-600" };
    if (score >= 70) return { text: "Fair", color: "text-yellow-600" };
    return { text: "Needs Improvement", color: "text-red-600" };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-primary p-8 text-center">
          {passed ? (
            <>
              <Trophy className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-secondary">Congratulations!</h1>
              <p className="text-secondary/80 mt-2">
                You've successfully completed {currentModule.title}
              </p>
            </>
          ) : (
            <>
              <XCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-secondary">Keep Learning</h1>
              <p className="text-secondary/80 mt-2">
                Review the material and try again
              </p>
            </>
          )}
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">{results.score}%</div>
              <div className="text-neutral mt-1">Overall Score</div>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">
                {results.correctAnswers}/{results.totalQuestions}
              </div>
              <div className="text-neutral mt-1">Correct Answers</div>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary">{results.timeSpent}</div>
              <div className="text-neutral mt-1">Time Spent</div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-primary">Performance by Category</h2>
            {categories.map((category, index) => {
              const status = getScoreStatus(category.score);
              return (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary">{category.name}</span>
                    <span className={`text-sm ${status.color}`}>{status.text}</span>
                  </div>
                  <div className="w-full bg-neutral/20 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${category.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4">
            {passed && (
              <button className="flex items-center space-x-2 bg-primary text-secondary px-6 py-3 rounded-md hover:bg-primary-dark transition">
                <Award className="h-5 w-5" />
                <span>Download Certificate</span>
              </button>
            )}
            <button className="flex items-center space-x-2 border border-neutral/20 text-neutral-dark px-6 py-3 rounded-md hover:bg-secondary transition">
              <Share2 className="h-5 w-5" />
              <span>Share Results</span>
            </button>
            <Link
              to="/"
              className="flex items-center space-x-2 border border-neutral/20 text-neutral-dark px-6 py-3 rounded-md hover:bg-secondary transition"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Modules</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}