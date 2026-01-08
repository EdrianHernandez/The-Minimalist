import React from 'react';

const FeaturedPost = ({ post }) => {
  return (
    <section className="featured-post relative group cursor-pointer overflow-hidden rounded-2xl mb-16 bg-zinc-50">
      <div className="grid md:grid-cols-12 items-center">
        <div className="md:col-span-7 overflow-hidden h-full min-h-[300px] md:min-h-[450px]">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="md:col-span-5 p-8 md:p-12 lg:p-16">
          <span className="category-tag text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">
            Featured in {post.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight serif-text mb-6 group-hover:text-zinc-700 transition-colors">
            {post.title}
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm font-medium text-zinc-500">
            <span>{post.author}</span>
            <span className="mx-2 font-light">|</span>
            <span>{post.date}</span>
            <span className="mx-2 font-light">|</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
