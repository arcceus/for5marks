import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const BlogPost = ({ category, title, description }) => (
  <article className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#292929] hover:border-[#3a3a3a] transition group">
    <div className="w-full h-48 bg-[#2a2a2a] flex items-center justify-center">
      <div className="w-2/3 h-2/3 bg-[#3a3a3a] rounded-xl opacity-50"></div>
    </div>
    <div className="p-6">
      <span className="text-sm text-[#888888] mb-2 block">{category}</span>
      <h2 className="text-xl font-bold mb-3 text-white">{title}</h2>
      <p className="text-[#999999] mb-4">{description}</p>
      <a href="#" className="text-white group-hover:text-[#cccccc] transition inline-flex items-center">
        Read More 
        <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
      </a>
    </div>
  </article>
);

 const FramerBlogPage = () => {
   const [email, setEmail] = useState('');

  return (
    <div className="bg-black text-white font-inter min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <header className="mb-16">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="white" className="mr-2">
                <path d="M16 0L0 16h32L16 0z"/>
                <path d="M16 32L32 16H0l16 16z"/>
              </svg>
              <a href="./Landing" className="text-[#888888] hover:text-white transition">Blog</a>
              <a href="./Landing" className="text-[#888888] hover:text-white transition">Resources</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#888888] hover:text-white transition">Login</a>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#e6e6e6] transition">
                Get Started
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#666666]">
            Personal Blog
          </h1>
          <p className="text-xl text-[#999999] max-w-2xl mx-auto mb-8">
            My safe space for sharing thoughts and ideas.
            
          </p>

          {/* Newsletter Signup */}
          <div className="flex justify-center space-x-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="bg-[#1a1a1a] border border-[#292929] px-4 py-3 rounded-full text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#444444] w-72"
            />
            <button 
              className="bg-white text-black px-6 py-3 rounded-full 
                         hover:bg-[#e6e6e6] transition"
            >
              Subscribe
            </button>
          </div>
        </main>

        {/* Blog Posts */}
        <section className="grid md:grid-cols-3 gap-8">
          <BlogPost 
            category="Styling Webpage"
            title="Crafting Scalable Design Frameworks"
            description="Why everyone should use tailwind."
          />
          <BlogPost 
            category="UX Strategy"
            title="User-Centered Design Principles"
            description="Sometimes copying can significantly help you."
          />
          <BlogPost 
            category="Random"
            title="Google's New Quantum Chip"
            description="It has the potential to change the whole web click to know how."
          />
          <BlogPost
            category="Test"
            title="hey hey hey"
            description="A random thing"
            />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[#666666]">
           2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FramerBlogPage;