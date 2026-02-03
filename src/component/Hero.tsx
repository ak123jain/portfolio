'use client';

import React from "react"
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';
import akash from '../assets/WhatsApp Image 2026-02-02 at 1.53.30 PM.jpeg';
import resume from '../assets/Akash_Resume.pdf';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = ['Frontend Developer', 'Backend Developer', 'React Specialist'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    const visibilityTimer = setTimeout(() => setIsVisible(true), 100);
    const skillTimer = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(visibilityTimer);
      clearInterval(skillTimer);
    };
  }, [skills.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navbarRef.current || window.innerWidth < 1024) return;

    const { clientX } = e;
    const windowWidth = window.innerWidth;
    const maxOffset = 40;
    const mousePercentage = (clientX / windowWidth) * 2 - 1;
    const offset = mousePercentage * maxOffset;

    // Apply transform that keeps the navbar centered while adding the offset
    navbarRef.current.style.transform = `translateX(calc(-50% + ${offset}px))`;
  };

   const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skill', label: 'Skills' }
  
];


  return (
    <div
      className="relative w-full bg-white text-gray-800 font-sans overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Fixed Navbar */}
      <div
        ref={navbarRef}
        className={`fixed top-6 left-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="hidden lg:flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 whitespace-nowrap">
           {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => {
      const section = document.getElementById(item.id);
      section?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item.id);
    }}
    className={`relative px-5 py-2 text-sm font-medium transition-colors ${
      activeSection === item.id
        ? "text-blue-600"
        : "text-gray-600 hover:text-gray-900"
    }`}
  >
    {item.label}

    {activeSection === item.id && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-blue-600 rounded-full"></span>
    )}
  </button>
))}


          <Link
            to="/contact"
            className="ml-4 px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-white rounded-full shadow-md text-gray-800 hover:bg-gray-50 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`text-2xl font-medium transition-colors ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-800 hover:text-gray-600'
              }`}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-colors mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full absolute top-0 left-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="border-l border-gray-200 h-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }}
            ></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0 left-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="border-t border-gray-200 w-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left Section - Profile */}
        <div
          className={`lg:w-1/3 xl:w-1/4 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center px-6 sm:px-8 py-8 lg:py-12 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="max-w-md mx-auto w-full">
            <div className="mb-6 lg:mb-8 flex justify-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src={akash || "/placeholder.svg"} 
                  alt="Akash Jain" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4 text-gray-900 text-center">
              Akash Jain
            </h1>

            <div className="h-7 lg:h-8 mb-4 lg:mb-6 overflow-hidden relative text-center">
              {skills.map((skill, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg lg:text-base xl:text-lg text-gray-700 absolute w-full transition-all duration-500 ${
                    skillIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {skill}
                </p>
              ))}
            </div>

            <div className="w-16 h-1 bg-gray-900 mb-4 lg:mb-6 mx-auto"></div>
            
            <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base lg:text-sm xl:text-base px-0 lg:px-2">
              Crafting elegant, high-performance web experiences with modern technologies.
            </p>

            <div className="flex space-x-4 mt-6 lg:mt-8 justify-center">
              <a
                href="https://github.com/ak123jain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-jain-6164a324b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aj9882854@gmail.com"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div
          className={`lg:w-2/3 xl:w-3/4 flex flex-col justify-center px-4 sm:px-6 lg:pl-8 xl:pl-12 pr-6 sm:pr-8 py-8 lg:py-12 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 lg:mb-8">
              Experience &amp; Expertise
            </h2>

            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-800 mb-2">
                  React Development
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-sm xl:text-base">
                  Building modern, responsive web applications with React and Next.js. Focused on performance optimization and clean component architecture.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-800 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-sm xl:text-base">
                  Creating intuitive, user-centered designs that balance aesthetic appeal with functional usability.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-800 mb-2">
                  Frontend Architecture
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-sm xl:text-base">
                  Developing scalable frontend architectures with modern tooling, state management, and performance best practices.
                </p>
              </div>
            </div>

            <div className="mt-8 lg:mt-12">
              <a
                href={resume}
                download
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium text-white bg-gray-900 rounded shadow-lg transition-all hover:bg-gray-800 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center">
                  <FileText size={18} className="mr-2" />
                  <span className="mr-2">Download Resume</span>
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;