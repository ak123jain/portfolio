 

 

// import { Code, ArrowRight, Bookmark, Eye } from 'lucide-react';
// import resume from '../assets/resume-suhar.jpg';
// import skill from '../assets/skill-swap.jpg';
// import jugaad from '../assets/reffral.jpg';
// import geen from '../assets/green.jpg';

// const Project = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Skill-Swap",
//       description:
//         "A collaborative platform that connects people to exchange skills through video lectures and live streaming. Share what you know, learn what you don't.",
//       image: skill,
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       liveLink: "https://skill.itsakash.site/",
//       codeLink: "https://github.com/ak123jain/Skill-Swap-bg",
//     },
//     {
//       id: 2,
//       title: "Resume-Sudhar",
//       description:
//         "A full-stack application with AI enhancements for creating professional, ATS-optimized resumes. Stand out in competitive job markets with smart resume building.",
//       image: resume,
//       technologies: ["React", "Razorpay", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
//       liveLink: "https://resume.itsakash.site/",
//       codeLink: "https://github.com/ak123jain/resume-sudhar-front",
//     },
//     {
//       id: 3,
//       title: "Reffral-jugaad",
//       description:
//         "A platform connecting job seekers with employees offering verified company referrals, streamlining the referral request and tracking process.",
//       image: jugaad,
//       technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//       liveLink: "https://refrral.itsakash.site/",
//       codeLink: "https://github.com/ak123jain/Reffral-juggad-frontend",
//     },
//     {
//       id: 4,
//       title: "Green-basket",
//       description:
//         "An eco-conscious online grocery platform offering fresh produce with a seamless shopping experience, real-time cart updates, and responsive UI.",
//       image: geen,
//       technologies: ["React", "Node.js", "MongoDB", "Context API", "Express.js"],
//       liveLink: "https://green.itsakash.site/",
//       codeLink: "https://github.com/ak123jain/Green-Basket2",
//     },
//   ];

//   return (
//     <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             <span className="bg-clip-text text-transparent bg-black">
//               Innovative Projects
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Crafting digital solutions that solve real-world problems
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 relative"
//             >
//               {project.id === 2 && (
//                 <div className="absolute top-4 right-4 z-10">
//                   <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
//                     Featured
//                   </div>
//                 </div>
//               )}

//               <div className="relative overflow-hidden h-72 w-full">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                     <div className="flex space-x-3 mb-2">
//                       <a
//                         href={project.liveLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center px-3 py-1.5 bg-white/90 text-gray-800 rounded-md hover:bg-white transition-colors duration-300 text-xs font-medium"
//                       >
//                         <Eye size={14} className="mr-1.5" />
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.codeLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center px-3 py-1.5 bg-gray-800/90 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-xs font-medium"
//                       >
//                         <Code size={14} className="mr-1.5" />
//                         View Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center text-gray-500 text-xs mb-5">
//                   <div className="flex items-center mr-4">
//                     <Eye size={14} className="mr-1" />
//                     <span>{1200 + project.id * 425}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Bookmark size={14} className="mr-1" />
//                     <span>{85 + project.id * 42}</span>
//                   </div>
//                 </div>

//                 <div className="mt-2">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 text-sm"
//                   >
//                     View Project Details
//                     <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14 text-center">
//           <a
//             href="#"
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Explore All Projects
//             <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;


import { Code, ArrowRight, Bookmark, Eye } from 'lucide-react';
import resume from '../assets/resume-suhar.jpg';
import skill from '../assets/skill-swap.jpg';
import jugaad from '../assets/reffral.jpg';
import geen from '../assets/green.jpg';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Skill-Swap",
      description:
        "A collaborative platform that connects people to exchange skills through video lectures and live streaming. Share what you know, learn what you don't.",
      image: skill,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://skill.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Skill-Swap-bg",
    },
    {
      id: 2,
      title: "Resume-Sudhar",
      description:
        "A full-stack application with AI enhancements for creating professional, ATS-optimized resumes. Stand out in competitive job markets with smart resume building.",
      image: resume,
      technologies: ["React", "Razorpay", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveLink: "https://resume.itsakash.site/",
      codeLink: "https://github.com/ak123jain/resume-sudhar-front",
    },
    {
      id: 3,
      title: "Reffral-jugaad",
      description:
        "A platform connecting job seekers with employees offering verified company referrals, streamlining the referral request and tracking process.",
      image: jugaad,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "https://refrral.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Reffral-juggad-frontend",
    },
    {
      id: 4,
      title: "Green-basket",
      description:
        "An eco-conscious online grocery platform offering fresh produce with a seamless shopping experience, real-time cart updates, and responsive UI.",
      image: geen,
      technologies: ["React", "Node.js", "MongoDB", "Context API", "Express.js"],
      liveLink: "https://green.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Green-Basket2",
    },
  ];

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-black">Innovative Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Crafting digital solutions that solve real-world problems
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 bg-white border border-gray-100 relative"
            >
              {project.id === 2 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 bg-white/90 text-gray-800 rounded hover:bg-white text-xs"
                      >
                        <Eye size={14} className="mr-1" />
                        Live
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 bg-gray-800/90 text-white rounded hover:bg-gray-800 text-xs"
                      >
                        <Code size={14} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-500 text-xs mb-4 space-x-6">
                  <div className="flex items-center">
                    <Eye size={14} className="mr-1" />
                    <span>{1200 + project.id * 425}</span>
                  </div>
                  <div className="flex items-center">
                    <Bookmark size={14} className="mr-1" />
                    <span>{85 + project.id * 42}</span>
                  </div>
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition text-sm font-medium"
                >
                  View Project Details
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md"
          >
            Explore All Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
