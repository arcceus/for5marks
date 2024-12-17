import React, { useState } from 'react';
import { 
  User, Briefcase, Code, Award, Globe, Mail, 
  ArrowUpRight, MousePointer, Zap, Rss 
} from 'lucide-react';
import FramerBlogPage from './sections/Blog';

const FramerPortfolio = () => {
  const [currentView, setCurrentView] = useState('portfolio');

  if (currentView === 'blog') {
    return <FramerBlogPage onBackToPortfolio={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="max-w-7xl mx-auto p-8 bg-[#0D0D0D] min-h-screen text-white">
      <div className="grid grid-cols-4 grid-rows-3 gap-6 h-full">
        {/* Profile Section */}
        <div className="col-span-1 row-span-2 bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <img 
                src="/img/natsumeji.jpg" 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#2C2C2C]"
              />
              <div className="bg-[#2C2C2C] rounded-full p-2">
                <User size={20} className="text-[#8A8A8A]"/>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Deepak Anand</h2>
            <p className="text-[#8A8A8A] text-sm">
            Hi, I'm a tech enthusiast driven by curiosity and a passion for understanding complex systems. My world revolves around Linux hardware hacking, web development, and exploring emerging technologies like Web3. Currently diving deep into backend development and Linux internals, I'm always eager to learn and build something innovative.
            When I'm not coding, I express my creativity through photography and music, finding inspiration in the intersection of technology and art. My approach is simple: stay curious, never stop learning, and approach every challenge as an opportunity to expand my skills and understanding of the digital world.
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between bg-[#2C2C2C] rounded-lg p-3">
              <span className="text-sm">Portfolio Views</span>
              <span className="font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="col-span-2 row-span-1 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Skills & Expertise</h3>
            <Zap size={20} className="text-[#8A8A8A]"/>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Linux', 'React', 'Web Development', 'UI/UX', 'Prototyping'].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 rounded-full text-sm bg-[#2C2C2C] text-[#8A8A8A]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="col-span-1 row-span-2 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Projects</h3>
            <Code size={20} className="text-[#8A8A8A]"/>
          </div>
          <div className="space-y-4">
            {[
              { 
                name: 'Kietmon', 
                description: 'Pokemon styled map of my college in pure JS.',
                image: '/img/kietmon.png'
              },
              { 
                name: 'Discbot', 
                description: 'Simple bot to stream audio in discord voice channels.',
                image: '/img/discordbot.jpg'
              }
            ].map((project) => (
              <div 
                key={project.name} 
                className="bg-[#2C2C2C] rounded-lg overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold">{project.name}</p>
                    <p className="text-sm text-[#8A8A8A]">{project.description}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#8A8A8A]"/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="col-span-2 row-span-1 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <Briefcase size={20} className="text-[#8A8A8A]"/>
          </div>
          {/* <div className="flex items-center justify-between bg-[#2C2C2C] rounded-lg p-4">
            <div>
              <p className="font-bold">Job Role 1</p>
              <p className="text-sm text-[#8A8A8A]">Company 1 Inc. • Full-time</p>
            </div>
            <span className="text-sm text-[#8A8A8A]">20xx - Present</span>
          </div> */}
        </div>

        {/* Contact & Interactions */}
        <div className="col-span-1 row-span-1 bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Contact</h3>
            <Mail size={20} className="text-[#8A8A8A]"/>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#2C2C2C] rounded-lg p-3">
              <span className="text-sm">Email</span>
              <a 
                href="mailto:deepakanand1300@gmail.com" 
                className="text-sm text-[#8A8A8A] hover:text-white transition-colors"
              >
                Click here
              </a>
            </div>
            <div className="flex items-center justify-between bg-[#2C2C2C] rounded-lg p-3">
              <span className="text-sm">Availability</span>
              <span className="text-sm text-green-500">Open to Work</span>
            </div>
          </div>
        </div>

        {/* Online Presence */}
        <div className="col-span-1 row-span-1 bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Online</h3>
            <Globe size={20} className="text-[#8A8A8A]"/>
          </div>
          <div className="space-y-2">
            {['LinkedIn', 'GitHub'].map((platform) => (
              <div 
                key={platform} 
                className="flex items-center justify-between bg-[#2C2C2C] rounded-lg p-3"
              >
                <span className="text-sm">{platform}</span>
                <ArrowUpRight size={16} className="text-[#8A8A8A]"/>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div 
          onClick={() => setCurrentView('blog')}
          className="col-span-1 row-span-1 bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between border border-[#2C2C2C] hover:border-[#4A4A4A] transition-all duration-300 cursor-pointer hover:bg-[#2C2C2C]"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Blog</h3>
            <Rss size={20} className="text-[#8A8A8A]"/>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#8A8A8A]">Explore Insights</span>
            <ArrowUpRight size={16} className="text-[#8A8A8A]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramerPortfolio;