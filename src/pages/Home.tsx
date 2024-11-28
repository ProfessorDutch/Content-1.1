import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/courseModules';
import { CreditCard, DollarSign, Home as HomeIcon, PiggyBank, TrendingUp, LineChart, Power } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType } = {
  CreditCard,
  DollarSign,
  Home: HomeIcon,
  PiggyBank,
  TrendingUp,
  LineChart,
  Power
};

export default function Home() {
  const categoryTitles = {
    free: 'Free Life Skills Courses',
    beginner: 'Beginner Courses',
    intermediate: 'Intermediate Courses',
    advanced: 'Advanced Courses',
    expert: 'Expert Level Courses'
  };

  // Group courses by category
  const coursesByCategory = modules.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = [];
    }
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, typeof modules>);

  return (
    <div className="bg-[#fafaf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Master Life Skills & Financial Wisdom
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            From basic life skills to advanced financial strategies. Start with our free courses or unlock premium content with Ambassador Seeds.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition shadow-sm"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Return to Home</span>
          </Link>
        </section>

        {/* Course Categories */}
        {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
          <section key={category} className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">{categoryTitles[category as keyof typeof categoryTitles]}</h2>
              {category !== 'free' && (
                <span className="text-accent">
                  Requires Ambassador Seeds
                </span>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => {
                const Icon = iconMap[course.icon as keyof typeof iconMap];
                
                return (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {Icon && <Icon className="h-6 w-6 text-primary" />}
                          </div>
                          <h3 className="text-lg font-semibold text-primary">{course.title}</h3>
                        </div>
                        {course.creditCost > 0 && (
                          <span className="text-accent font-medium">
                            {course.creditCost} Seeds
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-600 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-neutral-500">{course.duration}</span>
                          {course.participants > 0 && (
                            <span className="text-sm text-neutral-500">
                              {course.participants.toLocaleString()} learners
                            </span>
                          )}
                        </div>
                        <Link
                          to={`/learn/${course.id}`}
                          className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                        >
                          Start Learning →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}