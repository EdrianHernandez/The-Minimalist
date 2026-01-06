
import React from 'react';
import { Category } from '../types';

interface BlogHeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: Category[] = ['All', 'Tech', 'Life', 'Travel'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-bold tracking-tighter serif-text cursor-pointer select-none"
          onClick={() => onCategoryChange('All')}
        >
          The Minimalist
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'text-zinc-900' 
                  : 'text-zinc-400 hover:text-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="bg-zinc-900 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
