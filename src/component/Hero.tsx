// import { useState, useEffect } from 'react';
// import { ChevronRight } from 'lucide-react';
// import akash from '../assets/akash-Photoroom.png';
// import resume from '../assets/akash3resume.pdf';

// const Hero = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     document.addEventListener('scroll', handleScroll);
//     return () => {
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <div className="relative min-h-screen bg-white text-gray-800 font-sans">
//       {/* Background pattern lines */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="grid grid-cols-12 h-full w-full">
//           {/* Vertical lines */}
//           {[...Array(12)].map((_, i) => (
//             <div key={`v-${i}`} className="border-l border-gray-200 h-full"></div>
//           ))}
//         </div>
//         <div className="grid grid-rows-12 h-full w-full">
//           {/* Horizontal lines */}
//           {[...Array(12)].map((_, i) => (
//             <div key={`h-${i}`} className="border-t border-gray-200 w-full"></div>
//           ))}
//         </div>
//       </div>

//       {/* Left section */}
//       <div className="relative z-10 flex min-h-screen">
//         <div className="w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col justify-center px-8">
//           {/* Profile image */}
//           <div className="mb-8 relative">
//             <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
//               <img 
//                 src={akash} 
//                 alt="Akash Jain" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Name */}
//           <h1 className="text-4xl font-bold mb-4 text-gray-900">
//             Akash Jain
//           </h1>

//           {/* Brief description */}
//           <div className="mb-8">
//             <p className="text-xl text-gray-700 mb-2">
//               Frontend Developer & UI/UX Designer
//             </p>
//             <div className="w-16 h-1 bg-gray-900 mb-6"></div>
//             <p className="text-gray-600 leading-relaxed">
//               Crafting elegant, high-performance web experiences with modern technologies.
//             </p>
//           </div>

//           {/* Social links */}
//           <div className="flex space-x-4 mt-8">
//             <a href="https://github.com/ak123jain" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//               </svg>
//             </a>
//             <a href="https://www.linkedin.com/in/akash-jain-6164a324b/" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//               </svg>
//             </a>
//             <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Right section */}
//         <div className="w-2/3 flex flex-col justify-center items-start px-16">
//           <div className="max-w-xl">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience & Expertise</h2>
            
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">React Development</h3>
//               <p className="text-gray-600">Building modern, responsive web applications with React and Next.js. Focused on performance optimization and clean component architecture.</p>
//             </div>
            
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
//               <p className="text-gray-600">Creating intuitive, user-centered designs that balance aesthetic appeal with functional usability. Experienced with design systems and component libraries.</p>
//             </div>
            
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Architecture</h3>
//               <p className="text-gray-600">Developing scalable frontend architectures with modern tooling, state management patterns, and performance best practices.</p>
//             </div>

