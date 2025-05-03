 


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
import akash from '../assets/akash-Photoroom.png';
import resume from '../assets/akash3resume.pdf';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Correctly typed ref
  const navbarRef = useRef<HTMLDivElement | null>(null);

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
  }, []);

  // ✅ Proper typing for MouseEvent
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navbarRef.current || window.innerWidth < 1024) return;

    const { clientX } = e;
    const windowWidth = window.innerWidth;
    const maxOffset = 40;

    const mousePercentage = (clientX / windowWidth) * 2 - 1;
    const offset = mousePercentage * maxOffset;

    navbarRef.current.style.transform = `translateX(${offset}px)`;
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/projects', label: 'Projects' },
    { id: '/skill', label: 'Skills' },
    { id: '/conttact', label: 'Contact' },
  ];

  return (
    <div
      className="relative min-h-screen bg-white text-gray-800 font-sans overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Navbar */}
      <div
        ref={navbarRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="hidden lg:flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100">
          {navItems.map((item) => (
            // <a
            //   key={item.id}
            //   href={`${item.id}`}
            //   className={`relative px-5 py-2 text-sm font-medium ${
            //     activeSection === item.id
            //       ? 'text-blue-600'
            //       : 'text-gray-600 hover:text-gray-900'
            //   }`}
            //   onClick={() => setActiveSection(item.id)}
            // >
            //   {item.label}
            //   {activeSection === item.id && (
            //     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            //   )}
            // </a>
            <Link
            key={item.id}
            to={`${item.id}`}
            className={`relative px-5 py-2 text-sm font-medium ${
              activeSection === item.id
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </Link>
          
          ))}
           
           <Link
            to="/contact"
            className="ml-4 px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800"
           >
           Let's Talk
           </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-white rounded-full shadow-md text-gray-800"
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
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`${item.id}`}
              className={`text-xl font-medium ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-800'
              }`}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="border-l border-gray-200 h-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }}
            />
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="border-t border-gray-200 w-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }}
            />
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Column */}
        <div
          className={`w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col justify-center px-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img src={akash} alt="Akash Jain" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">Akash Jain</h1>

          <div className="h-8 mb-6 overflow-hidden relative">
            {skills.map((skill, index) => (
              <p
                key={index}
                className={`text-xl text-gray-700 absolute transition-all duration-500 ${
                  skillIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                }`}
              >
                {skill}
              </p>
            ))}
            <span className="absolute right-0 top-0 h-full w-1 bg-gray-400 animate-blink"></span>
          </div>

          <div className="w-16 h-1 bg-gray-900 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Crafting elegant, high-performance web experiences with modern technologies.
          </p>

          <div className="flex space-x-4 mt-8">
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
              href="mailto:akash@example.com"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`w-2/3 flex flex-col justify-center items-start px-16 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience & Expertise</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">React Development</h3>
              <p className="text-gray-600">
                Building modern, responsive web applications with React and Next.js. Focused on performance optimization and clean component architecture.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating intuitive, user-centered designs that balance aesthetic appeal with functional usability.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Architecture</h3>
              <p className="text-gray-600">
                Developing scalable frontend architectures with modern tooling, state management, and performance best practices.
              </p>
            </div>

            {/* Resume Download */}
            <div className="mt-12">
              <a
                href={resume}
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded shadow-lg transition-all hover:bg-gray-800"
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

       

      {/* Footer */}
      <div className="absolute bottom-0 w-full py-4 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} Akash Jain. All rights reserved.
      </div>
    </div>
  );
};

export default Hero;
