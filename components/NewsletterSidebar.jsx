import React, { useState } from 'react';

const NewsletterSidebar = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <aside className="newsletter-sidebar sticky top-32 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
      <h3 className="text-lg font-bold serif-text mb-2">Weekly Digest</h3>
      <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
        Join 15,000+ others and receive our best stories on tech and life directly in your inbox.
      </p>
      
      {status === 'success' ? (
        <div className="bg-zinc-900 text-white p-4 rounded-lg text-sm font-medium animate-pulse">
          Thank you for subscribing! Check your inbox soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
            className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-zinc-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-zinc-800 disabled:bg-zinc-500 transition-all shadow-sm active:scale-95"
          >
            {status === 'loading' ? 'Sending...' : 'Join Newsletter'}
          </button>
          <p className="text-[10px] text-zinc-400 text-center px-4">
            Zero spam. Unsubscribe at any time.
          </p>
        </form>
      )}

      <div className="mt-12 space-y-6">
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">
          Recommended Reading
        </h4>
        <div className="space-y-4">
          <a href="#" className="block group">
            <h5 className="text-sm font-bold serif-text group-hover:underline">The psychology of clean code and why we love it</h5>
            <span className="text-[10px] text-zinc-400">Tech • 5 min read</span>
          </a>
          <a href="#" className="block group">
            <h5 className="text-sm font-bold serif-text group-hover:underline">Travel hacks for the modern digital nomad</h5>
            <span className="text-[10px] text-zinc-400">Travel • 8 min read</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default NewsletterSidebar;
