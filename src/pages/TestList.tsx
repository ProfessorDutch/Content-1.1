import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BarChart, CreditCard, Home, DollarSign, Power, PiggyBank, TrendingUp, LineChart } from 'lucide-react';
import { modules } from '../data/courseModules';

const iconMap: { [key: string]: React.ComponentType } = {
  CreditCard,
  Home,
  DollarSign,
  Power,
  PiggyBank,
  TrendingUp,
  LineChart
};

export default function TestList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Learning Modules</h1>
          <p className="mt-2 text-neutral">Complete each learning module before taking the corresponding assessment</p>
        </div>

        <div className="grid gap-5">
          {modules.map((module) => {
            const Icon = iconMap[module.icon];
            return (
              <div key={module.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                      src={module.image}
                      alt={module.title}
                    />
                  </div>
                  <div className="p-8 w-full">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          {Icon && <Icon className="h-5 w-5 text-primary" />}
                          <p className="text-sm font-medium text-accent">{module.category}</p>
                        </div>
                        <h2 className="text-xl font-semibold text-primary">{module.title}</h2>
                        <p className="text-neutral">{module.description}</p>
                      </div>
                      <Link
                        to={module.learningPath}
                        className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-600 transition"
                      >
                        Start Learning
                      </Link>
                    </div>
                    
                    <div className="mt-6 flex items-center space-x-8 text-sm text-neutral">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {module.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {module.participants.toLocaleString()} learners
                      </div>
                      <div className="flex items-center">
                        <BarChart className="h-4 w-4 mr-2" />
                        {module.avgScore}% avg. score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}