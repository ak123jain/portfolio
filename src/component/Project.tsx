import { Code, ExternalLink, ArrowRight, Star } from 'lucide-react';
// Import your landing page screenshots
import skillSwapLanding from '../assets/skill-swap.jpg';
import resumeSudharLanding from '../assets/resume-suhar.jpg';
import referralJugaadLanding from '../assets/reffral.jpg';
import greenBasketLanding from '../assets/Green (2).png';

// IMPORT YOUR LOGO IMAGES HERE:
import skillSwapLogo from '../assets/skill-swap.jpg'; // Add your SkillSwap logo image
import resumeSudharLogo from '../assets/resume-suhar.jpg'; // Add your Resume Sudhar logo image
import referralJugaadLogo from '../assets/reffral.jpg'; // Add your Referral Jugaad logo image
import greenBasketLogo from '../assets/Green (2).png'; // Add your Green Basket logo image

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "SkillSwap",
      description: "A collaborative platform that connects people to exchange skills through video lectures and live streaming",
      logo: (
        // Your SkillSwap logo image
        <img 
          src={skillSwapLogo} 
          alt="SkillSwap Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
      ),
      landingImage: skillSwapLanding,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://skill.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Skill-Swap-bg",
      stats: { views: 1625, likes: 127 },
    },
    {
      id: 2,
      title: "Resume Sudhar",
      description: "A full-stack application with AI enhancements for creating professional, ATS-optimized resumes",
      logo: (
        // Your Resume Sudhar logo image
        <img 
          src={resumeSudharLogo} 
          alt="Resume Sudhar Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
      ),
      landingImage: resumeSudharLanding,
      technologies: ["React", "Razorpay", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveLink: "https://resume.itsakash.site/",
      codeLink: "https://github.com/ak123jain/resume-sudhar-front",
      featured: true,
      stats: { views: 2050, likes: 169 },
    },
    {
      id: 3,
      title: "Referral Jugaad",
      description: "A platform connecting job seekers with employees offering verified company referrals, streamlining the referral process",
      logo: (
        // Your Referral Jugaad logo image
        <img 
          src={referralJugaadLogo} 
          alt="Referral Jugaad Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
      ),
      landingImage: referralJugaadLanding,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "https://refrral.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Reffral-juggad-frontend",
      stats: { views: 1900, likes: 211 },
    },
    {
      id: 4,
      title: "Green Basket",
      description: "An eco-conscious online grocery platform offering fresh produce with a seamless shopping experience",
      logo: (
        // Your Green Basket logo image
        <img 
          src={greenBasketLogo} 
          alt="Green Basket Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
      ),
      landingImage: greenBasketLanding,
      technologies: ["React", "Node.js", "MongoDB", "Context API", "Express.js"],
      liveLink: "https://green.itsakash.site/",
      codeLink: "https://github.com/ak123jain/Green-Basket2",
      stats: { views: 1900, likes: 253 },
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .project-item {
          opacity: 0;
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .project-item:nth-child(1) { animation-delay: 0.1s; }
        .project-item:nth-child(2) { animation-delay: 0.2s; }
        .project-item:nth-child(3) { animation-delay: 0.3s; }
        .project-item:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-item:hover {
          background-color: #fafafa;
        }
        
        .logo-container {
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .project-item:hover .logo-container {
          transform: scale(1.05);
        }
        
        .landing-preview-container {
          transition: transform 0.3s ease;
        }
        
        .project-item:hover .landing-preview-container {
          transform: translateY(-2px);
        }
        
        .action-btn {
          transition: all 0.2s ease;
        }
        
        .action-btn:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Projects
          </h2>
          <p className="text-gray-600 text-sm">
            Building innovative solutions with modern technology
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-lg p-5"
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* Left Content Section */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    {/* Logo Container - NO BACKGROUND COLOR */}
                    <div className="logo-container flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm overflow-hidden bg-white">
                        {project.logo}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-gray-900">
                              {project.title}
                            </h3>
                            {project.featured && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                                <Star size={12} fill="currentColor" />
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Action Buttons - Desktop */}
                        <div className="hidden md:flex items-center gap-2">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="action-btn flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-sm font-medium shadow-sm"
                            >
                              <ExternalLink size={14} />
                              Live
                            </a>
                          )}
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn flex items-center justify-center gap-1.5 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium"
                          >
                            <Code size={14} />
                            Code
                          </a>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats & Mobile Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="font-medium">{project.stats.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            <span className="font-medium">{project.stats.likes}</span>
                          </div>
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="flex md:hidden items-center gap-2">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="action-btn flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-xs font-medium"
                            >
                              <ExternalLink size={12} />
                              Live
                            </a>
                          )}
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn flex items-center justify-center gap-1 px-3 py-1.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-xs font-medium"
                          >
                            <Code size={12} />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="landing-preview-container md:w-64 flex-shrink-0">
                  <div className="relative bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm h-48 md:h-full">
                    <img
                      src={project.landingImage}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors group"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;