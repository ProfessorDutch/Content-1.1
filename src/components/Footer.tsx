import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-neutral/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-neutral-dark">Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span className="text-neutral-dark">by MustardSeed</span>
          </div>
          <div className="text-sm text-neutral">
            © {new Date().getFullYear()} MustardSeed Learning. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}