import React, { useState, useMemo } from 'react';
import BlogHeader from './components/BlogHeader';
import FeaturedPost from './components/FeaturedPost';
import PostList from './components/PostList';
import NewsletterSidebar from './components/NewsletterSidebar';
import { BLOG_POSTS } from './constants';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return activeCategory === 'All' 
      ? BLOG_POSTS 
      : BLOG_POSTS.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = useMemo(() => {
    return activeCategory === 'All' 
      ? BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0]
      : filteredPosts[0];
  }, [filteredPosts, activeCategory]);

  const listPosts = useMemo(() => {
    return filteredPosts.filter(p => p.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 md:py-20">
        {featuredPost && (
          <FeaturedPost post={featuredPost} />
        )}

        <div className="blog-content grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
              <h2 className="text-2xl font-bold serif-text">
                {activeCategory === 'All' ? 'Latest Stories' : `${activeCategory} Stories`}
              </h2>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
              </div>
            </div>
            
            {listPosts.length > 0 ? (
              <PostList posts={listPosts} />
            ) : (
              <div className="py-20 text-center space-y-4 bg-zinc-50 rounded-2xl">
                <p className="text-zinc-400 italic">No more stories found in this category.</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="text-sm font-bold underline"
                >
                  View all stories
                </button>
              </div>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <NewsletterSidebar />
          </div>
        </div>
      </main>

      <footer className="bg-zinc-50 border-t border-zinc-100 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-xl font-bold serif-text mb-4">The Minimalist</div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Curating the finest insights in technology, life, and the world around us. 
              Designed for readers who appreciate clarity and deep thinking.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Categories</h4>
            <ul className="text-sm space-y-2 text-zinc-600">
              <li><button onClick={() => setActiveCategory('Tech')} className="hover:text-zinc-900">Tech</button></li>
              <li><button onClick={() => setActiveCategory('Life')} className="hover:text-zinc-900">Life</button></li>
              <li><button onClick={() => setActiveCategory('Travel')} className="hover:text-zinc-900">Travel</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Social</h4>
            <ul className="text-sm space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900">Twitter</a></li>
              <li><a href="#" className="hover:text-zinc-900">Instagram</a></li>
              <li><a href="#" className="hover:text-zinc-900">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-200 text-center">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">
            © 2024 The Minimalist. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
