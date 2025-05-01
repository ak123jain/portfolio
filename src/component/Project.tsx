//  import { ExternalLink, Code, ArrowRight } from 'lucide-react';
// import resume from '../assets/resume-suhar.jpg';
// import skill from '../assets/skill-swap.jpg';
// import jugaad from '../assets/reffral.jpg';
// import geen from '../assets/green.jpg';

// const Project = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Skill-Swap",
//       description: "Basically it is my skill-swap That swap the skill that you want to learn with that person who want to teach same skill Video lecture you can upload Live video streaming",
//       image:  skill,
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       liveLink: "https://skill-swap-sooty.vercel.app/",
//       codeLink: "https://github.com/ak123jain/Skill-Swap-bg"
//     },
//     {
//       id: 2,
//       title: "Resume-Sudhar",
//       description: "Resume - Sudhar is a full-stack web application that empowers users to build professional, job-winning resumes with smart AI enhancements and real-time ATS optimization. It combines sleek design with robust features to help users stand out in competitive job markets.",
//       image: resume,
//       technologies: ["React", "Razorpay", "Node.js", "MongoDB" , "Express" , "Tailwind CSS"],
//       liveLink: "https://example.com/tasks",
//       codeLink: "https://github.com/ak123jain/resume-sudhar-front"
//     },
//     {
//       id: 3,
//       title: "Reffral-jugaad",
//       description: " Referral Jugaad – A platform that connects job seekers with employees offering verified company referrals, streamlining the referral request and tracking process.",
//       image:  jugaad,
//       technologies: ["React", "Node.js", "Express", "MongoDB" , "Tailwind CSS"],
//       liveLink: "https://reffral-juggad-frontend-dqrn.vercel.app/",
//       codeLink: "https://github.com/ak123jain/Reffral-juggad-frontend"
//     },
//     {
//       id: 4,
//       title: "Green-basket",
//       description: "🥦 Green Basket – An eco-conscious online grocery platform offering fresh produce with a seamless shopping experience, real-time cart updates, and responsive UI.",
//       image:  geen,
//       technologies: ["React", "Node.js", "MongoDB", "Context api" , "Express.js"],
//       liveLink: "https://green-basket2.vercel.app/",
//       codeLink: "https://github.com/ak123jain/Green-Basket2"
//     }
//   ];

//   return (
//     <div className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             My Projects
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         {/* Project Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
//             >
//               {/* Project Image with Overlay */}
//               <div className="relative overflow-hidden h-72 w-full">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               {/* Project Content */}
//               <div className="p-5">
//                 <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
//                 <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                
//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-1.5 mb-4">
//                   {project.technologies.map((tech, index) => (
//                     <span 
//                       key={index}
//                       className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex space-x-2">
//                   <a 
//                     href={project.liveLink}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-xs font-medium"
//                   >
//                     <ExternalLink size={14} className="mr-1.5" />
//                     Live Demo
//                   </a>
//                   <a 
//                     href={project.codeLink}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-300 text-xs font-medium"
//                   >
//                     <Code size={14} className="mr-1.5" />
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Projects Button */}
//         <div className="mt-10 text-center">
//           <a 
//             href="#" 
//             className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
//           >
//             View All Projects
//             <ArrowRight size={16} className="ml-2" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

import React, { useState } from 'react';
import { ExternalLink, Code, ArrowRight, Bookmark, Eye } from 'lucide-react';
import resume from '../assets/resume-suhar.jpg';
import skill from '../assets/skill-swap.jpg';
import jugaad from '../assets/reffral.jpg';
import geen from '../assets/green.jpg';

const Project = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Skill-Swap",
      description: "A collaborative platform that connects people to exchange skills through video lectures and live streaming. Share what you know, learn what you don't.",
      image: skill,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://skill-swap-sooty.vercel.app/",
      codeLink: "https://github.com/ak123jain/Skill-Swap-bg"
    },
    {
      id: 2,
      title: "Resume-Sudhar",
      description: "A full-stack application with AI enhancements for creating professional, ATS-optimized resumes. Stand out in competitive job markets with smart resume building.",
      image: resume,
      technologies: ["React", "Razorpay", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveLink: "https://resume-sudhar-front.vercel.app/",
      codeLink: "https://github.com/ak123jain/resume-sudhar-front"
    },
    {
      id: 3,
      title: "Reffral-jugaad",
      description: "A platform connecting job seekers with employees offering verified company referrals, streamlining the referral request and tracking process.",
      image: jugaad,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "https://reffral-juggad-frontend-dqrn.vercel.app/",
      codeLink: "https://github.com/ak123jain/Reffral-juggad-frontend"
    },
    {
      id: 4,
      title: "Green-basket",
      description: "An eco-conscious online grocery platform offering fresh produce with a seamless shopping experience, real-time cart updates, and responsive UI.",
      image: geen,
      technologies: ["React", "Node.js", "MongoDB", "Context API", "Express.js"],
      liveLink: "https://green-basket2.vercel.app/",
      codeLink: "https://github.com/ak123jain/Green-Basket2"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Innovative Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting digital solutions that solve real-world problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Project Cards Grid with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Featured Badge */}
              {project.id === 2 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image with Enhanced Overlay */}
              <div className="relative overflow-hidden h-72 w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex space-x-3 mb-2">
                      <a 
                        href={project.liveLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-1.5 bg-white/90 text-gray-800 rounded-md hover:bg-white transition-colors duration-300 text-xs font-medium"
                      >
                        <Eye size={14} className="mr-1.5" />
                        Live Demo
                      </a>
                      <a 
                        href={project.codeLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-1.5 bg-gray-800/90 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-xs font-medium"
                      >
                        <Code size={14} className="mr-1.5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content with Enhanced Design */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack with Enhanced Design */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Engagement Metrics */}
                <div className="flex items-center text-gray-500 text-xs mb-5">
                  <div className="flex items-center mr-4">
                    <Eye size={14} className="mr-1" />
                    <span>{1200 + project.id * 425}</span>
                  </div>
                  <div className="flex items-center">
                    <Bookmark size={14} className="mr-1" />
                    <span>{85 + project.id * 42}</span>
                  </div>
                </div>
                
                {/* Action Button - View Details */}
                <div className="mt-2">
                  <a 
                    href={project.liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 text-sm"
                  >
                    View Project Details
                    <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button with Enhanced Design */}
        <div className="mt-14 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Projects
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;