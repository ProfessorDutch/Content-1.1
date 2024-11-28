import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseViewer from './pages/CourseViewer';
import Learn from './pages/Learn';
import TestTaking from './pages/TestTaking';
import Results from './pages/Results';
import TestList from './pages/TestList';
import ContentOverview from './pages/ContentOverview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:moduleId" element={<CourseViewer />} />
          <Route path="/learn/:moduleId" element={<Learn />} />
          <Route path="/test/:moduleId" element={<TestTaking />} />
          <Route path="/results/:moduleId" element={<Results />} />
          <Route path="/tests" element={<TestList />} />
          <Route path="/content" element={<ContentOverview />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}