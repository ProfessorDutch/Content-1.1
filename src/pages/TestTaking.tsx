import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { testModules } from '../data/testModules';

export default function TestTaking() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const currentTest = testModules.find(t => t.moduleId === moduleId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(currentTest ? currentTest.timeLimit * 60 : 0);
  const [startTime] = useState(new Date());

  useEffect(() => {
    if (!currentTest) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTest]);

  if (!currentTest) {
    return null;
  }

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === currentTest.questions[index].correct) {
        correct++;
      }
    });
    return Math.round((correct / currentTest.questions.length) * 100);
  };

  const submitTest = () => {
    const endTime = new Date();
    const timeSpent = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    const score = calculateScore();
    
    navigate(`/results/${moduleId}`, {
      state: {
        score,
        timeSpent: formatTime(timeSpent),
        totalQuestions: currentTest.questions.length,
        correctAnswers: Math.round((score / 100) * currentTest.questions.length),
        passingScore: currentTest.passingScore
      }
    });
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const question = currentTest.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentTest.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">{currentTest.title}</h1>
          <div className="flex items-center space-x-2 text-neutral">
            <Clock className="h-5 w-5" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between text-sm text-neutral">
            <span>Question {currentQuestion + 1} of {currentTest.questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>

          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-medium text-primary">{question.question}</h2>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    answers[currentQuestion] === index
                      ? 'border-primary bg-primary/5'
                      : 'border-neutral/20 hover:border-neutral/30'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                currentQuestion === 0
                  ? 'text-neutral/40 cursor-not-allowed'
                  : 'text-neutral hover:text-primary'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md transition ${
                answers[currentQuestion] === undefined
                  ? 'bg-neutral/20 text-neutral/40 cursor-not-allowed'
                  : 'bg-primary text-secondary hover:bg-primary-dark'
              }`}
            >
              <span>{currentQuestion === currentTest.questions.length - 1 ? 'Finish' : 'Next'}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}