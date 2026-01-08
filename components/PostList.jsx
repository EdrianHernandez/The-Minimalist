import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list space-y-12">
      {posts.map((post) => (
        <article key={post.id} className="post-preview group cursor-pointer flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-full sm:w-1/3 aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 flex-shrink-0">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 space-y-3">
            <span className="category-tag text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              {post.category}
            </span>
            <h2 className="text-xl md:text-2xl font-bold serif-text group-hover:text-zinc-700 transition-colors">
              {post.title}
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center text-xs font-medium text-zinc-400 pt-2">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostList;