//             {/* Resume download button */}
//             <div className="mt-12">
//               <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded overflow-hidden shadow-lg transition-all duration-300 hover:bg-gray-800">
//                 <span className="relative z-10 flex items-center">
//                    <a href={resume}><span className="mr-2">Download Resume</span></a>
//                   <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-0 w-full py-4 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
//         © {new Date().getFullYear()} Akash Jain. All rights reserved.
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X, Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import akash from '../assets/akash-Photoroom.png';
import resume from '../assets/akash3resume.pdf';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Animated typing effect for skills
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = ['Frontend Developer', 'Backend developer', 'React Specialist'];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    // Animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Skill typing animation
    const skillTimer = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearInterval(skillTimer);
    };
  }, [scrolled, skills.length]);

  // Floating navbar with mouse follow effect
  const handleMouseMove = (e) => {
    if (!navbarRef.current || window.innerWidth < 1024) return;
    
    const { clientX } = e;
    const navbarWidth = navbarRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    const maxOffset = 40; // Max pixels navbar can move
    
    // Calculate movement percentage based on mouse position
    const mousePercentage = (clientX / windowWidth) * 2 - 1; // -1 to 1 range
    const offset = mousePercentage * maxOffset;
    
    // Apply smooth transform
    navbarRef.current.style.transform = `translateX(${offset}px)`;
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: '/projects', label: 'Projects' },
    { id: '/skill', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div 
      className="relative min-h-screen bg-white text-gray-800 font-sans overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Navbar */}
      <div 
        ref={navbarRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="hidden lg:flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`${item.id}`}
              className={`relative px-5 py-2 text-sm font-medium ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              } transition-colors duration-300`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Let's Talk
          </a>
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
              href={`#${item.id}`}
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

      {/* Background pattern lines with improved visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 h-full w-full">
          {/* Vertical lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="border-l border-gray-200 h-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }} // Alternating opacity for better visibility
            ></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {/* Horizontal lines with improved visibility */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="border-t border-gray-200 w-full"
              style={{ opacity: i % 2 === 0 ? 0.8 : 0.4 }} // Alternating opacity for better visibility
            ></div>
          ))}
        </div>
      </div>

      {/* Left section */}
      <div className="relative z-10 flex min-h-screen">
        <div 
          className={`w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col justify-center px-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0' : '-translate-x-full opacity-0'
          }`}
        >
          {/* Animated dots decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="animate-float absolute top-24 left-24 w-6 h-6 rounded-full bg-gray-200 opacity-30"></div>
            <div className="animate-float animation-delay-1000 absolute top-1/3 left-12 w-8 h-8 rounded-full bg-gray-200 opacity-40"></div>
            <div className="animate-float animation-delay-2000 absolute bottom-1/4 left-16 w-5 h-5 rounded-full bg-gray-200 opacity-30"></div>
          </div>

          {/* Profile image without animated border */}
<div className="mb-8 relative">
  <div className="relative group">
    {/* Removed the blur background */}
    <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg relative z-10">
      <img 
        src={akash} 
        alt="Akash Jain" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>



          {/* Name with animated underline */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900 relative">
            Akash Jain
             
          </h1>

          {/* Animated typing effect for skills */}
          <div className="h-8 mb-6 overflow-hidden">
            <div className="relative">
              {skills.map((skill, index) => (
                <p 
                  key={index}
                  className={`text-xl text-gray-700 absolute transition-all duration-500 ${
                    skillIndex === index ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {skill}
                </p>
              ))}
              <span className="absolute right-0 h-full w-1 bg-gray-400 animate-blink"></span>
            </div>
          </div>

          <div className="w-16 h-1 bg-gray-900 mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Crafting elegant, high-performance web experiences with modern technologies.
          </p>

          {/* Animated social links */}
          <div className="flex space-x-4 mt-8">
            <a 
              href="https://github.com/ak123jain" 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/akash-jain-6164a324b/" 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right section with staggered animation */}
        <div 
          className={`w-2/3 flex flex-col justify-center items-start px-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="max-w-xl">
            <h2 className={`text-3xl font-bold text-gray-800 mb-6 transition-all duration-500 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Experience & Expertise
            </h2>
            
            <div className={`mb-8 transition-all duration-500 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">React Development</h3>
              <p className="text-gray-600">Building modern, responsive web applications with React and Next.js. Focused on performance optimization and clean component architecture.</p>
            </div>
            
            <div className={`mb-8 transition-all duration-500 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">Creating intuitive, user-centered designs that balance aesthetic appeal with functional usability. Experienced with design systems and component libraries.</p>
            </div>
            
            <div className={`mb-8 transition-all duration-500 delay-900 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Architecture</h3>
              <p className="text-gray-600">Developing scalable frontend architectures with modern tooling, state management patterns, and performance best practices.</p>
            </div>

            {/* Animated download button */}
            <div className={`mt-12 transition-all duration-500 delay-1100 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded overflow-hidden shadow-lg transition-all duration-300 hover:bg-gray-800">
                <span className="absolute inset-0 w-0 bg-gray-800 transition-all duration-700 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  <FileText size={18} className="mr-2" />
                  <a href={resume}><span className="mr-2">Download Resume</span></a>
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-scrollDown"></div>
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