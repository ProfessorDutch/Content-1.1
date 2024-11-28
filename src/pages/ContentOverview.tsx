import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Layout } from 'lucide-react';
import { modules } from '../data/courseModules';

export default function ContentOverview() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Content Overview</h1>
            <p className="text-xl text-neutral-600">A complete list of all available content and resources</p>
          </div>

          {/* Learning Modules */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary flex items-center">
              <Book className="h-6 w-6 mr-2 text-accent" />
              Learning Modules
            </h2>
            <div className="grid gap-4">
              {modules.map((module) => (
                <div key={module.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-2">{module.title}</h3>
                  <p className="text-neutral-600 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral">
                      <span>{module.duration}</span>
                      <span>{module.participants} learners</span>
                    </div>
                    <Link
                      to={`/learn/${module.id}`}
                      className="text-accent hover:text-accent-dark font-medium"
                    >
                      View Module →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pages */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary flex items-center">
              <Layout className="h-6 w-6 mr-2 text-accent" />
              Pages
            </h2>
            <div className="grid gap-4">
              {[
                { path: '/', name: 'Home' },
                { path: '/tests', name: 'Learning Modules' },
                { path: '/content', name: 'Content Overview' }
              ].map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-primary">{page.name}</h3>
                </Link>
              ))}
            </div>
          </section>

          {/* Forms & Assessments */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary flex items-center">
              <FileText className="h-6 w-6 mr-2 text-accent" />
              Assessments
            </h2>
            <div className="grid gap-4">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  to={`/test/${module.id}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {module.title} Assessment
                  </h3>
                  <p className="text-neutral-600">
                    Test your knowledge of {module.title.toLowerCase()}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}