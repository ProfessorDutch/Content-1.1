import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

export default function ModuleCard({ title, description, icon, image, link }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        <p className="text-neutral mb-4">{description}</p>
        <Link
          to={link}
          className="text-accent font-medium hover:text-accent-dark"
        >
          Start Module →
        </Link>
      </div>
    </div>
  );
}